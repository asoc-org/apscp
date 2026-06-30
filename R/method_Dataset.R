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
  attribute_data <- vroom::vroom(
    attribute_path,
    col_type = vroom::cols(
      "_index" = vroom::col_integer(),
      .default = vroom::col_double()
    )
  )
  boundary_data <- vroom::vroom(boundary_path, col_types = "iid")

  # remove vroom attributes
  attr(attribute_data, "spec") <- NULL
  attr(attribute_data, "problems") <- NULL

  # coerce _index column to integer
  attribute_data[["_index"]] <- as.integer(attribute_data[["_index"]])

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
  m <- as_Matrix(x$boundary_data, "dsTMatrix")
  vroom::vroom_write(
    data.frame(i = m@i, j = m@j, x = m@x),
    file = boundary_path,
    progress = FALSE
  )

  # return success
  invisible(TRUE)
}

#' Simulate dataset
#'
#' Simulate a [Dataset] object.
#'
#' @inherit new_dataset return
#'
#' @examples
#' # simulate dataset
#' d <- simulate_dataset()
#'
#' # preview object
#' print(d)
#' @export
simulate_dataset <- function() {
  # create simulated solution with 3 zones
  solution <- prioritizr::get_sim_pu_raster()
  idx <- terra::cells(is.na(solution), 0)[[1]]
  solution[idx] <- withr::with_seed(
    seed = 500,
    sample(seq(0, 3), size = length(idx), replace = TRUE)
  )

  # prepare spatial layers for dataset
  d <- c(
    prioritizr::get_sim_pu_raster(),
    prioritizr::get_sim_features(),
    prioritizr::get_sim_locked_in_raster(),
    prioritizr::get_sim_locked_out_raster(),
    solution
  )
  names(d) <- c(
    "pu",
    paste0("feat_", seq_len(terra::nlyr(d) - 4L)),
    "locked_in",
    "locked_out",
    "solution"
  )

  # set coordinate reference system
  terra::crs(d) <- "epsg:3857"

  # return dataset
  create_dataset(d, pu_name = "pu")
}
