#' @include internal.R class_Layer.R
NULL

#' New product
#'
#' Create a new product object.
#'
#' @inheritParams new_feature
#'
#' @return A `Product` object.
#'
#' @family class
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # create object
#' x <- new_product(
#'   name = "prod",
#'   layer = new_layer(
#'     column = "solution",
#'     total = 500,
#'     dataset = sim_project$dataset,
#'     tile = sim_project$tiles[[1]],
#'     legend = simulate_solution_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_product <- function(name, layer, id = uuid::UUIDgenerate()) {
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
    list(
      name = name,
      id = id,
      layer = layer
    ),
    class = c("Product", "ProjectComponent")
  )
}
