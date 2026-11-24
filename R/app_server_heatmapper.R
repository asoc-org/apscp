#' Sever function: heat mapper
#'
#' Set behavior for heat mapper widget.
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_heatmapper)
#' ```
#'
#' @noRd
app_server_heatmapper <- quote({

  # initialize widget
  output$heatmapper <- renderHeatmapper({
    suppressMessages(heatmapper(project = app_data$project))
  })

  # force widget to render when not visible
  shiny::outputOptions(
    output, "heatmapper",
    suspendWhenHidden = FALSE, priority = 1
  )

  # define task for generating heat map
  heatmapper_task <- ExtendedTask$new(
    function(id, name, zone, ids) {
      # run task
      mirai::mirai(
         {
          list(
            id = id,
            name = name,
            values = compute_heatmap(project, zone, ids),
            zone = zone,
            ids = ids
          )
        },
        .args = list(
          "id" = id,
          "name" = name,
          "project" = app_data$project,
          "zone" = zone,
          "ids" = ids
        )
      )
    }
  ) |> bslib::bind_task_button("heatmapper_button")

  # define observer for heat mapper settings
  shiny::observeEvent(input$heatmapper_settings, {
    shiny::req(input$heatmapper_settings)
    heatmapper_task$invoke(
      id = uuid::UUIDgenerate(),
      name = input$heatmapper_settings$name,
      zone = input$heatmapper_settings$zone,
      ids = unlist(
        input$heatmapper_settings$ids,
        recursive = FALSE, use.names = FALSE
      )
    )
  })

  # define observer for heat mapper task result,
  # this is triggered when the asynchronous task has completed
  shiny::observe({
    # obtain task result
    result <- try(heatmapper_task$result(), silent = TRUE)
    # if result does not have valid identifier, then exit observer
    if (
      inherits(result, "try-error") ||
      is.null(result) ||
      is.null(result$id)
    ) {
      return()
    }
    # if result threw an error, then display error message and exit observer
    if (inherits(result$values, "try-error")) {
      alert_error()
      return()
    }
    # extract names of solutions used to generate product
    sol_names <- vapply(
      result$ids,
      function(i) app_data$project$get_solution(i)$name,
      character(1)
    )
    # create heat map product
    l <- create_product(
      id = result$id,
      project = app_data$project,
      name = result$name,
      values = result$values,
      legend = create_legend(
        result$values, units = "number solutions", palette = "magma",
        type = "softcontinuous"
      ),
      provenance = heatmap_provenance(result$zone, sol_names)
    )
    # add product to project
    app_data$project$add_product(l)
    # add product to mapper
    suppressMessages(
      mapper_add_product(
        id = "mapper",
        map = mapgl::mapboxgl_proxy("map"),
        product = l,
        visible = TRUE
      )
    )
    # reset heat mapper widget
    heatmapper_reset("heatmapper")
  })

})
