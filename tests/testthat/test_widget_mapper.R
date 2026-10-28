test_that("mapper", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_project()
  x <- mapper(map_id = "map", project = d)
  # run tests
  expect_s3_class(x, "mapper")
  expect_equal(x$x$mapId, "map")
  expect_equal(x$x$project, serialize_object(d))
  expect_s3_class(renderMapper(x), "shiny.render.function")
  expect_s3_class(mapperOutput(x), "shiny.tag.list")
})

test_that("mapper_html", {
  # create object
  x <- mapper_html(id = "x", style = NULL, class = NULL)
  # run tests
  expect_s3_class(x, "shiny.tag")
})

test_that("builtin dataset", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- read_builtin_project()
  x <- mapper(map_id = "map", project = d)
  # run tests
  expect_s3_class(x, "mapper")
  expect_equal(x$x$mapId, "map")
  expect_equal(x$x$project, serialize_object(d))
})
