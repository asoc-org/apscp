test_that("new_categorical_legend", {
  # create object
  x <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#AAAAAA"))
  expect_equal(x$labels, c("a", "b"))
})

test_that("serialize_object (categorical)", {
  # create object
  d <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#AAAAAA"))
  expect_equal(x$labels, c("a", "b"))
  expect_equal(x$class, "CategoricalLegend")
})

test_that("deserialize_object (categorical)", {
  # create object
  x <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("new_continuous_legend", {
  # create object
  x <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  # run tests
  expect_s3_class(x, "ContinuousLegend")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#DDDDDD"))
  expect_equal(x$breaks, c(0.2, 0.5, 0.8))
  expect_equal(x$labels, c("Low", "Medium", "High"))
})

test_that("serialize_object (continuous)", {
  # create object
  d <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#DDDDDD"))
  expect_equal(x$breaks, c(0.2, 0.5, 0.8))
  expect_equal(x$labels, c("Low", "Medium", "High"))
})

test_that("deserialize_object (continuous)", {
  # create object
  x <- new_continuous_legend(
    c(0, 1), c("#000000", "#DDDDDD"),
    c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
  )
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("create_legend (continuous)", {
  # create object
  x <- create_legend(
    prioritizr::get_sim_pu_raster(),
    palette = "PuBu"
  )
  # run tests
  expect_s3_class(x, "ContinuousLegend")
})

test_that("create_legend (presence/absence)", {
  # create object
  x <- create_legend(
    prioritizr::get_sim_locked_in_raster(),
    palette = "PuBu"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$labels, c("absent", "present"))
})

test_that("create_legend (categorical)", {
  # create object
  x <- create_legend(
    prioritizr::get_sim_locked_in_raster() * 3,
    palette = "PuBu"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$labels, c("0", "3"))
})

test_that("create_legend (presence)", {
  # create object
  x <- create_legend(
    terra::clamp(
      prioritizr::get_sim_locked_in_raster(),
      lower = 1,
      values = FALSE
    ),
    palette = "PuBu"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$labels, c("presence"))
})
