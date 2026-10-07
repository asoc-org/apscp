#' Add layer visibility control
#'
#' Add a control to show, hide, or highlight all layers on the map.
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
#' @inherit mapper examples
#'
#' @export
add_layer_visibility_control <- function(
  map, mapper_id, position = "top-left"
) {
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
    className = "mapboxgl-ctrl mapboxgl-ctrl-grp",
    id = "layerVisibilityControl",
    html = as.character(
      htmltools::tags$div(
        class = "btn-group",
        role = "group",
        ## show layers
        htmltools::tags$button(
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          title = "Show all layers on map.",
          class = c(
            "mapboxgl-ctrl-show-layers", "mapboxgl-ctrl-icon",
            "btn", "btn-sm", "btn-light"
          ),
          onclick = paste0(
            "document.querySelector('#",
            mapper_id,
            "').widget.mapper.showAllMenuLayersOnMap();"
          ),
          htmltools::tags$i(class = "fa fa-eye")
        ),
        ## hide layers
        htmltools::tags$button(
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          title = "Hide all layers on map.",
          class = c(
            "mapboxgl-ctrl-hide-layers", "mapboxgl-ctrl-icon",
            "btn", "btn-sm", "btn-light"
          ),
          onclick = paste0(
            "document.querySelector('#",
            mapper_id,
            "').widget.mapper.hideAllMenuLayersOnMap();"
          ),
          htmltools::tags$i(class = "fa fa-eye-slash", style = "color:red;")
        ),
        ## unhighlight layers
        htmltools::tags$button(
          `data-toggle` = "tooltip",
          `data-placement` = "top",
          `data-container` = "body",
          title = "Remove highlight from all layers on map.",
          class = c(
            "mapboxgl-ctrl-highlight-layers", "mapboxgl-ctrl-icon",
            "btn", "btn-sm", "btn-light"
          ),
          onclick = paste0(
            "document.querySelector('#",
            mapper_id,
            "').widget.mapper.unhighlightAllMenuLayersOnMap();"
          ),
          htmltools::tags$i(
            class = "fa fa-eye-slash",
            style =
              "text-shadow: 0 0 5px yellow, 0 0 10px yellow, 0 0 20px yellow;"
          )
        )
      )
    )
  )
}
