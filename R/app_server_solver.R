#' Sever function: solver
#'
#' Set behavior for solver widget
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_solver)
#' ```
#'
#' @noRd
app_server_solver <- quote({

  # initialize solver
  output$solver <- renderSolver({
    solver(project = app_data$project)
  })
  observeEvent(input$solver_sync, {
    req(input$solver_sync)
    solver_sync(
      "solver",
      project = app_data$project,
      data = input$solver_sync
    )
  })

})
