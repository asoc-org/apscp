#' Read dataset
#'
#' Import a [`Dataset`] object.
#'
#' @param pu_path `character` file path for planning unit data.
#'
#' @param boundary_path `character` file path for boundary data.
#'
#' @param cache_path `character` file path for cache data.
#'
#' @param dataset_dir `character` file path specifying a directory to
#' to store planning unit and boundary data.
#'
#' @inherit new_dataset return
#'
#' @family io
#'
#' @examples
#' # specify file paths
#' pu_path <- system.file(
#'   "extdata", "antarctic-peninsula.gpkg.zip",
#'   package = "apscp"
#' )
#' bd_path <- system.file(
#'   "extdata", "antarctic-peninsula.boundary.rds",
#'   package = "apscp"
#' )
#' cc_path <- system.file(
#'   "extdata", "antarctic-peninsula.cache.rds",
#'   package = "apscp"
#' )
#'
#' # import data
#' x <- read_dataset(pu_path, bd_path, cc_path)
#'
#' # preview object
#' print(x)
#'
#' @export
read_dataset <- function(
  pu_path, boundary_path, cache_path, dataset_dir = tempfile()
) {
  # assert arguments are valid
  assertthat::assert_that(
    ## pu_path
    assertthat::is.string(pu_path),
    assertthat::noNA(pu_path),
    assertthat::is.readable(pu_path),
    ## boundary_path
    assertthat::is.string(boundary_path),
    assertthat::noNA(boundary_path),
    assertthat::is.readable(boundary_path),
    ## cache_path
    assertthat::is.string(cache_path),
    assertthat::noNA(cache_path),
    assertthat::is.readable(cache_path),
    ## dataset_dir
    assertthat::is.string(dataset_dir),
    assertthat::noNA(dataset_dir)
  )

  # if needed, create dataset_dir
  if (!dir.exists(dataset_dir)) {
    dir.create(dataset_dir, showWarnings = FALSE, recursive = TRUE)
  }

  # if needed, extract file to temporary folder
  if (endsWith(pu_path, ".zip")) {
    ## extract to temporary directory
    utils::unzip(pu_path, exdir = dataset_dir)
    ## set path with planning unit data
    new_pu_path <- file.path(
      dataset_dir,
      tools::file_path_sans_ext(basename(pu_path))
    )
  } else {
    ## set path with planning unit data
    new_pu_path <- file.path(dataset_dir, basename(pu_path))
    if (!file.exists(new_pu_path)) {
      if (!identical(.Platform$OS.type, "unix")) {
        file.copy(pu_path, new_pu_path)
      } else {
        file.symlink(pu_path, new_pu_path)
      }
    }
  }

  ## validate file paths
  assertthat::assert_that(
    assertthat::is.string(new_pu_path),
    assertthat::noNA(new_pu_path),
    assertthat::is.readable(new_pu_path)
  )

  # return object
  new_dataset(
    pu_path = new_pu_path,
    boundary_path = boundary_path,
    cache_path = cache_path
  )
}

#' Write dataset
#'
#' Write a [`Dataset`] object.
#'
#' @param x [`Dataset`] object.
#'
#' @inheritParams read_dataset
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family io
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' dataset <- create_dataset_from_sf(sim_data)
#'
#' # define file paths for saving data
#' pu_path <- tempfile(fileext = ".gpkg.zip")
#' bd_path <- tempfile(fileext = ".boundary.rds")
#' cc_path <- tempfile(fileext = ".cache.rds")
#'
#' # save files
#' write_dataset(dataset, pu_path, bd_path, cc_path)
#'
#' @export
write_dataset <- function(x, pu_path, boundary_path, cache_path) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    inherits(x, "Dataset"),
    ## pu_path
    assertthat::is.string(pu_path),
    assertthat::noNA(pu_path),
    dir.exists(dirname(pu_path))
  )

  # ensure that pu_path is absolute file path
  if (is_relative_path(pu_path)) {
    pu_path <- file.path(getwd(), pu_path)
  }

  # save planning unit data
  if (endsWith(pu_path, ".zip")) {
    # if data need to be zipped, then...
    ## create temporary directory
    td <- tempfile()
    dir.create(td, showWarnings = FALSE, recursive = TRUE)
    on.exit(unlink(td, force = TRUE, recursive = TRUE))
    ## copy file to temporary directory
    file.copy(
      x$pu_path,
      file.path(td, basename(tools::file_path_sans_ext(pu_path)))
    )
    ## create zip file
    suppressMessages(
      withr::with_dir(
        td,
        utils::zip(zipfile = pu_path, files = dir(td), flags = "-r9Xqo")
      )
    )
  } else {
    file.copy(from = x$pu_path, to = pu_path, overwrite = TRUE)
  }

  # save boundary data
  write_matrix(x$get_boundary_data(), boundary_path)

  # save cache data
  saveRDS(x$cache_data, cache_path)

  # return success
  invisible(TRUE)
}

#' Create dataset from sf object.
#'
#' Create a [`Dataset`] object from a [sf::st_sf()] object.
#'
#' @param x [sf::st_sf()] object.
#'
#' @param boundary_data [Matrix::sparseMatrix()] object with boundary data.
#' Defaults to `NULL` such that the boundary data are calculated automatically.
#'
#' @param cache_columns `character` vector indicating the names of columns
#' in `x` that should be moved to the cache. Defaults to `NULL` such that
#' no columns should be moved to the cache.
#'
#' @inherit new_dataset return
#'
#' @family method
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- create_dataset_from_sf(sim_data)
#'
#' # preview object
#' print(x)
#'
#' @export
create_dataset_from_sf <- function(
  x, boundary_data = NULL, cache_columns = NULL
) {
  # assert valid argument
  assertthat::assert_that(inherits(x, "sf"))
  if (!is.null(cache_columns)) {
    assertthat::assert_that(
      is.character(cache_columns),
      assertthat::noNA(cache_columns),
      all_match_of(cache_columns, names(x))
    )
  } else {
    cache_columns <- character(0)
  }

  # if needed, calculate boundary data
  if (is.null(boundary_data)) {
    boundary_data <- prioritizr::boundary_matrix(x)
  }

  # create cache
  cache_path <- tempfile(fileext = ".rds")
  if (length(cache_columns) > 0) {
    cache_data <- lapply(cache_columns, function(n) compress_object(x[[n]]))
    names(cache_data) <- cache_columns
  } else {
    cache_data <- list()
  }

  # save data to disk
  pu_path <- tempfile(fileext = ".gpkg")
  boundary_path <- tempfile(fileext = ".rds")
  sf::write_sf(x[, setdiff(names(x), cache_columns), drop = FALSE], pu_path)
  write_matrix(boundary_data, boundary_path)
  saveRDS(cache_data, cache_path)

  # return object
  new_dataset(
    pu_path = pu_path,
    boundary_path = boundary_path,
    cache_path = cache_path
  )
}
