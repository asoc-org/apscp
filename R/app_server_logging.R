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
      # calculate memory usage
      main_mem <- lobstr::mem_used()
      worker_mem <- structure(
        sum(unlist(mirai::everywhere({lobstr::mem_used()})[])),
        class = "lobstr_bytes"
      )
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
            format(main_mem, "mb")
          ),
          "*" = paste0(
            "Worker memory:    ",
            format(worker_mem, "mb")
          ),
          "*" = paste0(
            "Data size:    ",
            format(lobstr::obj_size(app_data), "mb")
          ),
          "*" = paste0(
            "Solver:    ",
            get_golem_config("solver_name")
          )
        )
      )
      cli::cli_text(" ")
      # kill observer
      memory_logging$destroy()
    })
  }

})
