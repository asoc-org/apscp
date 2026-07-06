#' @include internal.R
NULL

#' @export
print.Provenance <- function(x, ...) {
  cli::cli_text("A {.cls Provenance} object.")
}

#' @export
print.Tile <- function(x, ...) {
  cli::cli_text("A {.cls Tile} object.")
}

#' @export
print.Tileset <- function(x, ...) {
  cli::cli_text("A {.cls Tileset} object.")
}

#' @export
print.CategoricalLegend <- function(x, ...) {
  cli::cli_text("A {.cls CategoricalLegend} object.")
}

#' @export
print.ContinuousLegend <- function(x, ...) {
  cli::cli_text("A {.cls ContinuousLegend} object.")
}

#' @export
print.Layer <- function(x, ...) {
  cli::cli_text("A {.cls Layer} object.")
}

#' @export
print.Feature <- function(x, ...) {
  cli::cli_text("A {.cls Feature} object.")
}

#' @export
print.Lock <- function(x, ...) {
  cli::cli_text("A {.cls Lock} object.")
}

#' @export
print.Cost <- function(x, ...) {
  cli::cli_text("A {.cls Cost} object.")
}

#' @export
print.Solution <- function(x, ...) {
  cli::cli_text("A {.cls Solution} object.")
}

#' @export
print.Theme <- function(x, ...) {
  cli::cli_text("A {.cls Theme} object.")
}

#' @export
print.Project <- function(x, ...) {
  cli::cli_text("A {.cls Project} object.")
}
