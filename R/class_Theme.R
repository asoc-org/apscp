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
#' @examples
#' # create dataset
#' dataset <- simulate_dataset()
#'
#' # create object
#' x <- new_theme(
#'   "species",
#'   list(
#'     new_feature(
#'       name = "f1",
#'       targets = c(0.1, 0.5),
#'       layer = new_layer(
#'         dataset = dataset,
#'         index = "feat_1",
#'         legend = new_continuous_legend(
#'           c(0, 1), c("#000000", "#DDDDDD"),
#'           c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#'         ),
#'         units = "suitability",
#'         provenance = new_provenance(
#'          name = "Global", icon = "globe", color = "#123456",
#'          description = "Data is global."
#'         ),
#'         total = 500,
#'         details = "extra info"
#'       )
#'     ),
#'     new_feature(
#'       name = "f2",
#'       targets = c(0.2, 0.9),
#'       layer = new_layer(
#'         dataset = dataset,
#'         index = "feat_2",
#'         legend = new_continuous_legend(
#'           c(0, 1), c("#000000", "#AAAAAA"),
#'           c(0.2, 0.5, 0.8), c("20%", "50%", "80%")
#'         ),
#'         units = "abundance",
#'         provenance = new_provenance(
#'          name = "Global", icon = "globe", color = "#123456",
#'          description = "Data is global."
#'         ),
#'         total = 600,
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
