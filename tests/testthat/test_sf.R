test_that("serialize_object (bbox)", {
  # create object
  d <- sf::st_bbox(
    c(xmin = 0, ymin = -10, xmax = 10, ymax = 90),
    crs = sf::st_crs(4326)
  )
  x <- serialize_object.bbox(d)
  # run tests
  expect_equal(x$xmin, 0)
  expect_equal(x$ymin, -10)
  expect_equal(x$xmax, 10)
  expect_equal(x$ymax, 90)
  expect_equal(x$crs, 4326)
})

test_that("deserialize_object (bbox)", {
  # create object
  x <- sf::st_bbox(
    c(xmin = 0, ymin = -10, xmax = 10, ymax = 90),
    crs = sf::st_crs(4326)
  )
  y <- deserialize_object(serialize_object.bbox(x))
  # run tests
  expect_equal(x, y)
})
