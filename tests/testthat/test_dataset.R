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

test_that("attribute methods", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_spatial_data()
  x <- create_dataset_from_sf(d)
  # run tests
  ## n_pu
  expect_equal(x$get_n_pu(), nrow(d))
  ## has_attribute_column
  expect_true(x$has_attribute_column("cost"))
  ## get_attribute_data
  expect_equal(x$get_attribute_data("cost"), d$cost)
  ## get_attribute_dataframe
  expect_equal(
    tibble::as_tibble(x$get_attribute_dataframe("cost")),
    tibble::as_tibble(sf::st_drop_geometry(d[, "cost", drop = FALSE]))
  )
  expect_equal(
    tibble::as_tibble(x$get_attribute_dataframe(c("cost", "aspas"))),
    tibble::as_tibble(
      sf::st_drop_geometry(d[, c("cost", "aspas"), drop = FALSE])
    )
  )
  expect_equal(
    tibble::as_tibble(x$get_attribute_dataframe(NULL)),
    tibble::as_tibble(sf::st_drop_geometry(d))
  )
  ## get_attribute_sf
  expect_equal(
    tibble::as_tibble(sf::st_drop_geometry(x$get_attribute_sf("cost"))),
    tibble::as_tibble(sf::st_drop_geometry(d[, "cost", drop = FALSE])),
    ignore_attr = TRUE
  )
  expect_equal(
    sf::st_geometry(x$get_attribute_sf("cost")),
    sf::st_geometry(d[, "cost", drop = FALSE]),
    ignore_attr = TRUE
  )
  expect_equal(
    tibble::as_tibble(sf::st_drop_geometry(x$get_attribute_sf(NULL))),
    tibble::as_tibble(sf::st_drop_geometry(d)),
    ignore_attr = TRUE
  )
  expect_equal(
    sf::st_geometry(x$get_attribute_sf(NULL)),
    sf::st_geometry(d),
    ignore_attr = TRUE
  )
  ## get_attribute_total
  expect_equal(
    x$get_attribute_total("cost"),
    setNames(sum(d$cost, na.rm = TRUE), "cost")
  )
  ## get_attribute_held
  status <- sample(c(0, 1), x$get_n_pu(), replace = TRUE)
  expect_equal(
    x$get_attribute_held("cost", status),
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
  ## set_attribute_data (numeric)
  expect_false(x$has_attribute_column("new"))
  v <- round(runif(x$get_n_pu()), 3)
  x$set_attribute_data("new", v)
  expect_equal(v, x$get_attribute_data("new"))
  ## set_attribute_data (character and overwrite)
  v2 <- rep("a", x$get_n_pu())
  x$set_attribute_data("new", v2)
  expect_equal(v2, x$get_attribute_data("new"))
})

test_that("attribute methods", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_spatial_data()
  x <- create_dataset_from_sf(d, solution_columns = "solution")
  # run tests
  ## has_solution_column
  expect_true(x$has_solution_column("solution"))
  expect_false(x$has_solution_column("asdf"))
  ## get_solution_data
  expect_equal(
    x$get_solution_data("solution"),
    d$solution
  )
  ## get_solution_dataframe
  expect_equal(
    x$get_solution_dataframe("solution"),
    data.frame(solution = d$solution)
  )
  ## append_solution_data
  v <- sample.int(6, x$get_n_pu(), replace = TRUE)
  x$append_solution_data("sol2", v)
  expect_equal(x$get_solution_data("sol2"), v)
  ## get_solution_dataframe
  expect_equal(
    x$get_solution_dataframe(c("solution", "sol2")),
    data.frame(solution = d$solution, sol2 = v)
  )
  expect_equal(
    x$get_solution_dataframe(NULL),
    data.frame(solution = d$solution, sol2 = v)
  )
  ## set_solution data
  v2 <- list(
    sol3 = sample.int(6, x$get_n_pu(), replace = TRUE),
    sol4 = sample.int(6, x$get_n_pu(), replace = TRUE)
  )
  x$set_solution_data(v2)
  expect_equal(x$get_solution_data("sol3"), v2[[1]])
  expect_equal(x$get_solution_data("sol4"), v2[[2]])
})

test_that("read_dataset/write_dataset (non-compressed)", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- create_dataset_from_sf(
    simulate_spatial_data(),
    solution_columns = "solution"
  )
  path1 <- tempfile(fileext = ".gpkg.zip")
  path2 <- tempfile(fileext = ".rds")
  # run file operations
  write_dataset(x, path1, path2)
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(
    x$get_attribute_dataframe(),
    y$get_attribute_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(
    x$get_solution_dataframe(),
    y$get_solution_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(x$get_boundary_data(), y$get_boundary_data())
})

test_that("read_dataset/write_dataset (compressed)", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- create_dataset_from_sf(
    simulate_spatial_data(),
    solution_columns = "solution"
  )
  path1 <- tempfile(fileext = ".gpkg")
  path2 <- tempfile(fileext = ".rds")
  # run file operations
  write_dataset(x, path1, path2)
  y <- read_dataset(path1, path2)
  # run tests
  expect_equal(
    x$get_attribute_dataframe(),
    y$get_attribute_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(
    x$get_solution_dataframe(),
    y$get_solution_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(x$get_boundary_data(), y$get_boundary_data())
})

test_that("read_dataset/write_dataset (relative paths)", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- create_dataset_from_sf(
    simulate_spatial_data(),
    solution_columns = "solution"
  )
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
    x$get_attribute_dataframe(),
    y$get_attribute_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(
    x$get_solution_dataframe(),
    y$get_solution_dataframe(),
    ignore_attr = TRUE
  )
  expect_equal(x$get_boundary_data(), y$get_boundary_data())
})

test_that("builtin dataset", {
  # create object
  x <- read_builtin_project()$dataset
  # attribute data
  expect_true(x$has_attribute_column("ASPA"))
  expect_type(x$get_attribute_data("ASPA"), "double")
  expect_type(x$get_attribute_total("ASPA"), "double")
  expect_length(x$get_attribute_total("ASPA"), 1L)
  # solution data
  expect_true(x$has_solution_column("precompute_3"))
  expect_true(x$has_solution_column(c("precompute_3", "precompute_1")))
  expect_type(x$get_solution_data("precompute_3"), "double")
  expect_type(x$get_solution_total("precompute_3"), "double")
  expect_length(x$get_solution_total("precompute_3"), 1L)
})
