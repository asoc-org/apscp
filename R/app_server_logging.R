#' Sever function: logging
#'
#' Set behavior for logging
#'
#' @details
#' This object is designed to be used within [app_server] function.
#' Within the [app_server] function, it should be called like this:
#'
#' ```
#' eval(app_server_logging)
#' ```
#'
#' @noRd
app_server_logging <- quote({

  # log memory usage
  if (
    isTRUE(get_golem_config("logging")) &&
    requireNamespace("lobstr", quietly = TRUE)
  ) {
    memory_logging <- shiny::observe({
      # run after application initialized
      shiny::invalidateLater(5000)
      # display statistics
      cli::cli_h3("Application statistics")
      cli::cli_bullets(
        c(
          "*" = paste0(
            "Initial memory: ",
            getOption("apscp.initial_memory_used")
          ),
          "*" = paste0(
            "Total memory:   ",
            format(lobstr::mem_used(), "mb")
          ),
          "*" = paste0(
            "Data size:    ",
            format(lobstr::obj_size(app_data), "mb")
          ),
          "*" = paste0(
            "Solver:    ",
            get_golem_config("solver_name")
          ),
          "*" = paste0(
            "Number workers:    ",
            get_golem_config("n_workers")
          )
        )
      )
      cli::cli_text(" ")
      # kill observer
      memory_logging$destroy()
    })
  }

})
