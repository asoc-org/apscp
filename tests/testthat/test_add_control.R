test_that("add_show_layers_control", {
  skip_if_missing_mapbox_token()
  expect_s3_class(
    mapgl::mapboxgl() |>
      add_show_layers_control(mapper_id = "mapper", position = "top"),
    "mapboxgl"
  )
})

test_that("add_hide_layers_control", {
  skip_if_missing_mapbox_token()
  expect_s3_class(
    mapgl::mapboxgl() |>
      add_hide_layers_control(mapper_id = "mapper", position = "top"),
    "mapboxgl"
  )
})

test_that("add_remove_layers_control", {
  skip_if_missing_mapbox_token()
  expect_s3_class(
    mapgl::mapboxgl() |>
      add_remove_layers_control(mapper_id = "mapper", position = "top"),
    "mapboxgl"
  )
})
