#' Compute heat map
#'
#' Compute heat map values for comparing prioritizations.
#'
#' @inheritParams compute_contrast
#'
#' @param zone `character` name of zone.
#'
#' @param ids `character` vector with solution identifiers.
#'
#' @return A `numeric` vector with values.
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # compute heat map values
#' v <- compute_heatmap(
#'   sim_project, "Biodiversity", rep(sim_project$solutions[[1]]$id, 3)
#' )
#'
#' # preview result
#' print(v)
#'
#' @export
compute_heatmap <- function(project, zone, ids) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(project, "Project"),
    assertthat::is.string(zone),
    all(zone %in% project$zones),
    is.character(ids),
    assertthat::noNA(ids)
  )

  # determine zone values to match
  match_values <- which(rep(project$zones, 2) == zone)

  # compute heat map values
  rowSums(
    vapply(
      ids,
      FUN.VALUE = numeric(project$dataset$get_n_pu()),
      function(id) {
        as.numeric(
          project$dataset$get_pu_column_data(
            project$get_solution(id)$layer$column
          )
        ) %in% match_values
      }
    ),
    na.rm = TRUE
  )
}
