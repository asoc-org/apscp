test_that("solver", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_project()
  x <- solver(
    project = d,
    feature_targets = c(0.1, 0.2, 0.3),
    feature_weights = c(0.4, 0.5),
    cost_weights = c(0.6, 0.8, 0.9, 0.95),
    zone_colors = c("blue", "red", "green"),
    zone_locked_colors = c("pink", "orange", "yellow")
  )
  # run tests
  expect_s3_class(x, "solver")
  expect_equal(x$x$project, serialize_object(d))
  expect_equal(x$x$featureTargetChoices, c(0.1, 0.2, 0.3))
  expect_equal(x$x$featureWeightChoices, c(0.4, 0.5))
  expect_equal(x$x$costWeightChoices, c(0.6, 0.8, 0.9, 0.95))
  expect_equal(x$x$zoneColors, c("blue", "red", "green"))
  expect_equal(x$x$zoneLockedColors, c("pink", "orange", "yellow"))
  expect_s3_class(renderSolver(x), "shiny.render.function")
  expect_s3_class(solverOutput(x), "shiny.tag.list")
})

test_that("solver_html", {
  # create object
  x <- solver_html(id = "x", style = NULL, class = NULL)
  # run tests
  expect_s3_class(x, "shiny.tag")
})

test_that("builtin dataset", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- read_builtin_project()
  x <- solver(project = d)
  # run tests
  expect_s3_class(x, "solver")
  expect_equal(x$x$project, serialize_object(d))
})
