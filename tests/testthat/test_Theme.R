test_that("new_theme", {
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
  l1 <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = g,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  l2 <- new_layer(
    dataset = s,
    index = "feat_2",
    legend = g,
    units = "abundance",
    provenance = p,
    total = 600,
    details = "extra info 2"
  )
  f1 <- new_feature(name = "f1", targets = c(0.1, 0.5), layer = l1)
  f2 <- new_feature(name = "f2", targets = c(0.2, 0.9), layer = l2)
  x <- new_theme("species", list(f1, f2))
  # run tests
  expect_s3_class(x, "Theme")
  expect_equal(x$name, "species")
  expect_equal(x$features, list(f1, f2))
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
  l1 <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = g,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  l2 <- new_layer(
    dataset = s,
    index = "feat_2",
    legend = g,
    units = "abundance",
    provenance = p,
    total = 600,
    details = "extra info 2"
  )
  f1 <- new_feature(name = "f1", targets = c(0.1, 0.5), layer = l1)
  f2 <- new_feature(name = "f2", targets = c(0.2, 0.9), layer = l2)
  d <- new_theme("species", list(f1, f2))
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "species")
  expect_equal(x$features, lapply(d$features, serialize_object))
  expect_equal(x$class, "Theme")
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
  l1 <- new_layer(
    dataset = s,
    index = "feat_1",
    legend = g,
    units = "suitability",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  l2 <- new_layer(
    dataset = s,
    index = "feat_2",
    legend = g,
    units = "abundance",
    provenance = p,
    total = 600,
    details = "extra info 2"
  )
  f1 <- new_feature(name = "f1", targets = c(0.1, 0.5), layer = l1)
  f2 <- new_feature(name = "f2", targets = c(0.2, 0.9), layer = l2)
  x <- new_theme("species", list(f1, f2))
  y <- deserialize_object(serialize_object(x), dataset = s)
  # run tests
  expect_equal(x, y)
})
