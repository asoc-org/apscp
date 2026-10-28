test_that("tile_server", {
  # define skips
  skip_if_sim_deps_not_installed()
  # simulate project
  sim_project <- simulate_project()
  # check if tile server is not active
  expect_false(is_tile_server_active())
  # start tile server
  expect_true(tile_server_start(sim_project))
  # check if tile server is active
  expect_true(is_tile_server_active())
  # add tile to tile server directory
  tile <- new_tile(
    source_layer = "data-src", path = simulate_pmtiles_file(), max_zoom = 5
  )
  expect_true(tile_server_add_tile(tile))
  # add component to tile server directory
  expect_true(tile_server_add_tile(sim_project$solutions[[1]]))
  # stop tile server
  expect_true(tile_server_stop())
})
