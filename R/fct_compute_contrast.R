#' Compute contrast
#'
#' Compute values for contrasting two solutions.
#'
#' @param project [new_project()] object.
#'
#' @param id1 `character` value with solution identifier.
#'
#' @param id2 `character` value with solution identifier.
#'
#' @return A `numeric` vector with values.
#'
#' @examples
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # compute contrast values
#' v <- compute_contrast(
#'   sim_project, sim_project$solutions[[1]]$id, sim_project$solutions[[1]]$id
#' )
#'
#' # preview result
#' print(v)
#'
#' @export
compute_contrast <- function(project, id1, id2) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(project, "Project"),
    assertthat::is.string(id1),
    assertthat::is.string(id2)
  )

  # obtain prioritization values
  prioritization1 <- project$dataset$get_pu_column_data(
    project$get_solution(id1)$layer$column
  )
  prioritization2 = project$dataset$get_pu_column_data(
    project$get_solution(id2)$layer$column
  )

  # compute combinations of values
  comb <- expand.grid(
    v1 = seq_len(length(project$zones) * 2),
    v2 = seq_len(length(project$zones) * 2)
  )

  # compute values
  out <- rep(NA_real_, length(prioritization1))
  idx <- which(!is.na(prioritization1))
  for (i in seq_len(nrow(comb))) {
    idx2 <-
      prioritization1[idx] == comb$v1[[i]] &
      prioritization2[idx] == comb$v2[[i]]
    out[idx[idx2]] <- i
  }

  # return output
  out
}
