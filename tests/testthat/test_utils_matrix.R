test_that("read_matrix/write_matrix (symmetric)", {
  # create object
  path <- tempfile(fileext = ".rds")
  x <- Matrix::sparseMatrix(
    i = c(1, 2, 4, 5),
    j = c(2, 1, 5, 2),
    x = c(9, 3.4, NA_real_, 4),
    dims = c(15, 15)
  )
  x <- Matrix::forceSymmetric(x, uplo = "U")
  # write matrix
  write_matrix(x, path)
  # run tests
  expect_true(file.exists(path))
  expect_equal(x, read_matrix(path))
})

test_that("read_matrix/write_matrix (non-symmetric)", {
  # create object
  path <- tempfile(fileext = ".rds")
  x <- Matrix::sparseMatrix(
    i = c(1, 2, 4, 5),
    j = c(2, 1, 5, 2),
    x = c(9, 3.4, NA_real_, 4),
    dims = c(15, 10)
  )
  # write matrix
  write_matrix(x, path)
  # run tests
  expect_true(file.exists(path))
  expect_equal(x, read_matrix(path))
})
