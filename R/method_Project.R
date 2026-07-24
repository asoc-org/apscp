#' @include internal.R class_Project.R
NULL

#' Read project
#'
#' Import project data.
#'
#' @param path `character` file path for YAML metadata file.
#'
#' @return A [Project] object.
#'
#' @family io
#'
#' @examples
#' # find file path for built-in project
#' path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")
#'
#' # import project
#' x <- read_project(path)
#'
#' # preview project
#' print(x)
#'
#' @export
read_project <- function(path) {
  # assert that arguments are valid
  assertthat::assert_that(
    assertthat::is.string(path),
    assertthat::noNA(path),
    assertthat::is.readable(path)
  )

  # import metadata
  l <- yaml::read_yaml(path)

  # validate yaml metadata
  assertthat::assert_that(
    assertthat::has_name(l, "name"),
    assertthat::has_name(l, "author_name"),
    assertthat::has_name(l, "author_email"),
    assertthat::has_name(l, "dataset_paths"),
    assertthat::has_name(l$dataset_paths, "pu_path"),
    assertthat::has_name(l$dataset_paths, "boundary_path"),
    assertthat::has_name(l, "tiles"),
    assertthat::has_name(l, "themes"),
    assertthat::has_name(l, "costs"),
    assertthat::has_name(l, "locks"),
    msg = "`path` is not a valid project metadata file."
  )

  # normalize paths to save directory as metadata path
  pu_path <- file.path(dirname(path), l$dataset_paths$pu_path)
  boundary_path <- file.path(dirname(path), l$dataset_paths$boundary_path)

  # import dataset
  d <- read_dataset(pu_path = pu_path, boundary_path = boundary_path)

  # set dataset paths to NULL because they are not a parameter of new_project
  l$dataset_paths <- NULL

  # return object

  ## note we set global option so that the directory name for tile paths
  ## is specified based on the directory name where the YAML file is found
  withr::with_options(
    list("apscp.project.io" = TRUE),
    withr::with_dir(
      dirname(path),
      deserialize_object(l, d)
    )
  )
}

#' Write project
#'
#' Export project data.
#'
#' @param x [Project] object.
#'
#' @param path `character` file path for YAML metadata file.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family io
#'
#' @examples
#' # find file path for built-in project
#' path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")
#'
#' # import project
#' x <- read_project(path)
#'
#' # preview project
#' print(x)
#'
#' # save project to temporary file
#' write_project(x, tempfile(fileext = ".yml"))
#'
#' @export
write_project <- function(x, path) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## project
    inherits(x, "Project"),
    ## path
    assertthat::is.string(path),
    assertthat::noNA(path),
    dir.exists(dirname(path)),
    endsWith(path, ".yml")
  )

  # define file paths for datasets
  path_no_ext <- tools::file_path_sans_ext(path)
  pu_path <- paste0(path_no_ext, "_pu.gpkg.zip")
  boundary_path <- paste0(path_no_ext, "_bd.csv.gz")

  # save dataset
  write_dataset(x$dataset, pu_path, boundary_path)

  # serialize project
  ## note we set global option so that only the base file name is
  ## stored in the serialized tile objects
  l <- withr::with_options(
    list("apscp.project.io" = TRUE),
    serialize_object(x)
  )

  # assign dataset paths
  l$dataset_paths <- list(
    pu_path = basename(pu_path),
    boundary_path = basename(boundary_path)
  )

  # copy tile files to new directory
  lapply(x$tiles, function(x) {
    file.copy(
      x$path,
      to = file.path(dirname(path), basename(x$path)),
      overwrite = TRUE
    )
  })

  # save metadata
  yaml::write_yaml(l, file = path)

  # return success
  invisible(TRUE)
}

#' Read builtin project
#'
#' Import builtin project data for the Antarctic Peninsula.
#'
#' @return A [new_project()] object.
#'
#' @family io
#'
#' @examples
#' # import project
#' x <- read_builtin_project()
#'
#' # preview project
#' print(x)
#'
#' @export
read_builtin_project <- function() {
  # find path
  path <- dir(
    system.file("extdata", package = "apscp"),
    pattern = "^.*\\.yml$",
    full.names = TRUE
  )
  # if can't find path, throw error
  assertthat::assert_that(
    identical(length(path), 1L),
    file.exists(path),
    msg = "Can't find builtin project."
  )
  # return object
  read_project(path)
}

#' Map project
#'
#' @param x [new_project()] object.
#'
#' @param ... arguments passed to [mapgl::mapboxgl()].
#'
#' @return A [mapgl::mapboxgl()] object.
#'
#' @family mapping
#'
#' @examplesIf interactive()
#' # find file path for built-in project
#' path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")
#'
#' # import project
#' x <- read_project(path)
#'
#' # preview project
#' print(x)
#'
#' # create interactive map for project data
#' map <- map_project(x)
#'
#' # display map
#' \dontrun{
#' print(map)
#' }
#' @export
map_project <- function(x, ...) {
  # assert valid arguments
  assertthat::assert_that(inherits(x, "Project"))

  # define map parameters
  bounds = x$get_bbox(native = FALSE, expand = 0.1)
  maxBounds = as.vector(x$get_bbox(native = FALSE, expand = 0.25))

  # initialize map
  m <- mapgl::mapboxgl(
    bounds = bounds,
    maxBounds = list(maxBounds[1:2], maxBounds[3:4]),
    ...
  )

  # add tiles
  for (i in seq_along(x$tiles)) {
    m <- mapgl_add_source(m, x$tiles[[i]])
  }

  # add project components
  ## solutions
  if (length(x$solutions) > 0) {
    for (i in seq(length(x$solutions), 1L)) {
      if (isTRUE(x$solutions[[i]]$layer$visible)) {
        m <- mapgl_add_layer(m, x$solutions[[i]])
      }
    }
  }
  ## locks
  for (i in seq(length(x$locks), 1L)) {
    if (isTRUE(x$locks[[i]]$layer$visible)) {
      m <- mapgl_add_layer(m, x$locks[[i]])
    }
  }
  ## costs
  for (i in seq(length(x$costs), 1L)) {
    if (isTRUE(x$costs[[i]]$layer$visible)) {
      m <- mapgl_add_layer(m, x$costs[[i]])
    }
  }
  ## features
  for (i in seq(length(x$themes), 1L)) {
    for (j in seq(length(x$themes[[i]]$features), 1L)) {
      if (isTRUE(x$themes[[i]]$features[[j]]$layer$visible)) {
        m <- mapgl_add_layer(m, x$themes[[i]]$features[[j]])
      }
    }
  }

  # return object
  m
}
