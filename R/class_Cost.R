#' @include internal.R class_Layer.R
NULL

#' New cost
#'
#' Create a new cost object.
#'
#' @inheritParams new_feature
#'
#' @param weight `numeric` value denoting the relative importance of the
#' cost.
#'
#' @param zone `character` name of zone to which this cost pertains.
#' During optimization, planning units that are not allocated to this zone
#' accrue a penalty based on these cost data.
#' Note that `zone` must have a value that corresponds to one of the zone
#' names associated with the [new_project()] to which this object belongs.
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
#'   weight = 0.3,
#'   zone = "tourism",
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
new_cost <- function(name, layer, zone, weight, id = uuid::UUIDgenerate()) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## layer
    inherits(layer, "Layer"),
    ## weight
    assertthat::is.number(weight),
    assertthat::noNA(weight),
    ## zone
    assertthat::is.string(zone),
    assertthat::noNA(zone),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # return object
  structure(
    list(name = name, zone = zone, weight = weight, layer = layer, id = id),
    class = c("Cost", "ProjectComponent")
  )
}
