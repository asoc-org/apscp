#' Sever function: initialize application
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
server_initialize_app <- quote({
  # find project
  project_path <- system.file(
    "data",
    apscp:::get_golem_config("project_filename"),
    package = "apscp"
  )
  assertthat::assert_that(
    file.exists(project_path),
    msg = "Can't import project data because file does not exist."
  )

  # define application data
  ## note that we use an environment here because they are mutable objects and
  ## so we don't have to worry about using the super-assignment operator
  app_data <- list2env(
    list(
      ## objects
      project = apscp::read_project(project_path),
      ## state variables
      new_solution_id = NULL,
      task = NULL,
      ## cache
      cache = cachem::cache_mem()
    )
  )

  # initialize map
  output$map <- mapgl::renderMapboxgl({
    map_project(
      app_data$project,
      style = mapgl::mapbox_style("satellite"),
      width = "100%",
      height = "100%"
    )
  })

  # initialize solution settings widget
  ## TODO

  # initial map manager widget
  ## TODO

})
