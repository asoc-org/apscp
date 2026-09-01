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

#' Create solution from prioritization
#'
#' Create a new solution based on spatial prioritization.
#'
#' @inheritParams new_solution
#'
#' @param project [new_project()] object to which `prioritization `should be
#' added.
#'
#' @param column `character` value with column name used to store
#' `prioritization` in the dataset that underpins `project`.
#'
#' @param prioritization `list` object generated with [prioritization()].
#'
#' @return A [new_solution()] object.
#'
#' @family method
#'
#' @examples
#' # simulate data
#' p <- simulate_project()
#' s <- simulate_prioritization_settings(p)
#' d <- prioritization(p, s, solver = "cbc", gap = 0.1)
#'
#' # generate solution
#' x <- create_solution_from_prioritization(
#'   name = "sol",
#'   prioritization = d,
#'   project = p
#' )
#'
#' # print solution
#' print(x)
#'
#' @export
create_solution_from_prioritization <- function(
  name,
  prioritization,
  project,
  column = NULL,
  id = uuid::UUIDgenerate()
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id),
    ## prioritization
    inherits(prioritization, "Prioritization")
  )

  # process column name
  if (is.null(column)) {
    # add solution to dataset
    column <- make_unique_column_name(
      paste0("sol-", uuid::UUIDgenerate()),
      project$dataset$get_column_names()
    )
  } else {
    assertthat::assert_that(
      assertthat::is.string(column),
      assertthat::noNA(column)
    )
    assertthat::assert_that(
      !project$dataset$has_column(column),
      msg = "`project$dataset` already has a column with this column name."
    )
  }

  # store column in dataset
  project$dataset$set_column_data(column, prioritization$status)

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
      total = sum(prioritization$status > 0, na.rm = TRUE),
      details = NULL
    ),
    id = id
  )
}
