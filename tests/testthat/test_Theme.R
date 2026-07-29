test_that("new_theme", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  r <- create_tile(s, verbose = FALSE)
  l1 <- new_layer(
    dataset = w,
    column = "feat_1",
    tile = r,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  l2 <- new_layer(
    dataset = w,
    column = "feat_2",
    tile = r,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 600,
    details = "extra info 2"
  )
  f1 <- new_feature(name = "f1", target = 0.1, layer = l1)
  f2 <- new_feature(name = "f2", target = 0.9, layer = l2)
  x <- new_theme("species", "Biodiversity", list(f1, f2))
  # run tests
  expect_s3_class(x, "Theme")
  expect_equal(x$name, "species")
  expect_equal(x$zone, "Biodiversity")
  expect_equal(x$features, list(f1, f2))
})

test_that("serialize_object", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  r <- create_tile(s, verbose = FALSE)
  l1 <- new_layer(
    dataset = w,
    column = "feat_1",
    tile = r,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  l2 <- new_layer(
    dataset = w,
    column = "feat_2",
    tile = r,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 600,
    details = "extra info 2"
  )
  f1 <- new_feature(name = "f1", target = 0.1, layer = l1)
  f2 <- new_feature(name = "f2", target = 0.9, layer = l2)
  d <- new_theme("species", "Biodiversity", list(f1, f2))
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "species")
  expect_equal(x$zone, "Biodiversity")
  expect_equal(x$features, lapply(d$features, serialize_object))
  expect_equal(x$class, "Theme")
})

test_that("deserialize_object", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  r <- create_tile(s, verbose = FALSE)
  l1 <- new_layer(
    dataset = w,
    column = "feat_1",
    tile = r,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  l2 <- new_layer(
    dataset = w,
    column = "feat_2",
    tile = r,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 600,
    details = "extra info 2"
  )
  f1 <- new_feature(name = "f1", target = 0.1, layer = l1)
  f2 <- new_feature(name = "f2", target = 0.9, layer = l2)
  x <- new_theme("species", "Biodiversity", list(f1, f2))
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
