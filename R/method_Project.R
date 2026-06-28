#' @include internal.R class_Project.R
NULL

#' Read project
#'
#' Import project data.
#'
#' @param path `character` file path for YAML metadata file.
#'
#' @param dataset [new_dataset()] object.
#'
#' @return A [Project] object.
#'
#' @export
read_project <- function(path, dataset) {
  # assert that arguments are valid
  assertthat::assert_that(
    assertthat::is.string(path),
    assertthat::noNA(path),
    assertthat::is.readable(path),
    inherits(dataset, "Dataset")
  )

  # import metadata
  md <- yaml::read_yaml(path)

  # validate yaml metadata
  assertthat::assert_that(
    assertthat::has_name(md, "name"),
    assertthat::has_name(md, "author_name"),
    assertthat::has_name(md, "author_email"),
    assertthat::has_name(md, "dataset"),
    assertthat::has_name(md$dataset, "spatial_path"),
    assertthat::has_name(md$dataset, "attribute_path"),
    assertthat::has_name(md$dataset, "boundary_path"),
    assertthat::has_name(md, "themes"),
    assertthat::has_name(md, "costs"),
    assertthat::has_name(md, "locks"),
    msg = "`path` is not a valid project metadata file."
  )

  # import dataset
  d <- read_dataset(
    spatial_path = md$dataset$spatial_path,
    attribute_path = md$dataset$attribute_path,
    boundary_path = md$dataset$boundary_path
  )

  # return object
  new_project(
    dataset = d,
    name = md$name,
    author_name = md$author_name,
    author_email = md$author_email,
    themes = lapply(md$themes, deserialize.Theme, dataset = d),
    costs = lapply(md$costs, deserialize.Cost, dataset = d),
    locks = lapply(md$locks, deserialize.Lock, dataset = d)
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
#' @export
write_project <- function(x, path) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## project
    inherits(project, "Project"),
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

  # save metadata
  yaml::write_yaml(
    list(
      name = x$name,
      author_name = x$author_name,
      author_email = x$author_email,
      dataset = list(
        spatial_path = spatial_path,
        attribute_path = attribute_path,
        boundary_path = boundary_path
      ),
      themes = lapply(x$themes, serialize_object.Theme),
      costs = lapply(x$costs, serialize_object.Cost),
      locks = lapply(x$locks, serialize_object.Lock)
    ),
    file = path
  )

  # return success
  invisible(TRUE)
}
