#' @include internal.R
NULL

#' Get \pkg{mapgl} layer identifier
#'
#' Get an identifier for a feature object that corresponds to the
#' \pkg{mapgl} layer for the feature.
#'
#' @param x [Feature], [Cost], or [Lock] object.
#'
#' @return A `character` value.
#'
#' @export
mapgl_layer_id <- function(x) {
  assertthat::assert_that(inherits(x, c("Feature", "Cost", "Lock")))
  paste0("lyr-", x$layer$id)
}

#' Get \pkg{mapgl} source identifier
#'
#' Get an identifier for a feature object that corresponds to the
#' \pkg{mapgl} source for the feature.
#'
#' @inheritParams mapgl_layer_id
#'
#' @inherit mapgl_layer_id return
#'
#' @export
mapgl_source_id <- function(x) {
  assertthat::assert_that(inherits(x, c("Feature", "Cost", "Lock")))
  paste0("src-", x$layer$id)
}

#' Add source
#'
#' Add feature, cost, or lock object as a data source to a \pkg{mapgl} object.
#'
#' @param map A [mapgl::mapboxgl()], [mapgl::maplibre()],
#' [mapgl::mapboxgl_proxy()], or [mapgl::maplibre_proxy()].
#'
#' @inheritParams mapgl_layer_id
#'
#' @details
#' Data sources are added with [mapgl::add_image_source()].
#'
#' @export
mapgl_add_source <- function(map, x) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(
      map,
      c("mapboxgl", "maplibre", "mapboxgl_proxy", "maplibre_proxy")
    ),
    assertthat::assert_that(inherits(x, c("Feature", "Cost", "Lock")))
  )
  # return updated map
  mapgl::add_image_source(
    map,
    id = mapgl_source_id(x),
    data = get_spatraster.Layer(x$layer, apply_coltab = TRUE)
  )
}

#' Add layer
#'
#' Add feature, cost, or lock object as a layer to a \pkg{mapgl} object.
#'
#' @inheritParams mapgl_add_source
#'
#' @inheritParams mapgl::add_raster_layer
#'
#' @details
#' Layers are added with [mapgl::add_raster_layer()].
#'
#' @export
mapgl_add_layer <- function(
  map,
  x,
  visible = TRUE,
  before_id = NULL
) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(
      map,
      c("mapboxgl", "maplibre", "mapboxgl_proxy", "maplibre_proxy")
    ),
    assertthat::assert_that(inherits(x, c("Feature", "Cost", "Lock"))),
    assertthat::is.flag(visible),
    assertthat::noNA(visible)
  )
  # return updated map
  mapgl::add_raster_layer(
    append(
      list(
        map,
        id = mapgl_layer_id(x),
        source = mapgl_source_id(x),
        visible = visible,
        before_id = before_id
      ),
      get_raster_layer_parameters(x$layer$legend)
    )
  )
}

#' Clear layer
#'
#' Clear a feature, cost, or lock object layer from a \pkg{mapgl} object.
#'
#' @inheritParams mapgl_add_source
#'
#' @details
#' Layers are added with [mapgl::add_raster_layer()].
#'
#' @export
mapgl_clear_feature_layer <- function(map, x) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(
      map,
      c("mapboxgl", "maplibre", "mapboxgl_proxy", "maplibre_proxy")
    ),
    assertthat::assert_that(inherits(x, c("Feature", "Cost", "Lock")))
  )
  # return updated map
  mapgl::clear_layer(map, mapgl_layer_id(x))
}
