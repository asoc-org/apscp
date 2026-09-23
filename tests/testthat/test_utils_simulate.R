test_that("simulate_spatial_data", {
  # define skips
  skip_if_sim_deps_not_installed()
  # run tests
  expect_s3_class(simulate_spatial_data(), "sf")
})

test_that("simulate_project", {
  # define skips
  skip_if_sim_deps_not_installed()
  # run tests
  expect_s3_class(simulate_project(), "Project")
})

test_that("simulate_continuous_legend", {
  # define skips
  skip_if_sim_deps_not_installed()
  # run tests
  expect_s3_class(simulate_continuous_legend(), "ContinuousLegend")
})

test_that("simulate_solution_legend", {
  # define skips
  skip_if_sim_deps_not_installed()
  # run tests
  expect_s3_class(simulate_solution_legend(), "CategoricalLegend")
})

test_that("simulate_binary_legend", {
  # define skips
  skip_if_sim_deps_not_installed()
  # run tests
  expect_s3_class(simulate_binary_legend(), "CategoricalLegend")
})

test_that("simulate_provenance", {
  # define skips
  skip_if_sim_deps_not_installed()
  # run tests
  expect_s3_class(simulate_provenance(), "Provenance")
})

test_that("simulate_pmtiles_file", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- simulate_pmtiles_file()
  # run tests
  expect_true(is.character(x))
  expect_true(file.exists(x))
  expect_true(endsWith(x, ".pmtiles"))
})

test_that("simulate_prioritization_settings", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  p <- simulate_project()
  x <- simulate_prioritization_settings(p)
  # run tests
  expect_type(x, "list")
  expect_s3_class(x$features, "data.frame")
  expect_type(x$features$id, "character")
  expect_type(x$features$name, "character")
  expect_type(x$features$zone, "character")
  expect_type(x$features$target, "double")
  expect_type(x$features$weight, "double")
  expect_s3_class(x$locks, "data.frame")
  expect_type(x$locks$id, "character")
  expect_type(x$locks$name, "character")
  expect_type(x$locks$column, "character")
  expect_type(x$locks$zone, "character")
  expect_type(x$locks$priority, "integer")
  expect_s3_class(x$costs, "data.frame")
  expect_type(x$costs$id, "character")
  expect_type(x$costs$name, "character")
  expect_type(x$costs$column, "character")
  expect_type(x$costs$zone, "character")
  expect_type(x$costs$weight, "double")
})

test_that("simulate_prioritization_metrics", {
  # create object
  p <- simulate_project()
  x <- simulate_prioritization_metrics(p)
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
