test_that("basic", {
  skip_if_not_installed("rcbc")
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
  x <- prioritization(p, s)
  # run tests
  expect_type(x, "list")
  expect_named(x, c("solution", "results"))
  expect_type(x$solution, "double")
  expect_true(all(seq_along(p$zones) %in% x$solution))
})

test_that("active costs", {
  skip_if_not_installed("rcbc")
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
  x <- prioritization(p, s)
  # run tests
  expect_type(x, "list")
  expect_named(x, c("solution", "results"))
  expect_type(x$solution, "double")
  expect_true(all(match(s$locks$zone, p$zones) %in% x$solution))
})

test_that("active locks", {
  skip_if_not_installed("rcbc")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # set all targets and weights to be equal
  s$features$target <- 0.01
  s$features$weight <- 1
  # ensure no active costs
  s$costs$zones <- NA
  # generate solution
  x <- prioritization(p, s)
  # run tests
  expect_true(
    all(
      vapply(p$locks, FUN.VALUE = logical(1), function(y) {
        idx <- which(p$dataset$get_column_data(y$layer$column) > 1e-4)
        all(x$solution[idx] == match(y$zone, p$zones))
      })
    ),
    "locks not applied correctly"
  )
})

test_that("both solvers work", {
  skip_if_not_installed("rcbc")
  skip_if_not_installed("gurobi")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # generate solution
  x <- prioritization(p, s, solver = "cbc", gap = 0)
  y <- prioritization(p, s, solver = "gurobi", gap = 0)
  # run tests
  expect_equal(x, y)
})
