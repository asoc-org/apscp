test_that("basic", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- simulate_project()
  s <- withr::with_seed(500, simulate_prioritization_settings(p))
  # set all targets and weights to be equal
  s$features$target <- 0.3
  s$features$weight <- 1
  # ensure no active costs or locks
  s$locks <- s$locks[FALSE, , drop = FALSE]
  s$costs$zones <- NA
  # generate solution
  x <- solve_prioritization(p, s)
  # run tests
  expect_s3_class(x, "Prioritization")
  expect_type(x, "double")
  expect_true(all(seq_along(p$zones) %in% x))
})

test_that("active costs", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- simulate_project()
  s <- withr::with_seed(500, simulate_prioritization_settings(p))
  # identify targets for zones with costs
  i <- s$features$zone %in% s$cost$zone
  # set all targets and weights for zones with costs to be zero
  s$features$target[i] <- 0
  # set all targets and weights for other zones to be positive
  s$features$target[!i] <- 0.3
  s$features$weight[!i] <- 1
  # ensure no active locks
  s$locks <- s$locks[FALSE, , drop = FALSE]
  # generate solution
  x <- solve_prioritization(p, s)
  # run tests
  expect_s3_class(x, "Prioritization")
  expect_type(x, "double")
  expect_true(all(match(s$locks$zone, p$zones) %in% x))
})

test_that("active locks", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # set all targets and weights to be equal
  s$features$target <- 0.01
  s$features$weight <- 1
  # ensure no active costs
  s$costs$zones <- NA
  # generate solution
  x <- solve_prioritization(p, s)
  # run tests
  expect_s3_class(x, "Prioritization")
  expect_type(x, "double")
  expect_true(
    all(
      vapply(p$locks, FUN.VALUE = logical(1), function(y) {
        idx <- which(p$dataset$get_column_data(y$layer$column) > 1e-4)
        all(x[idx] == match(y$zone, p$zones))
      })
    ),
    "locks not applied correctly"
  )
})

test_that("both solvers work", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("gurobi")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # generate solution
  x <- solve_prioritization(p, s, solver = "cbc", gap = 0)
  y <- solve_prioritization(p, s, solver = "gurobi", gap = 0)
  # run tests
  expect_s3_class(x, "Prioritization")
  expect_type(x, "double")
  expect_s3_class(y, "Prioritization")
  expect_type(y, "double")
  expect_equal(attr(x, "objective"), attr(y, "objective"), tolerance = 1e-4)
})
