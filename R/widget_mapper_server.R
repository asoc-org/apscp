#' @include internal.R
NULL

#' Add layer
#'
#' Add a new layer to a layer manager widget.
#'
#' @param id `character` value with identifier for layer manager.
#'
#' @param value [Theme], [Cost], [Solution], or [Lock] object.
#'
#' @family mapper
#'
#' @export
mapper_add_layer <- function(
  id, value,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(value, c("Theme", "Cost", "Solution", "Lock"))
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:add_layer",
    list(id = id, value = serialize_object(x))
  )
}

#' Enable layer
#'
#' Enable a layer on the layer manager widget.
#'
#' @param layer_id `character` layer identifier.
#'
#' @param show `logical` value indicating if the layer should
#' also be shown on the map? Defaults to `TRUE`.
#'
#' @param position `character` value indicating the position that the
#' layer should be added to the map. Available options include
#' `"first"` and "last"`. Defaults to `"first"`.
#'
#' @inheritParams add_mapper
#'
#' @family mapper
#'
#' @export
mapper_enable_layer <- function(
  id, layer_id, show = TRUE, position = "first",
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    assertthat::is.string(layer_id),
    assertthat::noNA(layer_id),
    assertthat::is.flag(show),
    assertthat::noNA(show)
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:enable_layer",
    list(id = id, layer_id = layer_id, show = show, position = position)
  )
}

#' Disable a layer
#'
#' Disable a layer from a layer manager widget.
#'
#' @inheritParams mapper_enable_layer
#'
#' @family mapper
#'
#' @export
mapper_disable <- function(
  id, layer_id,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    assertthat::is.string(layer_id),
    assertthat::noNA(layer_id)
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:disable_layer",
    list(id = id, layer_id = layer_id)
  )
}

#' Show a layer
#'
#' Show a layer on the layer manager widget.
#'
#' @inheritParams mapper_enable_layer
#'
#' @family mapper
#'
#' @export
mapper_show_layer <- function(
  id, layer_id,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    assertthat::is.string(layer_id),
    assertthat::noNA(layer_id)
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:show_layer", list(id = id, layer_id = layer_id)
  )
}

#' Hide a layer
#'
#' Hide a layer on the layer manager widget.
#'
#' @param layer_id `character` layer identifier.
#'
#' @inheritParams mapper_enable_layer
#'
#' @family mapper
#'
#' @export
mapper_hide_layer <- function(
  id, layer_id,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    assertthat::is.string(layer_id),
    assertthat::noNA(layer_id)
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:hide_layer", list(id = id, layer_id = layer_id)
  )
}
