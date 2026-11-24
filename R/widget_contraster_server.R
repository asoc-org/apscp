#' @include internal.R
NULL

#' Add solution to contraster widget
#'
#' Add a [new_solution()] to a [contraster()] widget.
#'
#' @param id `character` value with identifier for [contraster()] widget.
#'
#' @param solution [new_solution()] object.
#'
#' @inheritParams sidebar_open
#'
#' @family contraster
#'
#' @inherit contraster examples
#'
#' @export
contraster_add_solution <- function(
  id, solution,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(solution, "Solution")
  )
  # pass data to widget
  session$sendCustomMessage(
    "contraster:addSolution",
    list(
      id = id,
      solution = list(id = solution$id, name = solution$name)
    )
  )
}

#' Reset contraster widget
#'
#' Reset the contraster widget so that it is ready to generate a
#' new layer.
#'
#' @inheritParams contraster_add_solution
#'
#' @details
#' The contraster widget is reset by (i) clearing the text from the
#' input element for specifying a layer name, and (ii) disabling the button.
#'
#' @family contraster
#'
#' @inherit contraster examples
#'
#' @export
contraster_reset <- function(
  id, session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # run widget method
  session$sendCustomMessage(
    "contraster:reset",
    list(id = id)
  )
}
