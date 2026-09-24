#' Run the Shiny application
#'
#' Run the Shiny application.
#'
#' @param ... arguments to pass to golem_opts.
#' See `?golem::get_golem_options` for more details.
#'
#' @inheritParams shiny::shinyApp
#'
#' @importFrom shiny shinyApp
#' @importFrom golem with_golem_options
#' @inherit apscp examples
#' @export
run_app <- function(
  onStart = app_startup,
  options = list(),
  enableBookmarking = NULL,
  uiPattern = "/",
  ...
) {
  with_golem_options(
    app = shinyApp(
      ui = app_ui,
      server = app_server,
      onStart = onStart,
      options = options,
      enableBookmarking = enableBookmarking,
      uiPattern = uiPattern
    ),
    golem_opts = list(...)
  )
}
