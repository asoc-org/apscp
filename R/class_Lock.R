#' @include internal.R class_Layer.R
NULL

#' New lock
#'
#' Create a new lock object.
#'
#' @param name `character` value with the name of the feature.
#'
#' @param layer [new_layer()] object used to store information for
#' visualization.
#'
#' @inheritParams new_layer
#'
#' @return A `Cost` object.
#'
#' @examples
#' # TODO
#'
#' @export
new_lock <- function(name, layer, id = uuid::UUIDgenerate()) {
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
    class = "Lock"
  )
}
