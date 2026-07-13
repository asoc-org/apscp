#' @include internal.R
NULL

#' New theme
#'
#' Create a new theme object.
#'
#' @param name `character` value with name.
#'
#' @param features [new_feature()] object or `list` of such objects.
#'
#' @return A `Theme` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # prepare data
#' dataset <- create_dataset(sim_data)
#' tile <- create_tile(sim_data)
#'
#' # create object
#' x <- new_theme(
#'   "species",
#'   list(
#'     new_feature(
#'       name = "f1",
#'       targets = c(0.1, 0.5),
#'       layer = new_layer(
#'         column = "feat_1",
#'         total = 500,
#'         dataset = dataset,
#'         tile = tile,
#'         legend = simulate_continuous_legend(),
#'         provenance = simulate_provenance(),
#'         details = "extra info"
#'       )
#'     ),
#'     new_feature(
#'       name = "f2",
#'       targets = c(0.2, 0.9),
#'       layer = new_layer(
#'         column = "feat_2",
#'         total = 500,
#'         dataset = dataset,
#'         tile = tile,
#'         legend = simulate_continuous_legend(),
#'         provenance = simulate_provenance(),
#'         details = "extra info 2"
#'       )
#'     )
#'   )
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_theme <- function(name, features) {
  # if needed, put feature in a list if needed
  if (inherits(features, "Feature")) {
    features <- list(features)
  }

  # assert that arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## feature
    is.list(features),
    all_elements_inherit(features, "Feature")
  )

  # return new theme
  structure(
    list(name = name, features = features),
    class = "Theme"
  )
}
