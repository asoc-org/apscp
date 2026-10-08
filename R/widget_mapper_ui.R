#' Mapper
#'
#' Constructs a widget for managing layers on a [mapgl::mapboxgl()] map.
#' This widget is designed to be used in conjunction with an existing
#' map within a Shiny web application.
#'
#' @param project [new_project()] object.
#'
#' @param map_id `character` HTML identifier for [mapgl::mapboxglOutput()].
#' Defaults to `NULL` since these identifiers are not used by Shiny.
#'
#' @param max_layers `integer` maximum number of layers to be active on
#' the [mapgl::mapboxglOutput()] at a single point in time.
#' Defaults to 15.
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
#' @family mapper
#'
#' @section Dependencies:
#' The [add_external_resources()] function must be manually added to the
#' user-interface component of the Shiny application in order for this
#' widget to work correctly.
#'
#' @examplesIf interactive()
#' # run example app showing a mapper widget
#' run_example_app("mapper")
#'
#' @export
mapper <- function(
  project,
  map_id,
  max_layers = 15L,
  width = NULL,
  height = NULL,
  id = NULL
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(map_id),
    assertthat::noNA(map_id),
    inherits(project, "Project"),
    assertthat::is.count(max_layers),
    assertthat::noNA(max_layers)
  )

  # create widget
  htmlwidgets::createWidget(
    name = "mapper",
    x = list(
      mapId = map_id,
      project = serialize_object(project),
      maxLayers = max_layers
    ),
    width = width,
    height = height,
    package = "apscp",
    elementId = id
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
#' @inherit mapper examples
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
