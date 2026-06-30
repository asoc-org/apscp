test_that("new_layer", {
  # create object
  s <- simulate_dataset()
  l <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  x <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = l,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  # run tests
  expect_s3_class(x, "Layer")
  expect_equal(x$dataset, s)
  expect_equal(x$index, "feat_1")
  expect_equal(x$legend, l)
  expect_equal(x$units, "suitability")
  expect_equal(x$provenance, p)
  expect_equal(x$details, "extra info")
})

test_that("serialize_object", {
  # create object
  s <- simulate_dataset()
  l <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."

  )
  d <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = l,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$index, "feat_1")
  expect_equal(x$legend, serialize_object(l))
  expect_equal(x$units, "suitability")
  expect_equal(x$provenance, serialize_object(p))
  expect_equal(x$details, "extra info")
  expect_equal(x$class, "Layer")
})

test_that("deserialize_object", {
  # create object
  s <- simulate_dataset()
  l <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  x <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = l,
    total = 500,
    units = "suitability",
    provenance = p,
    details = "extra info"
  )
  y <- deserialize_object(serialize_object(x), dataset = s)
  # run tests
  expect_equal(x, y)
})
