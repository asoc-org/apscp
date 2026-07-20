test_that("mapper", {
  # create object
  d <- simulate_project()
  x <- mapper(map_id = "map", project = d)
  # run tests
  expect_s3_class(x, "mapper")
  expect_equal(x$x$mapId, "map")
  expect_equal(x$x$project, serialize_object(d))
})

test_that("built-in dataset", {
  # find path
  path <- dir(
    system.file("extdata", package = "apscp"),
    pattern = "^.*\\.yml$",
    full.names = TRUE
  )
  skip_if_not(
    nzchar(path) && file.exists(path),
    message = "couldn't find built-in dataset"
  )
  # create object
  d <- read_project(path)
  x <- mapper(map_id = "map", project = d)
  # run tests
  expect_s3_class(x, "mapper")
  expect_equal(x$x$mapId, "map")
  expect_equal(x$x$project, serialize_object(d))
})
