#' @include internal.R
NULL

#' Add solution to heat mapper widget
#'
#' Add a [new_solution()] to a [heatmapper()] widget.
#'
#' @param id `character` value with identifier for [heatmapper()] widget.
#'
#' @param solution [new_solution()] object.
#'
#' @inheritParams sidebar_open
#'
#' @family heatmapper
#'
#' @inherit heatmapper examples
#'
#' @export
heatmapper_add_solution <- function(
  id, solution, session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(solution, "Solution")
  )
  # pass data to widget
  session$sendCustomMessage(
    "heatmapper:addSolution",
    list(
      id = id,
      solution = list(id = solution$id, name = solution$name)
    )
  )
}

#' Reset heat mapper widget
#'
#' Reset the heat mapper widget so that it is ready to generate a
#' new layer.
#'
#' @inheritParams heatmapper_add_solution
#'
#' @details
#' The heat mapper widget is reset by (i) clearing the text from the
#' input element for specifying a layer name, and (ii) disabling the button.
#'
#' @family heatmapper
#'
#' @inherit heatmapper examples
#'
#' @export
heatmapper_reset <- function(
  id, session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  # run widget method
  session$sendCustomMessage(
    "heatmapper:reset",
    list(id = id)
  )
}
