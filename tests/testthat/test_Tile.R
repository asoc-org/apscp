test_that("new_tile", {
  # create object
  p <- simulate_pmtiles_file()
  x <- new_tile(source_layer = "data-src", path = p, max_zoom = 5)
  # run tests
  expect_s3_class(x, "Tile")
  expect_equal(x$source_layer, "data-src")
  expect_equal(x$path, p)
  expect_equal(x$max_zoom, 5)
})

test_that("serialize_object", {
  # create object
  p <- simulate_pmtiles_file()
  d <- new_tile(source_layer = "data-src", path = p, max_zoom = 5)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$source_layer, "data-src")
  expect_equal(x$path, p)
  expect_equal(x$max_zoom, 5)
  expect_equal(x$class, "Tile")
})

test_that("deserialize_object", {
  # create object
  p <- simulate_pmtiles_file()
  x <- new_tile(source_layer = "data-src", path = p, max_zoom = 5)
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("create_tile", {
  # create object
  s <- simulate_spatial_data()
  path <- tempfile(fileext = ".pmtiles")
  x <- create_tile(
    s, source_layer = "x", path = path, max_zoom = 5, verbose = FALSE
  )
  # run tests
  expect_s3_class(x, "Tile")
  expect_equal(x$source_layer, "x")
  expect_equal(x$path, path)
  expect_true(file.exists(path))
  expect_equal(x$max_zoom, 5)
})
