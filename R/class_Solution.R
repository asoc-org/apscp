#' @include internal.R class_Layer.R
NULL

#' New solution
#'
#' Create a new solution object.
#'
#' @param name `character` value with the name of the solution.
#'
#' @param layer [new_layer()] object used to store information for
#' visualization.
#'
#' @inheritParams new_layer
#'
#' @return A `Solution` object.
#'
#' @examples
#' # create object
#' x <- new_solution(
#'   name = "solution",
#'   layer = new_layer(
#'     dataset = simulate_dataset(),
#'     index = "solution",
#'     legend = new_categorical_legend(
#'       c(1, 2, 3), c("#000000", "#DDDDDD", "#AAAAAA"),
#'       c("Conservation", "Tourism", "Science")
#'     ),
#'     units = "categorical",
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
new_solution <- function(name, layer, id = uuid::UUIDgenerate()) {
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
    class = "Solution"
  )
}
