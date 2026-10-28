test_that("has_mapbox_token", {
  # run tests
  expect_type(has_mapbox_token(), "logical")
  expect_true(
    withr::with_envvar(
      c("MAPBOX_PUBLIC_TOKEN" = "ASDF"),
      has_mapbox_token()
    )
  )
  expect_false(
    withr::with_envvar(
      c("MAPBOX_PUBLIC_TOKEN" = ""),
      has_mapbox_token()
    )
  )
})

test_that("mapgl identifiers and urls", {
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
  x <- new_cost(
    name = "cost", zone = "Biodiversity", weight = 0.5, layer = l, id = "a"
  )
  # run tests
  expect_equal(
    mapgl_layer_id(x),
    "lyr-a"
  )
  expect_equal(
    mapgl_source_url(x),
    paste0(
      get_golem_config("tile_server_url"), "/",
      sanitize_text(basename(x$layer$tile$path))
    )
  )
  expect_equal(
    mapgl_source_id(x),
    paste0("src-", sanitize_text(basename(x$layer$tile$path)))
  )
  expect_equal(
    mapgl_source_layer_id(x),
    x$layer$tile$source_layer
  )
})

test_that("mapgl_add_layer (continuous legend)", {
  # define skips
  skip_if_missing_mapbox_token()
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
  x <- new_cost(
    name = "cost", zone = "Biodiversity", weight = 0.5, layer = l, id = "a"
  )
  # run tests
  expect_s3_class(
    mapgl_add_layer(mapgl::mapboxgl(), x),
    "mapboxgl"
  )
})

test_that("mapgl_add_layer (categorical legend)", {
  # define skips
  skip_if_missing_mapbox_token()
  skip_if_sim_deps_not_installed()
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset_from_sf(s),
    tile = create_tile_from_sf(s, verbose = FALSE),
    column = "feat_1",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_cost(
    name = "cost", zone = "Biodiversity", weight = 0.5, layer = l, id = "a"
  )
  # run tests
  expect_s3_class(
    mapgl_add_layer(mapgl::mapboxgl(), x),
    "mapboxgl"
  )
})
