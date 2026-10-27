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
  # generate prioritization
  x <- solve_prioritization(p, s)
  # run tests
  expect_s3_class(x, "Prioritization")
  expect_type(x, "double")
  expect_true(all(x %in% c(NA, seq(0, length(p$zones) * 2))))
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
  # generate prioritization
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
  # generate prioritization
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
  # generate prioritization
  x <- solve_prioritization(p, s, solver = "cbc", gap = 0)
  y <- solve_prioritization(p, s, solver = "gurobi", gap = 0)
  # run tests
  expect_s3_class(x, "Prioritization")
  expect_type(x, "double")
  expect_s3_class(y, "Prioritization")
  expect_type(y, "double")
  expect_equal(attr(x, "objective"), attr(y, "objective"), tolerance = 1e-4)
})

test_that("expected behavior (no locks)", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- read_builtin_project()
  s <- simulate_prioritization_settings(p)
  # ensure no active costs or locks
  s$costs$zones <- NA
  s$locks <- s$locks[0, , drop = FALSE]
  # create settings to focus only on each zone
  s <- lapply(p$zones, function(x) {
    s$features$target[s$features$zone != x] <- 0
    s
  })
  # generate prioritizations
  x <- lapply(s, function(x) {
    solve_prioritization(p, x, solver = "cbc", gap = 0)
  })
  # run tests
  expect_type(x, "list")
  expect_true(
    all(
      vapply(seq_along(x), FUN.VALUE = logical(1), function(i) {
        all(x[[i]] %in% c(NA, 0, length(p$zones) + i))
      })
    )
  )
})

test_that("expected behavior (active locks)", {
  # define skips
  skip_if_not_installed("rcbc")
  skip_if_not_installed("prioritizr")
  # simulate data
  p <- read_builtin_project()
  s <- simulate_prioritization_settings(p)
  # ensure no active costs or locks
  s$costs$zones <- NA
  # create settings to focus only on each zone
  s <- lapply(p$zones, function(x) {
    s$locks$zone <- x
    s$features$target[s$features$zone != x] <- 0
    s
  })
  # generate prioritizations
  x <- lapply(s, function(x) {
    solve_prioritization(p, x, solver = "cbc", gap = 0)
  })
  # run tests
  expect_type(x, "list")
  expect_true(
    all(
      vapply(seq_along(x), FUN.VALUE = logical(1), function(i) {
        all(x[[i]] %in% c(NA, 0, i, length(p$zones) + i))
      })
    )
  )
})

test_that("convert_lock_settings_to_allocation", {
  # run tests
  ## no allocated zones
  expect_equal(
    convert_lock_settings_to_allocation(
      data.frame(
        id = character(0),
        name = character(0),
        zone = character(0),
        column = character(0),
        priority = numeric(0)
      )
    ),
    character(0)
  )
  expect_equal(
    convert_lock_settings_to_allocation(
      data.frame(
        id = "layer",
        name = "name",
        zone = NA_character_,
        column = "column",
        priority = 1
      )
    ),
    character(0)
  )
  ## one allocated zone
  expect_equal(
    convert_lock_settings_to_allocation(
      data.frame(
        id = "layer1",
        name = "name1",
        zone = "zone1",
        column = "column1",
        priority = 100
      )
    ),
    c("zone1" = "column1")
  )
  expect_equal(
    convert_lock_settings_to_allocation(
      data.frame(
        id = c("layer1", "layer2"),
        name = c("name1", "name2"),
        zone = c(NA_character_, "zone1"),
        column = c("column1", "column2"),
        priority = c(1, 100)
      )
    ),
    c("zone1" = "column2")
  )
  ## multiple allocated zones
  expect_equal(
    convert_lock_settings_to_allocation(
      data.frame(
        id = c("layer1", "layer2"),
        name = c("name1", "name2"),
        zone = c("zone1", "zone2"),
        column = c("column1", "column2"),
        priority = c(1, 100)
      )
    ),
    c("zone2" = "column2", "zone1" = "column1")
  )
  expect_equal(
    convert_lock_settings_to_allocation(
      data.frame(
        id = c("layer1", "layer2"),
        name = c("name1", "name2"),
        zone = c("zone1", "zone1"),
        column = c("column1", "column2"),
        priority = c(1, 100)
      )
    ),
    c("zone1" = "column2", "zone1" = "column1")
  )
})
