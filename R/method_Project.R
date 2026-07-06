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
    assertthat::has_name(l, "tileset"),
    assertthat::has_name(l$tileset, "tiles"),
    assertthat::has_name(l$tileset, "max_zoom"),
    assertthat::has_name(l, "themes"),
    assertthat::has_name(l, "costs"),
    assertthat::has_name(l, "locks"),
    assertthat::has_name(l, "bbox"),
    assertthat::has_name(l$bbox, "xmin"),
    assertthat::has_name(l$bbox, "ymin"),
    assertthat::has_name(l$bbox, "xmax"),
    assertthat::has_name(l$bbox, "ymax"),
    assertthat::has_name(l$bbox, "crs"),
    msg = "`path` is not a valid project metadata file."
  )

  # normalize paths to save directory as metadata path
  pu_path <- file.path(dirname(path), l$dataset_paths$pu_path)
  boundary_path <- file.path(dirname(path), l$dataset_paths$boundary_path)

  # import dataset
  d <- read_dataset(pu_path = pu_path, boundary_path = boundary_path)

  # set dataset paths to NULL because they are not a parameter of new_project
  l$dataset_paths <- NULL

  # overwrite tileset directory
  l$tileset$dir <- dirname(path)

  # return object
  deserialize_object(l, d)
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
  pu_path <- paste0(path_no_ext, "_pu.csv.gz")
  boundary_path <- paste0(path_no_ext, "_bd.csv.gz")

  # save dataset
  write_dataset(x$dataset, pu_path, boundary_path)

  # serialize project
  l <- serialize_object(x)

  # assign dataset paths
  l$dataset_paths <- list(
    pu_path = basename(pu_path),
    boundary_path = basename(boundary_path)
  )

  # copy tile files to new directory
  lapply(x$tileset$tiles, function(x) {
    file.copy(
      file.path(l$tileset$dir, x$file),
      to = file.path(dirname(path), x$file),
      overwrite = TRUE
    )
  })

  # overwrite tileset directory with NULL,
  # note that this will be overwritten in read_project()
  l$tileset$dir <- NULL

  # save metadata
  yaml::write_yaml(l, file = path)

  # return success
  invisible(TRUE)
}

#' Map project
#'
#' @param x [new_project()] object.
#'
#' @param ... arguments passed to [mapgl::mapboxgl()].
#'
#' @return A [mapgl::mapboxgl()] object.
#'
#' @examplesIf has_mapbox_token()
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

  # add sources
  for (i in seq_along(x$tiles)) {
    m <- mapgl_add_source(m, x$tiles[[i]])
  }

  # add layers
  ## features
  for (i in seq_along(x$themes)) {
    for (j in seq_along(x$themes[[i]]$features)) {
      m <- mapgl_add_layer(m, x$themes[[i]]$features[[j]])
    }
  }
  ## locks
  for (i in seq_along(x$locks)) {
    m <- mapgl_add_layer(m, x$locks[[i]])
  }
  ## costs
  for (i in seq_along(x$costs)) {
    m <- mapgl_add_layer(m, x$costs[[i]])
  }
  ## solutions
  if (length(x$solutions) > 0) {
    for (i in seq_along(x$costs)) {
      m <- mapgl_add_layer(m, x$solutions[[i]])
    }
  }

  # return object
  m
}
