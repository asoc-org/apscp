#' @include internal.R class_Layer.R
NULL

#' New cost
#'
#' Create a new cost object.
#'
#' @inheritParams new_feature
#'
#' @param zones_active `logical` vector of values indicating which zones
#' the cost should be used to avoid allocating planning units.
#' Note `zones_active` must have a value for each zone in the [new_project()]
#' to which this object belongs.
#'
#' @return A `Cost` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_cost(
#'   name = "cost",
#'   zones_active = c(TRUE, FALSE),
#'   layer = new_layer(
#'     column = "feat_1",
#'     total = 500,
#'     dataset = create_dataset(sim_data),
#'     tile = create_tile(sim_data),
#'     legend = simulate_continuous_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_cost <- function(name, layer, zones_active, id = uuid::UUIDgenerate()) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## layer
    inherits(layer, "Layer"),
    ## zones_active
    is.logical(zones_active),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # return object
  structure(
    list(name = name, layer = layer, zones_active = zones_active, id = id),
    class = c("Cost", "ProjectComponent")
  )
}
