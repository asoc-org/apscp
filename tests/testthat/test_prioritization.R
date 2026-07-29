test_that("no locks", {
  skip_if_not_installed("rcbc")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # ensure no active locks
  s$locks <- s$locks[FALSE, , drop = FALSE]
  # generate solution
  x <- prioritization(p, s)
  # run tests
  expect_type(x, "list")
  expect_named(x, c("solution", "results"))
  expect_type(x$solution, "double")
  expect_true(all(seq_along(p$zones) %in% x$solution))
})

test_that("active locks", {
  skip_if_not_installed("rcbc")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
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
