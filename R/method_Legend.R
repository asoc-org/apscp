#' @include internal.R
NULL

#' Create a new legend
#'
#' Create a new legend automatically for a column in a [sf::st_sf()] object.
#'
#' @param x [sf::st_sf()] object.
#'
#' @param column `character` value with name of column.
#'
#' @param palette `character` value with the color palette. In particular,
#' `palette` can be the name of a color palette that is recognized by
#' [color_palette()]. Alternatively, it can be a set of
#' hex color code delimited by semicolons
#' (e.g., `palette = "#000000;#DDDDDD;#123456"`).
#'
#' @param type `character` value indicating if legend should be `"continuous"`
#' `"categorical"`, `"presence/absence"`, or `"presence".
#' Defaults to `NULL`, such that
#' the legend type will be determined automatically.
#'
#' @inheritParams new_categorical_legend
#'
#' @return A new [new_continuous_legend()] or [new_categorical_legend()] object.
#'
#' @family method
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- create_legend(sim_data, "cost", units = "USD", palette = "PuBu")
#'
#' # preview object
#' print(x)
#'
#' @export
create_legend <- function(
  x,
  column,
  units = NULL,
  palette = "viridis",
  type = NULL
) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(x, "sf"),
    assertthat::is.string(column),
    assertthat::noNA(column),
    assertthat::has_name(x, column)
  )
  if (!is.null(units)) {
    assertthat::assert_that(
      ## units
      assertthat::is.string(units),
      assertthat::noNA(units)
    )
  }

  # compute layer values
  v <- sort(unique(x[[column]]))

  # if needed, determine type
  if (is.null(type)) {
    if (any(v == 0) && all(v == 0 | v == 1)) {
      type <- "presence/absence"
    } else if (all(v == 1)) {
      type <- "presence"
    } else if (all(v == round(v))) {
      type <- "categorical"
    } else {
      type <- "continuous"
    }
  }

  # further argument validation
  assertthat::assert_that(
    assertthat::is.string(type),
    is_match_of(
      type,
      c("presence/absence", "presence", "categorical", "continuous")
    )
  )

  # if colors are manually specified, then prepare the colors
  if (startsWith(palette, "#")) {
    palette <- strsplit(palette, ";")[[1]]
  }

  # depending on the type...
  if (identical(type, "presence/absence")) {
    # if color ramp specified, then prepare the colors
    if (!startsWith(palette[[1]], "#")) {
      palette <- color_palette(palette, n = 2L)
    }
    # create legend
    out <- new_categorical_legend(
      values = c(0, 1),
      labels = c("absent", "present"),
      colors = palette,
      units = units
    )
  } else if (identical(type, "presence")) {
    # if color ramp specified, then prepare the colors
    if (!startsWith(palette[[1]], "#")) {
      palette <- color_palette(palette, n = 2L)[[2]]
    }
    # create legend
    out <- new_categorical_legend(
      values = 1,
      labels = "presence",
      colors = palette,
      units = units
    )
  } else if (identical(type, "categorical")) {
    # if color ramp specified, then prepare the colors
    if (!startsWith(palette[[1]], "#")) {
      palette <- color_palette(palette, n = length(v))
    }
    # create legend
    out <- new_categorical_legend(
      values = v,
      labels = as.character(v),
      colors = palette,
      units = units
    )
  } else {
    # generate colors
    n_colors <- 5
    if (!startsWith(palette[[1]], "#")) {
      palette <- color_palette(palette, n = n_colors)
    } else {
      palette <- grDevices::colorRampPalette(palette)(n_colors)
    }
    # compute breaks
    br <- labeling::extended(dmin = min(v), dmax = max(v), m = 4)
    # create legend
    out <- new_continuous_legend(
      values = seq(min(c(v, br)), max(c(v, br)), length.out = n_colors),
      colors = palette,
      breaks = br,
      labels = as.character(br),
      units = units
    )
  }

  # return legend
  out
}

#' Create solution legend
#'
#' Create a legend for solutions generated with the tool.
#'
#' @param project [new_project()] object.
#'
#' @inheritParams solver
#'
#' @details
#' Note that colors for zones are specified in the golem configuration file.
#'
#' @family method
#'
#' @return A [new_categorical_legend()] object.
#'
#' @examples
#' # simulate project
#' p <- simulate_project()
#'
#' # create solution legend
#' x <- create_solution_legend(p)
#'
#' # print legend
#' print(x)
#'
#' @export
create_solution_legend <- function(
  project,
  zone_colors = get_golem_config("zone_colors"),
  zone_locked_colors = get_golem_config("zone_locked_colors")
) {
  # assert argument is valid
  assertthat::assert_that(
    inherits(project, "Project"),
    is.character(zone_colors),
    assertthat::noNA(zone_colors),
    is.character(zone_locked_colors),
    assertthat::noNA(zone_locked_colors)
  )

  # obtain zone names
  zones <- project$zones

  # if needed, add extra colors
  if (length(zones) > length(zone_colors)) {
    zone_colors <- c(
      zone_colors,
      color_palette("plasma", length(zones) - length(zone_colors) + 1L)
    )
  }
  if (length(zones) > length(zone_locked_colors)) {
    zone_locked_colors <- c(
      zone_locked_colors,
      color_palette("viridis", length(zones) - length(zone_locked_colors) + 1L)
    )
  }

  # subset required colors
  zone_colors <- zone_colors[seq_along(zones)]
  zone_locked_colors <- zone_locked_colors[seq_along(zones)]

  # create legend
  new_solution_legend(
    values = seq_len(length(zones) * 2L),
    colors = c(zone_locked_colors, zone_colors),
    labels = c(paste(zones, "locked"), paste(zones, "priority"))
  )
}

#' Get paint parameters
#'
#' Get parameters for painting a [new_layer] object.
#'
#' @param x [new_continuous_legend()] or [new_categorical_legend()] object.
#'
#' @param column `character` value with source layer for painting.
#'
#' @details
#' This function is designed for use with [mapgl::add_fill_layer()].
#'
#' @return A named `list` object.
#'
#' @family mapping
#'
#' @examples
#' # create object
#' legend <- simulate_continuous_legend()
#'
#' # obtain parameters for painting data stored in a column
#' # called "values" based on the legend
#' x <- get_paint_parameters(legend, "values")
#'
#' # preview object
#' print(x)
#'
#' @export
get_paint_parameters <- function(x, column) {
  UseMethod("get_paint_parameters")
}

#' @export
get_paint_parameters.default <- function(x, column) {
  rlang::abort("`x` is not recognized.") # nocov
}

#' @export
get_paint_parameters.ContinuousLegend <- function(x, column) {
  # return object
  list(
    fill_color = mapgl::interpolate(
      column = column,
      values = x$values,
      stops = x$colors,
      na_color = "transparent"
    )
  )
}

#' @export
get_paint_parameters.CategoricalLegend <- function(x, column) {
  # return object
  list(
    fill_color = mapgl::step_expr(
      column = column,
      base = "#B2BEB5",
      values = x$values,
      stops = x$colors,
      na_color = "transparent"
    )
  )
}
