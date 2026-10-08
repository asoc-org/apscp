#' @include internal.R
NULL

#' Sidebar pane
#'
#' Create a sidebar pane. This pane is designed to be used as an argument
#' to [sidebar_tabs()].
#'
#' @param title `character` value with a title for the sidebar pane.
#'
#' @param id `character` value denoting an identifier for the sidebar pane.
#'
#' @param icon [shiny::icon()] object for the sidebar pane. This icon
#' is used to create a button for closing the pane. If `NULL`, then
#' no icon is added for the pane.
#'
#' @param tooltip `character` value with text to display in a tooltip
#' when hovering over the button to open the sidebar.
#' Defaults to `NULL` such that no tooltip is displayed.
#'
#' @param ... List of elements to include in the pane.
#'
#' @family sidebar
#'
#' @references
#' \url{https://github.com/Turbo87/sidebar-v2},
#' \url{https://github.com/Turbo87/sidebar-v2/blob/master/doc/usage.md}
#'
#' @return A `shiny.tag` object.
#'
#' @examples
#' # load packages
#' library(shiny)
#' library(htmltools)
#'
#' # create sidebar pane
#' sidebar_pane(id = "id", icon = icon("car"), tags$div())
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

#' Sidebar with tabs
#'
#' Create a sidebar with tabs.
#'
#' @param id `character` identifier for sidebar.
#'
#' @param icon_list `list` of [icon()] objects.
#' These icons are shown when the sidebar is collapsed.
#' Not that the list is required and must match the amount of [sidebar_pane()]
#' objects. Defaults to `NULL` such that no icons are included.
#'
#' @param ... The individual [sidebar_pane()] objects.
#'
#' @return A `shiny.tag` object.
#'
#' @family sidebar
#'
#' @examples
#' # load packages
#' library(shiny)
#' library(htmltools)
#'
#' # create sidebar panes
#' p1 <- sidebar_pane(
#'   id = "pane1", icon = icon("car"),
#'   tags$div(tags$p("Text"))
#' )
#' p2 <- sidebar_pane(
#'   id = "pane2", icon = icon("star"),
#'   tags$div(actionButton(inputId = "button", label = "Click me!"))
#' )
#'
#' # create sidebar with tabs
#' sidebar_tabs(
#'   id = "sidebar",
#'   icon_list = list(icon("car"), icon("star")),
#'   p1, p2
#' )
#' @export
sidebar_tabs <- function(id, icon_list = NULL, ...) {
  arg <- list(...)
  ids <- lapply(arg, function(x) htmltools::tagGetAttribute(x, "id"))
  assertthat::assert_that(
    identical(length(ids), length(icon_list)),
    msg = "The number of icons needs to match the number of sidebar panes."
  )
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
  )
}
