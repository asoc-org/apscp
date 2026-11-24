test_that("heatmapper", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_project()
  x <- heatmapper(project = d)
  # run tests
  expect_s3_class(x, "heatmapper")
  expect_equal(
    x$x$solutions,
    lapply(d$solutions, function(x) list(id = x$id, name = x$name))
  )
  expect_s3_class(renderHeatmapper(x), "shiny.render.function")
  expect_s3_class(heatmapperOutput(x), "shiny.tag.list")
})

test_that("heatmapper_html", {
  # create object
  x <- heatmapper_html(id = "x", style = NULL, class = NULL)
  # run tests
  expect_s3_class(x, "shiny.tag")
})

test_that("builtin dataset", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- read_builtin_project()
  x <- heatmapper(project = d)
  # run tests
  expect_s3_class(x, "heatmapper")
})
