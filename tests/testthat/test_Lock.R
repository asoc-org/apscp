test_that("new_lock", {
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset(s),
    tile = create_tile(s, verbose = FALSE),
    column = "locked_in",
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
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
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset(s),
    tile = create_tile(s, verbose = FALSE),
    column = "locked_in",
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
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
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  l <- new_layer(
    dataset = w,
    tile = create_tile(s, verbose = FALSE),
    column = "locked_in",
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_lock(name = "lock", layer = l)
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
