test_that("new_dataset", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_spatial_data()
  f1 <- tempfile(fileext = ".gpkg")
  f2 <- tempfile(fileext = ".rds")
  sf::write_sf(d, f1)
  write_matrix(prioritizr::boundary_matrix(d), f2)
  x <- new_dataset(f1, f2)
  # run tests
  expect_r6_class(x, "Dataset")
  expect_message(print(x))
})

test_that("create_dataset_from_sf", {
  # create object
  x <- create_dataset_from_sf(simulate_spatial_data())
  # run tests
  expect_r6_class(x, "Dataset")
})

test_that("methods", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_spatial_data()
  x <- create_dataset_from_sf(d)
  # run tests
  ## n_pu
  expect_equal(x$get_n_pu(), nrow(d))
  ## has column
  expect_true(x$has_column("cost"))
  ## get_column_data
  expect_equal(x$get_column_data("cost"), d$cost)
  ## get_dataframe
  expect_equal(
    tibble::as_tibble(x$get_dataframe("cost")),
    tibble::as_tibble(sf::st_drop_geometry(d[, "cost", drop = FALSE]))
  )
  expect_equal(
    tibble::as_tibble(x$get_dataframe(c("cost", "aspas"))),
    tibble::as_tibble(
      sf::st_drop_geometry(d[, c("cost", "aspas"), drop = FALSE])
    )
  )
  expect_equal(
    tibble::as_tibble(x$get_dataframe(NULL)),
    tibble::as_tibble(sf::st_drop_geometry(d))
  )
  ## get_sf
  expect_equal(
    tibble::as_tibble(sf::st_drop_geometry(x$get_sf("cost"))),
    tibble::as_tibble(sf::st_drop_geometry(d[, "cost", drop = FALSE])),
    ignore_attr = TRUE
  )
  expect_equal(
    sf::st_geometry(x$get_sf("cost")),
    sf::st_geometry(d[, "cost", drop = FALSE]),
    ignore_attr = TRUE
  )
  expect_equal(
    tibble::as_tibble(sf::st_drop_geometry(x$get_sf(NULL))),
    tibble::as_tibble(sf::st_drop_geometry(d)),
    ignore_attr = TRUE
  )
  expect_equal(
    sf::st_geometry(x$get_sf(NULL)),
    sf::st_geometry(d),
    ignore_attr = TRUE
  )
  ## get_column_total
  expect_equal(
    x$get_column_total("cost"),
    setNames(sum(d$cost, na.rm = TRUE), "cost")
  )
  ## get_column_held
  status <- sample(c(0, 1), x$get_n_pu(), replace = TRUE)
  expect_equal(
    x$get_column_held("cost", status),
    sum(d$cost * status, na.rm = TRUE) /
      sum(d$cost, na.rm = TRUE)
  )
  ## get_pu_status
  expect_equal(
    x$get_pu_status(
      "Biodiversity",
      c("Biodiversity" = "aspas", "Scientific" = "camps")
    ),
    replace(
      rep(0, x$get_n_pu()),
      which(d$aspas > 0.5),
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
  ## set_column_data (numeric)
  expect_false(x$has_column("new"))
  v <- round(runif(x$get_n_pu()), 3)
  x$set_column_data("new", v)
  expect_equal(v, x$get_column_data("new"))
  ## set_column_data (character and overwrite)
  v2 <- rep("a", x$get_n_pu())
  x$set_column_data("new", v2)
  expect_equal(v2, x$get_column_data("new"))
})

test_that("read_dataset/write_dataset (non-compressed)", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- create_dataset_from_sf(simulate_spatial_data())
  path1 <- tempfile(fileext = ".gpkg.zip")
  path2 <- tempfile(fileext = ".rds")
  # run file operations
  write_dataset(x, path1, path2)
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(
    x$get_dataframe(),
    y$get_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(x$get_boundary_data(), y$get_boundary_data())
})

test_that("read_dataset/write_dataset (compressed)", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- create_dataset_from_sf(simulate_spatial_data())
  path1 <- tempfile(fileext = ".gpkg")
  path2 <- tempfile(fileext = ".rds")
  # run file operations
  write_dataset(x, path1, path2)
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(
    x$get_dataframe(),
    y$get_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(x$get_boundary_data(), y$get_boundary_data())
})

test_that("read_dataset/write_dataset (relative paths)", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- create_dataset_from_sf(simulate_spatial_data())
  path1 <- tempfile(fileext = ".gpkg")
  path2 <- tempfile(fileext = ".rds")
  # run file operations
  withr::with_dir(
    tempdir(),
    write_dataset(x, basename(path1), basename(path2))
  )
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(
    x$get_dataframe(),
    y$get_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(x$get_boundary_data(), y$get_boundary_data())
})
