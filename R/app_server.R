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

  # map and mapp events
  eval(app_server_mapper)

  # solver events
  eval(app_server_solver)
  eval(app_server_solution)

  # logging events
  eval(app_server_logging)

}
