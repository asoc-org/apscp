test_that("read_sf/write_sf (.gpkg.zip)", {
  # load object
  x <- sf::read_sf(system.file("shape/nc.shp", package = "sf"))
  path <- tempfile(fileext = ".gpkg.zip")
  # write data
  write_sf_data(x, path)
  # run tests
  x1 <- read_sf_data(path)
  expect_equal(
    sf::st_drop_geometry(x),
    sf::st_drop_geometry(x, x1),
    ignore_attr = TRUE
  )
  expect_equal(
    sf::st_geometry(x),
    sf::st_geometry(x1),
    ignore_attr = TRUE
  )
})

test_that("read_sf/write_sf (.gpkg)", {
  # load object
  x <- sf::read_sf(system.file("shape/nc.shp", package = "sf"))
  path <- tempfile(fileext = ".gpkg.zip")
  # write data
  write_sf_data(x, path)
  # run tests
  x1 <- read_sf_data(path)
  expect_equal(
    sf::st_drop_geometry(x),
    sf::st_drop_geometry(x, x1),
    ignore_attr = TRUE
  )
  expect_equal(
    sf::st_geometry(x),
    sf::st_geometry(x1),
    ignore_attr = TRUE
  )
})
