test_that("new_solution", {
  # create object
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset(s),
    tile = create_tile(s, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
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
  s <- simulate_spatial_data()
  l <- new_layer(
    dataset = create_dataset(s),
    tile = create_tile(s, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
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
  expect_equal(x$id, d$id)
})

test_that("deserialize_object", {
  # create object
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  l <- new_layer(
    dataset = w,
    tile = create_tile(s, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
  x <- new_solution(name = "solution", layer = l)
  y <- deserialize_object(serialize_object(x), dataset = w)
  # run tests
  expect_equal(x, y)
})

test_that("create_solution", {
  # prepare data
  p <- simulate_project()
  v <- sample.int(3, p$dataset$get_n_pu(), replace = TRUE)
  p$dataset$set_column_data("solv", v)
  # create object
  x <- create_solution(
    name = "sol",
    dataset = p$dataset,
    column = "solv",
    tileset = p$tileset,
    provenance = simulate_provenance(),
    legend = simulate_solution_legend()
  )
  # run tests
  expect_s3_class(x, "Solution")
  expect_equal(x$name, "sol")
  expect_equal(x$layer$column, "solv")
  expect_true(file.exists(file.path(p$tileset$dir, x$layer$tile$file)))
})
