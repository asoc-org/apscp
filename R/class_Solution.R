#' @include internal.R class_Layer.R
NULL

#' New solution
#'
#' Create a new solution object.
#'
#' @param name `character` value with the name of the solution.
#'
#' @param layer [new_layer()] object used to store information for
#' visualization.
#'
#' @inheritParams new_layer
#'
#' @return A `Solution` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_solution(
#'   name = "solution",
#'   layer = new_layer(
#'     column = "solution",
#'     total = 500,
#'     dataset = create_dataset(sim_data),
#'     tile = create_tile(sim_data),
#'     legend = simulate_solution_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_solution <- function(name, layer, id = uuid::UUIDgenerate()) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## layer
    inherits(layer, "Layer"),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # return object
  structure(
    list(name = name, layer = layer),
    class = "Solution"
  )
}
