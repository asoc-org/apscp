#' @include internal.R
NULL

#' Create product
#'
#' Create a [new_product()] to summarize spatial patterns across two or more
#' prioritizations.
#'
#' @inheritParams create_solution
#'
#' @param values `numeric` vector of values.
#'
#' @inherit new_solution return
#'
#' @family method
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # simulate values for product
#' v <- round(runif(sim_project$dataset$get_n_pu()), 3)
#'
#' # create object
#' x <- create_product(
#'   name = "prod",
#'   values = v,
#'   project = sim_project,
#'   legend = simulate_solution_legend(),
#'   provenance = simulate_provenance()
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
create_product <- function(
  name, project, values, legend, provenance, column = NULL, tile = NULL,
  id = uuid::UUIDgenerate()
) {
  # assert valid arguments
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    ## project
    inherits(project, "Project"),
    ## values
    is.numeric(values),
    identical(length(values), project$dataset$get_n_pu()),
    ## legend
    inherits(legend, "Legend"),
    ## provenance
    inherits(provenance, "Provenance"),
    ## id
    assertthat::is.string(id)
  )

  # process column name
  if (is.null(column)) {
    # add column to dataset
    column <- make_unique_column_name(
      paste0("prod-", uuid::UUIDgenerate()),
      project$dataset$get_pu_columns()
    )
    project$dataset$set_pu_column_data(column, values)
  } else {
    assertthat::assert_that(
      assertthat::is.string(column),
      assertthat::noNA(column)
    )
    assertthat::assert_that(
      !project$dataset$has_pu_column(column),
      msg = "`project$dataset` already has a column with this column name."
    )
  }

  # if needed, create tile
  if (is.null(tile)) {
    tile <- create_tile_from_project(
      x = project,
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

  # return new product
  new_product(
    name = name,
    id = id,
    layer = new_layer(
      dataset = project$dataset,
      column = column,
      total = project$dataset$get_pu_column_total(column),
      legend = legend,
      provenance = provenance,
      tile = tile,
      hidden = FALSE,
      visible = FALSE,
      details = NULL
    )
  )
}
