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
    identical(length(prioritization), project$dataset$get_n_pu()),
    suppressWarnings(max(prioritization, na.rm = TRUE)) <= length(project$zones)
  )

  # prepare data for evaluation
  pu_data <- as.matrix(project$dataset$get_dataframe())
  pu_data[is.na(pu_data)] <- 0

  # prepare prioritization for evaluation
  prioritization[is.na(prioritization)] <- 0

  # if needed, generate matrix with locked data based on settings
  if (is.null(attr(prioritization, "locked"))) {
    attr(prioritization, "locked") <-
      convert_lock_settings_to_prioritization(project, settings)
  }

  # calculate summary metrics
  summary_metrics <- tibble::tibble(
    zone = project$zones,
    abs_coverage = vapply(
      seq_along(project$zones),
      function(x) sum(prioritization == x, na.rm = TRUE),
      integer(1)
    )
  )
  summary_metrics$rel_coverage = summary_metrics$abs_coverage / nrow(pu_data)

  # return metrics
  list(
    summary = summary_metrics,
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
#' (`"name"`) `character` vector name of each feature,
#' (`"total"`) `numeric` vector with the total amount of each feature,
#' (`"units"`) `list` with the units for each feature,
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
    !is.null(attr(prioritization, "locked")),
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
  ln <- vapply(x, `[[`, character(1), "name")
  lc <- vapply(x, function(x) x$layer$column, character(1))

  # calculate total amount for each layer
  total_amount <- unname(colSums(pu_data[, lc, drop = FALSE]))

  # calculate absolute held by prioritization
  held_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(length(ln)),
    function(i) {
      c(
        as.numeric(prioritization == i) %*%
        pu_data[, lc, drop = FALSE]
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
    FUN.VALUE = numeric(length(ln)),
    function(i) {
      c(
        as.numeric(attr(prioritization, "locked") == i) %*%
        pu_data[, lc, drop = FALSE]
      )
    }
  )
  if (!is.matrix(locked_matrix)) {
   locked_matrix <- matrix(locked_matrix, nrow = 1)
  }
  colnames(locked_matrix) <- zones

  # return result
  list(
    name = as.list(ln),
    total = as.list(total_amount),
    units = lapply(x, function(x) x$layer$legend$units),
    held = tibble::as_tibble(held_matrix),
    locked = tibble::as_tibble(locked_matrix)
  )
}
