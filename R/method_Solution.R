#' @include internal.R fct_solve_prioritization.R
NULL

#' Create solution
#'
#' Create a [new_solution()] object.
#'
#' @param name `character` value with name.
#'
#' @param project [new_project()] object that has a column with the solution.
#'
#' @param column `character` value with column name in `project$dataset` that
#' has the values.
#'
#' @param tile [new_tile()] object tile information for the solution.
#' Defaults to `NULL` such that a [new_tile()] object is automatically created.
#'
#' @param settings `list` of settings used to generate the solution.
#'
#' @param metrics `list` with evaluation metrics for the solution.
#' Defaults to `NULL` such that metrics are calculated automatically.
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
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # create solution
#' x <- create_solution(
#'   name = "user solution",
#'   project = sim_project,
#'   column = "solution",
#'   legend = simulate_solution_legend(),
#'   provenance = simulate_provenance(),
#'   settings = simulate_prioritization_settings(sim_project)
#' )
#'
#' # print solution
#' print(x)
#'
#' @export
create_solution <- function(
  name, project, column, legend, provenance, settings,
  tile = NULL, metrics = NULL, id = uuid::UUIDgenerate()
) {
  # assert valid arguments
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    ## project
    inherits(project, "Project"),
    ## column_name
    assertthat::is.string(column),
    project$dataset$has_column(column),
    ## legend
    inherits(legend, "Legend"),
    ## provenance
    inherits(provenance, "Provenance"),
    ## settings
    is.list(settings),
    ## id
    assertthat::is.string(id)
  )

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

  # if needed, create metrics
  if (is.null(metrics)) {
    metrics <- eval_prioritization(
      project, settings, project$dataset$get_column_data(column)
    )
  }
  assertthat::assert_that(is.list(metrics))

  # return new solution
  new_solution(
    name = name,
    settings = settings,
    metrics = metrics,
    id = id,
    layer = new_layer(
      dataset = project$dataset,
      column = column,
      total = project$dataset$get_column_total(column),
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
#' @inheritParams solve_prioritization
#'
#' @param project [new_project()] object to which `prioritization `should be
#' added.
#'
#' @param column `character` value with column name used to store
#' `prioritization` in the dataset that underpins `project`.
#'
#' @param prioritization `numeric` vector with a value for each planning
#' unit to indicate zone allocations.
#'
#' @param metrics `list` with evaluation metrics for prioritization.
#' Defaults to `NULL` such that the metrics are calculated automatically.
#'
#' @inheritSection solve_prioritization Settings format
#'
#' @return A [new_solution()] object.
#'
#' @family method
#'
#' @examples
#' # simulate data
#' p <- simulate_project()
#' s <- simulate_prioritization_settings(p)
#' d <- solve_prioritization(p, s, solver = "cbc", gap = 0.1)
#'
#' # generate solution
#' x <- create_solution_from_prioritization(
#'   name = "sol",
#'   project = p,
#'   prioritization = d,
#'   settings = s
#' )
#'
#' # print solution
#' print(x)
#'
#' @export
create_solution_from_prioritization <- function(
  name,
  project,
  prioritization,
  settings,
  column = NULL,
  metrics = NULL,
  id = uuid::UUIDgenerate()
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## settings
    is.list(settings),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id),
    ## prioritization
    is.numeric(prioritization),
    identical(length(prioritization), project$dataset$get_n_pu()),
    suppressWarnings(max(prioritization, na.rm = TRUE)) <= length(project$zones)
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

  # process metrics
  if (!is.null(metrics)) {
    assertthat::assert_that(is.list(metrics))
  } else {
    metrics <- eval_prioritization(project, settings, prioritization)
  }

  # store column in dataset
  project$dataset$set_column_data(column, prioritization)

  # return new solution object
  new_solution(
    name = name,
    layer = new_layer(
      dataset = project$dataset,
      tile = create_tile_from_project(
        x = project,
        column = column,
        path = tempfile(
          tmpdir = get_golem_config("tile_server_dir"),
          fileext = ".pmtiles"
        ),
        verbose = get_golem_config("verbose")
      ),
      column = column,
      legend = create_solution_legend(project),
      provenance = tool_generated_provenance(),
      total = sum(prioritization, na.rm = TRUE),
      details = NULL
    ),
    settings = settings,
    metrics = metrics,
    id = id
  )
}
