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
  tileset <- new_tileset(list(tile), dir = td, max_zoom = 8)

  # create provenance
  provenance <- new_provenance(
   name = "Simulated", icon = "server", color = "#123456",
   description = "Data is simulated."
  )

  # create cost
  cost <- new_cost(
    name = "Tourism revenue",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "cost",
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
  locked_in <- new_lock(
    name = "Protected areas",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "locked_in",
      legend = create_legend(
        d, "locked_in",
        palette = "Greens",
        units = "presence-only"
      ),
      provenance = provenance,
      total = dataset$get_column_total("locked_in")
    )
  )
  locked_out <- new_lock(
    name = "Historical sites",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "locked_out",
      legend = create_legend(
        d, "locked_out",
        palette = "Reds",
        units = "presence/absence"
      ),
      provenance = provenance,
      total = dataset$get_column_total("locked_out")
    )
  )

  # create theme object
  theme <- new_theme(
    "Species",
    lapply(seq_len(5), function(i) {
      new_feature(
        name = paste0("Species ", i),
        targets = stats::runif(3, min = 0, max = 1),
        layer = new_layer(
          dataset = dataset,
          tile = tile,
          column = paste0("feat_", i),
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
    zones = c("Conservation", "Tourism", "Science"),
    bbox = sf::st_bbox(d),
    dataset = dataset,
    tileset = tileset,
    costs = list(cost),
    locks = list(locked_in, locked_out),
    themes = list(theme),
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
    labels = c("Conservation", "Tourism", "Science"),
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
