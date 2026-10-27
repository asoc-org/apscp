#' @include internal.R fct_eval_prioritization.R
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
#' Defaults to 0.1 (10% from optimality).
#'
#' @param solver `character` value indicating the name of the software
#' used for optimization. Acceptable values include `"gurobi"` or `"cbc"`.
#' Defaults to `"cbc"`.
#'
#' @param time_limit `numeric` value indicating the number of seconds
#' permitted for running optimization. Defaults to 500.
#'
#' @param verbose `logical` value indicating if information should be
#' displayed during optimization process. Defaults to `FALSE`.
#'
#' @param gurobi_server `character` value providing the HTTP address
#' for the Gurobi compute server. Defaults to `NULL` such that no compute
#' server is used.
#'
#' @section Settings format:
#' The argument to `settings` must be a `list` with the following elements.
#' \describe{
#' \item{`"features`"}{
#' A `data.frame` with the theme and feature settings.
#' These are used to specify the targets and weights considered for the
#' features during optimization. Each row corresponds to a different
#' feature, and it must have the following columns:
#' `"id"`, `"name"`, `"column"`, `"zone"`, `"target"`, and `"weight"`.
#' Note that target values must be expressed as a proportion (i.e.,
#' value between zero and one).
#' }
#'
#' \item{`"locks"`}{
#' A `data.frame` with the settings to specify which
#' locks are used to lock in planning units to a particular zone.
#' Each row corresponds to a different lock, and it must have the following
#' columns:
#' `"id"`, `"name"`, `"column"`, `"zone"`, and `"priority"`.
#' }
#'
#' \item{`"costs"`}{
#' A `data.frame` with the cost settings. These
#' are used to specify which costs are considered for each zone.
#' Each row corresponds to a different cost, and it must have the following
#' columns:
#' `"id"`, `"name"`, `"zone"`, and `"weight"`.
#' }
#'
#' \item{`"zones"`}{
#' A `data.frame` with settings for the
#' multi-objective optimization.
#' Each row corresponds to a different zone, and it must have the following
#' columns:
#' `"name"` and `"weight"`.
#' }
#'
#' }
#'
#' @return
#' A `numeric` vector with values indicating the zone for each planning unit.
#' For example, if the prioritization has three zones, then elements
#' with values ranging between 1 and 3 correspond to planning units
#' that are locked to the three zones (respectively). Additionally,
#' elements with values ranging between 4 and 6 correspond to planning units
#' that are selected as a priority for the three zones (respectively).
#'
#' @family prioritization
#'
#' @examples
#' # simulate data
#' sim_project <- simulate_project()
#' sim_settings <- simulate_prioritization_settings(sim_project)
#'
#' # preview settings
#' print(sim_settings)
#'
#' # solve prioritization
#' sol <- solve_prioritization(sim_project, sim_settings, gap = 0.1)
#'
#' # preview solution
#' print(sol)
#'
#' @export
solve_prioritization <- function(
  project,
  settings,
  gap = 0.1,
  solver = "cbc",
  time_limit = 500,
  gurobi_server = NULL,
  verbose = FALSE
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## dependencies
    is_installed("prioritizr"),
    ## project
    inherits(project, "Project"),
    ## settings
    is_prioritization_settings(settings),
    ## gap
    assertthat::is.number(gap),
    ## verbose
    assertthat::is.flag(verbose),
    ## time_limit
    assertthat::is.count(time_limit),
    assertthat::noNA(time_limit),
    ## solver
    assertthat::is.string(solver),
    assertthat::noNA(solver),
    solver %in% c("cbc", "gurobi")
  )
  if (!is.null(gurobi_server)) {
    # nocov start
    ## gurobi_server
    assertthat::assert_that(
      assertthat::is.string(gurobi_server)
    )
    # nocov end
  }

  # preliminary data processing
  ## costs settings
  costs_settings <- settings$costs
  costs_settings$zone[nchar(costs_settings$zone) == 0L] <- NA_character_
  costs_settings <- costs_settings[!is.na(costs_settings$zone), , drop = FALSE]
  ## features settings
  features_settings <- settings$features[
    settings$features$target > 1e-4 & settings$features$weight > 1e-4, ,
    drop = FALSE
  ]
  ## zone names
  prob_zones <- project$zones
  ## planning unit data
  pu_data <- project$dataset$get_dataframe(NULL)
  pu_data[["_index"]] <- NULL
  pu_data$id <- seq_len(nrow(pu_data))
  pu_data[["_zeros"]] <- 0

  # build list of problems based on meeting target shortfalls
  prob <- lapply(project$zones, function(x) {
    ## extract settings for zone
    zone_settings <-
      features_settings[features_settings$zone == x, , drop = FALSE]
    ## if no features, then skip
    if (identical(nrow(zone_settings), 0L)) return(NULL)
    ## prepare zones object
    zones <- list(zone_settings$column)[rep(1, length(project$zones))]
    zones[[match(x, project$zones)]] <- zone_settings$column
    zones$zone_names <- project$zones
    zones$feature_names <- zone_settings$column
    zones <- do.call(prioritizr::zones, zones)
    ## prepare zone settings for prioritizr input
    zone_settings$feature <- zone_settings$column
    zone_settings$sense <- ">="
    zone_settings$type <- "absolute"
    ## convert targets to absolute values
    zone_settings$target <- unname(
      zone_settings$target *
      colSums(pu_data[, zone_settings$column, drop = FALSE], na.rm = TRUE)
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

  # remove any skipped zones because they had no feature targets
  skipped_zones <- vapply(prob, is.null, logical(1))
  prob_zones <- prob_zones[!skipped_zones]
  prob <- prob[!skipped_zones]

  # add in extra problems based on cost layers
  {for (i in seq_len(nrow(costs_settings))) {
    ## prepare zones object
    zones <- list("_zeros")[rep(1, length(project$zones))]
    zones$zone_names <- project$zones
    zones$feature_names <- "_zeros"
    zones <- do.call(prioritizr::zones, zones)
    ## prepare cost values
    curr_pu_data <- pu_data[, c("id", "_zeros"), drop = FALSE]
    curr_pu_data$cost <- pu_data[[costs_settings$column[[i]]]]
    curr_pu_data$cost[is.na(curr_pu_data$cost)] <- 0
    ## prepare cost columns
    cost <- rep("cost", length(project$zones))
    cost[match(costs_settings$zone[[i]], project$zones)] <- "_zeros"
    ## add problem with cost
    prob[[length(prob) + 1]] <-
      ## return problem
      suppressWarnings(prioritizr::problem(
        x = curr_pu_data,
        features = zones,
        cost = cost
      )) |>
      prioritizr::add_min_penalties_objective(budget = NULL) |>
      prioritizr::add_cost_penalties(rep(1, length(project$zones))) |>
      prioritizr::add_binary_decisions()
  }}

  # if needed, add locked constraints
  if (nrow(settings$locks) > 0L) {
    ## create matrix with prioritization based on locks
    locked <- convert_lock_settings_to_prioritization(project, settings)
    idx <- which(locked > 0)
    lock_data <- data.frame(
      pu = idx,
      zone = project$zones[locked[idx]],
      status = 1
    )
    ## add constraints to the first problem
    prob[[1]] <- prioritizr::add_manual_locked_constraints(prob[[1]], lock_data)
  } else {
    locked <- rep(0, project$dataset$get_n_pu())
  }

  # convert list of problems to multi_problem object
  prob <- do.call(prioritizr::multi_problem, prob)

  # add solver
  if (identical(solver, "cbc")) {
    prob <- prioritizr::add_cbc_solver(
      prob, threads = 1,
      gap = gap, verbose = verbose, time_limit = time_limit
    )
  } else {
    # nocov start
    control <- list()
    if (!is.null(gurobi_server)) {
      control$ComputeServer <- gurobi_server
    }
    prob <- prioritizr::add_gurobi_solver(
      prob, control = control, presolve = 1, threads = 1,
      gap = gap, verbose = verbose, time_limit = time_limit
    )
    # nocov end
  }

  # add multi-objective approach
  ## initialize weights
  moo_zones <- c(prob_zones, costs_settings$zone)
  moo_freq <- as.data.frame(table(moo_zones))
  moo_weights <- 1 / moo_freq[[2]][match(moo_zones, moo_freq[[1]])]
  ## add approach
  prob <- prioritizr::add_ref_point_approach(
    prob,
    weights = matrix(moo_weights, nrow = 1),
    verbose = verbose
  )

  # solve problem
  # nocov start
  if (identical(Sys.getenv("TESTTHAT"), "true")) {
    sol <- try(
      suppressMessages(
        suppressWarnings(
          solve(prob, run_checks = FALSE, force = TRUE)
        )
      ),
      silent = TRUE
    )
    if (inherits(sol, "try-error")) {
      cli::cli_abort("Failed to generate solution!")
    }
  } else {
    sol <- solve(prob, run_checks = FALSE, force = TRUE)
  }
  # nocov end

  # format solution
  obj_value <- attr(sol, "objective")
  sol <- prioritizr::category_vector(
    sol[, paste0("solution_1_", project$zones),  drop = FALSE]
  )
  sol <- sol + ((sol > 0) * length(project$zones))
  if (nrow(settings$locks) > 0L) {
    sol[idx] <- locked[idx]
  }
  sol[sol < 0.5] <- NA_real_

  # return solution
  out <- structure(sol, class = "Prioritization")
  attr(out, "obj_value") <- obj_value
  out
}

#' Convert lock settings to prioritization
#'
#' Create a prioritization based on which layers are locked to different zones.
#'
#' @inheritParams solve_prioritization
#'
#' @return A `numeric` vector with values indicating which zone to which
#' each planning unit is allocated.
#'
#' @family solver
#'
#' @noRd
convert_lock_settings_to_prioritization <- function(project, settings) {
  # assert valid arguments
  assertthat::assert_that(
    ## project
    inherits(project, "Project"),
    ## settings
    is_prioritization_settings(settings)
  )
  # prepare zone allocation data
  lock_data <- convert_lock_settings_to_allocation(settings$locks)
  # generate matrix with planning unit statuses
  status <- vapply(
    seq_along(project$zones),
    FUN.VALUE = numeric(project$dataset$get_n_pu()),
    USE.NAMES = FALSE,
    function(i) project$dataset$get_pu_status(project$zones[[i]], lock_data)
  )
  # return result
  prioritizr::category_vector(status)
}

#' Convert lock settings to zone allocation
#'
#' Prepare lock settings data to identify which layers should be used
#' to allocate planning units to zone. This function is designed
#' to prepare data for `Dataset$get_pu_status()`.
#'
#' @param data `data.frame` with the settings to specify which
#' locks are used to lock in planning units to a particular zone.
#' Each row corresponds to a different lock, and it must have the following
#' columns:
#' `"id"`, `"name"`, `"column"`, `"zone"`, and `"priority"`.
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
    assertthat::has_name(data, "name"),
    assertthat::has_name(data, "zone"),
    assertthat::has_name(data, "priority"),
    assertthat::has_name(data, "column")
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
