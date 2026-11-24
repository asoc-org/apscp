#' Error alert
#'
#' Display an alert indicating that an error occurred unexpectedly.
#'
#' @param text `character` value with text to display in the alert.
#' Defaults to `NULL` such that a generic error message is displayed.
#'
#' @inheritParams sidebar_open
#'
#' @family misc
#'
#' @examplesIf FALSE
#' # create alert
#' x <- create_alert()
#'
#' # print object
#' print(x)
#'
#' @export
alert_error <- function(
  text = NULL, session = shiny::getDefaultReactiveDomain()
) {
  # update default arguments
  if (is.null(text)) {
    text <-
      "Something went unexpected wrong! To resolve this, please try again."
  }
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(text),
    assertthat::noNA(text)
  )
  # return alert
  shinyalert::shinyalert(
    title = "Oops",
    text = text,
    size = "s",
    closeOnEsc = TRUE,
    closeOnClickOutside = TRUE,
    type = "error",
    showConfirmButton = TRUE,
    confirmButtonText = "OK",
    timer = 0,
    confirmButtonCol = "#0275d8",
    animation = TRUE,
    session = session
  )
}
