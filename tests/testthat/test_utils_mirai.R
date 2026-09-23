test_that("basic", {
  # setup asynchronous processing
  mirai_async_start()
  on.exit(mirai_async_stop(), add = TRUE)
  # generate solution
  a <- 1
  x <- mirai::mirai(b + 2, .args = list(b = a))[]
  # run tests
  expect_equal(x, 3)
})

test_that("prioritization", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- simulate_project()
  s <- withr::with_seed(500, simulate_prioritization_settings(p))
  # set all targets and weights to be equal
  s$features$target <- 0.3
  s$features$weight <- 1
  # setup asynchronous processing
  mirai_async_start()
  on.exit(mirai_async_stop(), add = TRUE)
  # generate solution
  x <- mirai::mirai(
    eval_prioritization(p, solve_prioritization(p, s)),
    .args = list(p = p, s = s)
  )[]
  # run tests
  expect_type(x, "list")
})
