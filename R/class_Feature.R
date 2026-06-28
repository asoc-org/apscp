#' @include internal.R class_Layer.R
NULL

#' New feature
#'
#' Create a new feature object.
#'
#' @param name `character` value with the name of the feature.
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
#' # TODO
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
