test_that("new_provenance", {
  # create object
  x <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  # run tests
  expect_is(x, "Provenance")
  expect_equal(x$name, "Global")
  expect_equal(x$icon, "globe")
  expect_equal(x$color, "#123456")
  expect_equal(x$description, "Data is global.")
})

test_that("serialize_object", {
  # create object
  d <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "Global")
  expect_equal(x$icon, "globe")
  expect_equal(x$color, "#123456")
  expect_equal(x$description, "Data is global.")
  expect_equal(x$class, "Provenance")
})

test_that("deserialize_object", {
  # create object
  # create object
  x <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})
