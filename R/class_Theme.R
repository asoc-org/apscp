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
#' # TODO
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
    list(name = name, feature = features),
    class = "Theme"
  )
}
