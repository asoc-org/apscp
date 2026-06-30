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
#' @inheritParams new_layer
#'
#' @return A `Feature` object.
#'
#' @examples
#' # create object
#' x <- new_feature(
#'   name = "species 1",
#'   targets = c(0.1, 0.5),
#'   layer = new_layer(
#'     dataset = simulate_dataset(),
#'     index = "feat_1",
#'     legend = new_continuous_legend(
#'       c(0, 1), c("#000000", "#DDDDDD"),
#'       c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#'     ),
#'     units = "suitability",
#'     provenance =  new_provenance(
#'      name = "Global", icon = "globe", color = "#123456",
#'      description = "Data is global."
#'     ),
#'     total = 500,
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
      layer = layer,
      targets = targets
    ),
    class = "Feature"
  )
}
