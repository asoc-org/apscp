#' @include internal.R
NULL

#' Get `SpatRaster` object.
#'
#' Get a [terra::rast()] object.
#'
#' @param x `DataSet` or `Layer` object.
#'
#' @param apply_coltab `logical` value indicating if the color
#' table for the [terra::rast()] object should be updated based on
#' the legend? Note that this only has an affect if `x` has a categorical
#' legend.
#'
#' @details
#' This function is designed to provide the `data` parameter for
#' [mapgl::add_image_source()].
#'
#' @return A `data.frame` object.
#'
#' @export
get_spatraster <- function(x, apply_coltab = TRUE) {
  UseMethod("get_spatraster", x)
}

#' @export
get_spatraster.default <- function(x, apply_coltab = TRUE) {
  rlang::abort("`x` is not recognized.")
}

#' @export
get_spatraster.Layer <- function(x, apply_coltab = TRUE) {
  # extract raster layer
  d <- x$dataset$get_raster_data(x$index)
  # assign colors
  if (
    isTRUE(apply_coltab) &&
    inherits(x$legend, "CategoricalLegend")
  ) {
    terra::coltab(d, layer = 1) <- get_color_table(x$legend)
  }
  # return raster
  d
}
