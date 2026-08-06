test_that("new_theme", {
  # create object
  x <- new_theme(name = "species", zone = "Biodiversity")
  # run tests
  expect_s3_class(x, "Theme")
  expect_equal(x$name, "species")
  expect_equal(x$zone, "Biodiversity")
})

test_that("serialize_object", {
  # create object
  d <- new_theme(name = "species", zone = "Biodiversity")
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "species")
  expect_equal(x$zone, "Biodiversity")
  expect_equal(x$class, "Theme")
})

test_that("deserialize_object", {
  # create object
  x <- new_theme(name = "species", zone = "Biodiversity")
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})
