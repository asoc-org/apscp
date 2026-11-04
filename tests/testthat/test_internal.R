test_that("sanitize_text", {
  expect_equal(sanitize_text("AB"), "AB")
  expect_equal(sanitize_text("AπB"), "AB")
  expect_equal(sanitize_text("AäB"), "AaB")
})

test_that("make_unique_column_name", {
  expect_equal(make_unique_column_name("a", c("b", "a", "c")), "a_1")
  expect_equal(make_unique_column_name("a", c("b", "c")), "a")
})

test_that("update_named_list_elements", {
  expect_equal(
    update_named_list_elements(list(a = 1, b = 2), "b", 3),
    list(a = 1, b = 3)
  )
  expect_equal(
    update_named_list_elements(list(a = 1, list(b = 2, c = 3)), "c", 4),
    list(a = 1, list(b = 2, c = 4))
  )
})

test_that("standardize_zone_targets", {
  expect_equal(
    standardize_zone_targets(c(0.5, 0.5), c(0, 0.5, 1)),
    c(0.5, 0.5)
  )
  expect_equal(
    standardize_zone_targets(c(0.5, 0.5, 0.5, 0.5), c(0, 0.25, 0.5, 1)),
    c(0.25, 0.25, 0.25, 0.25)
  )
  expect_equal(
    standardize_zone_targets(c(0.5, 0.5, 0.5), c(0, 0.25, 0.5, 1)),
    c(0.25, 0.25, 0.25)
  )
  expect_equal(
    standardize_zone_targets(
      c(0.6, 0.1, 0.0),
      c(0, 0.2, 0.4, 0.6, 0.8, 1)
    ),
    c(0.6, 0.2, 0.0)
  )
})
