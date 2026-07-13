#' Read dataset
#'
#' Import a [Dataset] object.
#'
#' @param pu_path `character` file path for planning unit data.
#'
#' @param boundary_path `character` file path for boundary data.
#'
#' @inherit new_dataset return
#'
#' @family io
#'
#' @examples
#' # specify file paths
#' pu_path <- system.file(
#'  "extdata", "antarctic-peninsula_pu.csv.gz",
#'  package = "apscp"
#' )
#' bd_path <- system.file(
#'   "extdata", "antarctic-peninsula_bd.csv.gz",
#'  package = "apscp"
#' )
#'
#' # import data
#' x <- read_dataset(pu_path, bd_path)
#'
#' # preview object
#' print(x)
#'
#' @export
read_dataset <- function(pu_path, boundary_path) {
  # assert arguments are valid
  assertthat::assert_that(
    ## spatial_path
    assertthat::is.string(pu_path),
    assertthat::noNA(pu_path),
    assertthat::is.readable(pu_path),
    ## boundary_path
    assertthat::is.string(boundary_path),
    assertthat::noNA(boundary_path),
    assertthat::is.readable(boundary_path)
  )

  # import data
  pu_data <- vroom::vroom(
    pu_path,
    col_type = vroom::cols(
      "_index" = vroom::col_integer(),
      .default = vroom::col_double()
    )
  )
  boundary_data <- vroom::vroom(boundary_path, col_types = "iid")

  # remove vroom attributes
  class(pu_data) <- setdiff(class(pu_data), "spec_tbl_df")
  attr(pu_data, "spec") <- NULL
  attr(pu_data, "problems") <- NULL

  # coerce _index column to integer
  pu_data[["_index"]] <- as.integer(pu_data[["_index"]])

  # convert boundary data to sparse matrix format
  boundary_data <- Matrix::sparseMatrix(
    i = boundary_data[[1]], j = boundary_data[[2]], x = boundary_data[[3]],
    index1 = FALSE, repr = "C", symmetric = TRUE,
    dims = rep(nrow(pu_data), 2)
  )

  # return object
  new_dataset(
    pu_data = pu_data,
    boundary_data = boundary_data
  )
}

#' Write dataset
#'
#' Write a [Dataset] object.
#'
#' @param x [Dataset] object.
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
#' dataset <- create_dataset(sim_data)
#'
#' # define file paths for saving data
#' pu_path <- tempfile(fileext = ".csv.gz")
#' bd_path <- tempfile(fileext = ".csv.gz")
#'
#' # save files
#' write_dataset(dataset, pu_path, bd_path)
#'
#' @export
write_dataset <- function(x, pu_path, boundary_path) {
  # assert arguments are valid
  assertthat::assert_that(
    ## x
    inherits(x, "Dataset"),
    ## pu_path
    assertthat::is.string(pu_path),
    assertthat::noNA(pu_path),
    dir.exists(dirname(pu_path)),
    ## boundary_path
    assertthat::is.string(boundary_path),
    assertthat::noNA(boundary_path),
    dir.exists(dirname(boundary_path))
  )

  # save planning unit data
  vroom::vroom_write(x$pu_data, file = pu_path, progress = FALSE)

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
