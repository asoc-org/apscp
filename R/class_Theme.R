#' @include internal.R
NULL

#' New theme
#'
#' Create a new theme object.
#'
#' @param name `character` value with name.
#'
#' @param zone `character` name of zone associated with the theme.
#' Note that `zone` should match one of the zone names associated with
#' the [new_project()] to which this theme belongs.
#'
#' @return A `Theme` object.
#'
#' @family class
#'
#' @examples
#' # crate a theme
#' x <- new_theme(name = "Penguins", zone = "Biodiversity")
#'
#' # preview object
#' print(x)
#'
#' @export
new_theme <- function(name, zone) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## zone
    assertthat::is.string(zone),
    assertthat::noNA(zone)
  )

  # return new theme
  structure(
    list(name = name, zone = zone),
    class = "Theme"
  )
}
