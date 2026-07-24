#' @include internal.R
NULL

#' Add solution to map
#'
#' Add a [new_solution()] to a Mapper widget.
#'
#' @param id `character` value with identifier for [mapper()] object.
#'
#' @param map  [mapgl::mapboxgl_proxy()] object.
#'
#' @param solution [new_solution()] object.
#'
#' @param visible `logical` value indicating if layer should be visible.
#' Defaults to `TRUE`.
#'
#' @inheritParams open_sidebar
#'
#' @family mapper
#'
#' @export
mapper_add_solution <- function(
  id, map, solution, visible = TRUE,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(map, "mapboxgl_proxy"),
    assertthat::is.flag(visible),
    assertthat::noNA(visible),
    inherits(solution, "Solution")
  )
  # if needed, add tile to tile server
  tile_server_add_tile(solution)
  # update map proxy with tile source
  mapgl_add_source(map = map, x = solution$layer$tile)
  # update map proxy with solution
  mapgl_add_layer(
    map = map,
    x = solution,
    visibility = ifelse(visible, "visible", "none"),
    before_id = NULL
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:addLayer",
    list(
      id = id,
      value = serialize_object(solution),
      visible = visible,
      endPosition = FALSE
    )
  )
}
