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
#' # simulate spatial data
#' sim_project <- simulate_project()
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
#'   metrics = simulate_prioritization_metrics(sim_project)
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
