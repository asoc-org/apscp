#' @include internal.R class_Layer.R
NULL

#' New feature
#'
#' Create a new feature object.
#'
#' @param name `character` value with the name.
#'
#' @param layer [new_layer()] object used to store information for
#' visualization.
#'
#' @param target `numeric` value with initial target for the feature.
#' This value should be specified as a proportion of the features total
#' distribution (e.g., a value of 0.1 corresponds to 10%).
#' Note that the zone associated with this target is specified based on
#' the [new_theme()] to which this feature belongs.
#'
#' @param id `character` value with unique identifier.
#' Defaults to a random identifier ([uuid::UUIDgenerate()]).
#'
#' @return A `Feature` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_feature(
#'   name = "species 1",
#'   target = 0.1,
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
new_feature <- function(name, layer, target, id = uuid::UUIDgenerate()) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## target
    assertthat::is.number(target),
    assertthat::noNA(target),
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
      id = id,
      target = target,
      layer = layer
    ),
    class = c("Feature", "ProjectComponent")
  )
}
