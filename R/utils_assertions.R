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

#' Is the freestiler Python library installed?
#'
#' Check if the freestiler Python library is installed?
#'
#' @return A `logical` value.
#'
#' @family misc
#'
#' @examples
#' # print if freestiler Python library is installed?
#' is_python_freestiler_installed()
#'
#' @export
is_python_freestiler_installed <- function() {
  identical(
    suppressWarnings(
      system(
        "python3 -c \"import freestiler\"",
        ignore.stdout = TRUE,
        ignore.stderr = TRUE
      )
    ),
    0L
  )
}

assertthat::on_failure(is_python_freestiler_installed) <- function(call, env) {
  "Python must have freestiler library installed, use `pip install freestiler`."
}
