#' Sever function: summarizer
#'
#' Set behavior for summarizer widget
#'
#' @details
#' This object is designed to be used within `app_server()` function.
#' Within the `app_server()` function, it should be called like this:
#'
#' ```
#' eval(app_server_summarizer)
#' ```
#'
#' @noRd
app_server_summarizer <- quote({

  # initialize widget
  output$summarizer <- renderSummarizer({
    summarizer(project = app_data$project)
  })

  # force widget to render when not visible
  shiny::outputOptions(
    output, "summarizer",
    suspendWhenHidden = FALSE, priority = 1
  )

})
