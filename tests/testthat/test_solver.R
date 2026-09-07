test_that("solver", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object,
  d <- simulate_project()
  x <- solver(project = d)
  # run tests
  expect_s3_class(x, "solver")
})

test_that("built-in dataset", {
  # create object
  d <- read_builtin_project()
  x <- solver(project = d)
  # run tests
  expect_s3_class(x, "solver")
})
