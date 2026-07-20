#' @include internal.R
NULL

#' Add layer
#'
#' Add a new layer to a layer manager widget.
#'
#' @param id `character` value with identifier for [mapper()] object.
#'
#' @param value [Cost], [Solution], or [Lock] object.
#'
#' @inheritParams open_sidebar
#'
#' @family mapper
#'
#' @export
mapper_add_layer <- function(
  id, value,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(value, c("Cost", "Solution", "Lock"))
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:addLayer",
    list(id = id, value = serialize_object(value))
  )
}
