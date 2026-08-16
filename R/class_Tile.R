#' @include internal.R
NULL

#' New tile
#'
#' Create a new tile object to store information for rendering a layer from
#' a PMTiles archive file.
#'
#' @param source_layer `character` value with name of layer source in the
#' archive file.
#'
#' @param path `character` value with file path for the archive file.
#' Note that `file` must have a `".pmtiles"` file extension.
#'
#' @param max_zoom `integer` maximum zoom level for the archive.
#'
#' @return A `Tile` object.
#'
#' @family class
#'
#' @examples
#' # create dummy file
#' path <- tempfile(fileext = ".pmtiles")
#' writeLines("dummy", path)
#'
#' # create object
#' x <- new_tile(source = "data-src", path = path, max_zoom = 5)
#'
#' # print object
#' print(x)
#'
#' @export
new_tile <- function(source_layer, path, max_zoom) {
  # assert arguments are valid
  assertthat::assert_that(
    ## source
    assertthat::is.string(source_layer),
    assertthat::noNA(source_layer),
    ## path
    assertthat::is.string(path),
    assertthat::noNA(path),
    endsWith(path, ".pmtiles"),
    file.exists(path),
    ## max_zoom
    assertthat::is.number(max_zoom),
    assertthat::noNA(max_zoom)
  )
  # return object
  structure(
    list(
      source_layer = source_layer,
      path = path,
      max_zoom = max_zoom
    ),
    class = "Tile"
  )
}
