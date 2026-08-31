#' Sever function: solve
#'
#' Set behavior for generating a solution
#'
#' @details
#' This object is designed to be used within [app_server] function.
#' Within the [app_server] function, it should be called like this:
#'
#' ```
#' eval(server_solve)
#' ```
#'
#' @noRd
app_server_solve <- quote({
  # display solver settings in text box
  observeEvent(input$solver_settings, {
    # define inputs
    req(input$solver_settings)
    # generate solution
    new_sol <- create_optimized_solution(
      name = input$solver_settings$name,
      project = app_data$project,
      settings = input$solver_settings,
      gap = get_golem_config("solver_gap"),
      solver = "cbc",
      verbose = get_golem_config("verbose"),
    )
    # add solution to project
    app_data$project$add_solution(new_sol)
    # add solution to mapper
    mapper_add_solution(
      id = "mapper",
      map = mapgl::mapboxgl_proxy("map"),
      solution = new_sol,
      visible = TRUE
    )
    # reset solver status so its ready to generate a new solution
    solver_reset("solver")
  })
})
