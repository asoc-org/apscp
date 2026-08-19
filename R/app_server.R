#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @noRd
app_server <- function(input, output, session) {

  # initialization events
  eval(server_initialize)

  # solve events
  eval(server_solve)

  # logging events
  eval(server_logging)

}
