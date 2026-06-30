test_that("new_feature", {
  # create object
  s <- simulate_dataset()
  g <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = g,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_feature(name = "feature", targets = c(0.1, 0.5), layer = l)
  # run tests
  expect_s3_class(x, "Feature")
  expect_equal(x$name, "feature")
  expect_equal(x$targets, c(0.1, 0.5))
  expect_equal(x$layer, l)
})

test_that("serialize_object", {
  # create object
  s <- simulate_dataset()
  g <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = g,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  d <- new_feature(name = "feature", targets = c(0.1, 0.5), layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "feature")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$targets, c(0.1, 0.5))
  expect_equal(x$class, "Feature")
})

test_that("deserialize_object", {
  # create object
  s <- simulate_dataset()
  g <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = g,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_feature(name = "feature", targets = c(0.1, 0.5), layer = l)
  y <- deserialize_object(serialize_object(x), s)
  # run tests
  expect_equal(x, y)
})
