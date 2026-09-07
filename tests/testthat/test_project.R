test_that("new_project", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create data
  s <- simulate_spatial_data()
  w <- create_dataset_from_sf(s)
  g <- create_tile_from_sf(s)
  # create bbox
  bb <- sf::st_bbox(c(0, 1, 0, 1),  crs = sf::st_crs(4326))
  # create cost
  cost <- new_cost(
    name = "cost",
    weight = 0.5,
    zone = "Tourism",
    layer = new_layer(
      dataset = w,
      tile = g,
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
    zone = "Scientific",
    layer = new_layer(
      dataset = w,
      tile = g,
      column = "aspas",
      legend = simulate_binary_legend(),
      provenance = simulate_provenance(),
      total = 500,
      details = "extra info"
    )
  )
  # create theme
  features <- list(
    new_feature(
      name = "f1",
      zone_targets = c(0.1, 0.2, 0.3),
      zone_weights = c(0.7, 0.8, 0.1),
      zone_helds = c(0.3, 0.1, 0.05),
      themes = list(new_theme("species", "Biodiversity")),
      layer = new_layer(
        dataset = w,
        tile = g,
        column = "feat_1",
        legend = simulate_continuous_legend(),
        provenance = simulate_provenance(),
        total = 500,
        details = "extra info"
      )
    ),
    new_feature(
      name = "f2",
      zone_targets = c(0.2, 0.5, 0.1),
      zone_weights = c(1, 0.3, 0.4),
      zone_helds = c(0.4, 0.2, 0.9),
      themes = list(
        new_theme("species", "Biodiversity"),
        new_theme("species", "tourism")
      ),
      layer = new_layer(
        dataset = w,
        tile = g,
        column = "feat_2",
        legend = simulate_continuous_legend(),
        provenance = simulate_provenance(),
        total = 600,
        details = "extra info 2"
      )
    )
  )
  # create project
  x <- new_project(
    zones = c("Biodiversity", "Tourism", "Scientific"),
    bbox = bb,
    dataset = w,
    tiles = list(g),
    costs = list(cost),
    locks = list(lock),
    features = features,
    name = "Project 1",
    author_name = "Greg",
    author_email = "greg@gmail.com"
  )
  # run tests
  expect_true(inherits(x, "Project"))
  expect_equal(x$tiles, list(g))
  expect_equal(x$dataset, w)
  expect_equal(x$costs, list(cost))
  expect_equal(x$locks, list(lock))
  expect_equal(x$features, features)
  expect_equal(x$solutions, list())
  expect_equal(x$name, "Project 1")
  expect_equal(x$author_name, "Greg")
  expect_equal(x$author_email, "greg@gmail.com")
})

test_that("methods", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- simulate_project()
  # create dummy data
  new_sol <- x$solutions[[1]]
  new_sol$id <- "new_sol"
  new_lock <- x$locks[[1]]
  new_lock$id <- "new_lock"
  # run tests
  ## add new solution
  x$add_solution(new_sol)
  expect_true(any(vapply(x$solutions, `[[`, character(1), "id") == "new_sol"))
  ## add new lock
  x$add_lock(new_lock)
  expect_true(any(vapply(x$locks, `[[`, character(1), "id") == "new_lock"))
})

test_that("map_project", {
  # define skips
  skip_if_missing_mapbox_token()
  skip_if_sim_deps_not_installed()
  # create object
  x <- simulate_project()
  tile_server_start(x)
  on.exit(tile_server_stop(), add = TRUE)
  m <- map_project(x)
  # run tests
  expect_s3_class(m, "mapboxgl")
})

test_that("simulate_project", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  x <- simulate_project()
  # run tests
  expect_true(inherits(x, "Project"))
})

test_that("serialize_object", {
  # define skips
  skip_if_sim_deps_not_installed()
  # create object
  d <- simulate_project()
  x <- serialize_object(d)
  # run tests
  expect_type(x, "list")
  expect_type(x$tiles, "list")
  expect_equal(x$tiles[[1]]$class, "Tile")
  expect_type(x$costs, "list")
  expect_equal(x$costs[[1]]$class, "Cost")
  expect_type(x$locks, "list")
  expect_equal(x$locks[[1]]$class, "Lock")
  expect_type(x$features, "list")
  expect_equal(x$features[[1]]$class, "Feature")
  expect_type(x$solutions, "list")
  expect_equal(x$solutions[[1]]$class, "Solution")
  expect_type(x$name, "character")
  expect_type(x$author_name, "character")
  expect_type(x$author_email, "character")
})

test_that("deserialize_object", {
  skip_if_sim_deps_not_installed()
  # create object
  x <- simulate_project()
  y <- deserialize_object(serialize_object(x), dataset = x$dataset)
  # run tests
  expect_equal(x, y)
})

test_that("read_project/write_project", {
  # define skips
  skip_if_sim_deps_not_installed()
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
  pu_file <- paste0(file, "_pu.gpkg.zip")
  bd_file <- paste0(file, "_bd.rds")
  pm_file <- basename(x$tiles[[1]]$path)
  ## file were saved
  expect_true(file.exists(file.path(td, yml_file)))
  expect_true(file.exists(file.path(td, pu_file)))
  expect_true(file.exists(file.path(td, bd_file)))
  expect_true(file.exists(file.path(td, pm_file)))
  ## data imported correctly
  x1 <- serialize_object(x)
  expect_equal(
    ## note that path elements are set to NULL because the file paths
    ## should correspond to different locations
    update_named_list_elements(x1, "path", NULL),
    update_named_list_elements(serialize_object(y), "path", NULL),
    tolerance = 1e-4
  )
})

test_that("read_builtin_project", {
  # create object
  x <- read_builtin_project()
  # run tests
  expect_r6_class(x, "Project")
  expect_true(
    all(file.exists(vapply(x$tiles, `[[`, character(1), "path")))
  )
})
