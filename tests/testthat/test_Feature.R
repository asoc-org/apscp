test_that("new_feature", {
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset(s),
    tile = create_tile(s, verbose = FALSE),
    column = "feat_1",
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_feature(name = "feature", target = 0.1, layer = l)
  # run tests
  expect_s3_class(x, "Feature")
  expect_equal(x$name, "feature")
  expect_equal(x$target, 0.1)
  expect_equal(x$layer, l)
})

test_that("serialize_object", {
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset(s),
    tile = create_tile(s, verbose = FALSE),
    column = "feat_1",
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  d <- new_feature(name = "feature", target = 0.1, layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "feature")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$target, 0.1)
  expect_equal(x$id, d$id)
})

test_that("deserialize_object", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  l <- new_layer(
    dataset = w,
    tile = create_tile(s, verbose = FALSE),
    column = "feat_1",
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_feature(name = "feature", target = 0.1, layer = l)
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
