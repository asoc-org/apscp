#' Start tile server
#'
#' Start a tile server for a project.
#'
#' @param x [new_project()] object.
#'
#' @param verbose `logical` value indicating if information about
#' the tile server should be displayed? Defaults to `TRUE`.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @details
#' The tile server directory is specified based on
#' `get_golem_config("tile_server_dir")`. The port number is based on
#' `get_golem_config("tile_server_url")` where the text after the
#' last colon is assumed to be the port number
#' (e.g., the port number in `http://localhost:8085` is assumed to be 8085).
#'
#' @family tile_server
#'
#' @examplesIf interactive()
#' # simulate project
#' sim_project <- simulate_project()
#'
#' # display the tile server directory
#' print(tile_server_dir())
#'
#' # start tile server
#' tile_server_start(sim_project)
#'
#' # check if tile server is active
#' is_tile_server_active()
#'
#' # add tile to tile server directory
#' tile_server_add_tile(sim_project$tiles[[1]])
#'
#' # stop tile server
#' tile_server_stop()
#'
#' @export
tile_server_start <- function(x, verbose = TRUE) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(x, "Project"),
    assertthat::is.flag(verbose),
    assertthat::noNA(verbose)
  )

  # obtain directory for tile server
  dir <- tile_server_dir()

  # copy pm tiles to directory
  existing_paths <- vapply(x$tiles, `[[`, "character", "path")
  new_paths <- file.path(dir, basename(existing_paths))
  idx <- !file.exists(new_paths)
  new_paths <- new_paths[idx]
  existing_paths <- existing_paths[idx]
  if (length(new_paths) > 0) {
    if (!identical(.Platform$OS.type, "unix")) {
      ## if on Windows, then copy the files
      file.copy(existing_paths, to = new_paths) # nocov
    } else {
      ## otherwise, use symlinks to reduce storage burden
      file.symlink(existing_paths, to = new_paths)
    }
  }

  # obtain port for tile server
  port <- strsplit(get_golem_config("tile_server_url"), ":", fixed = TRUE)
  port <- as.numeric(port[[1]][length(port[[1]])])
  assertthat::assert_that(
    assertthat::is.count(port),
    assertthat::noNA(port),
    port > 0,
    msg = "Golem config `tile_server_url` does not specify a port."
  )

  # launch tile server process
  suppressMessages(freestiler::serve_tiles(dir, port = port))

  # display message
  if (isTRUE(verbose)) {
    message(
      "Serving tiles at http://localhost:",
      port
    )
    message("  Directory: ", dir)
    message("Use `stop_tile_server()` to stop.")
  }

  # set tile server variable as active
  .pkg_env$tile_server_status <- TRUE

  # return success
  invisible(TRUE)
}

#' Add a tile to tile server
#'
#' Add PMTile file to a tile server.
#'
#' @param x [new_tile()], [new_solution()], [new_lock()], [new_cost()], or
#' [new_feature()] object.
#'
#' @family tile_server
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @inherit tile_server_start examples
#'
#' @export
tile_server_add_tile <- function(x) {
  # assert argument is valid
  assertthat::assert_that(
    inherits(x, "ProjectComponent") || inherits(x, "Tile")
  )

  # obtain directory for tile server
  dir <- tile_server_dir()

  # if needed, extract tile
  if (inherits(x, "ProjectComponent")) {
    x <- x$layer$tile
  }

  # add PMTile file to directory
  new_path <- file.path(dir, basename(x$path))
  if (!file.exists(new_path)) {
    if (!identical(.Platform$OS.type, "unix")) {
      ## if on Windows, then copy the file
      file.copy(x$path, to = new_path) # nocov
    } else {
      ## otherwise, use symlink to reduce storage burden
      file.symlink(x$path, to = new_path)
    }
  }

  # return TRUE
  invisible(TRUE)
}

#' Stop tile server
#'
#' Stop any tile servers that are active.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family tile_server
#'
#' @inherit tile_server_start examples
#'
#' @export
tile_server_stop <- function() {
  freestiler::stop_server()
  .pkg_env$tile_server_status <- FALSE
  invisible(TRUE)
}

#' Is tile server active?
#'
#' Determine if a tile server is active.
#'
#' @return A `logical` value.
#'
#' @family tile_server
#'
#' @inherit tile_server_start examples
#'
#' @export
is_tile_server_active <- function() {
  if (is.null(.pkg_env$tile_server_status)) return(FALSE) # nocov
  .pkg_env$tile_server_status
}

#' Tile server directory
#'
#' Get the tile server directory.
#'
#' @return A `character` value.
#'
#' @family tile_server
#'
#' @inherit tile_server_start examples
#'
#' @export
tile_server_dir <- function() {
  # if directory is already defined in package environment, then return it
  if (!is.null(.pkg_env$tile_server_dir)) {
    return(.pkg_env$tile_server_dir)
  }

  # otherwise, we need to define the directory based on golem configuration...

  # get golem configuration
  x <- get_golem_config("tile_server_dir")

  # if NULL, then manually specify temporary directory
  if (is.null(x)) {
    x <- tempfile() # nocov
  }

  # if directory does not exist and inherits from temporary directory,
  # then create it
  if (!dir.exists(x) && startsWith(x, tempdir())) {
    dir.create(x, showWarnings = FALSE, recursive = TRUE) # nocov
  }

  # validate directory
  assertthat::assert_that(
    assertthat::is.string(x),
    assertthat::noNA(x),
    msg = "Golem config has invalid `tile_server_dir` parameter."
  )
  assertthat::assert_that(
    dir.exists(x),
    msg = "Golem config has `tile_server_dir` parameter that does not exist."
  )

  # define the directory for the package environment
  .pkg_env$tile_server_dir <- x

  # return directory
  x
}
