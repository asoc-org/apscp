test_that("new_feature", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "feat_1",
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  t1 <- new_theme("charismatic species", "Tourism")
  t2 <- new_theme("vertebrate species", NULL)
  x <- new_feature(
    name = "feature",
    layer = l,
    zone_targets = c(0.1, 0.2, 0.3),
    zone_weights = c(1, 0.5, 0.7),
    zone_held = c(0.3, 0.1, 0.05),
    themes = list(t1, t2)
  )
  # run tests
  expect_s3_class(x, "Feature")
  expect_equal(x$name, "feature")
  expect_equal(x$zone_targets, c(0.1, 0.2, 0.3))
  expect_equal(x$zone_weights, c(1, 0.5, 0.7))
  expect_equal(x$zone_held, c(0.3, 0.1, 0.05))
  expect_equal(x$themes, list(t1, t2))
  expect_equal(x$layer, l)
})

test_that("serialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "feat_1",
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  t1 <- new_theme("charismatic species", "Tourism")
  t2 <- new_theme("vertebrate species", "Biodiversity")
  d <- new_feature(
    name = "feature",
    layer = l,
    zone_targets = c(0.1, 0.2, 0.3),
    zone_weights = c(1, 0.5, 0.7),
    zone_held = c(0.3, 0.1, 0.05),
    themes = list(t1, t2)
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "feature")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$zone_targets, c(0.1, 0.2, 0.3))
  expect_equal(x$zone_weights, c(1, 0.5, 0.7))
  expect_equal(x$zone_held, c(0.3, 0.1, 0.05))
  expect_equal(x$themes, lapply(d$themes, serialize_object))
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
    column = "feat_1",
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  t1 <- new_theme("charismatic species", "Tourism")
  t2 <- new_theme("vertebrate species", "Biodiversity")
  x <- new_feature(
    name = "feature",
    layer = l,
    zone_targets = c(0.1, 0.2, 0.3),
    zone_weights = c(1, 0.5, 0.7),
    zone_held = c(0.3, 0.1, 0.05),
    themes = list(t1, t2)
  )
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})
