#' @include internal.R
NULL

#' Tool generated provenance
#'
#' Create a [new_provenance()] object that indicates data were generated with
#' the tool.
#'
#' @return A [new_provenance()] object.
#'
#' @family method
#'
#' @examples
#' # create object
#' x <- tool_generated_provenance()
#'
#' # print object
#' print(x)
#'
#' @export
tool_generated_provenance <- function() {
  structure(
    list(
      name = "User generated",
      icon = "user",
      color = "black",
      description = "Generated with the tool",
      url = ""
    ),
    class = "Provenance"
  )
}

#' Precomputed provenance
#'
#' Create a [new_provenance()] object that indicates data were precomputed
#' for the tool.
#'
#' @inherit tool_generated_provenance return
#'
#' @family method
#'
#' @examples
#' # create object
#' x <- precomputed_provenance()
#'
#' # print object
#' print(x)
#'
#' @export
precomputed_provenance <- function() {
  structure(
    list(
      name = "Precomputed",
      icon = "server",
      color = "black",
      description = "Generated with prior computations",
      url = ""
    ),
    class = "Provenance"
  )
}
