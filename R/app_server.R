#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @noRd
app_server <- function(input, output, session) {

  # initialization events
  eval(app_server_initialize)

  # session events
  eval(app_server_session)

  # widget events
  eval(app_server_map)
  eval(app_server_mapper)
  eval(app_server_solver)
  eval(app_server_summarizer)

  # generate new solution events
  eval(app_server_solution)

  # logging events
  eval(app_server_logging)

}
