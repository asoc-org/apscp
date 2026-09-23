#' @include internal.R
NULL

#' Simulate spatial data
#'
#' Simulate spatial data for conservation planning.
#'
#' @return A [sf::st_sf()] object.
#'
#' @details
#' Note that simulation functions are intended to help faciliate
#' package testing and should not be used for any research purposes.
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
  # assert dependencies available
  assertthat::assert_that(
    is_installed("prioritizr"),
    is_installed("terra")
  )
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
    "aspas",
    "camps",
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
  d$aspas[d$aspas < 0.99] <- NA_real_
  d$camps[d$camps < 0.99] <- NA_real_

  # add _index column
  d[["_index"]] <- seq_len(nrow(d))

  # return result
  d
}

#' Simulate project
#'
#' Simulate a new project.
#'
#' @return A [Project] object.
#'
#' @inherit simulate_spatial_data details
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
  dataset <- create_dataset_from_sf(d)

  # create tile
  td <- tempdir()
  tile <- create_tile_from_sf(
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
  costs <- list(
    new_cost(
      name = paste0("Tourism revenue"),
      weight = sample(
        seq(
          from = get_golem_config("prioritization_cost_weights")[1],
          to = get_golem_config("prioritization_cost_weights")[2],
          by = get_golem_config("prioritization_cost_weights")[3]
        ),
        1L
      ),
      zone = "Tourism",
      layer = new_layer(
        dataset = dataset,
        tile = tile,
        column = "cost",
        visible = TRUE,
        legend = create_legend(d, "cost", units = "USD"),
        provenance = provenance,
        total = unname(dataset$get_column_total("cost"))
      )
    )
  )

  # create object
  lock1 <- new_lock(
    name = "Protected areas",
    zone = "Biodiversity",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "aspas",
      visible = TRUE,
      legend = create_legend(
        d, "aspas",
        palette = "Greens",
        units = "presence-only"
      ),
      provenance = provenance,
      total = unname(dataset$get_column_total("aspas"))
    )
  )
  lock2 <- new_lock(
    name = "Field camps",
    zone = "Scientific",
    layer = new_layer(
      dataset = dataset,
      tile = tile,
      column = "camps",
      visible = FALSE,
      legend = create_legend(
        d, "camps",
        palette = "Reds",
        units = "presence/absence"
      ),
      provenance = provenance,
      total = unname(dataset$get_column_total("camps")),
      details = "These sites include castles, monuments, and churches."
    )
  )

  # create theme objects
  themes <- list(
    new_theme("Species", "Biodiversity"),
    new_theme("Iconic species", "Tourism"),
    new_theme("Medicinal species", "Scientific")
  )

  # create status values for each zone
  alloc <- c("Biodiversity" = "aspas", "Tourism" = "camps")
  s1 <- dataset$get_pu_status(zone = "Biodiversity", alloc)
  s2 <- dataset$get_pu_status(zone = "Tourism", alloc)
  s3 <- dataset$get_pu_status(zone = "Scientific", alloc)
  # create feature objects
  features <- lapply(seq_len(5), function(i) {
    new_feature(
      name = paste0("Species ", i),
      zone_targets = simulate_feature_zone_targets(
        seq(
          from = get_golem_config("prioritization_feature_targets")[1],
          to = get_golem_config("prioritization_feature_targets")[2],
          by = get_golem_config("prioritization_feature_targets")[3]
        ),
        3L
      ),
      zone_weights = sample(c(0, 0.5, 1), 3L, replace = TRUE),
      zone_helds = unname(
        c(
          dataset$get_column_held(column = paste0("feat_", i), s1),
          dataset$get_column_held(column = paste0("feat_", i), s2),
          dataset$get_column_held(column = paste0("feat_", i), s3)
        ),
      ),
      themes = themes[
        sample.int(length(themes), sample.int(length(themes), 1L))
      ],
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
        total = unname(dataset$get_column_total(paste0("feat_", i)))
      )
    )
  })

  # create project
  out <- new_project(
    zones = c("Biodiversity", "Tourism", "Scientific"),
    bbox = sf::st_bbox(d),
    dataset = dataset,
    tiles = list(tile),
    costs = costs,
    locks = list(lock1, lock2),
    features = features,
    solutions = list()
  )

  # add solution to project
  out$add_solution(
    new_solution(
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
        total = unname(dataset$get_column_total("solution"))
      ),
      settings = simulate_prioritization_settings(out),
      metrics = simulate_prioritization_metrics(out)
    )
  )

  # return project
  out
}

#' Simulate continuous legend
#'
#' Simulate a legend for continuous data.
#'
#' @return A [new_continuous_legen[d()] object.
#'
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @examples
#' # simulate legend
#' simulate_continuous_legend()
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
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @examples
#' # simulate legend
#' simulate_solution_legend()
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
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @examples
#' # simulate legend
#' simulate_binary_legend()
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
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @examples
#' # simulate provenance
#' simulate_provenance()
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
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @examples
#' # simulate PMTiles file
#' simulate_pmtiles_file()
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
#' Simulate settings for [solve_prioritization()].
#'
#' @param project [new_project()] object.
#'
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @return
#' A `list` with the following elements:
#' `"features"`, `"locks"`, and `"costs"`.
#'
#' @examples
#' # simulate project
#' x <- simulate_project()
#'
#' # simulate prioritization settings
#' s <- simulate_prioritization_settings(x)
#'
#' # print settings
#' print(s)
#'
#' @export
simulate_prioritization_settings <- function(project) {
  # assert that argument is valid
  assertthat::assert_that(inherits(project, "Project"))

  # calculate constants
  nz <- length(project$zones)

  # create feature settings
  feature_settings <- do.call(
    rbind,
    lapply(project$features, function(x) {
      data.frame(
        id = rep(x$id, nz),
        name = rep(x$name, nz),
        column = rep(x$layer$column, nz),
        zone = project$zones,
        target = x$zone_targets,
        weight = x$zone_weights
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
  lock_settings$priority <- seq(nrow(lock_settings), 1L)

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

  # return result
  list(
    features = feature_settings,
    locks = lock_settings,
    costs = cost_settings
  )
}

#' Simulate targets
#'
#' Simulate a set of zone target values for a feature.
#'
#' @param x `numeric` vector with options for targets.
#' Note that `x` must range between 0 and 1.
#'
#' @param n `integer` number of zones.
#'
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @return A `numeric` vector with a value for each zone.
#'
#' @noRd
simulate_feature_zone_targets <- function(x, n) {
  # assert valid arguments
  assertthat::assert_that(
    ## x
    is.numeric(x),
    assertthat::noNA(x),
    ## n
    assertthat::is.count(n),
    assertthat::noNA(n)
  )
  # prepare values
  x <- unique(c(0, x))
  # sample values
  out <- numeric(n)
  for (i in seq_len(n)) {
    ## pick value
    out[i] <- sample(x, 1L)
    ## remove values from x that would result in the sum exceeding 1
    x <- x[x + sum(out) <= 1]
  }
  ## return output
  out
}

#' Simulate prioritization metrics
#'
#' Simulate metrics for evaluating a [solve_prioritization()].
#'
#' @param project [new_project()] object.
#'
#' @inherit simulate_spatial_data details
#'
#' @family simulation
#'
#' @return
#' A `list` with the following elements:
#' (`"summary"`) a data frame, `"features"` a `list` with elements
#' named `"relative"`, "`absolute`", and `"targets"`,
#' `"locks"` a `list` with elements named `"relative"` and "`absolute`",
#' and `"costs"` a `list` with elements named `"relative"` and "`absolute`".
#'
#' @examples
#' # simulate project
#' x <- simulate_project()
#'
#' # simulate prioritization metrics
#' s <- simulate_prioritization_metrics(x)
#'
#' # print settings
#' print(s)
#'
#' @export
simulate_prioritization_metrics <- function(project) {
  # assert that argument is valid
  assertthat::assert_that(inherits(project, "Project"))

  # simulate summary metrics
  zone_prop <- stats::runif(length(project$zones))
  zone_prop <- zone_prop / sum(zone_prop)
  summary_metrics <- tibble::tibble(
    zone = project$zone,
    abs_coverage = zone_prop * project$dataset$get_n_pu(),
    rel_coverage = zone_prop
  )

  # return result
  list(
    summary = summary_metrics,
    features = simulate_repr_metrics(
      vapply(project$features, `[[`, character(1), "name"),
      project$zones
    ),
    locks = simulate_repr_metrics(
      vapply(project$locks, `[[`, character(1), "name"),
      project$zones
    ),
    costs = simulate_repr_metrics(
      vapply(project$costs, `[[`, character(1), "name"),
      project$zones
    )
  )
}

#' Simulate representation metrics
#'
#' @param names `character` vector of layer names.
#'
#' @param zones `character` vector of zone names.
#'
#' @return
#' A `list` with the following elements: `"relative"` and `"absolute"`.
#' Each of these elements contains a data frame.
#'
#' @noRd
simulate_repr_metrics <- function(names, zones) {
  # assert valid arguments
  assert(
    is.character(names),
    assertthat::noNA(names),
    is.character(zones),
    assertthat::noNA(zones)
  )

  # calculate constants
  nn <- length(names)
  nz <- length(zones)

  # simulate relative metrics
  rel_matrix <- matrix(
    stats::runif(nn * nz, 0, 1), nrow = nn, ncol = nz,
    dimnames = list(NULL, zones)
  )
  rel_metrics <- tibble::as_tibble(
    cbind(
      tibble::tibble(name = names),
      tibble::as_tibble(rel_matrix)
    )
  )

  # simulate absolute metrics
  abs_matrix <-
    matrix(
      stats::runif(nn, 0, 800), nrow = nn, ncol = nz,
      byrow = TRUE, dimnames = list(NULL, zones)
    ) * rel_matrix
  abs_metrics <- tibble::as_tibble(
    cbind(
      tibble::tibble(name = names),
      tibble::as_tibble(abs_matrix)
    )
  )

  # return result
  list(relative = rel_metrics, absolute = abs_metrics)
}
