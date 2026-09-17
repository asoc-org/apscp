test_that("new_solution", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_solution(name = "solution", layer = l)
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "solution")
  expect_equal(x$layer, l)
})

test_that("serialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  d <- new_solution(name = "solution", layer = l)
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
  s <- simulate_spatial_data()
  w <- create_dataset_from_sf(s)
  l <- new_layer(
    dataset = w,
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_solution(name = "solution", layer = l)
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})

test_that("create_solution", {
  # define skips
  skip_if_sim_deps_not_installed()
  # prepare data
  p <- simulate_project()
  v <- sample.int(3, p$dataset$get_n_pu(), replace = TRUE)
  p$dataset$set_column_data("solv", v)
  # create object
  x <- create_solution(
    name = "sol",
    project = p,
    column = "solv",
    provenance = simulate_provenance(),
    legend = simulate_solution_legend()
  )
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "sol")
  expect_equal(x$layer$column, "solv")
  expect_true(file.exists(x$layer$tile$path))
})

test_that("create_solution_from_prioritization", {
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
  d <- prioritization(p, s)
  # create object
  x <- create_solution_from_prioritization(
    name = "sol",
    prioritization = d,
    project = p,
    column = "solv",
  )
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "sol")
  expect_equal(x$layer$column, "solv")
  expect_true(file.exists(x$layer$tile$path))
})
