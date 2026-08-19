test_that("new_theme (character zone)", {
  # create object
  x <- new_theme(name = "species", zone = "Biodiversity")
  # run tests
  expect_s3_class(x, "Theme")
  expect_equal(x$name, "species")
  expect_equal(x$zone, "Biodiversity")
})

test_that("serialize_object (character zone)", {
  # create object
  d <- new_theme(name = "species", zone = "Biodiversity")
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "species")
  expect_equal(x$zone, "Biodiversity")
  expect_equal(x$class, "Theme")
})

test_that("deserialize_object (character zone)", {
  # create object
  x <- new_theme(name = "species", zone = "Biodiversity")
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("new_theme (NULL zone)", {
  # create object
  x <- new_theme(name = "species", zone = NULL)
  # run tests
  expect_s3_class(x, "Theme")
  expect_equal(x$name, "species")
  expect_equal(x$zone, NULL)
})

test_that("serialize_object (NULL zone)", {
  # create object
  d <- new_theme(name = "species", zone = NULL)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "species")
  expect_equal(x$zone, NULL)
  expect_equal(x$class, "Theme")
})

test_that("deserialize_object (NULL zone)", {
  # create object
  x <- new_theme(name = "species", zone = NULL)
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})
