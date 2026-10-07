test_that("new_provenance", {
  # create object
  x <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global.",
   url = "https://google.com"

  )
  # run tests
  expect_s3_class(x, "Provenance")
  expect_equal(x$name, "Global")
  expect_equal(x$icon, "globe")
  expect_equal(x$color, "#123456")
  expect_equal(x$description, "Data is global.")
  expect_equal(x$url, "https://google.com")
})

test_that("serialize_object", {
  # create object
  d <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global.",
   url = "https://google.com"
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "Global")
  expect_equal(x$icon, "globe")
  expect_equal(x$color, "#123456")
  expect_equal(x$description, "Data is global.")
  expect_equal(x$url, "https://google.com")
  expect_equal(x$class, "Provenance")
})

test_that("deserialize_object", {
  # create object
  # create object
  x <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global.",
   url = "https://google.com"
  )
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})
