#' Is package installed?
#'
#' Check if a package is installed.
#'
#' @param x `character` value.
#'
#' @return A `logical` value.
#'
#' @family misc
#'
#' @examples
#' # print if base package is installed?
#' is_installed("base")
#'
#' @export
is_installed <- function(x) {
  assertthat::is.string(x) &&
    assertthat::noNA(x) &&
    requireNamespace(x, quietly = TRUE)
}

assertthat::on_failure(is_installed) <- function(call, env) {
  pkg <- eval(call$x, envir = env)
  paste0("The \"", pkg, "\" package must be installed.")
}

#' Is prioritization settings?
#'
#' Determine if an object contains valid data for generating a prioritization
#' settings.
#'
#' @param x Object.
#'
#' @return A `logical` value.
#'
#' @family misc
#'
#' @export
is_prioritization_settings <- function(x) {
  all(
    ## settings
    is.list(x) &&
    ## features settings
    is.data.frame(x$features) &&
    assertthat::has_name(
      x$features,
      c("id", "name", "column", "zone", "target", "weight")
    ) &&
    ## locks settings
    is.data.frame(x$locks) &&
    assertthat::has_name(
      x$locks,
      c("id", "name", "column", "zone", "priority")
    ) &&
    ## costs settings
    is.data.frame(x$costs) &&
    assertthat::has_name(
      x$costs,
      c("id", "name", "zone", "weight")
    )
  )
}

assertthat::on_failure(is_prioritization_settings) <- function(call, env) {
  x <- eval(call$x, envir = env)
  paste0(
    "{.arg ", deparse(call$x),
    "} does not contain valid settings data."
  )
}
