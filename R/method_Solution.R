#' @include internal.R fct_prioritization.R
NULL

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
#' @inheritParams new_feature
#'
#' @inheritParams new_layer
#'
#' @inherit new_solution return
#'
#' @family method
#'
#' @examples
#' # create data
#' d <- simulate_spatial_data()
#'
#' # create solution
#' x <- new_solution(
#'   name = "solution",
#'   layer = new_layer(
#'     dataset = create_dataset_from_sf(d),
#'     tile = create_tile_from_sf(d, verbose = FALSE),
#'     column = "solution",
#'     legend = simulate_solution_legend(),
#'     provenance = simulate_provenance(),
#'     total = 500,
#'     details = "extra info"
#'   )
#' )
#'
#' @export
create_solution <- function(
  name, dataset, column, legend, provenance,
  tile = NULL, id = uuid::UUIDgenerate()
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
    inherits(legend, "Legend"),
    ## id
    assertthat::is.string(id)
  )

  # if needed, create tile
  if (is.null(tile)) {
    tile <- create_tile_from_dataset(
      x = dataset,
      column = column,
      source_layer = "layer",
      path = tempfile(
        tmpdir = get_golem_config("tile_server_dir"),
        fileext = ".pmtiles"
      ),
      max_zoom = get_golem_config("tile_max_zoom"),
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

#' Create optimized solution
#'
#' Create a new solution based on spatial prioritization techniques.
#'
#' @inheritParams new_solution
#' @inheritParams prioritization
#'
#' @return A [new_solution()] object.
#'
#' @family method
#'
#' @examples
#' # simulate data
#' p <- simulate_project()
#' s <- simulate_prioritization_settings(p)
#'
#' # generate solution
#' x <- prioritization(p, s, solver = "cbc", gap = 0.1)
#'
#' # print solution
#' print(x)
#'
#' @export
create_optimized_solution <- function(
  name,
  project,
  settings,
  gap = 0.1,
  solver = "cbc",
  verbose = FALSE,
  id = uuid::UUIDgenerate()
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )

  # generate prioritization
  sol <- prioritization(
    project = project,
    settings = settings,
    gap = gap,
    solver = solver,
    verbose = verbose
  )

  # add solution to dataset
  column <- make_unique_column_name(name, project$dataset$get_column_names())
  project$dataset$set_column_data(column, sol$solution)

  # return new solution object
  new_solution(
    name = name,
    layer = new_layer(
      dataset = project$dataset,
      tile = create_tile_from_dataset(
        x = project$dataset,
        column = column,
        path = tempfile(
          tmpdir = get_golem_config("tile_server_dir"),
          fileext = ".pmtiles"
        ),
        verbose = FALSE
      ),
      column = column,
      legend = create_solution_legend(project),
      provenance = tool_generated_provenance(),
      total = sum(sol$solution),
      details = NULL
    ),
    id = id
  )
}
