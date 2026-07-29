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
#' @inheritParams open_sidebar
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
