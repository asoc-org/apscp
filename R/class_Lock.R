#' @include internal.R class_Layer.R
NULL

#' New lock
#'
#' Create a new lock object.
#'
#' @inheritParams new_feature
#'
#' @param zone `character` name of zone to which this lock pertains.
#' During optimization, planning units are forcibly allocated to this zone.
#' Note that `zone` must have a value that corresponds to one of the zone
#' names associated with the [new_project()] to which this object belongs.
#'
#' @return A `Lock` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_lock(
#'   name = "lock",
#'   zone = "scientific",
#'   layer = new_layer(
#'     column = "locked_in",
#'     total = 500,
#'     dataset = create_dataset_from_sf(sim_data),
#'     tile = create_tile_from_sf(sim_data),
#'     legend = simulate_binary_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_lock <- function(name, layer, zone, id = uuid::UUIDgenerate()) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## zone
    assertthat::is.string(zone),
    assertthat::noNA(zone),
    ## layer
    inherits(layer, "Layer"),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # return object
  structure(
    list(
      name = name,
      zone = zone,
      id = id,
      layer = layer
    ),
    class = c("Lock", "ProjectComponent")
  )
}
