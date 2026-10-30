#' @include internal.R
NULL

#' Run example application
#'
#' Run an example application to showcase widgets.
#'
#' @param name `character` value denoting the name of the application.
#'
#' @return A [shiny::runApp()] object.
#'
#' @examplesIf interactive()
#' # run example application for mapper widget
#' run_example("mapper_app")
#'
#' # run example application for sidebar widget
#' run_example("sidebar_app")
#'
#' # run example application for solver widget
#' run_example("solver_app")
#'
#' # run example application for summarizer widget
#' run_example("summarizer_app")
#'
#' @export
run_example_app <- function(name) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(name),
    assertthat::noNA(name)
  )

  # find file path for application
  file <- system.file("examples", name, "app.R", package = "apscp")
  assertthat::assert_that(
    isTRUE(nzchar(file)),
    file.exists(file),
    msg = "`name` does not refer to a valid example."
  )

  # run application
  shiny::runApp(file)
}
