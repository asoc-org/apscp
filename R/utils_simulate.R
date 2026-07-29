#' @include internal.R
NULL

#' Simulate spatial data
#'
#' Simulate spatial data for conservation planning.
#'
#' @return A [sf::st_sf()] object.
#'
#' @family simulation
#'
#' @examples
#' # simulate data
#' d <- simulate_spatial_data()
#'
#' # preview object
#' print(d)
#' @export
simulate_spatial_data <- function() {
  # obtain planning unit data
  pu <- prioritizr::get_sim_pu_raster()
  fts <- prioritizr::get_sim_features()
  idx <- terra::cells(is.na(pu), 0)[[1]]

  # create simulated solution with 3 zones
  solution <- pu * NA_real_
  solution[idx] <- withr::with_seed(
    seed = 500,
    sample(seq(0, 3), size = length(idx), replace = TRUE)
  )

  # create binary layer
  binary <- pu * NA_real_
  binary[idx] <- withr::with_seed(
    seed = 500,
    sample(seq(0, 1), size = length(idx), replace = TRUE)
  )

  # prepare spatial layers for dataset
  d <- c(
    prioritizr::get_sim_pu_raster(),
    fts,
    prioritizr::get_sim_locked_in_raster(),
    prioritizr::get_sim_locked_out_raster(),
    binary,
    solution
  )
  names(d) <- c(
    "cost",
    paste0("feat_", seq_len(terra::nlyr(fts))),
    "locked_in",
    "locked_out",
    "invasive_species",
    "solution"
  )
  terra::ext(d) <- c(-20, 20, -30, 30)
  terra::crs(d) <- "epsg:4326"

  # convert to as sf object
  d <- sf::st_as_sf(
    terra::as.polygons(
      d, values = TRUE, na.rm = TRUE, na.all = TRUE, dissolve = FALSE
    )
  )

  # handle missing cost values
  d <- d[!is.na(d$cost), , drop = FALSE]

  # set coordinate reference system
  suppressWarnings(
    d <- sf::st_set_crs(d, sf::st_crs(4326))
  )

  # set 0s to NA values for locked columns
  d$locked_in[d$locked_in < 0.99] <- NA_real_
  d$locked_out[d$locked_out < 0.99] <- NA_real_

  # return result
  d
}

#' Simulate project
#'
#' Simulate a new project.
#'
#' @return A [Project] object.
#'
#' @family simulation
#'
#' @examples
#' # create simulated project
#' x <- simulate_project()
#'
#' # preview object
#' print(x)
#'
#' @export
simulate_project <- function() {
  # simulate spatial data
  d <- simulate_spatial_data()

  # create dataset
  dataset <- create_dataset(d)

  # create tile
  td <- tempdir()
  tile <- create_tile(
    d,
    path = tempfile(tmpdir = td, fileext = ".pmtiles"),
    max_zoom = 8, verbose = FALSE
  )

  # create provenance
  provenance <- new_provenance(
   name = "Simulated", icon = "server", color = "#123456",
   description = "Data is simulated."
  )

  # create cost
  cost <- new_cost(
    name = "Tourism revenue",
    zone = "Tourism",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "cost",
      visible = TRUE,
      legend = create_legend(d, "cost", units = "USD"),
      provenance = provenance,
      total = dataset$get_column_total("cost")
    )
  )

  # create solution
  solution <- new_solution(
    name = "Solution 1",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "solution",
      visible = TRUE,
      legend = new_categorical_legend(
        c(1, 2, 3), c("#000000", "#DDDDDD", "#AAAAAA"),
        c("Conservation", "Tourism", "Science"),
        units = "categorical"
      ),
      provenance = provenance,
      total = dataset$get_column_total("solution")
    )
  )

  # create object
  lock1 <- new_lock(
    name = "Protected areas",
    zone = "Biodiversity",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "locked_in",
      visible = TRUE,
      legend = create_legend(
        d, "locked_in",
        palette = "Greens",
        units = "presence-only"
      ),
      provenance = provenance,
      total = dataset$get_column_total("locked_in")
    )
  )
  lock2 <- new_lock(
    name = "Field camps",
    zone = "Scientific",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "locked_out",
      visible = TRUE,
      legend = create_legend(
        d, "locked_out",
        palette = "Reds",
        units = "presence/absence"
      ),
      provenance = provenance,
      total = dataset$get_column_total("locked_out"),
      details = "These sites include castles, monuments, and churches."
    )
  )

  # create theme object
  theme1 <- new_theme(
    "Species",
    "Biodiversity",
    lapply(seq_len(5), function(i) {
      new_feature(
        name = paste0("Species ", i),
        target = stats::runif(1L, min = 0, max = 1),
        layer = new_layer(
          dataset = dataset,
          tile = tile,
          column = paste0("feat_", i),
          visible = TRUE,
          legend = create_legend(
            d, paste0("feat_", i),
            palette = "viridis",
            units = "suitability"
          ),
          provenance = provenance,
          total = dataset$get_column_total(paste0("feat_", i))
        )
      )
    })
  )
  theme2 <- new_theme(
    "Iconic species",
    "Tourism",
    lapply(seq(3, 5), function(i) {
      new_feature(
        name = paste0("Species ", i),
        target = stats::runif(1L, min = 0, max = 1),
        layer = new_layer(
          dataset = dataset,
          tile = tile,
          column = paste0("feat_", i),
          visible = TRUE,
          legend = create_legend(
            d, paste0("feat_", i),
            palette = "viridis",
            units = "suitability"
          ),
          provenance = provenance,
          total = dataset$get_column_total(paste0("feat_", i))
        )
      )
    })
  )
  theme3 <- new_theme(
    "Medicinal species",
    "Scientific",
    lapply(seq(1, 3), function(i) {
      new_feature(
        name = paste0("Species ", i),
        target = stats::runif(1L, min = 0, max = 1),
        layer = new_layer(
          dataset = dataset,
          tile = tile,
          column = paste0("feat_", i),
          visible = TRUE,
          legend = create_legend(
            d, paste0("feat_", i),
            palette = "viridis",
            units = "suitability"
          ),
          provenance = provenance,
          total = dataset$get_column_total(paste0("feat_", i))
        )
      )
    })
  )

  # return project
  new_project(
    zones = c("Biodiversity", "Tourism", "Scientific"),
    dataset = dataset,
    tiles = list(tile),
    costs = list(cost),
    locks = list(lock1, lock2),
    themes = list(theme1, theme2, theme3),
    solutions = list(solution)
  )
}

#' Simulate continuous legend
#'
#' Simulate a legend for continuous data.
#'
#' @return A [new_continuous_legend()] object.
#'
#' @family simulation
#'
#' @export
simulate_continuous_legend <- function() {
  new_continuous_legend(
    values = c(0, 1),
    colors = c("#000000", "#DDDDDD"),
    breaks = c(0.2, 0.5, 0.8),
    labels = c("Low", "Medium", "High"),
    units = "quantile"
  )
}

#' Simulate solution legend
#'
#' Simulate a legend for solution data.
#'
#' @return A [new_categorical_legend()] object.
#'
#' @family simulation
#'
#' @export
simulate_solution_legend <- function() {
  new_categorical_legend(
    values = c(1, 2, 3),
    colors = c("#000000", "#DDDDDD", "#AAAAAA"),
    labels = c("Biodiversity", "Tourism", "Science"),
    units = "ternary"
  )
}

#' Simulate binary legend
#'
#' Simulate a legend for binary data.
#'
#' @return A [new_categorical_legend()] object.
#'
#' @family simulation
#'
#' @export
simulate_binary_legend <- function() {
  new_categorical_legend(
    values = c(0, 1),
    colors = c("#000000", "#DDDDDD"),
    labels = c("absent", "present"),
    units = "binary"
  )
}

#' Simulate provenance
#'
#' Simulate a provenance information.
#'
#' @return A [new_provenance()] object.
#'
#' @family simulation
#'
#' @export
simulate_provenance <- function() {
  new_provenance(
   name = "Global",
   icon = "globe",
   color = "#123456",
   description = "Data is global."
  )
}

#' Simulate PMtiles file
#'
#' Simulate a PMtiles file by creating a dummy file on disk.
#'
#' @return A `character` value with the file path.
#'
#' @family simulation
#'
#' @export
simulate_pmtiles_file <- function() {
  # define file path
  p <- tempfile(fileext = ".pmtiles")
  # create dummy file
  writeLines("dummy file", p)
  # return path
  p
}

#' Simulate prioritization settings
#'
#' Simulate settings for generating a [prioritization()].
#'
#' @param project [new_project()] object.
#'
#' @family simulation
#'
#' @return
#' A `list` with the following elements:
#' `feature_settings`, `lock_in_setting`, `lock_out_settings`,
#' and `cost_settings`.
#'
#' @export
simulate_prioritization_settings <- function(project) {
  # assert that argument is valid
  assertthat::assert_that(inherits(project, "Project"))

  # create feature settings
  feature_settings <- do.call(
    rbind,
    lapply(project$themes, function(x) {
      # set weight and target values
      wt <- sample(
        get_golem_config("prioritization_scenario_weight_values"),
        1L
      )
      tg <- sample(
        get_golem_config("prioritization_scenario_target_values"),
        1L
      )
      # generate settings for each feature
      do.call(
        rbind,
        lapply(x$features, function(y) {
          data.frame(
            id = y$id,
            name = y$name,
            column = y$layer$column,
            zone = x$zone,
            target = y$layer$total * tg,
            weight = wt
          )
        })
      )
    })
  )

  # create lock settings
  lock_settings <- do.call(
    rbind,
    lapply(project$locks, function(x) {
      data.frame(
        id = x$id,
        name = x$name,
        column = x$layer$column,
        zone = x$zone
      )
    })
  )

  # create cost settings
  cost_settings <- do.call(
    rbind,
    lapply(project$costs, function(x) {
      data.frame(
        id = x$id,
        name = x$name,
        column = x$layer$column,
        zone = x$zone,
        weight = 1
      )
    })
  )

  # create reference point settings
  zone_settings <- data.frame(
    zone = project$zones,
    weight = rep(1, length(project$zones))
  )

  # return result
  list(
    features = feature_settings,
    locks = lock_settings,
    costs = cost_settings,
    zones = zone_settings
  )
}
