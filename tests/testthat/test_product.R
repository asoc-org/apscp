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
