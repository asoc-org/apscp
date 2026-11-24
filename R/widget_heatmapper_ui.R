#' Heat mapper
#'
#' Constructs a widget for creating a heat map from solutions.
#' This widget is designed to be used in conjunction with an existing
#' map within a Shiny web application.
#'
#' @param project [new_project()] object.
#'
#' @param width `character` width of the displayed widget.
#' Defaults to `NULL` such that the widget is automatically sized.
#'
#' @param height `character` width of the displayed widget.
#' Defaults to `NULL` such that the widget is automatically sized.
#'
#' @param id `character` HTML identifier for the widget.
#' Defaults to `NULL` since these identifiers are not used by Shiny.
#'
#' @family heatmapper
#'
#' @section Dependencies:
#' The [add_external_resources()] function must be manually added to the
#' user-interface component of the Shiny application in order for this
#' widget to work correctly.
#'
#' @examplesIf interactive()
#' # run example app showing a heat mapper widget
#' run_example_app("heatmapper")
#'
#' @export
heatmapper <- function(project, width = NULL, height = NULL, id = NULL) {
  # assert valid arguments
  assertthat::assert_that(inherits(project, "Project"))

  # create widget
  htmlwidgets::createWidget(
    name = "heatmapper",
    x = list(
      zones = project$zones,
      solutions = lapply(
        project$solutions,
        function(x) list(id = x$id, name = x$name)
      )
    ),
    width = width,
    height = height,
    package = "apscp",
    elementId = id
  )
}

#' Shiny bindings for heatmapper
#'
#' Output and render functions for using heatmapper within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a heatmapper
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name heatmapper-shiny
#'
#' @family heatmapper
#'
#' @export
heatmapperOutput <- function(outputId, width = "100%", height = "400px") {
  htmlwidgets::shinyWidgetOutput(
    outputId, "heatmapper", width, height, package = "apscp"
  )
}

#' @rdname heatmapper-shiny
#' @export
renderHeatmapper <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, heatmapperOutput, env, quoted = TRUE)
}
