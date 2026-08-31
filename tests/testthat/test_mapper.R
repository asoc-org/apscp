test_that("mapper", {
  # create object
  d <- simulate_project()
  x <- mapper(map_id = "map", project = d)
  # run tests
  expect_s3_class(x, "mapper")
  expect_equal(x$x$mapId, "map")
  expect_equal(x$x$project, serialize_object(d))
})

test_that("builtin dataset", {
  # create object
  d <- read_builtin_project()
  x <- mapper(map_id = "map", project = d)
  # run tests
  expect_s3_class(x, "mapper")
  expect_equal(x$x$mapId, "map")
  expect_equal(x$x$project, serialize_object(d))
})
