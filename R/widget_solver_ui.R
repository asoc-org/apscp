#' Solver
#'
#' Constructs a widget for specifying solver settings to generate a solution.
#' This widget is designed to be used within a Shiny web application.
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
#' @family solver
#'
#' @examples
#' \dontrun{
#' library(shiny)
#'
#' # run example app showing a solver
#' runApp(system.file("examples", "solver_app.R", package = "apscp"))
#' }
#' @export
solver <- function(
  project,
  width = NULL,
  height = NULL,
  id = NULL
) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(project, "Project"),
  )

  # create widget
  htmlwidgets::createWidget(
    name = "solver",
    x = list(
      project = serialize_object(project),
    ),
    width = width,
    height = height,
    package = "apscp",
    elementId = id
  )
}

#' Shiny bindings for solver
#'
#' Output and render functions for using [solver()] within Shiny
#' applications.
#'
#' @param outputId output variable to read from
#'
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#' \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#' string and have \code{'px'} appended.
#'
#' @param expr An expression that generates a [solver()].
#'
#' @param env The environment in which to evaluate \code{expr}.
#'
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#' is useful if you want to save an expression in a variable.
#'
#' @name solver-shiny
#'
#' @family solver
#'
#' @export
solverOutput <- function(outputId, width = "100%", height = "400px"){
  htmlwidgets::shinyWidgetOutput(
    outputId, "solver", width, height, package = "apscp"
  )
}

#' @rdname solver-shiny
#' @export
renderSolver <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, solverOutput, env, quoted = TRUE)
}
