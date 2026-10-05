#' @include internal.R class_Layer.R
NULL

#' New solution
#'
#' Create a new solution object.
#'
#' @inheritParams new_feature
#'
#' @inheritParams create_solution
#'
#' @return A `Solution` object.
#'
#' @family class
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # simulate settings
#' sim_settings = simulate_prioritization_settings(sim_project)
#'
#' # create object
#' x <- new_solution(
#'   name = "solution",
#'   layer = new_layer(
#'     column = "solution",
#'     total = 500,
#'     dataset = create_dataset_from_sf(sim_project$dataset$get_sf()),
#'     tile = create_tile_from_sf(sim_project$dataset$get_sf()),
#'     legend = simulate_solution_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   ),
#'   settings = simulate_prioritization_settings(sim_project),
#'   metrics = eval_prioritization(
#'     sim_project, sim_settings,
#'     sim_project$dataset$get_column_data("solution")
#'   )
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_solution <- function(
  name, layer, settings, metrics, id = uuid::UUIDgenerate()
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## layer
    inherits(layer, "Layer"),
    ## settings
    is.list(settings),
    ## metrics
    is.list(metrics),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # if needed, format metrics
  if (is.list(metrics)) {
    metrics <- lapply(metrics, function(x) {
      if (assertthat::has_name(x, "name")) {
        x$name <- as.list(x$name)
        x$id <- as.list(x$id)
        x$total <- as.list(x$total)
        x$units <- as.list(x$units)
      }
      x
    })
  }
  # return object
  structure(
    list(
      name = name,
      id = id,
      settings = settings,
      metrics = metrics,
      layer = layer
    ),
    class = c("Solution", "ProjectComponent")
  )
}
