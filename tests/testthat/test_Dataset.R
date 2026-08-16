test_that("new_dataset", {
  # create object
  d <- simulate_spatial_data()
  x <- new_dataset(d, prioritizr::boundary_matrix(d))
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
  ## get_spatial_column_data
  expect_equal(x$get_spatial_column_data("cost"), x$pu_data[, "cost"])
  ## get_column_total
  expect_equal(x$get_column_total("cost"), sum(x$pu_data$cost, na.rm = TRUE))
  ## get_column_held
  status <- sample(c(0, 1), x$get_n_pu(), replace = TRUE)
  expect_equal(
    x$get_column_held("cost", status),
    sum(x$pu_data$cost * status, na.rm = TRUE) /
      sum(x$pu_data$cost, na.rm = TRUE)
  )
  ## get_pu_status
  expect_equal(
    x$get_pu_status(
      "Biodiversity",
      c("Biodiversity" = "aspas", "Scientific" = "camps")
    ),
    replace(
      rep(0, x$get_n_pu()),
      which(x$pu_data$aspas > 0.5),
      1
    )
  )
  expect_equal(
    x$get_pu_status(
      "Biodiversity",
      c("Scientific" = "aspas", "Biodiversity" = "aspas")
    ),
    rep(0, x$get_n_pu())
  )
  ## set_column_data
  expect_false(x$has_column("new"))
  v <- round(runif(x$get_n_pu()), 3)
  x$set_column_data("new", v)
  expect_equal(v, x$get_column_data("new"))
})

test_that("read_dataset/write_dataset", {
  # create object
  x <- create_dataset(simulate_spatial_data())
  path1 <- tempfile(fileext = ".gpkg.zip")
  path2 <- tempfile(fileext = ".csv.gz")
  # run file operations
  write_dataset(x, path1, path2)
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(
    tibble::as_tibble(sf::st_drop_geometry(x$pu_data)),
    tibble::as_tibble(sf::st_drop_geometry(y$pu_data)),
    ignore_attr = TRUE
  )
  expect_equal(x$boundary_data, y$boundary_data)
})
