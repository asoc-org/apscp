test_that("add_layer_visibility_control", {
  skip_if_missing_mapbox_token()
  expect_s3_class(
    mapgl::mapboxgl() |>
      add_layer_visibility_control(mapper_id = "mapper", position = "top"),
    "mapboxgl"
  )
})
