#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @noRd
app_server <- function(input, output, session) {

  # initialize app
  eval(server_initialize_app)

  # print debugging information
  if (isTRUE(apscp:::get_golem_config("monitor"))) {
    shiny::observe({
      shiny::invalidateLater(3000)
      cli::cli_rule()
      golem::print_dev("Total memory used: ")
      golem::print_dev(lobstr::mem_used())
      golem::print_dev("  app_data:")
      golem::print_dev(lobstr::obj_size(app_data))
    })
  }

}
