test_that("new_layer", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset_from_sf(s)
  r <- create_tile_from_sf(s, verbose = FALSE)
  l <- simulate_continuous_legend()
  p <- simulate_provenance()
  x <- new_layer(
    dataset = w,
    tile = r,
    column = "feat_1",
    legend = l,
    provenance = p,
    total = 500,
    visible = TRUE,
    details = "extra info"
  )
  # run tests
  expect_s3_class(x, "Layer")
  expect_equal(x$dataset, w)
  expect_equal(x$tile, r)
  expect_equal(x$column, "feat_1")
  expect_equal(x$legend, l)
  expect_equal(x$provenance, p)
  expect_equal(x$visible, TRUE)
  expect_equal(x$details, "extra info")
})

test_that("serialize_object", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset_from_sf(s)
  r <- create_tile_from_sf(s, verbose = FALSE)
  l <- simulate_continuous_legend()
  p <- simulate_provenance()
  d <- new_layer(
    dataset = w,
    tile = r,
    column = "feat_1",
    legend = l,
    provenance = p,
    total = 500,
    visible = TRUE,
    details = "extra info"
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$column, "feat_1")
  expect_equal(x$legend, serialize_object(l))
  expect_equal(x$provenance, serialize_object(p))
  expect_equal(x$tile, serialize_object(r))
  expect_equal(x$visible, TRUE)
  expect_equal(x$class, "Layer")
})

test_that("deserialize_object", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset_from_sf(s)
  r <- create_tile_from_sf(s, verbose = FALSE)
  l <- simulate_continuous_legend()
  p <- simulate_provenance()
  x <- new_layer(
    dataset = w,
    tile = r,
    column = "feat_1",
    legend = l,
    provenance = p,
    total = 500,
    visible = TRUE,
    details = "extra info"
  )
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
