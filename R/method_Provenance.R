#' @include internal.R
NULL

#' Tool generated provenance
#'
#' Create a [new_provenance()] object that indicates data were generated with
#' the tool.
#'
#' @return A [new_provenance()] object
#'
#' @family method
#'
#' @export
tool_generated_provenance <- function() {
  structure(
    list(
      name = "User generated",
      icon = icon,
      color = "black",
      description = "Generated with the tool"
    ),
    class = "Provenance"
  )
}
