test_that("new_cost", {
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
  x <- new_cost(name = "cost", zones_active = TRUE, layer = l)
  # run tests
  expect_s3_class(x, "Cost")
  expect_equal(x$name, "cost")
  expect_equal(x$layer, l)
  expect_equal(x$zones_active, TRUE)
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
  d <- new_cost(name = "cost", zones_active = TRUE, layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "cost")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Cost")
  expect_equal(x$id, d$id)
  expect_equal(x$zones_active, TRUE)
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
  x <- new_cost(name = "cost", zones_active = TRUE, layer = l)
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
