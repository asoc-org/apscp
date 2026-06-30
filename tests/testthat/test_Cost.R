test_that("new_cost", {
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
    units = "USD",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_cost(name = "cost", layer = l)
  # run tests
  expect_s3_class(x, "Cost")
  expect_equal(x$name, "cost")
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
    units = "USD",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  d <- new_cost(name = "cost", layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "cost")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Cost")
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
    units = "USD",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_cost(name = "cost", layer = l)
  y <- deserialize_object(serialize_object(x), s)
  # run tests
  expect_equal(x, y)
})
