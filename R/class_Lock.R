#' @include internal.R class_Layer.R
NULL

#' New lock
#'
#' Create a new lock object.
#'
#' @param name `character` value with the name.
#'
#' @param layer [new_layer()] object used to store information for
#' visualization.
#'
#' @inheritParams new_layer
#'
#' @return A `Lock` object.
#'
#' @examples
#' # create object
#' x <- new_lock(
#'   name = "lock",
#'   layer = new_layer(
#'     dataset = simulate_dataset(),
#'     index = "locked_in",
#'     legend = new_categorical_legend(
#'       c(0, 1), c("#000000", "#DDDDDD"),
#'       c("Other", "Protected area")
#'     ),
#'     units = "presence/absence",
#'     provenance = new_provenance(
#'       name = "Global", icon = "globe", color = "#123456",
#'       description = "Data is global."
#'     ),
#'     total = 500,
#'     details = "extra info"
#' )
#'
#' # preview object
#' print(x)
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
