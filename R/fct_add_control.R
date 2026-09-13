#' Add show layers control
#'
#' Add a control to show all layers on the map.
#'
#' @param map [mapgl::mapboxgl()] object.
#'
#' @param mapper_id `character` value with HTML identifier for [mapper()]
#' object.
#'
#' @param position `character` value denoting the placement of the
#' control the `map` object. Available options include
#' `"top-left"`, `"top-right`", `"bottom-left"`, and `"bottom-right"`.
#'
#' @family mapping
#'
#' @export
add_show_layers_control <- function(map, mapper_id, position = "top-left") {
  assertthat::assert_that(
    inherits(map, c("mapboxgl", "mapboxgl_proxy")),
    assertthat::is.string(mapper_id),
    assertthat::noNA(mapper_id),
    assertthat::is.string(position),
    assertthat::noNA(position)
  )
  mapgl::add_control(
    map = map,
    position = position,
    className = "mapboxgl-ctrl",
    id = "showLayersControl",
    html = as.character(
      htmltools::tags$label(
        `data-toggle` = "tooltip",
        `data-placement` = "top",
        `data-container` = "body",
        title = "Show all layers on map.",
        htmltools::tags$button(
          class = c(
            "layers-show-button",
            "btn", "btn-sm", "btn-light"
          ),
          onclick = paste0(
            "document.querySelector('#",
            mapper_id,
            "').widget.mapper.showAllMenuLayersOnMap();"
          ),
          htmltools::tags$i(class = "fa fa-eye")
        )
      )
    )
  )
}

#' Add hide layers control
#'
#' Add a control to hide all layers on the map.
#'
#' @param map [mapgl::mapboxgl()] object.
#'
#' @param mapper_id `character` value with HTML identifier for [mapper()]
#' object.
#'
#' @param position `character` value denoting the placement of the
#' control the `map` object. Available options include
#' `"top-left"`, `"top-right`", `"bottom-left"`, and `"bottom-right"`.
#'
#' @family mapping
#'
#' @export
add_hide_layers_control <- function(map, mapper_id, position = "top-left") {
  assertthat::assert_that(
    inherits(map, c("mapboxgl", "mapboxgl_proxy")),
    assertthat::is.string(mapper_id),
    assertthat::noNA(mapper_id),
    assertthat::is.string(position),
    assertthat::noNA(position)
  )
  mapgl::add_control(
    map = map,
    position = position,
    className = "mapboxgl-ctrl",
    id = "hideLayersControl",
    html = as.character(
      htmltools::tags$label(
        `data-toggle` = "tooltip",
        `data-placement` = "top",
        `data-container` = "body",
        title = "Hide all layers on map.",
        htmltools::tags$button(
          class = c(
            "layers-hide-button",
            "btn", "btn-sm", "btn-light"
          ),
          onclick = paste0(
            "document.querySelector('#",
            mapper_id,
            "').widget.mapper.hideAllMenuLayersOnMap();"
          ),
          htmltools::tags$i(class = "fa fa-eye-slash", style = "color:red;")
        )
      )
    )
  )
}

#' Remove layers control
#'
#' Add a control to remove layers on the map.
#'
#' @param map [mapgl::mapboxgl()] object.
#'
#' @param mapper_id `character` value with HTML identifier for [mapper()]
#' object.
#'
#' @param position `character` value denoting the placement of the
#' control the `map` object. Available options include
#' `"top-left"`, `"top-right`", `"bottom-left"`, and `"bottom-right"`.
#'
#' @family mapping
#'
#' @export
add_remove_layers_control <- function(map, mapper_id, position = "top-left") {
  assertthat::assert_that(
    inherits(map, c("mapboxgl", "mapboxgl_proxy")),
    assertthat::is.string(mapper_id),
    assertthat::noNA(mapper_id),
    assertthat::is.string(position),
    assertthat::noNA(position)
  )
  mapgl::add_control(
    map = map,
    position = position,
    className = "mapboxgl-ctrl",
    id = "removeLayersControl",
    html = as.character(
      htmltools::tags$label(
        `data-toggle` = "tooltip",
        `data-placement` = "top",
        `data-container` = "body",
        title = "Remove all layers from map.",
        htmltools::tags$button(
          class = c(
            "layers-remove-button",
            "btn", "btn-sm", "btn-light"
          ),
          onclick = paste0(
            "document.querySelector('#",
            mapper_id,
            "').widget.mapper.removeAllLayersFromMenuAndMap();"
          ),
          htmltools::tags$i(class = "fa fa-trash")
        )
      )
    )
  )
}
