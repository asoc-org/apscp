#' Add sidebar control
#'
#' Add a sidebar control to a [mapgl::mapboxgl()] object.
#'
#' @param [mapgl::mapboxgl()] object.
#'
#' @param id `character` identifier for sidebar.
#'
#' @param sidebar [sidebar_tabs()] object.
#' @inheritParams mapgl::add_control
#'
#' @inherit mapgl::add_control return
#'
#' @family sidebar
#'
#' @examples
#' \dontrun{
#' library(shiny)
#'
#' # run example app showing a single sidebar
#' runApp(system.file("examples", "sidebar_app.R", package = "apscp"))
#' }
#' @export
add_sidebar_control <- function(map, id, position = "top-right") {
  # add control to map
  map |>
    mapgl::add_control(
      position = position,
      html = as.character(
        htmltools::tags$div(
          id = paste0(id, "-ctrl"),
          `map-position` = position
        )
      )
    ) |>
    htmlwidgets::onRender(
      "function(el, x, data) {mapgl_sidebar_initialize(data.map, data.id)}",
      data = list(map = map, id = id)
    )
}

#' Create a sidebar pane
#' @param title A title for the sidebar pane
#'
#' @param id An id for the sidebar pane
#'
#' @param icon An icon for the sidebar pane
#'
#' @param ... List of elements to include in the pane
#'
#' @family sidebar
#'
#' @references
#' \url{https://github.com/Turbo87/sidebar-v2},
#' \url{https://github.com/Turbo87/sidebar-v2/blob/master/doc/usage.md}
#'
#' @return A `shiny.tag` with sidebar-specific HTML classes
#'
#' @examples
#' \dontrun{
#' library(shiny)
#' library(htmltools)
#' sidebar_pane(id = "id", icon = icon("cars"), tags$div())
#' }
#'
#' @export
sidebar_pane <- function(
  title = "Sidebar Title",
  id = NULL,
  icon = icon("caret-right"),
  ...
) {
  if (is.null(id)) {
    stop("The sidebar pane needs an `id`.")
  }
  htmltools::tags$div(
    class = "mapsidebar-pane", id = id,
    htmltools::tags$h3(
      class = "mapsidebar-header", title,
      htmltools::tags$span(class = "mapsidebar-close", icon)
    ),
    ...
  )
}

#' Create a sidebar
#'
#' @param id `character` identifier for sidebar.
#'
#' @param icon_list A list of [icon()] objects.
#' These icons are shown when the sidebar is collapsed.
#' Not that the list is required and must match the amount of [sidebar_pane()]
#' objects.
#'
#' @param ... The individual [sidebar_pane()] objects.
#'
#' @return A `shiny.tag` with individual sidebar panes
#'
#' @examples
#' \dontrun{
#' # load packages
#' library(shiny)
#'
#' # run example app showing a single sidebar
#' runApp(system.file("examples", "sidebar_app.R", package = "apscp"))
#' }
#'
#' @export
sidebar_tabs <- function(id, icon_list = NULL, ...) {
  arg <- list(...)
  ids <- lapply(arg, function(x) htmltools::tagGetAttribute(x, "id"))
  if (length(ids) != length(icon_list)) {
    stop("The number of icons needs to match the number of sidebar panes.")
  }
  htmltools::attachDependencies(
    htmltools::tags$div(
      id = id,
      class = "mapsidebar collapsed",
      style = "display: none",
      htmltools::tags$div(
        class = "mapsidebar-tabs", style = "display: none",
        htmltools::tags$ul(
          role = "tablist",
          htmltools::tagList(
            lapply(seq_along(ids), function(x) {
              htmltools::tags$li(
                htmltools::tags$a(
                  href = paste0("#", ids[[x]]), role = "tab", icon_list[[x]]
                )
              )
            })
          )
        )
      ),
      htmltools::tags$div(
        class = "mapsidebar-content", style = "display: none",
        htmltools::tagList(arg)
      )
    ),
    sidebar_deps(),
    append = TRUE
  )
}

#' Sidebar dependencies
#'
#' Add dependencies for sidebar to a Shiny application.
#'
#' @return A `list` with the HTML dependencies.
#'
#' @noRd
sidebar_deps <- function() {
  list(
    htmltools::htmlDependency(
      "sidebar",
      "1.0.0",
      src = system.file("htmlwidgets/sidebar", package = "apscp"),
      script = c(
        "map-sidebar.js",
        "map-sidebar-binding.js"
      ),
      stylesheet = "map-sidebar.css"
    )
  )
}
