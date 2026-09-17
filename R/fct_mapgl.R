#' @include internal.R
NULL

#' Has Mapbox token?
#'
#' Determine if a Mapbox token is defined?
#'
#' @return A `logical` value.
#'
#' @examples
#' # see if a Mapbox token is defined?
#' has_mapbox_token()
#'
#' @family mapping
#'
#' @examples
#' # print if Mapbox token is available
#' has_mapbox_token()
#'
#' @export
has_mapbox_token <- function() {
  nzchar(Sys.getenv("MAPBOX_PUBLIC_TOKEN"))
}

#' Get \pkg{mapgl} layer identifier
#'
#' Get the layer identifier for an object.
#'
#' @param x [new_feature()], [new_cost()], [new_lock()], or [new_solution()]
#' object.
#'
#' @details
#' This corresponds to the `id` parameter of [mapgl::add_fill_layer()].
#'
#' @return A `character` value.
#'
#' @family mapping
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_cost(
#'   name = "cost",
#'   zone = "Science",
#'   weight = 0.1,
#'   layer = new_layer(
#'     column = "feat_1",
#'     total = 500,
#'     dataset = create_dataset_from_sf(sim_data),
#'     tile = create_tile_from_sf(sim_data),
#'     legend = simulate_continuous_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # get layer identifier
#' mapgl_layer_id(x)
#'
#' @export
mapgl_layer_id <- function(x) {
  assertthat::assert_that(inherits(x, "ProjectComponent"))
  paste0("lyr-", x$id)
}

#' Get \pkg{mapgl} source URL.
#'
#' @param x [new_tile()] object.
#'
#' @details
#' This corresponds to the `url` parameter of [mapgl::add_pmtiles_source()].
#'
#' @return A `character` value.
#'
#' @family mapping
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- create_tile_from_sf(sim_data)
#'
#' # get layer identifier
#' mapgl_source_url(x)
#'
#' @export
mapgl_source_url <- function(x) {
  # assert argument is valid
  assertthat::assert_that(
    inherits(x, "ProjectComponent") || inherits(x, "Tile")
  )
  # if needed, extract tile
  if (!inherits(x, "Tile")) {
    x <- x$layer$tile
  }
  paste0(
    get_golem_config("tile_server_url"), "/",
    sanitize_text(basename(x$path))
  )
}

#' Get \pkg{mapgl} source identifier
#'
#' Get the source identifier.
#'
#' @param x [new_tile()], [new_feature()], [new_cost()], [new_lock()], or
#' [new_solution()] object.
#'
#' @details
#' This corresponds to the `source` parameter of [mapgl::add_fill_layer()].
#'
#' @inherit mapgl_layer_id  return
#'
#' @family mapping
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- create_tile_from_sf(sim_data)
#'
#' # get source identifier
#' mapgl_source_id(x)
#'
#' @export
mapgl_source_id <- function(x) {
  # assert argument is valid
  assertthat::assert_that(
    inherits(x, "ProjectComponent") || inherits(x, "Tile")
  )
  # if needed, extract tile
  if (!inherits(x, "Tile")) {
    x <- x$layer$tile
  }
  # return value
  paste0("src-", sanitize_text(basename(x$path)))
}

#' Get \pkg{mapgl} source layer identifier
#'
#' Get the source layer identifier.
#'
#' @inheritParams mapgl_source_id
#'
#' @details
#' This corresponds to the `source_layer` parameter of
#' [mapgl::add_fill_layer()].
#'
#' @inherit mapgl_layer_id  return
#'
#' @family mapping
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_cost(
#'   name = "cost",
#'   zone = "Science",
#'   weight = 0.1,
#'   layer = new_layer(
#'     column = "feat_1",
#'     total = 500,
#'     dataset = create_dataset_from_sf(sim_data),
#'     tile = create_tile_from_sf(sim_data),
#'     legend = simulate_continuous_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # get layer identifier
#' mapgl_source_layer_id(x)
#'
#' @export
mapgl_source_layer_id <- function(x) {
  # assert argument is valid
  assertthat::assert_that(
    inherits(x, "ProjectComponent") || inherits(x, "Tile")
  )
  # if needed, extract tile
  if (!inherits(x, "Tile")) {
    x <- x$layer$tile
  }
  # return value
  x$source_layer
}

#' Add source
#'
#' Add a [new_tile()] object as a layer to a \pkg{mapgl} object.
#'
#' @inheritParams mapgl_source_id
#' @inheritParams mapgl::add_pmtiles_source
#'
#' @details
#' Sources are added with [mapgl::add_pmtiles_source()].
#'
#' @family mapping
#'
#' @examplesIf interactive()
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create objects
#' dataset <- create_dataset_from_sf(sim_data)
#' tile <- create_tile_from_sf(sim_data)
#' cost <- new_cost(
#'   name = "cost",
#'   zone = "Science",
#'   weight = 0.1,
#'   layer = new_layer(
#'     column = "feat_1",
#'     total = 500,
#'     dataset = dataset,
#'     tile = tile,
#'     legend = simulate_continuous_legend(),
#'     provenance = simulate_provenance(),
#'     details = "extra info"
#'   )
#' )
#'
#' # create mapbox map
#' map <- mapgl::mapboxgl()
#'
#' # add source for tile object
#' map <- mapgl_add_source(map, tile)
#'
#' # add layer for cost object
#' map <- mapgl_add_layer(map, cost)
#'
#' # clear layer for cost object
#' map <- mapgl_clear_layer(map, cost)
#'
#' # display map
#' \dontrun{
#' print(map)
#' }
#' @export
mapgl_add_source <- function(map, x) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(map, c("mapboxgl", "mapboxgl_proxy")),
    inherits(x, "Tile")
  )
  # return updated map
  mapgl::add_pmtiles_source(
    map,
    id = mapgl_source_id(x),
    url = mapgl_source_url(x)
  )
}

#' Add layer
#'
#' Add object as a layer to a \pkg{mapgl} object.
#'
#' @inheritParams mapgl_add_source
#'
#' @inheritParams mapgl::add_fill_layer
#'
#' @details
#' Layers are added with [mapgl::add_fill_layer()].
#'
#' @inherit mapgl_add_source examples
#'
#' @family mapping
#'
#' @export
mapgl_add_layer <- function(
  map,
  x,
  visibility = "visible",
  before_id = NULL
) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(map, c("mapboxgl", "mapboxgl_proxy")),
    inherits(x, c("Feature", "Cost", "Lock", "Solution")),
    assertthat::is.string(visibility),
    assertthat::noNA(visibility),
    inherits(x$layer$legend, "Legend")
  )

  # prepare legend
  if (inherits(x$layer$legend, "ContinuousLegend")) {
    paint_params <- list(
      fill_color = mapgl::interpolate(
        column = x$layer$column,
        type = "linear",
        values = x$layer$legend$values,
        stops = x$layer$legend$colors,
        na_color = "transparent"
      ),
      fill_opacity = 0.8
    )
  } else if(inherits(x$layer$legend, "CategoricalLegend")) {
    paint_params <- list(
      fill_color = mapgl::step_expr(
        column = x$layer$column,
        base = "#B2BEB5",
        values = x$layer$legend$values,
        stops = x$layer$legend$colors,
        na_color = "transparent"
      ),
      fill_opacity = 0.8
    )
  } else {
    stop("`x$layer$legend` is not a valid legend.") # nocov
  }

  # return updated map with layer
  do.call(
    mapgl::add_fill_layer,
    append(
      list(
        map = map,
        id = mapgl_layer_id(x),
        source = mapgl_source_id(x),
        source_layer = mapgl_source_layer_id(x),
        visibility = visibility,
        before_id = before_id
      ),
      paint_params
    )
  )
}

#' Clear layer
#'
#' Clear an object as a layer from a \pkg{mapgl} object.
#'
#' @inheritParams mapgl_add_source
#'
#' @details
#' Layers are cleared with [mapgl::clear_layer()].
#'
#' @inherit mapgl_add_source examples
#'
#' @family mapping
#'
#' @export
mapgl_clear_layer <- function(map, x) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(map, c("mapboxgl", "mapboxgl_proxy")),
    inherits(x, c("Feature", "Cost", "Lock", "Solution"))
  )

  # return updated map
  mapgl::clear_layer(map, mapgl_layer_id(x))
}
