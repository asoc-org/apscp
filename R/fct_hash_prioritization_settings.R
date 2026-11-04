#' @include internal.R
NULL

#' Hash prioritization settings key
#'
#' Create a unique key for the settings used to generate a prioritization.
#'
#' @inheritParams solve_prioritization
#' @inheritParams sanitize_prioritization_settings
#'
#' @return A `character` value.
#'
#' @inheritSection solve_prioritization Settings format
#'
#' @family misc
#'
#' @examples
#' # simulate data
#' sim_project <- simulate_project()
#' sim_settings <- simulate_prioritization_settings(sim_project)
#'
#' # preview settings
#' print(sim_settings)
#'
#' # generate hash for settings
#' hash_prioritization_settings(sim_settings)
#'
#' @export
hash_prioritization_settings <- function(settings, digits = 3) {
  # assert that arguments are valid
  assertthat::assert_that(is_prioritization_settings(settings))
  # return hash
  digest::digest(sanitize_prioritization_settings(settings, digits = digits))
}

#' Sanitize prioritization settings
#'
#' Sanitize prioritization settings for hashing.
#'
#' @inheritParams solve_prioritization
#'
#' @param digits Number of digits for comparing `numeric` values.
#' Defaults to 3.
#'
#' @return A `character` value.
#'
#' @inheritSection solve_prioritization Settings format
#'
#' @family misc
#'
#' @examples
#' # simulate data
#' sim_project <- simulate_project()
#' sim_settings <- simulate_prioritization_settings(sim_project)
#'
#' # preview settings
#' print(sim_settings)
#'
#' # sanitize settings
#' sanitize_prioritization_settings(sim_settings)
#'
#' @export
sanitize_prioritization_settings <- function(settings, digits = 3) {
  list(
    features =
      settings$features |>
      dplyr::select(column, zone, target, weight) |>
      dplyr::mutate(
        column = sanitize_text(column),
        target = as.integer(as.double(target) * digits),
        weight = as.integer(as.double(weight) * digits)
      ) |>
      dplyr::arrange() |>
      as.data.frame(),
    locks =
      settings$locks |>
      dplyr::select(column, zone, priority) |>
      dplyr::mutate(
        column = sanitize_text(column),
        priority = as.integer(as.double(priority) * digits)
      ) |>
      dplyr::arrange() |>
      as.data.frame(),
    costs =
      settings$costs |>
      dplyr::select(column, zone, weight) |>
      dplyr::mutate(
        column = sanitize_text(column),
        weight = as.integer(as.double(weight) * digits)
      ) |>
      dplyr::arrange() |>
      as.data.frame()
  )
}
