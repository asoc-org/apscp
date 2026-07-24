#' @include internal.R class_Layer.R
NULL

#' New lock
#'
#' Create a new lock object.
#'
#' @inheritParams new_feature
#'
#' @param zones_in `logical` vector of values indicating which zones
#' the lock should be used to lock in planning units.
#' Note `zones_in` must have a value for each zone in the [new_project()]
#' to which this object belongs.
#'
#' @param zones_out `logical` vector of values indicating which zones
#' the lock should be used to lock out planning units.
#' Note `zones_out` must have a value for each zone in the [new_project()]
#' to which this object belongs.
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
#'   zones_in = c(FALSE, TRUE),
#'   zones_out = c(FALSE, FALSE),
#'   layer = new_layer(
#'     column = "locked_in",
#'     total = 500,
#'     dataset = create_dataset(sim_data),
#'     tile = create_tile(sim_data),
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
new_lock <- function(
  name, layer, zones_in, zones_out,
  id = uuid::UUIDgenerate()
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## in
    is.logical(zones_in),
    ## out
    is.logical(zones_out),
    identical(length(zones_in), length(zones_out)),
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
      zones_in = zones_in,
      zones_out = zones_out,
      id = id,
      layer = layer
    ),
    class = c("Lock", "ProjectComponent")
  )
}
