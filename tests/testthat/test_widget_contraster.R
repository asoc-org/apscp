test_that("contraster", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_project()
  x <- contraster(project = d)
  # run tests
  expect_s3_class(x, "contraster")
  expect_equal(
    x$x$solutions,
    lapply(d$solutions, function(x) list(id = x$id, name = x$name))
  )
  expect_s3_class(renderContraster(x), "shiny.render.function")
  expect_s3_class(contrasterOutput(x), "shiny.tag.list")
})

test_that("contraster_html", {
  # create object
  x <- contraster_html(id = "x", style = NULL, class = NULL)
  # run tests
  expect_s3_class(x, "shiny.tag")
})

test_that("builtin dataset", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- read_builtin_project()
  x <- contraster(project = d)
  # run tests
  expect_s3_class(x, "contraster")
})
