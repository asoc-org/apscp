#' Sever function: initialize
#'
#' Set behavior for initializing the application.
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_initialize)
#' ```
#'
#' @noRd
app_server_initialize <- quote({
  # define application data
  ## note that we use an environment here because they are mutable objects and
  ## so we don't have to worry about using the super-assignment operator
  app_data <- list2env(
    list(
      ## objects
      project = golem::get_golem_options("project"),
      ## state variables
      task_id = NULL,
      task_mirai = NULL,
      session_files = character(0),
      ## cache
      cache = cachem::cache_mem()
    )
  )

  # assert valid tokens and dependencies
  ## mapbox token
  assertthat::assert_that(
    nzchar(Sys.getenv("MAPBOX_PUBLIC_TOKEN")),
    msg = "MAPBOX_PUBLIC_TOKEN not defined as an environmental variable."
  )
  # if needed, assert Gurobi dependencies available
  if (identical(get_golem_config("solver_name"), "gurobi")) {
    assertthat::assert_that(
      requireNamespace("slam", quietly = TRUE),
      msg = "The `slam` package must be installed."
    )
    assertthat::assert_that(
      requireNamespace("gurobi", quietly = TRUE),
      msg = "The `gurobi` package must be installed."
    )
  }

})
