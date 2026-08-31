test_that("new_categorical_legend", {
  # create object
  x <- new_categorical_legend(
    values = c(0, 1),
    colors = c("#000000", "#AAAAAA"),
    labels = c("a", "b"),
    units = "hectares"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#AAAAAA"))
  expect_equal(x$labels, c("a", "b"))
  expect_equal(x$units, "hectares")
})

test_that("serialize_object (categorical)", {
  # create object
  d <- new_categorical_legend(
    values = c(0, 1),
    colors = c("#000000", "#AAAAAA"),
    labels = c("a", "b"),
    units = "hectares"
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#AAAAAA"))
  expect_equal(x$labels, c("a", "b"))
  expect_equal(x$units, "hectares")
  expect_equal(x$class, "CategoricalLegend")
})

test_that("deserialize_object (categorical)", {
  # create object
  x <- new_categorical_legend(
    values = c(0, 1),
    colors = c("#000000", "#AAAAAA"),
    labels = c("a", "b"),
    units = "hectares"
  )
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("new_continuous_legend", {
  # create object
  x <- new_continuous_legend(
    values = c(0, 1),
    colors = c("#000000", "#DDDDDD"),
    breaks = c(0.2, 0.5, 0.8),
    labels = c("Low", "Medium", "High"),
    units = "hectares"
  )
  # run tests
  expect_s3_class(x, "ContinuousLegend")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#DDDDDD"))
  expect_equal(x$breaks, c(0.2, 0.5, 0.8))
  expect_equal(x$labels, c("Low", "Medium", "High"))
  expect_equal(x$units, "hectares")
})

test_that("serialize_object (continuous)", {
  # create object
  d <- new_continuous_legend(
    values = c(0, 1),
    colors = c("#000000", "#DDDDDD"),
    breaks = c(0.2, 0.5, 0.8),
    labels = c("Low", "Medium", "High"),
    units = "hectares"
  )
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$values, c(0, 1))
  expect_equal(x$colors, c("#000000", "#DDDDDD"))
  expect_equal(x$breaks, c(0.2, 0.5, 0.8))
  expect_equal(x$labels, c("Low", "Medium", "High"))
  expect_equal(x$units, "hectares")
})

test_that("deserialize_object (continuous)", {
  # create object
  x <- new_continuous_legend(
    values = c(0, 1),
    colors = c("#000000", "#DDDDDD"),
    breaks = c(0.2, 0.5, 0.8),
    labels = c("Low", "Medium", "High"),
    units = "hectares"
  )
  y <- deserialize_object(serialize_object(x))
  # run tests
  expect_equal(x, y)
})

test_that("create_legend (continuous)", {
  # create object
  x <- create_legend(
    simulate_spatial_data(),
    column = "cost",
    palette = "PuBu",
    units = "acres"
  )
  # run tests
  expect_s3_class(x, "ContinuousLegend")
  expect_equal(x$units, "acres")
})

test_that("create_legend (presence/absence)", {
  # create object
  x <- create_legend(
    simulate_spatial_data(),
    column = "invasive_species",
    palette = "PuBu"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$labels, c("absent", "present"))
  expect_equal(x$units, NULL)
})

test_that("create_legend (categorical)", {
  # create object
  x <- create_legend(
    simulate_spatial_data(),
    column = "solution",
    palette = "PuBu",
    units = "acres"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$labels, c("0", "1", "2", "3"))
  expect_equal(x$units, "acres")
})

test_that("create_legend (presence)", {
  # create object
  x <- create_legend(
    simulate_spatial_data(),
    column = "aspas",
    palette = "PuBu",
    units = "presence"
  )
  # run tests
  expect_s3_class(x, "CategoricalLegend")
  expect_equal(x$labels, c("presence"))
  expect_equal(x$units, "presence")
})

test_that("get_paint_parameters (continuous)", {
  # create object
  d <- new_continuous_legend(
    values = c(0, 1),
    colors = c("#000000", "#DDDDDD"),
    breaks = c(0.2, 0.5, 0.8),
    labels = c("Low", "Medium", "High"),
    units = "hectares"
  )
  x <- get_paint_parameters(d, "values")
  # run tests
  expect_type(x, "list")
  expect_type(x$fill_color, "list")
})

test_that("get_paint_parameters (categorical)", {
  # create object
  d <- new_categorical_legend(
    values = c(0, 1),
    colors = c("#000000", "#AAAAAA"),
    labels = c("a", "b"),
    units = "hectares"
  )
  x <- get_paint_parameters(d, "values")
  # run tests
  expect_type(x, "list")
  expect_type(x$fill_color, "list")
})
