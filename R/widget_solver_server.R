#' @include internal.R
NULL

#' Add lock to solver
#'
#' Add a [new_lock()] to a Solver widget.
#'
#' @param id `character` value with identifier for [solver()] object.
#'
#' @param lock [new_lock()] object.
#'
#' @inheritParams sidebar_open
#'
#' @family solver
#'
#' @export
solver_add_lock <- function(
  id, lock,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(lock, "Lock")
  )
  # pass data to widget
  session$sendCustomMessage(
    "solver:addLock",
    list(
      id = id,
      value = serialize_object(lock)
    )
  )
}

#' Reset solver
#'
#' Reset the solver so that it is ready to generate a solution.
#'
#' @param id `character` value with identifier for [solver()] object.
#'
#' @inheritParams sidebar_open
#'
#' @details
#' The solver is reset by (i) clearing the text from the input element for
#' specifying a solution name, (ii) disabling the start button, and (iii)
#' disabling the stop button.
#'
#' @family solver
#'
#' @export
solver_reset <- function(id, session = shiny::getDefaultReactiveDomain()) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # run widget method
  session$sendCustomMessage(
    "solver:reset",
    list(id = id)
  )
}

#' Synchronize solver settings
#'
#' Update a solver to synchronize updates across different setting panels.
#'
#' @param id `character` value with identifier for [solver()] object.
#'
#' @param project [project()] object.
#'
#' @param data `list` with data.
#'
#' @inheritParams sidebar_open
#'
#' @details
#' This function is specifically used to update the feature held status
#' bars based on which locks are selected for each zone.
#'
#' @family solver
#'
#' @export
solver_sync <- function(
  id, project, data,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(project, "Project"),
    is.data.frame(data)
  )

  # calculation lock settings
  allocation <- convert_lock_settings_to_allocation(data)

  # calculate planning unit status values for each zone
  status <- vapply(
    seq_along(project$zones),
    FUN.VALUE = numeric(project$dataset$get_n_pu()),
    USE.NAMES = FALSE,
    function(i) project$dataset$get_pu_status(project$zones[[i]], allocation)
  )

  # get feature column names
  feature_columns <- vapply(
    project$features, function(x) x$layer$column, character(1)
  )

  # calculate amount held for each feature
  value <- stats::setNames(
    lapply(
      seq_len(ncol(status)),
      function(i) project$dataset$get_column_held(feature_columns, status[, i])
    ),
    project$zones
  )
  value$id <- vapply(project$features, `[[`, character(1), "id")

  # pass data to widget
  session$sendCustomMessage(
    "solver:sync",
    list(id = id, value = value)
  )
}
