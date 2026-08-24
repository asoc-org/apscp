#' Sever function: initialize
#'
#' Set behavior for initializing the application.
#'
#' @details
#' This object is designed to be used within [app_server] function.
#' Within the [app_server] function, it should be called like this:
#'
#' ```
#' eval(server_initialize_app)
#' ```
#'
#' @noRd
server_initialize <- quote({
  # define application data
  ## note that we use an environment here because they are mutable objects and
  ## so we don't have to worry about using the super-assignment operator
  app_data <- list2env(
    list(
      ## objects
      project = golem::get_golem_options("project"),
      ## state variables
      new_solution_id = NULL,
      task = NULL,
      ## cache
      cache = cachem::cache_mem()
    )
  )

  # initialize map
  output$map <- mapgl::renderMapboxgl({
    {app_data$project} |>
      map_project(
        style = mapgl::mapbox_style(get_golem_config("map_style")),
        width = "100%",
        height = "100%",
        minZoom = get_golem_config("map_min_zoom"),
        maxZoom = get_golem_config("map_max_zoom")
      ) |>
      add_sidebar_control(
        id = "left_sidebar",
        position = "top-left",
        selected = "navigation_panel"
      ) |>
      add_sidebar_control(
        id = "right_sidebar",
        position = "top-right",
        selected = "settings_panel"
      )
  })

  # initialize mapper
  output$mapper <- renderMapper({
    mapper(map_id = "map", project = app_data$project)
  })
  observeEvent(input$mapper_sync, {
    req(input$mapper_sync)
    mapper_sync(
      "mapper",
      map = mapgl::mapboxgl_proxy("map"),
      project = app_data$project,
      data = input$mapper_sync
    )
  })

  # initial solver
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
