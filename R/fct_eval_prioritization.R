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
#' # simulate data
#' project <- simulate_project()
#'
#' # generate a simulated prioritization
#' prioritization <- sample.int(
#'   length(project$zones), project$dataset$get_n_pu(), replace = TRUE
#' )
#'
#' # evaluate prioritization
#' eval_prioritization(project, prioritization)
#'
#' @export
eval_prioritization <- function(project, prioritization) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## dependencies
    is_installed("prioritizr"),
    ## project
    inherits(project, "Project"),
    ## prioritization
    is.numeric(prioritization),
    identical(length(prioritization), project$dataset$get_n_pu()),
    suppressWarnings(max(prioritization, na.rm = TRUE)) <= length(project$zones)
  )

  # prepare data for evaluation
  pu_data <- as.matrix(project$dataset$get_dataframe())
  pu_data[is.na(pu_data)] <- 0

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
#' A `list` with the following elements: `"relative"` and `"absolute"`.
#' Each of these elements contains a data frame.
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
  ln <- vapply(x, `[[`, character(1), "name")
  lc <- vapply(x, function(x) x$layer$column, character(1))

  # calculate preliminary calculations
  total_matrix <- matrix(
    colSums(pu_data[, lc, drop = FALSE]),
    byrow = TRUE, nrow = length(lc), ncol = length(zones)
  )
  abs_matrix <- vapply(
    seq_along(zones),
    FUN.VALUE = numeric(length(ln)),
    function(i) {
      c(as.numeric(prioritization == i) %*% pu_data[, lc, drop = FALSE])
    }
  )
  if (!is.matrix(abs_matrix)) {
   abs_matrix <- matrix(abs_matrix, nrow = 1)
  }
  colnames(abs_matrix) <- zones
  rel_matrix <- abs_matrix / total_matrix

  # return result
  list(
    relative = tibble::as_tibble(
      cbind(
        tibble::tibble(name = ln),
        tibble::as_tibble(rel_matrix)
      )
    ),
    absolute = tibble::as_tibble(
      cbind(
        tibble::tibble(name = ln),
        tibble::as_tibble(abs_matrix)
      )
    )
  )
}
