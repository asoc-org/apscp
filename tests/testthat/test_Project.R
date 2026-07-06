test_that("new_project", {
  # create data
  s <- simulate_spatial_data()
  w <- create_dataset(s)
  g <- create_tileset(s, verbose = FALSE)
  # create bbox
  bb <- sf::st_bbox(c(0, 1, 0, 1),  crs = sf::st_crs(4326))
  # create cost
  cost <- new_cost(
    name = "cost",
    layer = new_layer(
      dataset = w,
      tile = g$tiles[[1]],
      column = "feat_1",
      legend = simulate_continuous_legend(),
      provenance = simulate_provenance(),
      total = 500,
      details = "extra info"
    )
  )
  # create lock
  lock <- new_lock(
    name = "lock",
    layer = new_layer(
      dataset = w,
      tile = g$tiles[[1]],
      column = "locked_in",
      legend = simulate_binary_legend(),
      provenance = simulate_provenance(),
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
          dataset = w,
          tile = g$tiles[[1]],
          column = "feat_1",
          legend = simulate_continuous_legend(),
          provenance = simulate_provenance(),
          total = 500,
          details = "extra info"
        )
      ),
      new_feature(
        name = "f2",
        targets = c(0.2, 0.9),
        layer = new_layer(
          dataset = w,
          tile = g$tiles[[1]],
          column = "feat_2",
          legend = simulate_continuous_legend(),
          provenance = simulate_provenance(),
          total = 600,
          details = "extra info 2"
        )
      )
    )
  )
  # create project
  x <- new_project(
    zones = c("Conservation", "Tourism", "Science"),
    dataset = w,
    tileset = g,
    costs = list(cost),
    locks = list(lock),
    themes = list(theme),
    name = "Project 1",
    author_name = "Greg",
    author_email = "greg@gmail.com",
    bbox = bb
  )
  # run tests
  expect_true(inherits(x, "Project"))
  expect_equal(x$tileset, g)
  expect_equal(x$dataset, w)
  expect_equal(x$costs, list(cost))
  expect_equal(x$locks, list(lock))
  expect_equal(x$themes, list(theme))
  expect_equal(x$solutions, list())
  expect_equal(x$name, "Project 1")
  expect_equal(x$author_name, "Greg")
  expect_equal(x$author_email, "greg@gmail.com")
  expect_equal(x$bbox, bb)
})

test_that("map_project", {
  # create object
  x <- simulate_project()
  start_tile_server(x)
  on.exit(stop_tile_server(), add = TRUE)
  m <- map_project(x)
  # run tests
  expect_s3_class(m, "mapboxgl")
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
  expect_type(x$tileset, "list")
  expect_type(x$tileset$tiles, "list")
  expect_equal(x$tileset$class, "Tileset")
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
  expect_type(x$bbox, "list")
  expect_type(x$bbox$xmin, "double")
  expect_type(x$bbox$ymin, "double")
  expect_type(x$bbox$xmax, "double")
  expect_type(x$bbox$ymax, "double")
  expect_type(x$bbox$crs, "integer")
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
  td <- tempfile()
  dir.create(td, showWarnings = FALSE, recursive = TRUE)
  path <- tempfile(tmpdir = td, fileext = ".yml")
  # write project
  write_project(x, path)
  # read project
  y <- read_project(path)
  # run tests
  file <- tools::file_path_sans_ext(basename(path))
  yml_file <- paste0(file, ".yml")
  pu_file <- paste0(file, "_pu.csv.gz")
  bd_file <- paste0(file, "_bd.csv.gz")
  pm_file <- x$tileset$tiles[[1]]$file
  ## file were saved
  expect_true(file.exists(file.path(td, yml_file)))
  expect_true(file.exists(file.path(td, pu_file)))
  expect_true(file.exists(file.path(td, bd_file)))
  expect_true(file.exists(file.path(td, pm_file)))
  ## data imported correctly
  x1 <- serialize_object(x)
  x1$tileset$dir <- td
  expect_equal(
    x1,
    serialize_object(y),
    tolerance = 1e-6
  )
})

test_that("built-in dataset", {
  # find path
  path <- dir(
    system.file("extdata", package = "apscp"),
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
  expect_false(assertthat::has_name(x$dataset$pu_data, "geometry"))
  expect_false(assertthat::has_name(x$dataset$pu_data, "geom"))
})
