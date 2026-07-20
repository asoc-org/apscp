#' Start tile server
#'
#' Start a tile server for a project.
#'
#' @param x [new_project()] object.
#'
#' @param dir `character` value for tile server directory.
#' Defaults to `NULL` indicating a temporary directory.
#'
#' @param verbose `logical` value indicating if information about
#' the tile server should be displayed? Defaults to `TRUE`.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family tile_server
#'
#' @export
start_tile_server <- function(x, dir = NULL, verbose = TRUE) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(x, "Project"),
    assertthat::is.flag(verbose),
    assertthat::noNA(verbose)
  )

  # create temporary directory
  if (is.null(dir)) {
    dir <- tempfile(tmpdir = tempdir())
    dir.create(dir, showWarnings = TRUE, recursive = FALSE)
  } else {
    assertthat::assert_that(
      assertthat::is.string(dir),
      assertthat::noNA(dir),
      dir.exists(dir)
    )
  }

  # copy pm tiles to directory
  files <- vapply(x$tileset$tiles, `[[`, "character", "file")
  existing_paths <- file.path(x$tileset$dir, files)
  new_paths <- file.path(dir, files)
  idx <- !file.exists(new_paths)
  new_paths <- new_paths[idx]
  existing_paths <- existing_paths[idx]
  if (length(new_paths) > 0) {
    file.copy(existing_paths, to = new_paths)
  }

  # launch tile server process
  suppressMessages(
    freestiler::serve_tiles(dir, port = get_golem_config("tile_server_port"))
  )

  # display message
  if (isTRUE(verbose)) {
    message(
      "Serving tiles at http://localhost:",
      get_golem_config("tile_server_port")
    )
    message("  Directory: ", dir)
    message("Use `stop_tile_server()` to stop.")
  }

  # return success
  invisible(TRUE)
}

#' Stop tile server
#'
#' Stop tile servers.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family tile_server
#'
#' @export
stop_tile_server <- function() {
  freestiler::stop_server()
  invisible(TRUE)
}
