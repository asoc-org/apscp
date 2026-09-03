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

  # define task for generating solutions
  task <- ExtendedTask$new(
    function(id, name, project, settings, gap, solver, verbose) {
      cli::cli_text("here000")
      mirai::mirai({
        list(
          id = id,
          name = name,
          result = try(
            apscp::prioritization(
              project = project,
              settings = settings,
              gap = gap,
              solver = solver,
              verbose = verbose
            ),
            silent = TRUE
          )
        )
      }, environment())
    }
  ) |> bslib::bind_task_button("solver_start_button")

  # define observer for solver settings,
  # this is triggered when the user clicks on the solve button
  observeEvent(input$solver_settings, {
    # define inputs
    req(input$solver_settings)
    # verify that user inputs are valid
    cli::cli_text("here201")
    is_valid <- any(
      input$solver_settings$features$target > 1e-3 &
      input$solver_settings$features$weight > 1e-3,
      na.rm = TRUE
    )
    # if invalid, then display popup and reset solver
    cli::cli_text("here202")
    if (!isTRUE(is_valid)) {
      ## display modal
      cli::cli_text("here203")
      shinyalert::shinyalert(
        title = "Oops",
        text = paste(
          "At least one feature must have a non-zero target and weight.",
          "To resolve this, please try adjusting the targets and weight for",
          "the features."
        ),
        size = "s",
        closeOnEsc = TRUE,
        closeOnClickOutside = TRUE,
        type = "error",
        showConfirmButton = TRUE,
        confirmButtonText = "OK",
        timer = 0,
        confirmButtonCol = "#0275d8",
        animation = TRUE
      )
      ## reset solver status
      solver_reset("solver")
      ## exit observer
      return()
    }
    # create id for solution
    cli::cli_text("here204")
    id <- uuid::UUIDgenerate()
    app_data$task_id <- id
    # create asynchronous task
    cli::cli_text("here205")
    task$invoke(
      id = id,
      name = input$solver_settings$name,
      project = app_data$project,
      settings = input$solver_settings,
      gap = get_golem_config("solver_gap"),
      solver = "cbc",
      verbose = get_golem_config("verbose")
    )
  })

  # define observer for task result,
  # this is triggered when the asynchronous task has completed
  shiny::observe({
    # obtain task result
    cli::cli_text("here300")
    result <- task$result()
    # if result has different identifier than expected, then exit observer
    if (
      is.null(result) ||
      is.null(result$id) ||
      is.null(app_data$task_id) ||
      !identical(result$id, app_data$task_id)
    ) {
      return()
    }
    # if result threw an error, then display error message and exit observer
    cli::cli_text("here301")
    if (inherits(result$result, "try-error")) {
      cli::cli_text("here302")
      shinyalert::shinyalert(
        title = "Oops",
        text = paste(
          "Something went unexpected wrong!",
          "To resolve this, please try the solution settings and try again."
        ),
        size = "s",
        closeOnEsc = TRUE,
        closeOnClickOutside = TRUE,
        type = "error",
        showConfirmButton = TRUE,
        confirmButtonText = "OK",
        timer = 0,
        confirmButtonCol = "#0275d8",
        animation = TRUE
      )
      return()
    }
    # create solution
    cli::cli_text("here303")
    sol <- create_solution_from_prioritization(
      id = result$id,
      name = result$name,
      project = app_data$project,
      prioritization = result$result
    )
    # add solution to project
    cli::cli_text("here304")
    app_data$project$add_solution(sol)
    # add solution to mapper
    cli::cli_text("here305")
    mapper_add_solution(
      id = "mapper",
      map = mapgl::mapboxgl_proxy("map"),
      solution = sol,
      visible = TRUE
    )
    # reset solver status so its ready to generate a new solution
    cli::cli_text("here306")
    solver_reset("solver")
  })
})
