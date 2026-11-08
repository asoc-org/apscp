#' @include internal.R
NULL

#' Create tile from `sf` data.
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
#' x <- create_tile_from_sf(sim_data)
#'
#' # preview object
#' print(x)
#'
#' @export
create_tile_from_sf <- function(
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
  # if needed, create directory to store pmtiles
  dir.create(dirname(path), showWarnings = FALSE, recursive = TRUE)
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

#' Create tile from project.
#'
#' Create a [new_tile()] object from a [new_project() object.
#'
#' @inheritParams create_tile_from_sf
#'
#' @param x [new_project()] object.
#'
#' @param column `character` value with column name for data.
#'
#' @param type `character value indicating if the underlying data is obtained
#' from the attribute table or the solution table. Available options include
#' `"attribute"` or `"solution"`.
#'
#' @param engine `character` value denoting the engine for processing the
#' the tiles. Available options include `"r"` or `"rust"`.
#' Defaults to `get_golem_config("tile_engine")`.
#'
#' @inherit create_tile_from_sf return
#'
#' @family method
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # create tile
#' x <- create_tile_from_project(
#'   sim_project,
#'   column = "solution",
#'   type = "solution"
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
create_tile_from_project <- function(
  x,
  column,
  type,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  engine = get_golem_config("tile_engine"),
  verbose = FALSE
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    inherits(x, "Project"),
    ## column
    assertthat::is.string(column),
    assertthat::noNA(column),
    ## type
    assertthat::is.string(type),
    assertthat::noNA(type),
    is_match_of(type, c("attribute", "solution")),
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
    ## engine
    assertthat::is.string(engine),
    assertthat::noNA(engine),
    engine %in% c("r", "rust"),
    ## verbose
    assertthat::is.flag(verbose),
    assertthat::noNA(verbose)
  )
  # create tiles
  if (identical(engine, "r")) {
    if (identical(type, "attribute")) {
      d <- x$dataset$get_attribute_sf(column)
    } else {
      d <- x$dataset$get_solution_sf(column)
    }
    out <- create_tile_from_sf(
      x = d,
      path = path,
      source_layer = source_layer,
      max_zoom = max_zoom,
      verbose = verbose
    )
  } else {
    assertthat::assert_that(
      isTRUE(sf::st_is_longlat(sf::st_crs(x$bbox))),
      msg = "Project `x` must have 4326 coordinate system."
    )
    out <- create_tile_from_file(
      x = x$dataset$pu_path,
      column = column,
      type = type,
      path = path,
      source_layer = source_layer,
      max_zoom = max_zoom,
      verbose = verbose
    )
  }
  # return result
  out
}

#' Create tile from file
#'
#' Create a [new_tile()] object from a file.
#'
#' @param x `character` value denoting the file path.
#'
#' @inheritParams create_tile_from_project
#'
#' @inherit create_tile_from_sf return
#'
#' @family method
#'
#' @examplesIf FALSE
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # project data to EPSG:4326
#' sim_data <- sf::st_transform(sim_data, 4326)
#'
#' # save data to disk
#' path <- tempfile(fileext = ".gpkg")
#'
#' # create tile
#' x <- create_tile_from_file(
#'   path,
#'   column = "solution",
#'   type = "solution"
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
create_tile_from_file <- function(
  x,
  column,
  type,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  verbose = FALSE
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    assertthat::is.string(x),
    assertthat::noNA(x),
    ## column
    assertthat::is.string(column),
    assertthat::noNA(column),
    ## type
    assertthat::is.string(type),
    assertthat::noNA(type),
    is_match_of(type, c("attribute", "solution")),
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
  # create tiles
  if (identical(type, "attribute")) {
    withr::with_options(
      list(freestiler.duckdb_backend = "rust"), {
      freestiler::freestile_query(
        query = paste0(
          "SELECT \"", column, "\",\"GEOM\" FROM ST_Read(\"", x, "\")"
        ),
        output = path,
        layer_name = source_layer,
        max_zoom = max_zoom,
        quiet = !verbose
      )
    })
  } else {
    withr::with_options(
      list(freestiler.duckdb_backend = "rust"), {
      freestiler::freestile_query(
        query = paste0(
          "SELECT \"j\".\"", column, "\",\"x\".\"GEOM\" FROM ",
          "sqlite_scan(\"", x, "\", ",
          "\"", tools::file_path_sans_ext(basename(x)), "_solutions\") as j ",
          "JOIN ST_Read(\"", x, "\") as x ",
          "ON \"j\".\"_index\" = \"x\".\"_index\" ",
          "WHERE \"solution\" = '", column, "'"
        ),
        output = path,
        layer_name = source_layer,
        max_zoom = max_zoom,
        quiet = !verbose
      )
    })
  }
  # verify tile generation worked
  assertthat::assert_that(
    file.exists(path),
    msg = "Failed to generate tiles!"
  )
  # return object
  new_tile(
    path = path,
    source_layer = source_layer,
    max_zoom = max_zoom
  )
}
