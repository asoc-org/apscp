test_that("new_tileset", {
  # create object
  t1 <- new_tile(source_layer = "data-src", file = "f1.pmtiles", max_zoom = 5)
  t2 <- new_tile(source_layer = "data-src", file = "f3.pmtiles", max_zoom = 4)
  x <- new_tileset(list(t1, t2), dir = tempdir(), max_zoom = 2)
  # run tests
  expect_s3_class(x, "Tileset")
  expect_equal(x$tiles, list(t1, t2))
  expect_equal(x$dir, tempdir())
  expect_equal(x$max_zoom, 2)
})

test_that("serialize_object", {
  # create object
  t1 <- new_tile(source_layer = "data-src", file = "f1.pmtiles", max_zoom = 5)
  t2 <- new_tile(source_layer = "data-src", file = "f3.pmtiles", max_zoom = 4)
  d <- new_tileset(list(t1, t2), dir = tempdir(), max_zoom = 2)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$tiles, lapply(d$tiles, serialize_object))
  expect_equal(x$dir, tempdir())
  expect_equal(x$max_zoom, 2)
  expect_equal(x$class, "Tileset")
})

test_that("deserialize_object", {
  # create object
  t1 <- new_tile(source_layer = "data-src", file = "f1.pmtiles", max_zoom = 5)
  t2 <- new_tile(source_layer = "data-src", file = "f3.pmtiles", max_zoom = 4)
  x <- new_tileset(list(t1, t2), dir = tempdir(), max_zoom = 2)
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})
