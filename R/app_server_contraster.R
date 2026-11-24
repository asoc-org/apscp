#' Sever function: contraster
#'
#' Set behavior for contraster widget.
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_contraster)
#' ```
#'
#' @noRd
app_server_contraster <- quote({

  # initialize widget
  output$contraster <- renderContraster({
    suppressMessages(contraster(project = app_data$project))
  })

  # force widget to render when not visible
  shiny::outputOptions(
    output, "contraster",
    suspendWhenHidden = FALSE, priority = 1
  )

  # define task for generating contraster output
  contraster_task <- ExtendedTask$new(
    function(id, name, id1, id2) {
      # run task
      mirai::mirai(
         {
          list(
            id = id,
            name = name,
            values = compute_contrast(project, id1, id2),
            id1 = id1,
            id2 = id2
          )
        },
        .args = list(
          "id" = id,
          "name" = name,
          "project" = app_data$project,
          "id1" = id1,
          "id2" = id2
        )
      )
    }
  ) |> bslib::bind_task_button("contraster_button")

  # define observer for contraster settings
  shiny::observeEvent(input$contraster_settings, {
    shiny::req(input$contraster_settings)
    contraster_task$invoke(
      id = uuid::UUIDgenerate(),
      name = input$contraster_settings$name,
      id1 = input$contraster_settings$id1,
      id2 = input$contraster_settings$id2
    )
  })

  # define observer for contraster task result,
  # this is triggered when the asynchronous task has completed
  shiny::observe({
    # obtain task result
    result <- try(contraster_task$result(), silent = TRUE)
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
    name1 <- app_data$project$get_solution(result$id1)$name
    name2 <- app_data$project$get_solution(result$id2)$name
    # create contrast product
    l <- create_product(
      id = result$id,
      name = result$name,
      project = app_data$project,
      values = result$values,
      legend = create_contrast_legend(
        app_data$project, name1, name2, values = result$values
      ),
      provenance = contrast_provenance(name1, name2)
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
    # reset contraster widget
    contraster_reset("contraster")
  })

})
