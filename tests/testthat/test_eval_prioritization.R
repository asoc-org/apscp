test_that("numeric vector", {
  # simulate data
  p <- simulate_project()
  status <- sample.int(length(p$zones), p$dataset$get_n_pu(), replace = TRUE)
  status[c(2, 4)] <- NA_real_
  # create object
  x <- eval_prioritization(p, status)
  # run tests
  expect_type(x, "list")
  expect_s3_class(x$summary, "data.frame")
  expect_type(x$features, "list")
  expect_s3_class(x$features$relative, "data.frame")
  expect_s3_class(x$features$absolute, "data.frame")
  expect_type(x$locks, "list")
  expect_s3_class(x$locks$relative, "data.frame")
  expect_s3_class(x$locks$absolute, "data.frame")
  expect_type(x$costs, "list")
  expect_s3_class(x$costs$relative, "data.frame")
  expect_s3_class(x$costs$absolute, "data.frame")
})

test_that("Prioritization", {
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  prioritization <- solve_prioritization(p, s)
  # create object
  x <- eval_prioritization(p, prioritization)
  # run tests
  expect_type(x, "list")
  expect_s3_class(x$summary, "data.frame")
  expect_type(x$features, "list")
  expect_s3_class(x$features$relative, "data.frame")
  expect_s3_class(x$features$absolute, "data.frame")
  expect_type(x$locks, "list")
  expect_s3_class(x$locks$relative, "data.frame")
  expect_s3_class(x$locks$absolute, "data.frame")
  expect_type(x$costs, "list")
  expect_s3_class(x$costs$relative, "data.frame")
  expect_s3_class(x$costs$absolute, "data.frame")
})
