#' @include internal.R
NULL

#' Create tile
#'
#' Create a [new_tile()] object from a [sf::st_sf()] object.
#'
#' @param x [sf::st_sf()] object.
#'
#' @param source_layer `character` value with name for layer in PMTiles archive.
#' Defaults to `"data-src"`.
#'
#' @param path `character` value with file path for PMTiles archive.
#' Note that `path` must have a `".pmtiles"` file extension.
#' Defaults to a temporary file path.
#'
#' @param max_zoom `integer` value with maximum zoom level. Defaults to 8.
#'
#' @param verbose `logical` value indicating if information about tile
#' creation should be displayed? Defaults to `FALSE`.
#'
#' @return A [new_tile()] object.
#'
#' @family method
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create tile from spatial data
#' x <- create_tile(sim_data)
#'
#' # preview object
#' print(x)
#'
#' @export
create_tile <- function(
  x,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  verbose = FALSE
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    inherits(x, "sf"),
    ## source_layer
    assertthat::is.string(source_layer),
    assertthat::noNA(source_layer),
    ## path
    assertthat::is.string(path),
    assertthat::noNA(path),
    endsWith(path, ".pmtiles"),
    ## max_zoom
    assertthat::is.number(max_zoom),
    assertthat::noNA(max_zoom),
    ## verbose
    assertthat::is.flag(verbose),
    assertthat::noNA(verbose)
  )
  # generate tiles
  freestiler::freestile(
    x,
    path,
    max_zoom = max_zoom,
    layer_name = source_layer,
    overwrite = TRUE,
    quiet = !verbose
  )
  # return object
  new_tile(
    path = path,
    source_layer = source_layer,
    max_zoom = max_zoom
  )
}
