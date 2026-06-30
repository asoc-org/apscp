test_that("new_lock", {
  # create object
  s <- simulate_dataset()
  g <- new_categorical_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c("Other", "Protected area")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "locked_in",
    legend = g,
    units = "presence/absence",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_lock(name = "lock", layer = l)
  # run tests
  expect_s3_class(x, "Lock")
  expect_equal(x$name, "lock")
  expect_equal(x$layer, l)
})

test_that("serialize_object", {
  # create object
  s <- simulate_dataset()
  g <- new_categorical_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c("Other", "Protected area")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "locked_in",
    legend = g,
    units = "presence/absence",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  d <- new_lock(name = "lock", layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "lock")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Lock")
})

test_that("deserialize_object", {
  # create object
  s <- simulate_dataset()
  g <- new_categorical_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c("Other", "Protected area")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "locked_in",
    legend = g,
    units = "presence/absence",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_lock(name = "lock", layer = l)
  y <- deserialize_object(serialize_object(x), s)
  # run tests
  expect_equal(x, y)
})
