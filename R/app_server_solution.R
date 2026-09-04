#' Sever function: solve
#'
#' Set behavior for generating a solution.
#'
#' @details
#' This object is designed to be used within [app_server] function.
#' Within the [app_server] function, it should be called like this:
#'
#' ```
#' eval(app_server_solution)
#' ```
#'
#' @noRd
app_server_solution <- quote({

  # define task for generating solutions
  task <- ExtendedTask$new(
    function(id, name, project, settings, gap, solver, verbose) {
      # mirai::mirai({
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
            silent = !isTRUE(verbose)
          )
        )
      # }, environment())
    }
  ) |> bslib::bind_task_button("solver_start_button")

  # define observer for solver settings,
  # this is triggered when the user clicks on the solve button
  observeEvent(input$solver_settings, {
    # define inputs
    req(input$solver_settings)
    # verify that user inputs are valid
    is_valid <- any(
      input$solver_settings$features$target > 1e-3 &
      input$solver_settings$features$weight > 1e-3,
      na.rm = TRUE
    )
    # if invalid, then display popup and reset solver
    if (!isTRUE(is_valid)) {
      ## display modal
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
    id <- uuid::UUIDgenerate()
    app_data$task_id <- id
    # create asynchronous task
    task$invoke(
      id = id,
      name = input$solver_settings$name,
      project = app_data$project,
      settings = input$solver_settings,
      gap = get_golem_config("solver_gap"),
      solver = get_golem_config("solver_name"),
      verbose = get_golem_config("verbose")
    )
  })

  # define observer for task result,
  # this is triggered when the asynchronous task has completed
  shiny::observe({
    # obtain task result
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
    if (inherits(result$result, "try-error")) {
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
    sol <- create_solution_from_prioritization(
      id = result$id,
      name = result$name,
      project = app_data$project,
      prioritization = result$result
    )
    # add tile file to tracking for automatic clean up
    app_data$session_files <- c(app_data$session_files, sol$layer$tile$path)
    # add solution to project
    app_data$project$add_solution(sol)
    # add solution to mapper
    mapper_add_solution(
      id = "mapper",
      map = mapgl::mapboxgl_proxy("map"),
      solution = sol,
      visible = TRUE
    )
    # reset solver status so its ready to generate a new solution
    solver_reset("solver")
  })
})
