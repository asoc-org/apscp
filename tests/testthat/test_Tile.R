test_that("new_tile", {
  # create object
  x <- new_tile(source_layer = "data-src", file = "f1.pmtiles", max_zoom = 5)
  # run tests
  expect_s3_class(x, "Tile")
  expect_equal(x$source_layer, "data-src")
  expect_equal(x$file, "f1.pmtiles")
  expect_equal(x$max_zoom, 5)
})

test_that("serialize_object", {
  # create object
  d <- new_tile(source_layer = "data-src", file = "f1.pmtiles", max_zoom = 5)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$source_layer, "data-src")
  expect_equal(x$file, "f1.pmtiles")
  expect_equal(x$max_zoom, 5)
  expect_equal(x$class, "Tile")
})

test_that("deserialize_object", {
  # create a dummy file to represent a PMTiles archive
  file <- tempfile(fileext = ".pmtiles")
  writeLines("", file)
  # create object
  x <- new_tile(source_layer = "data-src", file = "f1.pmtiles", max_zoom = 5)
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("create_tile", {
  # create object
  s <- simulate_spatial_data()
  path <- tempfile(fileext = ".pmtiles")
  x <- create_tile(
    s, source_layer = "x", path = path,  max_zoom = 5, verbose = FALSE
  )
  # run tests
  expect_s3_class(x, "Tile")
  expect_equal(x$source_layer, "x")
  expect_equal(x$file, basename(path))
  expect_true(file.exists(path))
  expect_equal(x$max_zoom, 5)
})
