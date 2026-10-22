test_that("numeric vector", {
  # define skips
  skip_if_not_installed("prioritizr")
  skip_on_os("windows")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  status <- sample.int(length(p$zones), p$dataset$get_n_pu(), replace = TRUE)
  status[c(2, 4)] <- NA_real_
  # create object
  x <- eval_prioritization(p, s, status)
  # run tests
  expect_type(x, "list")
  expect_type(x$coverage, "list")
  expect_type(x$performance, "list")
  expect_type(x$features, "list")
  expect_type(x$locks, "list")
  expect_type(x$costs, "list")
})

test_that("Prioritization", {
  # define skips
  skip_on_os("windows")
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  prioritization <- solve_prioritization(p, s)
  # create object
  x <- eval_prioritization(p, s, prioritization)
  # run tests
  expect_type(x, "list")
  expect_type(x, "list")
  expect_type(x$coverage, "list")
  expect_type(x$performance, "list")
  expect_type(x$features, "list")
  expect_type(x$locks, "list")
  expect_type(x$costs, "list")
})
