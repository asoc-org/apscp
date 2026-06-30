test_that("new_dataset", {

})

test_that("get methods", {
  # create object
  x <- simulate_dataset()
  bb <- x$get_bbox()
  ct <- x$get_center()
  # run tests
  ## has index
  ## get_bbox
  expect_s3_class(bb, "bbox")
  expect_true(assertthat::noNA(as.vector(bb)))
  ## get_data
  expect_equal(x$get_data("pu"), x$attribute_data$pu)
  ## get_raster_data
  expect_s4_class(x$get_raster_data("pu"), "SpatRaster")
  expect_equal(
    x$attribute_data$pu,
    x$get_raster_data("pu")[x$attribute_data[["_index"]]][[1]]
  )
  ## get_crs
  expect_s3_class(x$get_crs(), "crs")
  ## get_center
  expect_type(ct, "double")
  expect_length(ct, 2L)
  expect_true(assertthat::noNA(ct))
  ## get_total
  expect_equal(
    x$get_total("pu"),
    sum(x$get_data("pu"), na.rm = TRUE)
  )
})

test_that("set methods", {
  # create object
  x <- simulate_dataset()
  # run tests
  ## has_index
  expect_false(x$has_index("new"))
  ## set_data
  v <- round(runif(nrow(x$attribute_data)), 3)
  x$set_data(index = "new", v)
  ## has_index
  expect_true(x$has_index("new"))
  ## get_data
  expect_equal(x$get_data("new"), v)
})

test_that("read_dataset/write_dataset", {
  # create object
  x <- simulate_dataset()
  path1 <- tempfile(fileext = ".tif")
  path2 <- tempfile(fileext = ".csv.gz")
  path3 <- tempfile(fileext = ".csv.gz")
  # run file operations
  write_dataset(x, path1, path2, path3)
  y <- read_dataset(path1, path2, path3)
  # run tests
  expect_equal(
    terra::as.data.frame(x$spatial_data),
    terra::as.data.frame(y$spatial_data)
  )
  expect_equal(x$attribute_data, y$attribute_data, ignore_attr = TRUE)
  expect_equal(x$boundary_data, y$boundary_data)
})

test_that("simulate_dataset", {
  # create object
  x <- simulate_dataset()
  # run tests
  expect_true(inherits(x, "Dataset"))
})
