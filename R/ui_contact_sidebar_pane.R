#' @include internal.R
NULL

#' Contact sidebar pane
#'
#' Create a sidebar pane for displaying contact information.
#'
#' @inheritParams sidebar_pane
#'
#' @inherit sidebar_pane return
#'
#' @family sidebar
#'
#' @examples
#' # create object
#' contact_sidebar_pane("pane_id")
#'
#' @export
contact_sidebar_pane <- function(id, icon = shiny::icon("envelope")) {
  # assert arguments are valid
  assertthat::assert_that(
    ### id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # create sidebar pane
  sidebar_pane(
    title = "Contact",
    id = id,
    icon = icon,
    htmltools::tags$div(
      style = "padding: 5px",
      ## contact
      shiny::includeMarkdown(
        system.file(
          "app", "text", "contact.md", package = "apscp"
        )
      )
    )
  )
}
