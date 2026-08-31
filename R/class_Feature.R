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
#' @param zone_targets `numeric` vector with initial target values for
#' representing the feature within each zone associated with the project.
#' These value should be specified
#' as a proportion of the features total distribution (e.g., a value of 0.1
#' corresponds to 10%) and the sum of these values should not exceed
#' a value of 1.
#'
#' @param zone_weights `numeric` vector with initial weight values
#' for achieving the targets for each zone associated with the project.
#' Each of these values should range
#' between 0 and 1. Note that the sum of these values does not
#' have any constraints (unlike `zone_targets`).
#'
#' @param zone_helds `numeric` vector with the proportion of each feature's
#' distribution held within planning units that are locked in.
#' Each of these values should range
#' between 0 and 1. Note that the sum of these values does not
#' have any constraints (unlike `zone_targets`).
#'
#' @param themes `list` of [new_theme()] objects indicating the themes
#' to which the feature belongs.
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
#'   zone_targets = c(0.1, 0.2, 0.3),
#'   zone_weights = c(0.5, 1, 0.7),
#'   zone_helds = c(0.2, 0.3, 0.1),
#'   themes = list(new_theme(zone = "Biodiversity", name = "Penguins")),
#'   layer = new_layer(
#'     column = "feat_1",
#'     total = 500,
#'     dataset = create_dataset_from_sf(sim_data),
#'     tile = create_tile_from_sf(sim_data),
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
new_feature <- function(
  name, layer, zone_targets, zone_weights, zone_helds, themes,
  id = uuid::UUIDgenerate()
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## zone_targets
    is.numeric(zone_targets),
    assertthat::noNA(zone_targets),
    all(zone_targets >= 0),
    all(zone_targets <= 1),
    sum(zone_targets) <= 1,
    ## zone_weights
    is.numeric(zone_weights),
    assertthat::noNA(zone_weights),
    identical(length(zone_targets), length(zone_weights)),
    all(zone_weights >= 0),
    all(zone_weights <= 1),
    ## zone_helds
    is.numeric(zone_helds),
    assertthat::noNA(zone_helds),
    identical(length(zone_helds), length(zone_helds)),
    all(zone_helds >= 0),
    all(zone_helds <= 1),
    ## themes
    is.list(themes),
    all_elements_inherit(themes, "Theme"),
    length(themes) > 0,
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
      zone_targets = zone_targets,
      zone_weights = zone_weights,
      zone_helds = zone_helds,
      themes = themes,
      layer = layer
    ),
    class = c("Feature", "ProjectComponent")
  )
}
