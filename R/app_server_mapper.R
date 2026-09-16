#' Sever function: mapper
#'
#' Set behavior for mapper widget.
#'
#' @details
#' This object is designed to be used within [app_server] function.
#' Within the [app_server] function, it should be called like this:
#'
#' ```
#' eval(app_server_mapper)
#' ```
#'
#' @noRd
app_server_mapper <- quote({

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
      ) |>
      add_layer_visibility_control(
        position = "top",
        mapper_id = "mapper"
      ) |>
      mapgl::add_navigation_control(position = "top") |>
      mapgl::add_reset_control(position = "top")
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

})
