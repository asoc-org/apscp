#' @include internal.R
NULL

#' Read matrix
#'
#' Read [Matrix::sparseMatrix()] object from disk.
#'
#' @param path `character` file path.
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family io
#'
#' @examples
#' # create object
#' x <- Matrix::sparseMatrix(i = 1:4, j = 5:8, x = 10:13, dims = c(4, 9))
#'
#' # print matrix
#' print(x)
#'
#' # define file path to save data
#' path <- tempfile(fileext = ".rds")
#'
#' # write matrix
#' write_matrix(x, path)
#'
#' # read matrix
#' y <- read_matrix(path)
#'
#' # print imported matrix,
#' # we can see that it's the same as the original matrix
#' print(y)
#'
#' @export
read_matrix <- function(path) {
  # assert valid arguments
  assertthat::assert_that(
    assertthat::is.string(path),
    assertthat::noNA(path),
    assertthat::is.readable(path)
  )
  # import data
  x <- readRDS(path)
  # return matrix
  Matrix::sparseMatrix(
    i = x$i, j = x$j, x = x$x,
    index1 = FALSE, repr = "C",
    symmetric = x$sym,
    dims = c(x$nr,  x$nc)
  )
}

#' Write matrix
#'
#' Write [Matrix::sparseMatrix()] object to disk.
#'
#' @param x [Matrix::sparseMatrix()] object.
#'
#' @inheritParams read_matrix
#'
#' @return An invisible `TRUE` indicating success.
#'
#' @family io
#'
#' @inherit read_matrix examples
#'
#' @export
write_matrix <- function(x, path) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(x, "Matrix"),
    assertthat::is.string(path),
    assertthat::noNA(path)
  )
  # convert to sparse triplet format
  if (Matrix::isSymmetric(x)) {
    x <- as_Matrix(x, "dsTMatrix")
  } else {
    x <- as_Matrix(x, "dgTMatrix")
  }
  # save data
  saveRDS(
    list(
      i = x@i, j = x@j, x = x@x,
      nr = nrow(x), nc = ncol(x),
      sym = inherits(x, "dsTMatrix")
    ),
    file = path
  )
}
