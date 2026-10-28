#' @include internal.R
NULL

#' @export
print.Provenance <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Provenance} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Tile <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Tile} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.CategoricalLegend <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls CategoricalLegend} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.ContinuousLegend <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls ContinuousLegend} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Layer <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Layer} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Feature <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Feature} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Lock <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Lock} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Cost <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Cost} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Solution <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Solution} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Theme <- function(x, ...) {
  id <- cli::cli_div()
  cli::cli_text("A {.cls Theme} object.")
  cli_list(x)
  cli::cli_end(id)
}

#' @export
print.Project <- function(x, ...) {
  x$print()
}

#' @export
print.Dataset <- function(x, ...) {
  x$print()
}
