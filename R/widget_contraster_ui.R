#' Contraster
#'
#' Constructs a widget for contrasting solutions.
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
#' @family contraster
#'
#' @section Dependencies:
#' The [add_external_resources()] function must be manually added to the
#' user-interface component of the Shiny application in order for this
#' widget to work correctly.
#'
#' @examplesIf interactive()
#' # run example app showing a contrast widget
#' run_example_app("contraster")
#'
#' @export
contraster <- function(
  project, width = NULL, height = NULL, id = NULL
) {
  # assert valid arguments
  assertthat::assert_that(inherits(project, "Project"))

  # create widget
  htmlwidgets::createWidget(
    name = "contraster",
    x = list(
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

#' Shiny bindings for contraster
#'
#' Output and render functions for using contraster within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a contraster
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @family contraster
#'
#' @name contraster-shiny
#'
#' @export
contrasterOutput <- function(outputId, width = "100%", height = "400px") {
  htmlwidgets::shinyWidgetOutput(
    outputId, "contraster", width, height, package = "apscp"
  )
}

#' @rdname contraster-shiny
#' @export
renderContraster <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, contrasterOutput, env, quoted = TRUE)
}
