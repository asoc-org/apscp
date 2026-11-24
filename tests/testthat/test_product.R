test_that("new_product", {
  # define skips
  skip_if_sim_deps_not_installed()
  # simulate project
  sim_project <- simulate_project()
  # create object
  x <- new_product(
    name = "prod",
    layer = new_layer(
      column = "solution",
      total = 500,
      dataset = sim_project$dataset,
      tile = sim_project$tiles[[1]],
      legend = simulate_solution_legend(),
      provenance = simulate_provenance(),
      details = "extra info"
    )
  )
  # run tests
  expect_s3_class(x, "Product")
})

test_that("serialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # simulate project
  p <- simulate_project()
  d <- new_product(
    name = "prod",
    layer = new_layer(
      column = "solution",
      total = 500,
      dataset = p$dataset,
      tile = p$tiles[[1]],
      legend = simulate_solution_legend(),
      provenance = simulate_provenance(),
      details = "extra info"
    )
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "prod")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Product")
  expect_equal(x$id, d$id)
})

test_that("deserialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  x <- new_product(
    name = "prod",
    layer = new_layer(
      column = "solution",
      total = 500,
      dataset = p$dataset,
      tile = p$tiles[[1]],
      legend = simulate_solution_legend(),
      provenance = simulate_provenance(),
      details = "extra info"
    )
  )
  y <- deserialize_object(serialize_object(x), dataset = p$dataset)
  # run tests
  expect_equal(x, y)
})

test_that("create_product", {
  # define skips
  skip_if_sim_deps_not_installed()
  # simulate project
  sim_project <- simulate_project()
  # create object
  v <- round(runif(sim_project$dataset$get_n_pu()), 3)
  x <- create_product(
    name = "prod",
    values = v,
    project = sim_project,
    legend = simulate_solution_legend(),
    provenance = simulate_provenance()
  )
  # run tests
  expect_s3_class(x, "Product")
  expect_equal(
    v,
    sim_project$dataset$get_pu_column_data(x$layer$column)
  )
})
