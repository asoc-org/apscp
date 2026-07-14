#' Mapper
#'
#' Constructs a widget for managing layers on a [mapgl::mapboxgl()] map.
#' This widget is designed to be used in conjunction with an existing
#' map within a Shiny web application.
#'
#' @param x [new_project()] object.
#'
#' @param elementId `character` HTML identifier for the widget.
#'
#' @param width `character` width of the displayed widget.
#' Defaults to `NULL` such that the widget is automatically sized.
#'
#' @param height `character` width of the displayed widget.
#' Defaults to `NULL` such that the widget is automatically sized.
#'
#' @family mapper
#'
#' @examples
#' \dontrun{
#' library(shiny)
#'
#' # run example app showing a mapper
#' runApp(system.file("examples", "mapper_app.R", package = "apscp"))
#' }
#' @export
mapper <- function(
  x,
  elementId,
  width = NULL,
  height = NULL
) {
  # assert valid arguments
  asserttthat::assert_that(
    inherits(x, "Project"),
    assertthat::is.string(elementId),
    assertthat::noNA(elementId)
  )

  # create widget
  htmlwidgets::createWidget(
    name = "mapper",
    serialize_object(x),
    width = width,
    height = height,
    package = "apscp",
    elementId = elementId
  )
}

#' Shiny bindings for mapper
#'
#' Output and render functions for using [mapper()] within Shiny
#' applications.
#'
#' @param outputId output variable to read from
#'
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#' \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#' string and have \code{'px'} appended.
#'
#' @param expr An expression that generates a [mapper()].
#'
#' @param env The environment in which to evaluate \code{expr}.
#'
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#' is useful if you want to save an expression in a variable.
#'
#' @name mapper-shiny
#'
#' @family mapper
#'
#' @export
mapperOutput <- function(outputId, width = "100%", height = "400px"){
  htmlwidgets::shinyWidgetOutput(
    outputId, "mapper", width, height, package = "apscp"
  )
}

#' @rdname mapper-shiny
#' @export
renderMapper <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, mapperOutput, env, quoted = TRUE)
}
