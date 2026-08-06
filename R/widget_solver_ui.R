#' Solver
#'
#' Constructs a widget for specifying solver settings to generate a solution.
#' This widget is designed to be used within a Shiny web application.
#'
#' @param project [new_project()] object.
#'
#' @param feature_targets `numeric` vector of values representing
#' different options for setting target values for features.
#' Defaults to `get_golem_config("prioritization_feature_targets")`.
#'
#' @param feature_weights `numeric` vector of values representing
#' different options for setting target weights for features.
#' Defaults to `get_golem_config("prioritization_feature_weights")`.
#'
#' @param cost_weights `numeric` vector of values representing
#' different  options for setting weights for costs.
#' Defaults to `get_golem_config("prioritization_cost_weights")`.
#'
#' @param zone_colors `character` vector of colors for each zone.
#' Defaults to `get_golem_config("zone_colors")`.
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
#' @section Server value:
#' The widget sends the following values to the server:
#'
#' \describe{
#' \item{start}{
#' This is sent when the "Solve!" button is clicked and
#' it sends a `list` that contains the settings for generating a prioritization.
#' See documentation for the `settings` parameter of [prioritization()]
#' for further details on the format of this value.
#' }
#'
#' \item{stop}{
#' This is sent when the stop button is clicked.
#' }
#' }
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
  feature_targets = get_golem_config("prioritization_feature_targets"),
  feature_weights = get_golem_config("prioritization_feature_weights"),
  cost_weights = get_golem_config("prioritization_cost_weights"),
  zone_colors = get_golem_config("zone_colors"),
  width = NULL,
  height = NULL,
  id = NULL
) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(project, "Project"),
    is.numeric(feature_targets),
    assertthat::noNA(feature_targets),
    is.numeric(feature_weights),
    assertthat::noNA(feature_weights),
    is.numeric(cost_weights),
    assertthat::noNA(cost_weights),
    length(zone_colors) >= length(project$zones)
  )

  # create widget
  htmlwidgets::createWidget(
    name = "solver",
    x = list(
      project = serialize_object(project),
      featureTargetChoices = feature_targets,
      featureWeightChoices = feature_weights,
      costWeightChoices = feature_weights,
      zoneColors = zone_colors[seq_along(project$zones)]
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
