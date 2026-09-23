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
#' @inheritParams mapgl::add_control
#'
#' @return An updated [mapgl::mapboxgl()] object.
#'
#' @family sidebar
#'
#' @examplesIf interactive()
#' library(shiny)
#'
#' # run example app showing a single sidebar
#' runApp(system.file("examples", "sidebar_app.R", package = "apscp"))
#' @export
add_sidebar_control <- function(
  map,
  id,
  position = "top-right",
  height = "100%",
  selected = NULL
) {
  # add control to map
  map |>
    htmlwidgets::onRender(
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

#' Create a sidebar pane
#' @param title A title for the sidebar pane
#'
#' @param id An id for the sidebar pane.
#'
#' @param icon An [icon()] object for the sidebar pane. This icon
#' is used to create a button for closing the pane. If `NULL`, then
#' no icon is added for the pane.
#'
#' @param tooltip A `character` value with text to display in a tooltip
#' when hovering over the button to open the sidebar.
#' Defaults to `NULL` such that no tooltip is displayed.
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
  icon = shiny::icon("caret-right"),
  tooltip = NULL,
  ...
) {
  if (is.null(id)) {
    stop("The sidebar pane needs an `id`.")
  }
  if (is.null(icon)) {
    h <- htmltools::tags$h3(
      class = "mapsidebar-pane-header", title
    )
  } else {
    h <- htmltools::tags$h3(
      class = c("mapsidebar-pane-header", "mapsidebar-pane-header-icon"),
      title,
      htmltools::tags$span(class = "mapsidebar-close", icon)
    )
  }
  htmltools::tags$div(
    class = "mapsidebar-pane",
    id = id,
    `data-tooltip` = tooltip,
    h,
    htmltools::tags$div(
      class = "mapsidebar-pane-content",

      ...
    )
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
#' @family sidebar
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
      src = system.file("htmlwidgets", package = "apscp"),
      script = "sidebar.js",
      stylesheet = "sidebar.css"
    )
  )
}
