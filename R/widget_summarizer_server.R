#' @include internal.R
NULL

#' Add solution to summarizer
#'
#' Add a [new_solution()] to a [summarizer()] widget.
#'
#' @param id `character` value with identifier for [summarizer()] object.
#'
#' @param solution [new_solution()] object.
#'
#' @param show `logical` value indicating if the [summarizer()] widget
#' should change to show the solution?
#'
#' @inheritParams sidebar_open
#'
#' @family summarizer
#'
#' @inherit summarizer examples
#'
#' @export
summarizer_add_solution <- function(
  id, solution, show = TRUE,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(solution, "Solution"),
    assertthat::is.flag(show),
    assertthat::noNA(show)
  )
  # pass data to widget
  session$sendCustomMessage(
    "summarizer:addSolution",
    list(
      id = id,
      value = serialize_object(solution),
      show = show
    )
  )
}
