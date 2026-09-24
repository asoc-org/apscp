#' @include internal.R
NULL

#' Add sidebar control
#'
#' Add a sidebar control to a [mapgl::mapboxgl()] object.
#'
#' @param map [mapgl::mapboxgl()] object.
#'
#' @param id `character` HTML identifier for sidebar.
#'
#' @param height `character` value denoting the height of the widget
#' in CSS units. For example, acceptable values include `"100%"`, `"30vh"`, or
#' or `"400px"`. Note that if `height` is a percentage value, then it
#' is recommended to add other map controls to a different
#' `position` to avoid overlaps.
#'
#' @param selected `character` value denoting the identifier for the
#' sidebar pane to have open by default. Defaults to `NULL`
#' such that the side bar is closed.
#'
#' @inheritParams add_layer_visibility_control
#'
#' @return An updated [mapgl::mapboxgl()] object.
#'
#' @family sidebar
#'
#' @examplesIf interactive()
#' # run example app showing a sidebar widget
#' run_example_app("sidebar")
#' @export
add_sidebar_control <- function(
  map,
  id,
  position = "top-right",
  height = "100%",
  selected = NULL
) {
  # add control to map
  htmlwidgets::onRender(
    map,
    paste0(
      "function(el, x, data) ",
      "{Shiny.mapglSidebarInitialize(",
      "el, data.id, data.height, data.options)}"
    ),
    data = list(
      id = id, height = height,
      options = list(position = position, selected = selected)
    )
  )
}
