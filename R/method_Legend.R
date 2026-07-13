#' @include internal.R
NULL

#' Get paint parameters
#'
#' Get parameters for painting a [new_layer] object.
#'
#' @param x [new_continuous_legend()] or [new_categorical_legend()] object.
#'
#' @param column `character` value with source layer for painting.
#'
#' @details
#' This function is designed for use with [mapgl::add_fill_layer()].
#'
#' @return A named `list` object.
#'
#' @family mapping
#'
#' @examples
#' # create object
#' legend <- simulate_continuous_legend()
#'
#' # obtain parameters for painting data stored in a column
#' # called "values" based on the legend
#' x <- get_paint_parameters(legend, "values")
#'
#' # preview object
#' print(x)
#'
#' @export
get_paint_parameters <- function(x, column) {
  UseMethod("get_paint_parameters")
}

#' @export
get_paint_parameters.default <- function(x, column) {
  rlang::abort("`x` is not recognized.")
}

#' @export
get_paint_parameters.ContinuousLegend <- function(x, column) {
  # return object
  list(
    fill_color = mapgl::interpolate(
      column = column,
      values = x$values,
      stops = x$colors,
      na_color = "transparent"
    )
  )
}

#' @export
get_paint_parameters.CategoricalLegend <- function(x, column) {
  # return object
  list(
    fill_color = mapgl::step_expr(
      column = column,
      base = "#B2BEB5",
      values = x$values,
      stops = x$colors,
      na_color = "transparent"
    )
  )
}
