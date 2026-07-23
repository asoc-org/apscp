#' @include internal.R class_Layer.R
NULL

#' New solution
#'
#' Create a new solution object.
#'
#' @inheritParams new_feature
#'
#' @return A `Solution` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_solution(
#'   name = "solution",
#'   layer = new_layer(
#'     column = "solution",
#'     total = 500,
#'     dataset = create_dataset(sim_data),
#'     tile = create_tile(sim_data),
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
new_solution <- function(name, layer, id = uuid::UUIDgenerate()) {
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
    list(name = name, id = id, layer = layer),
    class = "Solution"
  )
}


#' Create solution
#'
#' Create a [new_solution()] object.
#'
#' @param name `character` value with name.
#'
#' @param dataset [new_dataset() object that has a column with the solution.
#'
#' @param column `character` value with column name in `dataset` that
#' has the values.
#'
#' @param tile [new_tile()] object tile information for the solution.
#' Defaults to `NULL` such that a [new_tile()] object is automatically created.
#'
#' @param tileset [new_tileset()] object with information on creating
#' the `tile` object. Note that this is only used if `tile = NULL`.
#'
#' @inheritParams new_feature
#'
#' @inheritParams new_layer
#'
#' @inherit new_solution return
#'
#' @export
create_solution <- function(
  name, dataset, column, legend, provenance,
  tile = NULL, tileset = NULL, id = uuid::UUIDgenerate()
) {
  # assert valid arguments
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    ## dataset
    inherits(dataset, "Dataset"),
    ## column_name
    assertthat::is.string(column),
    dataset$has_column(column),
    ## legend
    inherits(legend, c("ContinuousLegend", "CategoricalLegend")),
    ## id
    assertthat::is.string(id)
  )

  # if needed, create tile
  if (is.null(tile)) {
    assertthat::assert_that(
      inherits(tileset, "Tileset"),
      msg = "`tileset` must be provided if `tile = NULL`."
    )
    tile <- create_tile(
      x = dataset$get_spatial_column_data(column),
      source_layer = "layer",
      path = tempfile(tmpdir = tileset$dir, fileext = ".pmtiles"),
      max_zoom = tileset$max_zoom,
      verbose = FALSE
    )
  }
  assertthat::assert_that(inherits(tile, "Tile"))

  # return new solution
  new_solution(
    name = name,
    id = id,
    layer = new_layer(
      dataset = dataset,
      column = column,
      total = dataset$get_column_total(column),
      legend = legend,
      provenance = provenance,
      tile = tile,
      visible = FALSE,
      details = NULL
    )
  )
}
