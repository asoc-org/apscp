test_that("new_dataset", {
  # create object
  s <- simulate_spatial_data()
  d <- sf::st_drop_geometry(s)
  d[["_index"]] <- seq_len(nrow(d))
  x <- new_dataset(d, prioritizr::boundary_matrix(s))
  # run tests
  expect_r6_class(x, "Dataset")
})

test_that("methods", {
  # create object
  x <- create_dataset(simulate_spatial_data())
  # run tests
  ## n_pu
  expect_equal(x$get_n_pu(), nrow(x$pu_data))
  ## has column
  expect_true(x$has_column("cost"))
  ## get_column_data
  expect_equal(x$get_column_data("cost"), x$pu_data$cost)
  ## get_column_total
  expect_equal(x$get_column_total("cost"), sum(x$pu_data$cost, na.rm = TRUE))
  ## set_column_data
  expect_false(x$has_column("new"))
  v <- round(runif(x$get_n_pu()), 3)
  x$set_column_data("new", v)
  expect_equal(v, x$get_column_data("new"))
})

test_that("read_dataset/write_dataset", {
  # create object
  x <- create_dataset(simulate_spatial_data())
  path1 <- tempfile(fileext = ".gpkg")
  path2 <- tempfile(fileext = ".csv.gz")
  # run file operations
  write_dataset(x, path1, path2)
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(x$pu_data, y$pu_data, ignore_attr = TRUE)
  expect_false(assertthat::has_name(x$pu_data, "geometry"))
  expect_false(assertthat::has_name(x$pu_data, "geom"))
  expect_equal(x$boundary_data, y$boundary_data)
})
