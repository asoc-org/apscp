#' Sever function: mapper
#'
#' Set behavior for mapper widget.
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_mapper)
#' ```
#'
#' @noRd
app_server_mapper <- quote({

  # initialize widget
  output$mapper <- renderMapper({
    mapper(map_id = "map", project = app_data$project)
  })

  # widget synchronization
  observeEvent(input$mapper_sync, {
    req(input$mapper_sync)
    mapper_sync(
      "mapper",
      map = mapgl::mapboxgl_proxy("map"),
      project = app_data$project,
      data = input$mapper_sync
    )
  })

  # force widget to render when not visible
  shiny::outputOptions(
    output, "mapper",
    suspendWhenHidden = FALSE, priority = 1
  )

})
