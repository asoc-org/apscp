#' Sever function: session
#'
#' Set behavior for session
#'
#' @details
#' This object is designed to be used within [app_server] function.
#' Within the [app_server] function, it should be called like this:
#'
#' ```
#' eval(app_server_session)
#' ```
#'
#' @noRd
app_server_session <- quote({

  # remove PMTile files created during session
  session$onSessionEnded(function() {
    try(unlink(app_data$session_files, force = TRUE), silent = TRUE)
  })

})
