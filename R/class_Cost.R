#' @include internal.R class_Layer.R
NULL

#' New cost
#'
#' Create a new cost object.
#'
#' @param name `character` value with the name.
#'
#' @param layer [new_layer()] object used to store information for
#' visualization.
#'
#' @inheritParams new_layer
#'
#' @return A `Cost` object.
#'
#' @examples
#' # create object
#' x <- new_cost(
#'   name = "cost",
#'   layer = new_layer(
#'     dataset = simulate_dataset(),
#'     index = "feat_1",
#'     legend = new_continuous_legend(
#'       c(0, 1), c("#000000", "#DDDDDD"),
#'       c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#'     ),
#'     units = "USD",
#'     provenance = new_provenance(
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
new_cost <- function(name, layer, id = uuid::UUIDgenerate()) {
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
    class = "Cost"
  )
}
