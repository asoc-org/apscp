#' @include internal.R
NULL

#' Get raster layer parameters
#'
#' Get parameters for the [mapgl::add_raster_layer()] function
#' so that a [terra::rast()] object can be colored according to a legend.
#'
#' @param x [new_continuous_legend()] or [new_categorical_legend()] object.
#'
#' @return A named `list` object.
#'
#' @export
get_raster_layer_parameters <- function(x) {
  UseMethod("get_raster_layer_parameters")
}

#' @export
get_raster_layer_parameters.default <- function(x) {
  rlang::abort("`x` is not recognized.")
}

#' @export
get_raster_layer_parameters.CategoricalLegend <- function(x) {
  list(raster_color = NULL, raster_resampling = "nearest")
}

#' @export
get_raster_layer_parameters.ContinuousLegend <- function(x) {
  list(
    raster_color = mapgl::interpolate(
      column = "raster-value",
      values = x$values,
      stops = x$colors,
      na_color = "transparent"
    ),
    raster_resampling = "linear"
  )
}

#' Get color table
#'
#' Get a color table to colorize a [terra::rast()] object according to colors
#' defined by a legend.
#'
#' @inheritParams get_raster_layer_parameters
#'
#' @details
#' This function provides the `value` parameter for [terra::coltab()].
#'
#' @return A `data.frame` object.
#'
#' @export
get_color_table <- function(x) {
  UseMethod("get_color_table")
}

#' @export
get_color_table.default <- function(x) {
  rlang::abort("`x` is not recognized.")
}

#' @export
get_color_table.CategoricalLegend <- function(x) {
  data.frame(value = x$values, col = x$colors)
}
