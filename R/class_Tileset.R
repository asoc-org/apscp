#' @include internal.R
NULL

#' New tileset
#'
#' Create a new tile object to store information for multiple PMTiles archive
#' file.
#'
#' @param tiles `list` of [new_tile()] objects.
#'
#' @param dir `character` directory path for tiles.
#'
#' @param max_zoom `integer` maximum zoom level for tiles.
#'
#' @return A `Tileset` object.
#'
#' @examples
#' # create tile objects
#' t1 <- new_tile(source = "data-src", file = "t1.pmtiles", max_zoom = 5)
#' t2 <- new_tile(source = "data-src", file = "t2.pmtiles", max_zoom = 3)
#'
#' # create tileset
#' x <- new_tileset(tiles = list(t1, t2), dir = tempdir(), max_zoom = 3)
#'
#' # print object
#' print(x)
#'
#' @export
new_tileset <- function(tiles, dir, max_zoom) {
  # assert arguments are valid
  assertthat::assert_that(
    ## tiles
    is.list(tiles),
    all_elements_inherit(tiles, "Tile"),
    ## dir
    assertthat::is.string(dir),
    assertthat::noNA(dir),
    dir.exists(dir),
    ## max_zoom
    assertthat::is.number(max_zoom),
    assertthat::noNA(max_zoom)
  )
  # return object
  structure(
    list(
      tiles = tiles,
      dir = dir,
      max_zoom = max_zoom
    ),
    class = "Tileset"
  )
}

#' Create tileset
#'
#' Create a [new_tileset()] object from a [sf::st_sf()] object.
#'
#' @inheritParams create_tile
#'
#' @param dir `character` value with directory path for PMTiles archive.
#' Defaults to a temporary folder..
#'
#' @return A [new_tileset()] object.
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create tileset from spatial data
#' x <- create_tileset(sim_data)
#'
#' # preview object
#' print(x)
#'
#' @export
create_tileset <- function(
    x,
    source_layer = "layer",
    dir = tempdir(),
    max_zoom = 8,
    verbose = TRUE
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    inherits(x, "sf"),
    ## dir
    assertthat::is.string(dir),
    assertthat::noNA(dir),
    dir.exists(dir)
  )
  # create tile
  tile <- create_tile(
    x = x,
    source_layer = source_layer,
    path = tempfile(tmpdir = dir, fileext = ".pmtiles"),
    max_zoom = max_zoom,
    verbose = verbose
  )
  # return object
  new_tileset(
     tiles = list(tile),
     dir = dir,
     max_zoom = max_zoom
  )
}
