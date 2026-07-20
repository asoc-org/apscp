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
#' @param targets `numeric` vector of initial targets for the feature.
#' Each value should correspond to a particular zone and denote
#' values should be specified as a proportion of the features total distribution
#' (e.g., a value of 0.1 corresponds to 10%).
#' Note that `zones` and `targets` must have the same number of values.
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
#'   targets = c(0.1, 0.5),
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
new_feature <- function(name, layer, targets, id = uuid::UUIDgenerate()) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## targets
    is.numeric(targets),
    assertthat::noNA(targets),
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
      targets = targets,
      layer = layer
    ),
    class = "Feature"
  )
}
