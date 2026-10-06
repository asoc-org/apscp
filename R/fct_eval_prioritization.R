#' @include internal.R
NULL

#' Evaluate a prioritization
#'
#' Evaluate a prioritization according to how well its represents features,
#' locks, and costs. Additionally, area-based metrics are calculated.
#'
#' @inheritParams create_solution_from_prioritization
#'
#' @return
#' A `list` object. This is a `list` with a
#' `"summary"` element that contains a data frame with area-based metrics,
#' as well as `"features"`, `"locks"`, and `"costs"` elements that contain
#' data frames with metrics for the features, locks, and costs (respectively).
#'
#' @family prioritization
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # generate a simulated prioritization
#' sim_prioritization <- sample.int(
#'   length(sim_project$zones), sim_project$dataset$get_n_pu(), replace = TRUE
#' )
#'
#' # simulate settings to evaluate prioritization
#' sim_settings <- simulate_prioritization_settings(sim_project)
#'
#' # evaluate prioritization
#' eval_prioritization(sim_project, sim_settings, sim_prioritization)
#'
#' @export
eval_prioritization <- function(project, settings, prioritization) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## dependencies
    is_installed("prioritizr"),
    ## project
    inherits(project, "Project"),
    ## settings
    is_prioritization_settings(settings),
    ## prioritization
    is.numeric(prioritization),
    identical(length(prioritization), project$dataset$get_n_pu())
  )
  assertthat::assert_that(
    suppressWarnings(max(prioritization, na.rm = TRUE)) <=
      (length(project$zones) * 2),
    msg = paste(
      "`prioritization` does not have a values that reflect zones in",
      "`project`."
    )
  )

  # prepare data for evaluation
  pu_data <- as.matrix(project$dataset$get_dataframe())
  pu_data[is.na(pu_data)] <- 0

  # prepare prioritization for evaluation
  prioritization[is.na(prioritization)] <- 0

  # return metrics
  list(
    coverage = calc_coverage_metrics(
        pu_data, prioritization, project$zones
      ),
    performance = calc_performance_metrics(
      project$features, pu_data, prioritization, project$zones, settings
    ),
    features = calc_repr_metrics(
      project$features, pu_data, prioritization, project$zones
    ),
    locks = calc_repr_metrics(
       project$locks, pu_data, prioritization, project$zones
    ),
    costs = calc_repr_metrics(
       project$costs, pu_data, prioritization, project$zones
    )
  )
}

#' Calculate representation metrics
#'
#' Calculate metrics to assess how well a prioritization represents a
#' set of project components.
#'
#' @param x `list` with [new_feature()], [new_lock()], or [new_cost()] data.
#'
#' @param pu_data Object generated with `as.matrix(Dataset$get_dataframe())`.
#'
#' @param prioritization `numeric` vector or object generated with
#' [solve_prioritization()].
#'
#' @param zones `character` vector with zone names.
#'
#' @return
#' A `list` with the following elements:
#' (`"name"`) `list` of `character` values with name of each feature.
#' (`"total"`) `list` of `numeric` values with the total amount of each feature.
#' (`"units"`) `list` of `character` values with units for each feature.
#' (`"held"`) [tibble::tibble()] with the absolute amount held
#' for each component by each zone.
#' (`"locked"`) [tibble::tibble()] with the absolute amount locked
#' for each component by each zone.
#'
#' @noRd
calc_repr_metrics <- function(x, pu_data, prioritization, zones) {
  # assert valid arguments
  assertthat::assert_that(
    ## x
    is.list(x),
    ## pu_data
    is.matrix(pu_data),
    ## prioritization
    is.numeric(prioritization),
    identical(length(prioritization), nrow(pu_data)),
    ## zones
    is.character(zones)
  )
  assertthat::assert_that(
    all(vapply(x, inherits, logical(1), c("Feature", "Lock", "Cost"))),
    msg = "all `x` must be a Feature, Lock, or Cost object."
  )

  # if list is empty, then return NULL
  if (identical(length(x), 0L)) {
    return(list(relative = NULL, absolute = NULL))
  }

  # calculate constants
  nm <- vapply(x, `[[`, character(1), "name")
  id <- vapply(x, `[[`, character(1), "id")
  cl <- vapply(x, function(x) x$layer$column, character(1))

  # calculate total amount for each layer
  total_amount <- unname(colSums(pu_data[, cl, drop = FALSE]))

  # calculate absolute held by prioritization
  held_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(length(nm)),
    function(i) {
      c(
        as.numeric(
          prioritization == i |
          prioritization == (length(zones) + i)
        ) %*%
        pu_data[, cl, drop = FALSE]
      )
    }
  )
  if (!is.matrix(held_matrix)) {
   held_matrix <- matrix(held_matrix, nrow = 1)
  }
  colnames(held_matrix) <- zones

  # calculate absolute held by lock
  locked_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(length(nm)),
    function(i) {
      c(
        as.numeric(prioritization == i) %*%
        pu_data[, cl, drop = FALSE]
      )
    }
  )
  if (!is.matrix(locked_matrix)) {
   locked_matrix <- matrix(locked_matrix, nrow = 1)
  }
  colnames(locked_matrix) <- zones

  # return result
  list(
    name = as.list(nm),
    id = as.list(id),
    total = as.list(total_amount),
    units = lapply(x, function(x) x$layer$legend$units),
    held = tibble::as_tibble(held_matrix),
    locked = tibble::as_tibble(locked_matrix)
  )
}

#' Calculate coverage metrics
#'
#' Calculate metrics to assess the spatial coverage of a prioritization.
#'
#' @inheritParams calc_repr_metrics
#'
#' @return
#' A `list` with the following elements:
#' (`"name"`) `list` with a `character` value.
#' (`"total"`) `list` with a `numeric` value.
#' (`"units"`) `list` with a `character` value.
#' (`"total"`) `list` with a `numeric` value denoting the total number of
#' planning units.
#' (`"held"`) [tibble::tibble()] with the absolute number of planning units
#' held by each zone.
#' (`"locked"`) [tibble::tibble()] with the absolute number of planning units
#' locked for each zone.
#'
#' @noRd
calc_coverage_metrics <- function(pu_data, prioritization, zones) {
  # assert valid arguments
  assertthat::assert_that(
    ## pu_data
    is.matrix(pu_data),
    ## prioritization
    is.numeric(prioritization),
    identical(length(prioritization), nrow(pu_data)),
    ## zones
    is.character(zones)
  )

  # calculate total amount for each layer
  total_amount <- nrow(pu_data)

  # calculate absolute held by prioritization
  held_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(1L),
    function(i) sum(
      as.numeric(prioritization == i | prioritization == (length(zones) + i))
    )
  )
  if (!is.matrix(held_matrix)) {
   held_matrix <- matrix(held_matrix, nrow = 1)
  }
  colnames(held_matrix) <- zones

  # calculate absolute held by lock
  locked_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(1L),
    function(i) sum(as.numeric(prioritization == i))
  )
  if (!is.matrix(locked_matrix)) {
   locked_matrix <- matrix(locked_matrix, nrow = 1)
  }
  colnames(locked_matrix) <- zones

  # return result
  list(
    name = list("Spatial coverage"),
    id = list("spatial-coverage"),
    units = list("planning units"),
    total = as.list(total_amount),
    held = tibble::as_tibble(held_matrix),
    locked = tibble::as_tibble(locked_matrix)
  )
}

#' Calculate performance metrics
#'
#' Calculate metrics to assess performance of a prioritization.
#'
#' @inheritParams calc_repr_metrics
#' @inheritParams eval_prioritization
#'
#' @return
#' A `list` with the following elements:
#' (`"name"`) `list` with a `character` value for each zone.
#' (`"total"`) `list` with a `numeric` value for each zone.
#' (`"units"`) `list` with a `character` value for each zone.
#' (`"total"`) `list` with a `numeric` value for each zone.
#' (`"held"`) [tibble::tibble()] with the absolute performance metric
#' for each zone.
#' (`"locked"`) [tibble::tibble()] with the absolute performance metric
#' for each zone associated with each zone based on the locked planning units.
#'
#' @noRd
calc_performance_metrics <- function(
  x, pu_data, prioritization, zones, settings
) {
  # assert valid arguments
  assertthat::assert_that(
    ## pu_data
    is.matrix(pu_data),
    ## prioritization
    is.numeric(prioritization),
    identical(length(prioritization), nrow(pu_data)),
    ## zones
    is.character(zones),
    ## settings
    is_prioritization_settings(settings)
  )
  assertthat::assert_that(
    all(vapply(x, inherits, logical(1), "Feature")),
    msg = "all `x` must be a Feature object."
  )

  # if list is empty, then return NULL
  if (identical(length(x), 0L)) {
    return(list(relative = NULL, absolute = NULL))
  }

  # extract features settings
  features_settings <- settings$features[
    settings$features$target > 1e-4 & settings$features$weight > 1e-4, ,
    drop = FALSE
  ]

  # calculate absolute held by prioritization
  held_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(1L),
    function(i) {
      # subset data for zone
      d <-
        features_settings[features_settings$zone == zones[[i]], , drop = FALSE]
      # return average percent of target met
      mean(
        pmin(
          c(
            as.numeric(
              prioritization == i |
              prioritization == (length(zones) + i)
            ) %*%
            pu_data[, d$column, drop = FALSE]
          ) / colSums(pu_data[, d$column, drop = FALSE]),
          1
        ) * d$weight
      )
    }
  )
  if (!is.matrix(held_matrix)) {
   held_matrix <- matrix(held_matrix, nrow = 1)
  }
  colnames(held_matrix) <- zones

  # calculate absolute held by lock
  locked_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(1L),
    function(i) {
      # subset data for zone
      d <-
        features_settings[features_settings$zone == zones[[i]], , drop = FALSE]
      # return average percent of target met
      mean(
        pmin(
          c(
            as.numeric(prioritization == i) %*%
            pu_data[, d$column, drop = FALSE]
          ) / colSums(pu_data[, d$column, drop = FALSE]),
          1
        ) * d$weight
      )
    }
  )
  if (!is.matrix(locked_matrix)) {
   locked_matrix <- matrix(locked_matrix, nrow = 1)
  }
  colnames(locked_matrix) <- zones

  # return result
  list(
    name = list("Performance"),
    id = list("performance"),
    units = list("average percent target met"),
    total = as.list(rep(1, length(zones))),
    held = tibble::as_tibble(held_matrix),
    locked = tibble::as_tibble(locked_matrix)
  )
}
