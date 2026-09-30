#' Summarizer
#'
#' Constructs a widget to summarize solutions.
#' This widget is designed to be used within a Shiny web application.
#'
#' @inheritParams solver
#'
#' @family summarizer
#'
#' @examplesIf interactive()
#' # run example application showing a summarizer widget
#' run_example_app("summarizer")
#'
#' @export
summarizer <- function(
  project,
  zone_colors = get_golem_config("zone_colors"),
  width = NULL,
  height = NULL,
  id = NULL
) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(project, "Project"),
    is.character(zone_colors),
    length(zone_colors) >= length(project$zones)
  )

  # create widget
  htmlwidgets::createWidget(
    name = "summarizer",
    x = list(
      project = serialize_object(project),
      zoneColors = zone_colors[seq_along(project$zones)]
    ),
    width = width,
    height = height,
    package = "apscp",
    elementId = id
  )
}

#' Shiny bindings for summarizer
#'
#' Output and render functions for using [summarizer()] within Shiny
#' applications.
#'
#' @param outputId output variable to read from
#'
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#' \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#' string and have \code{'px'} appended.
#'
#' @param expr An expression that generates a [summarizer()].
#'
#' @param env The environment in which to evaluate \code{expr}.
#'
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#' is useful if you want to save an expression in a variable.
#'
#' @name summarizer-shiny
#'
#' @family summarizer
#'
#' @inherit summarizer examples
#'
#' @export
summarizerOutput <- function(outputId, width = "100%", height = "400px"){
  htmlwidgets::shinyWidgetOutput(
    outputId, "summarizer", width, height, package = "apscp"
  )
}

#' @rdname summarizer-shiny
#' @export
renderSummarizer <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, summarizerOutput, env, quoted = TRUE)
}
