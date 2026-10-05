test_that("new_solution", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  m <- eval_prioritization(p, s, p$dataset$get_column_data("solution"))
  l <- new_layer(
    dataset = create_dataset_from_sf(p$dataset$get_sf()),
    tile = create_tile_from_sf(p$dataset$get_sf(), verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_solution(
    name = "solution",
    layer = l,
    settings = s,
    metrics = m
  )
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "solution")
  expect_equal(x$layer, l)
  expect_equal(x$settings, s)
  expect_equal(x$metrics, m)
})

test_that("serialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  m <- eval_prioritization(p, s, p$dataset$get_column_data("solution"))
  l <- new_layer(
    dataset = create_dataset_from_sf(p$dataset$get_sf()),
    tile = create_tile_from_sf(p$dataset$get_sf(), verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  d <- new_solution(
    name = "solution",
    layer = l,
    settings = s,
    metrics = m
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "solution")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Solution")
  expect_equal(x$id, d$id)
})

test_that("deserialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  m <- eval_prioritization(p, s, p$dataset$get_column_data("solution"))
  l <- new_layer(
    dataset = p$dataset,
    tile = create_tile_from_sf(p$dataset$get_sf(), verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_solution(
    name = "solution",
    layer = l,
    settings = s,
    metrics = m
  )
  y <- deserialize_object(serialize_object(x), dataset = p$dataset)
  # run tests
  expect_equal(x, y)
})

test_that("create_solution", {
  # define skips
  skip_if_sim_deps_not_installed()
  # prepare data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  m <- eval_prioritization(p, s, p$dataset$get_column_data("solution"))
  v <- sample.int(3, p$dataset$get_n_pu(), replace = TRUE)
  p$dataset$set_column_data("solv", v)
  # create object
  x <- create_solution(
    name = "sol",
    project = p,
    column = "solv",
    provenance = simulate_provenance(),
    legend = simulate_solution_legend(),
    settings = s,
    metrics = m
  )
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "sol")
  expect_equal(x$layer$column, "solv")
  expect_equal(x$settings, s)
  expect_equal(x$metrics, m)
  expect_true(file.exists(x$layer$tile$path))
})

test_that("create_solution_from_prioritization (metrics = NULL)", {
  # define skips
  skip_if_sim_deps_not_installed()
  skip_if_not_installed("prioritizr")
  skip_if_not_installed("rcbc")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # set all targets and weights to be equal
  s$features$target <- 0.01
  s$features$weight <- 1
  # ensure no active costs
  s$costs$zones <- NA
  # generate prioritization
  d <- solve_prioritization(p, s)
  # create object
  x <- create_solution_from_prioritization(
    name = "sol",
    prioritization = d,
    project = p,
    column = "solv",
    settings = s
  )
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "sol")
  expect_equal(x$settings, s)
  expect_equal(x$layer$column, "solv")
  expect_true(file.exists(x$layer$tile$path))
  expect_type(x$metrics, "list")
  expect_type(x$metrics$summary, "list")
  expect_type(x$metrics$features, "list")
  expect_type(x$metrics$features$name, "list")
  expect_type(x$metrics$features$total, "list")
  expect_type(x$metrics$features$units, "list")
  expect_s3_class(x$metrics$features$held, "data.frame")
  expect_s3_class(x$metrics$features$locked, "data.frame")
  expect_true(assertthat::noNA(as.matrix(x$metrics$features$held)))
  expect_true(assertthat::noNA(as.matrix(x$metrics$features$locked)))
  expect_type(x$metrics$locks, "list")
  expect_type(x$metrics$locks$name, "list")
  expect_type(x$metrics$locks$units, "list")
  expect_type(x$metrics$locks$total, "list")
  expect_s3_class(x$metrics$locks$held, "data.frame")
  expect_s3_class(x$metrics$locks$locked, "data.frame")
  expect_true(assertthat::noNA(as.matrix(x$metrics$locks$held)))
  expect_true(assertthat::noNA(as.matrix(x$metrics$locks$locked)))
  expect_type(x$metrics$costs, "list")
  expect_type(x$metrics$costs$name, "list")
  expect_type(x$metrics$costs$total, "list")
  expect_type(x$metrics$costs$units, "list")
  expect_s3_class(x$metrics$costs$held, "data.frame")
  expect_s3_class(x$metrics$costs$locked, "data.frame")
  expect_true(assertthat::noNA(as.matrix(x$metrics$costs$held)))
  expect_true(assertthat::noNA(as.matrix(x$metrics$costs$locked)))
})

test_that("create_solution_from_prioritization (metrics = list)", {
  # define skips
  skip_if_sim_deps_not_installed()
  skip_if_not_installed("prioritizr")
  skip_if_not_installed("rcbc")
  # simulate data
  p <- simulate_project()
  s <- simulate_prioritization_settings(p)
  # set all targets and weights to be equal
  s$features$target <- 0.01
  s$features$weight <- 1
  # ensure no active costs
  s$costs$zones <- NA
  # generate prioritization
  d <- solve_prioritization(p, s)
  # create object
  x1 <- create_solution_from_prioritization(
    name = "sol",
    prioritization = d,
    project = p,
    column = "solv1",
    settings = s,
    id = "id"
  )
  x2 <- create_solution_from_prioritization(
    name = "sol",
    prioritization = d,
    project = p,
    column = "solv2",
    settings = s,
    metrics = eval_prioritization(p, s, d),
    id = "id"
  )
  # override data
  x1$layer <- NULL
  x2$layer <- NULL
  # run tests
  expect_s3_class(x1, "Solution")
  expect_s3_class(x2, "Solution")
  expect_equal(x1, x2)
})
