test_that("summarizer", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_project()
  x <- summarizer(
    project = d,
    zone_colors = c("blue", "red", "green"),
    zone_locked_colors = c("pink", "orange", "yellow")
  )
  # run tests
  expect_s3_class(x, "summarizer")
  expect_equal(x$x$project, serialize_object(d))
  expect_equal(x$x$zoneColors, c("blue", "red", "green"))
  expect_equal(x$x$zoneLockedColors, c("pink", "orange", "yellow"))
})

test_that("summarizer_html", {
  # create object
  x <- summarizer_html(id = "x", style = NULL, class = NULL)
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
