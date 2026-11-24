#' @include internal.R
NULL

#' Add solution to map
#'
#' Add a [new_solution()] to a [mapper()] widget.
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
#' @inheritParams sidebar_open
#'
#' @family mapper
#'
#' @inherit mapper examples
#'
#' @export
mapper_add_solution <- function(
  id, map, solution, visible = TRUE,
  session = shiny::getDefaultReactiveDomain()
) {
  assertthat::assert_that(inherits(solution, "Solution"))
  mapper_add_project_component(id, map, solution, visible, session)
}

#' Add product to map
#'
#' Add a [new_product()] to a [mapper()] widget.
#'
#' @inheritParams mapper_add_solution
#'
#' @param product [new_product()] object.
#'
#' @family mapper
#'
#' @inherit mapper examples
#'
#' @export
mapper_add_product <- function(
  id, map, product, visible = TRUE,
  session = shiny::getDefaultReactiveDomain()
) {
  assertthat::assert_that(inherits(product, "Product"))
  mapper_add_project_component(id, map, product, visible, session)
}

#' Add lock to map
#'
#' Add a [new_lock()] to a [mapper()] widget.
#'
#' @inheritParams mapper_add_solution
#'
#' @param lock [new_lock()] object.
#'
#' @family mapper
#'
#' @inherit mapper examples
#'
#' @export
mapper_add_lock <- function(
  id, map, lock, visible = TRUE,
  session = shiny::getDefaultReactiveDomain()
) {
  assertthat::assert_that(inherits(lock, "Lock"))
  mapper_add_project_component(id, map, lock, visible, session)
}

#' Add layer to map
#'
#' Add a project component to a [mapper()] widget.
#'
#' @inheritParams mapper_add_solution
#'
#' @param x [new_solution()], [new_lock()], or [new_product()] object.
#'
#' @family mapper
#'
#' @inherit mapper examples
#'
#' @noRd
mapper_add_project_component <- function(
  id, map, x, visible = TRUE,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(map, "mapboxgl_proxy"),
    assertthat::is.flag(visible),
    assertthat::noNA(visible),
    inherits(x, "ProjectComponent")
  )
  # if needed, add tile to tile server
  tile_server_add_tile(x)
  # update map proxy with tile source
  mapgl_add_source(map = map, x = x$layer$tile)
  # update map proxy with project component
  mapgl_add_layer(
    map = map,
    x = x,
    visibility = ifelse(visible, "visible", "none"),
    before_id = NULL
  )
  # pass data to widget
  session$sendCustomMessage(
    "mapper:addLayer",
    list(
      id = id,
      value = serialize_object(x),
      visible = visible
    )
  )
}

#' Synchronize mapper
#'
#' Synchronize active layers between a [mapper()] object and its associated
#' [mapgl::mapboxglOutput()] object.
#'
#' @inheritParams mapper_add_solution
#' @inheritParams mapper
#'
#' @param data `list` with data.
#'
#' @details
#' This function is specifically used to add layers to the map that
#' are not active.
#'
#' @family mapper
#'
#' @inherit mapper examples
#'
#' @export
mapper_sync <- function(
  id, map, project, data,
  session = shiny::getDefaultReactiveDomain()
) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(id),
    assertthat::noNA(id),
    inherits(map, "mapboxgl_proxy"),
    inherits(project, "Project")
  )
  # get project element
  x <- get_project_element(project, data)
  # add layer to map
  mapgl_add_layer(
    map = map,
    x = x,
    visibility = "visible",
    before_id = NULL
  )
  # add layer to widget
  session$sendCustomMessage(
    "mapper:addLayer",
    list(
      id = id,
      value = serialize_object(x),
      visible = TRUE
    )
  )
}
