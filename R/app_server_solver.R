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

  # initialize widget
  output$solver <- renderSolver({
    solver(project = app_data$project)
  })

  # define widget synchronization
  observeEvent(input$solver_sync, {
    req(input$solver_sync)
    solver_sync(
      "solver",
      project = app_data$project,
      data = input$solver_sync
    )
  })

  # force widget to render when not visible
  shiny::outputOptions(
    output, "solver",
    suspendWhenHidden = FALSE, priority = 1
  )

})
