test_that("new_lock", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "aspas",
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_lock(name = "lock", zone = "Biodiversity", layer = l)
  # run tests
  expect_s3_class(x, "Lock")
  expect_message(print(x))
  expect_equal(x$name, "lock")
  expect_equal(x$zone, "Biodiversity")
})

test_that("serialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "aspas",
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  d <- new_lock(name = "lock", zone = "Biodiversity", layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "lock")
  expect_equal(x$zone, "Biodiversity")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Lock")
  expect_equal(x$id, d$id)
})

test_that("deserialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset_from_sf(s)
  l <- new_layer(
    dataset = w,
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "aspas",
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_lock(name = "lock", zone = "Biodiversity", layer = l)
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
