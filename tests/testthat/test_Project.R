test_that("new_project", {
  # create dataset
  dataset <- simulate_dataset()
  # create cost
  cost <- new_cost(
    name = "cost",
    layer = new_layer(
      dataset = dataset,
      index = "feat_1",
      legend = new_continuous_legend(
        c(0, 1), c("#000000", "#DDDDDD"),
        c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
      ),
      units = "USD",
      provenance = new_provenance(
       name = "Global", icon = "globe", color = "#123456",
       description = "Data is global."
      ),
      total = 500,
      details = "extra info"
    )
  )
  # create lock
  lock <- new_lock(
    name = "lock",
    layer = new_layer(
      dataset = dataset,
      index = "locked_in",
      legend = new_categorical_legend(
        c(0, 1), c("#000000", "#DDDDDD"),
        c("Other", "Protected area")
      ),
      units = "presence/absence",
      provenance = new_provenance(
        name = "Global", icon = "globe", color = "#123456",
        description = "Data is global."
      ),
      total = 500,
      details = "extra info"
    )
  )
  # create theme
  theme <- new_theme(
    "species",
    list(
      new_feature(
        name = "f1",
        targets = c(0.1, 0.5),
        layer = new_layer(
          dataset = dataset,
          index = "feat_1",
          legend = new_continuous_legend(
            c(0, 1), c("#000000", "#DDDDDD"),
            c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
          ),
          units = "suitability",
          provenance = new_provenance(
           name = "Global", icon = "globe", color = "#123456",
           description = "Data is global."
          ),
          total = 500,
          details = "extra info"
        )
      ),
      new_feature(
        name = "f2",
        targets = c(0.2, 0.9),
        layer = new_layer(
          dataset = dataset,
          index = "feat_2",
          legend = new_continuous_legend(
            c(0, 1), c("#000000", "#AAAAAA"),
            c(0.2, 0.5, 0.8), c("20%", "50%", "80%")
          ),
          units = "abundance",
          provenance = new_provenance(
           name = "Global", icon = "globe", color = "#123456",
           description = "Data is global."
          ),
          total = 600,
          details = "extra info 2"
        )
      )
    )
  )
  # create project
  x <- new_project(
    dataset = dataset,
    zones = c("Conservation", "Tourism", "Science"),
    costs = list(cost),
    locks = list(lock),
    themes = list(theme),
    name = "Project 1",
    author_name = "Greg",
    author_email = "greg@gmail.com"
  )
  # run tests
  expect_true(inherits(x, "Project"))
  expect_equal(x$dataset, dataset)
  expect_equal(x$costs, list(cost))
  expect_equal(x$locks, list(lock))
  expect_equal(x$themes, list(theme))
  expect_equal(x$solutions, list())
  expect_equal(x$name, "Project 1")
  expect_equal(x$author_name, "Greg")
  expect_equal(x$author_email, "greg@gmail.com")
})

test_that("map_project", {
  # create object
  x <- simulate_project()
  m <- map_project(x)
  # run tests
  expect_s3_class(x, "mapboxgl")
})

test_that("simulate_project", {
  # create object
  x <- simulate_project()
  # run tests
  expect_true(inherits(x, "Project"))
})

test_that("serialize_object", {
  # create object
  d <- simulate_project()
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_type(x$costs, "list")
  expect_equal(x$costs[[1]]$class, "Cost")
  expect_type(x$locks, "list")
  expect_equal(x$locks[[1]]$class, "Lock")
  expect_type(x$themes, "list")
  expect_equal(x$themes[[1]]$class, "Theme")
  expect_type(x$solutions, "list")
  expect_equal(x$solutions[[1]]$class, "Solution")
  expect_type(x$name, "character")
  expect_type(x$author_name, "character")
  expect_type(x$author_email, "character")
})

test_that("deserialize_object", {
  # create object
  x <- simulate_project()
  y <- deserialize_object(serialize_object(x), dataset = x$dataset)
  # run tests
  expect_equal(x, y)
})

test_that("read_project/write_project", {
  # create objects
  x <- simulate_project()
  path <- tempfile(fileext = ".yml")
  # write project
  write_project(x, path)
  # read project
  y <- read_project(path)
  # run tests
  expect_equal(
    serialize_object(x),
    serialize_object(y),
    tolerance = 1e-6
  )
})

test_that("built-in dataset", {
  # find path
  path <- dir(
    system.file("data", package = "apscp"),
    pattern = "^.*\\.yml$",
    full.names = TRUE
  )
  skip_if_not(
    nzchar(path) && file.exists(path),
    message = "couldn't find built-in dataset"
  )
  # create object
  x <- read_project(path)
  # run tests
  expect_true(inherits(x, "Project"))
})
