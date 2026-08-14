#' @include internal.R
NULL

#' Generate a prioritization
#'
#' Generate a prioritization using multi-objective optimization techniques.
#'
#' @param project [new_project()] object. These data are used to specify
#' the underlying data for generating the solution.
#'
#' @param settings `list` object with settings for generating a solution.
#' See Settings format section for further details.
#'
#' @param gap `numeric` value denoting optimality gap.
#' Defaults to 0.1 (10\% from optimality).
#'
#' @param solver `character` value indicating the name of the software
#' used for optimization. Acceptable values include `"gurobi"` or `"cbc"`.
#' Defaults to `"cbc"`.
#'
#' @param verbose `logical` value indicating if information should be
#' displayed during optimization process. Defaults to `FALSE`.
#'
#' @section Settings format:
#' The argument to `settings` must be a `list` with the following elements.
#' \describe{
#' \item{features}{
#' A `data.frame` with the theme and feature settings.
#' These are used to specify the targets and weights considered for the
#' features during optimization. Each row corresponds to a different
#' feature, and it must have the following columns:
#' `"id"`, `"name"`, `"column"`, `"zone"`, `"target"`, and `"weight"`.
#' Note that target values must be expressed as a proportion (i.e.,
#' value between zero and one).
#' }
#'
#' \item{locks}{
#' A `data.frame` with the settings to specify which
#' locks are used to lock in planning units to a particular zone.
#' Each row corresponds to a different lock, and it must have the following
#' columns:
#' `"id"`, `"name"`, `"column"`, and `"zone"`.
#' }
#'
#' \item{costs}{
#' A `data.frame` with the cost settings. These
#' are used to specify which costs are considered for each zone.
#' Each row corresponds to a different cost, and it must have the following
#' columns:
#' `"id"`, `"name"`, `"zone"`, and `"weight"`.
#' }
#'
#' \item{zones}{
#' A `data.frame` with settings for the
#' multi-objective optimization.
#' Each row corresponds to a different zone, and it must have the following
#' columns:
#' `"name"` and `"weight"`.
#' }
#'
#' }
#'
#' @return A `list` with a `solution` element that contains a `numeric` vector
#' with values indicating the zone for each planning unit, and a `results`
#' element that contains supplementary information.
#'
#' @export
prioritization <- function(
  project,
  settings,
  gap = 0.1,
  solver = "cbc",
  verbose = FALSE
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## project
    inherits(project, "Project"),
    ## settings
    is.list(settings),
    ## features settings
    is.data.frame(settings$features),
    assertthat::has_name(
      settings$features,
      c("id", "name", "column", "zone", "target", "weight")
    ),
    assertthat::assert_that(
      all(project$zones %in% settings$features$zone),
      msg = "Each zone must have at least one feature."
    ),
    ## locks settings
    is.data.frame(settings$locks),
    assertthat::has_name(
      settings$locks,
      c("id", "name", "column", "zone", "priority")
    ),
    ## costs settings
    is.data.frame(settings$costs),
    assertthat::has_name(
      settings$costs,
      c("id", "name", "zone", "weight")
    ),
    ## zones settings
    is.data.frame(settings$zones),
    assertthat::has_name(
      settings$zones,
      c("zone", "weight")
    ),
    ## gap
    assertthat::is.number(gap),
    ## verbose
    assertthat::is.flag(verbose),
    ## solver
    assertthat::is.string(solver),
    assertthat::noNA(solver),
    solver %in% c("cbc", "gurobi")
  )

  # preliminary data processing
  ## cost settings
  x$costs$zone[nchar(x$costs$zone) == 0L] <- NA_character_
  x$costs <- x$costs[!is.na(x$costs), , drop = FALSE]

  # build list of problems based on meeting target shortfalls
  prob <- lapply(project$zones, function(x) {
    ## extract settings for zone
    zone_settings <-
      settings$features[settings$features$zone == x, , drop = FALSE]
    ## prepare zones object
    zones <-
      list(rep("_zeros", nrow(zone_settings)))[rep(1, length(project$zones))]
    zones[[match(x, project$zones)]] <- zone_settings$column
    zones$zone_names <- project$zones
    zones$feature_names <- zone_settings$column
    zones <- do.call(prioritizr::zones, zones)
    ## prepare planning unit data
    pu_data <- sf::st_drop_geometry(project$dataset$pu_data)
    pu_data$id <- seq_len(nrow(pu_data))
    pu_data[["_zeros"]] <- 0
    ## prepare zone settings for prioritizr input
    zone_settings$feature <- zone_settings$column
    zone_settings$sense <- ">="
    zone_settings$type <- "absolute"
    ## convert targets to aboslute values
    zone_settings$target <- unname(
      zone_settings$target *
      colSums(pu_data)[zone_settings$column]
    )
    ## return problem
    suppressWarnings(prioritizr::problem(
      x = pu_data,
      features = zones,
      cost = rep("_zeros", length(project$zones))
    )) |>
      prioritizr::add_min_shortfall_objective(budget = 0) |>
      prioritizr::add_manual_targets(
        zone_settings[,
          c("feature", "zone", "type", "sense", "target"),
          drop = FALSE
        ]
      ) |>
      prioritizr::add_feature_weights(matrix(zone_settings$weight, ncol = 1)) |>
      prioritizr::add_binary_decisions()
  })

  # add in extra problems based on cost layers
  {for (i in seq_len(nrow(settings$costs))) {
    ## prepare zones object
    zones <- list("_zeros")[rep(1, length(project$zones))]
    zones$zone_names <- project$zones
    zones$feature_names <- "_zeros"
    zones <- do.call(prioritizr::zones, zones)
    ## prepare cost values
    pu_data <- data.frame(id = seq_len(project$dataset$get_n_pu()))
    pu_data[["_zeros"]] <- 0
    pu_data$cost <- project$dataset$get_column_data(settings$costs$column[[i]])
    ## prepare cost columns
    cost <- rep("cost", length(project$zones))
    cost[match(settings$costs$zone[[i]], project$zones)] <- "_zeros"
    ## add problem with cost
    prob[[length(prob) + 1]] <-
      ## return problem
      suppressWarnings(prioritizr::problem(
        x = pu_data,
        features = zones,
        cost = cost
      )) |>
      prioritizr::add_min_penalties_objective(budget = NULL) |>
      prioritizr::add_cost_penalties(rep(1, length(project$zones))) %>%
      prioritizr::add_binary_decisions()
  }}

  # if needed, add locked constraints
  if (nrow(settings$locks) > 0L) {
    ## create data frame with all locked planning units
    lock_data <- convert_lock_settings_to_allocation(settings$locks)
    lock_data <- vapply(
      seq_along(project$zones),
      FUN.VALUE = numeric(project$dataset$get_n_pu()),
      USE.NAMES = FALSE,
      function(i) project$dataset$get_pu_status(project$zones[[i]], allocation)
    )
    lock_data <- lock_data[rowSums(lock_data) > 0, , drop = FALSE]
    lock_data <- which(lock_data, arr.ind = TRUE)
    lock_data <- data.frame(
      pu = lock_data[, 1],
      zone = project$zones[lock_data[, 2]],
      status = 1
    )
    ## add constraints to the first problem
    prob[[1]] <- prioritizr::add_manual_locked_constraints(prob[[1]], lock_data)
  }

  # convert list of problems to multi_problem object
  prob <- do.call(prioritizr::multi_problem, prob)

  # add solver
  if (identical(solver, "cbc")) {
    ## add solver
    prob <- prioritizr::add_cbc_solver(prob, gap = gap, verbose = verbose)
  } else {
    # nocov start
    ## if needed, specify control
    control <- NULL
    if (!is.null(get_golem_config("solver_gurobi_server"))) {
      control <- list(ComputeServer = get_golem_config("solver_gurobi_server"))
    }
    ## add solver
    prob <- prioritizr::add_gurobi_solver(
      prob, gap = gap, verbose = verbose, control = control
    )
    # nocov end
  }

  # add multi-objective approach
  ## initialize weights
  moo_zones <- c(project$zones, settings$costs$zone)
  moo_freq <- as.data.frame(table(moo_zones))
  moo_weights <- 1 / moo_freq[[2]][match(moo_zones, moo_freq[[1]])]
  ## add approach
  prob <- prioritizr::add_ref_point_approach(
    prob,
    weights = matrix(moo_weights, nrow = 1),
    verbose = verbose
  )

  # solve problem
  raw_sol <- solve(prob, run_checks = FALSE, force = TRUE)
  raw_sol <- raw_sol[, paste0("solution_1_", project$zones),  drop = FALSE]

  # return formatted solution
  list(
    solution = prioritizr::category_vector(raw_sol),
    results = NULL
  )
}

#' Convert lock settings to zone allocation
#'
#' Prepare lock settings data to identify which layers should be used
#' to allocate planning units to zone. This function is designed
#' to prepare data for `Dataset$get_pu_status()`.
#'
#' @param data `data.frame` with lock settings.
#'
#' @return A named `character` vector.
#'
#' @family solver
#'
#' @noRd
convert_lock_settings_to_allocation <- function(data) {
  # assert valid arguments
  assertthat::assert_that(
    is.data.frame(data),
    assertthat::has_name(data, "id"),
    assertthat::has_name(data, "column"),
    assertthat::has_name(data, "zone"),
    assertthat::has_name(data, "priority")
  )
  # if has zero rows, then return empty vector
  if (identical(nrow(data), 0L)) return(character(0))
  # remove any rows with a missing zone value
  data <- data[!is.na(data$zone), , drop = FALSE]
  # if no rows remain, then return empty vector
  if (identical(nrow(data), 0L)) return(c())
  # sort data frame according to order of priority
  data <- data[order(data$priority, decreasing = TRUE), , drop = FALSE]
  # initialize vector with allocations
  out <- stats::setNames(data$column, data$zone)
  # remove duplicate values
  out <- out[!duplicated(out)]
  # return result
  out
}
