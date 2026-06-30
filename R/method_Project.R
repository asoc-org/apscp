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
#' path <- dir(
#'   system.file("data", package = "apscp"),
#'   pattern = "^.*\\.yml$",
#'   full.names = TRUE
#' )
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
    assertthat::has_name(l$dataset_paths, "spatial_path"),
    assertthat::has_name(l$dataset_paths, "attribute_path"),
    assertthat::has_name(l$dataset_paths, "boundary_path"),
    assertthat::has_name(l, "themes"),
    assertthat::has_name(l, "costs"),
    assertthat::has_name(l, "locks"),
    msg = "`path` is not a valid project metadata file."
  )

  # normalize paths to save directory as metadata path
  spatial_path <- file.path(
    dirname(path),
    l$dataset_paths$spatial_path
  )
  attribute_path <- file.path(
    dirname(path),
    l$dataset_paths$attribute_path
  )
  boundary_path <- file.path(
    dirname(path),
    l$dataset_paths$boundary_path
  )

  # import dataset
  d <- read_dataset(
    spatial_path = spatial_path,
    attribute_path = attribute_path,
    boundary_path = boundary_path
  )

  # set dataset paths to NULL because they are not a parameter of new_project
  l$dataset_paths <- NULL

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
#' path <- dir(
#'   system.file("data", package = "apscp"),
#'   pattern = "^.*\\.yml$",
#'   full.names = TRUE
#' )
#'
#' # import project
#' x <- read_project(path)
#'
#' # preview project
#' print(x)
#'
#' # save project to temporary file
#' write_project(x, tempfile(fileext = ".yml")
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
  spatial_path <- paste0(path_no_ext, "_rast.tif")
  attribute_path <- paste0(path_no_ext, "_attr.csv.gz")
  boundary_path <- paste0(path_no_ext, "_bd.csv.gz")

  # save dataset
  write_dataset(x$dataset, spatial_path, attribute_path, boundary_path)

  # serialize project
  l <- serialize_object(x)

  # assign dataset paths
  l$dataset_paths <- list(
    spatial_path = basename(spatial_path),
    attribute_path = basename(attribute_path),
    boundary_path = basename(boundary_path)
  )

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
#' @examplesIf interactive()
#' # find file path for built-in project
#' path <- dir(
#'   system.file("data", package = "apscp"),
#'   pattern = "^.*\\.yml$",
#'   full.names = TRUE
#' )
#'
#' # import project
#' x <- read_project(path)
#'
#' # preview project
#' print(x)
#'
#' # create interactive map for project data
#' map_project(x)
#'
#' @export
map_project <- function(x, ...) {
  # assert valid arguments
  assertthat::assert_that(inherits(x, "Project"))

  # define map parameters
  bounds = as.vector(x$dataset$get_bbox(native = FALSE, expand = 0.1))
  maxBounds = as.vector(x$dataset$get_bbox(native = FALSE, expand = 0.25))

  # initialize map
  m <- mapgl::mapboxgl(
    bounds = bounds,
    maxBounds = list(maxBounds[1:2], maxBounds[3:4]),
    ...
  )

  # add sources and layers
  ## features
  for (i in seq_along(x$themes)) {
    for (j in seq_along(x$themes[[i]]$features)) {
      m <- mapgl_add_source(m, x$themes[[i]]$features[[j]])
      m <- mapgl_add_layer(m, x$themes[[i]]$features[[j]])
    }
  }
  ## locks
  for (i in seq_along(x$locks)) {
    m <- mapgl_add_source(m, x$locks[[i]])
    m <- mapgl_add_layer(m, x$locks[[i]])
  }
  ## costs
  for (i in seq_along(x$costs)) {
    m <- mapgl_add_source(m, x$costs[[i]])
    m <- mapgl_add_layer(m, x$costs[[i]])
  }
  ## solutions
  if (length(x$solutions) > 0) {
    for (i in seq_along(x$costs)) {
      m <- mapgl_add_source(m, x$costs[[i]])
      m <- mapgl_add_layer(m, x$costs[[i]])
    }
  }

  # return object
  m
}


#' Simulate project
#'
#' Simulate a new project.
#'
#' @return A [Project] object.
#'
#' @examples
#' # create simulated project
#' x <- simulate_project()
#'
#' # preview object
#' print(x)
#'
#' @export
simulate_project <- function() {
  # create dataset
  dataset <- simulate_dataset()

  # create provenance
  provenance <- new_provenance(
   name = "Simulated", icon = "server", color = "#123456",
   description = "Data is simulated."
  )

  # create cost
  cost <- new_cost(
    name = "Tourism revenue",
    layer = new_layer(
      dataset = dataset,
      index = "pu",
      legend = create_legend(dataset$get_raster_data("pu")),
      units = "USD",
      provenance = provenance,
      total = dataset$get_total("locked_in")
    )
  )

  # create solution
  solution <- new_solution(
    name = "Solution 1",
    layer = new_layer(
      dataset = dataset,
      index = "solution",
      legend = new_categorical_legend(
        c(1, 2, 3), c("#000000", "#DDDDDD", "#AAAAAA"),
        c("Conservation", "Tourism", "Science")
      ),
      units = "categorical",
      provenance = provenance,
      total = dataset$get_total("solution")
    )
  )

  # create object
  locked_in <- new_lock(
    name = "Protected areas",
    layer = new_layer(
      dataset = dataset,
      index = "locked_in",
      legend = create_legend(
        dataset$get_raster_data("locked_in"),
        palette = "Greens"
      ),
      units = "presence/absence",
      provenance = provenance,
      total = dataset$get_total("locked_in")
    )
  )
  locked_out <- new_lock(
    name = "Historical sites",
    layer = new_layer(
      dataset = dataset,
      index = "locked_out",
      legend = create_legend(
        dataset$get_raster_data("locked_out"),
        palette = "Reds"
      ),
      units = "presence/absence",
      provenance = provenance,
      total = dataset$get_total("locked_out")
    )
  )

  # create theme object
  theme <- new_theme(
    "Species",
    lapply(seq_len(5), function(i) {
      new_feature(
        name = paste0("Species ", i),
        targets = runif(3, min = 0, max = 1),
        layer = new_layer(
          dataset = dataset,
          index = paste0("feat_", i),
          legend = create_legend(
            dataset$get_raster_data("locked_out"),
            "viridis"
          ),
          units = "suitability",
          provenance = provenance,
          total = dataset$get_total(paste0("feat_", i))
        )
      )
    })
  )

  # return project
  new_project(
    dataset = dataset,
    zones = c("Conservation", "Tourism", "Science"),
    costs = list(cost),
    locks = list(locked_in, locked_out),
    themes = list(theme),
    solutions = list(solution)
  )
}
