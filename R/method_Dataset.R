#' Read dataset
#'
#' Import a [Dataset] object.
#'
#' @param spatial_path `character` file path for spatial data.
#'
#' @param attribute_path `character` file path for attribute data.
#'
#' @param boundary_path `character` file path for boundary data.
#'
#' @inherit new_dataset return
#'
#' @examples
#' # TODO
#'
#' @export
read_dataset <- function(spatial_path, attribute_path, boundary_path) {
  # assert arguments are valid
  assertthat::assert_that(
    ## spatial_path
    assertthat::is.string(spatial_path),
    assertthat::noNA(spatial_path),
    assertthat::is.readable(spatial_path),
    ## attribute_path
    assertthat::is.string(attribute_path),
    assertthat::noNA(attribute_path),
    assertthat::is.readable(attribute_path),
    ## boundary_path
    assertthat::is.string(boundary_path),
    assertthat::noNA(boundary_path),
    assertthat::is.readable(boundary_path)
  )

  # import data
  spatial_data <- terra::rast(spatial_path)
  attribute_data <- vroom::vroom(attribute_path)
  boundary_data <- vroom::vroom(
    boundary_path,
    col_names = c("i", "j", "x"),
    col_types = "iid"
  )

  # convert boundary data to sparse matrix format
  boundary_data <- Matrix::sparseMatrix(
    i = boundary_data[[1]], j = boundary_data[[2]], x = boundary_data[[3]],
    index1 = FALSE, repr = "C", symmetric = TRUE,
    dims = rep(nrow(attribute_data), 2)
  )

  # return object
  new_dataset(
    spatial_data = spatial_data,
    attribute_data = attribute_data,
    boundary_data = boundary_data
  )
}

#' Write dataset
#'
#' Write a [Dataset] object.
#'
#' @param x [Dataset] object.
#'
#' @param spatial_path `character` file path for spatial data.
#'
#' @param attribute_path `character` file path for attribute data.
#'
#' @param boundary_path `character` file path for boundary data.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @examples
#' # TODO
#'
#' @export
write_dataset <- function(x, spatial_path, attribute_path, boundary_path) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    inherits(x, "Dataset"),
    ## spatial_path
    assertthat::is.string(spatial_path),
    assertthat::noNA(spatial_path),
    dir.exists(dirname(spatial_path)),
    ## attribute_path
    assertthat::is.string(attribute_path),
    assertthat::noNA(attribute_path),
    dir.exists(dirname(attribute_path)),
    ## boundary_path
    assertthat::is.string(boundary_path),
    assertthat::noNA(boundary_path),
    dir.exists(dirname(boundary_path))
  )

  # save spatial data
  terra::writeRaster(x$spatial_data, filename = spatial_path, overwrite = TRUE)

  # save attribute data
  vroom::vroom_write(x$attribute_data, file = attribute_path, progress = FALSE)

  # save boundary data
  m <- as_Matrix(x$boundary_data, "dgTMatrix")
  vroom::vroom_write(
    data.frame(i = m@i, j = m@j, x = m@x),
    file = boundary_path,
    progress = FALSE
  )

  # return success
  invisible(TRUE)
}
