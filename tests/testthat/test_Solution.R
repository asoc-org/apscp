test_that("new_solution", {
  # create object
  s <- simulate_dataset()
  g <- new_categorical_legend(
    c(1, 2, 3), c("#000000", "#DDDDDD", "#AAAAAA"),
    c("Conservation", "Tourism", "Science")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "solution",
    legend = g,
    units = "categorical",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_solution(name = "solution", layer = l)
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "solution")
  expect_equal(x$layer, l)
})

test_that("serialize_object", {
  # create object
  s <- simulate_dataset()
  g <- new_categorical_legend(
    c(1, 2, 3), c("#000000", "#DDDDDD", "#AAAAAA"),
    c("Conservation", "Tourism", "Science")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "solutioned_in",
    legend = g,
    units = "categorical",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  d <- new_solution(name = "solution", layer = l)
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_equal(x$name, "solution")
  expect_equal(x$layer, serialize_object(d$layer))
  expect_equal(x$class, "Solution")
})

test_that("deserialize_object", {
  # create object
  s <- simulate_dataset()
  g <- new_categorical_legend(
    c(1, 2, 3), c("#000000", "#DDDDDD", "#AAAAAA"),
    c("Conservation", "Tourism", "Science")
  )
  p <- new_provenance(
   name = "Global", icon = "globe", color = "#123456",
   description = "Data is global."
  )
  l <- new_layer(
    dataset = s,
    index = "solution",
    legend = g,
    units = "categorical",
    provenance = p,
    total = 500,
    details = "extra info"
  )
  x <- new_solution(name = "solution", layer = l)
  y <- deserialize_object(serialize_object(x), s)
  # run tests
  expect_equal(x, y)
})
