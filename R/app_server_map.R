#' Sever function: map
#'
#' Set behavior for [mapgl::mapboxgl()] widget.
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_map)
#' ```
#'
#' @noRd
app_server_map <- quote({

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
        selected = "navigator_pane"
      ) |>
      add_sidebar_control(
        id = "right_sidebar",
        position = "top-right",
        selected = "settings_pane"
      ) |>
      add_layer_visibility_control(
        position = "top",
        mapper_id = "mapper"
      ) |>
      mapgl::add_navigation_control(position = "top") |>
      mapgl::add_reset_control(position = "top")
  })

  # force widget to render when not visible
  shiny::outputOptions(
    output, "map",
    suspendWhenHidden = FALSE, priority = 2
  )

})
