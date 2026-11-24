#' @include internal.R
NULL

#' Create new legend.
#'
#' Create a new legend automatically.
#'
#' @param x `numeric` vector.
#'
#' @param palette `character` value with the color palette. In particular,
#' `palette` can be the name of a color palette that is recognized by
#' [color_palette()]. Alternatively, it can be a set of
#' hex color code delimited by semicolons
#' (e.g., `palette = "#000000;#DDDDDD;#123456"`).
#'
#' @param type `character` value indicating if legend should be `"continuous"`,
#' `"softcontinuous"`, `"categorical"`, `"presence/absence"`, or `"presence".
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
#' x <- create_legend(sim_data$cost, units = "USD", palette = "PuBu")
#'
#' # preview object
#' print(x)
#'
#' @export
create_legend <- function(x, units = NULL, palette = "viridis", type = NULL) {
  # assert arguments are valid
  assertthat::assert_that(is.numeric(x))
  if (!is.null(units)) {
    assertthat::assert_that(
      ## units
      assertthat::is.string(units),
      assertthat::noNA(units)
    )
  }

  # compute layer values
  v <- sort(unique(x))

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

  # if x only has one value and type is continuous, then force to be categorical
  if (identical(type, "continuous") && identical(length(v), 1L)) {
    type <- "categorical"
  }

  # if type = soft-continuous, then convert to categorical if all values
  # are integer and fewer than 6 classes
  if (identical(type, "softcontinuous")) {
    if (all(v == round(v)) && (length(v) <= 6L)) {
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

#' Create contrast legend
#'
#' Create a legend for a layer that contrasts differences between
#' two or more prioritizations.
#'
#' @param project [new_project()] object.
#'
#' @param name1 `character` value with the name of a [new_solution()].
#'
#' @param name2 `character` value with the name of a [new_solution()].
#'
#' @param values `numeric` vector with values to include in the legend.
#' Defaults to `NULL` such that the legend contains values for all possible
#' similarities and differences between the solutions.
#'
#' @inheritParams create_solution_legend
#'
#' @return A [new_categorical_legend()] object.
#'
#' @family method
#'
#' @export
create_contrast_legend <- function(
  project, name1, name2, values = NULL,
  zone_colors = get_golem_config("zone_colors"),
  zone_locked_colors = get_golem_config("zone_locked_colors")
) {
  # assert valid arguments
  assertthat::assert_that(
    inherits(project, "Project"),
    assertthat::is.string(name1),
    assertthat::noNA(name1),
    assertthat::is.string(name2),
    assertthat::noNA(name2)
  )
  if (!is.null(values)) {
    assertthat::assert_that(
      is.numeric(values),
      !all(is.na(values))
    )
  }

  # define data frame with legend information
  ## initialize default values
  default_values <- stats::setNames(
    c(
      zone_locked_colors[seq_along(project$zones)],
      zone_colors[seq_along(project$zones)]
    ),
    nm = c(paste(project$zones, "locked"), paste(project$zones, "priority"))
  )
  data <- expand.grid(
    id1 = names(default_values),
    id2 = names(default_values),
    stringsAsFactors = FALSE
  )
  data$value <- seq_len(nrow(data))
  data$color <- NA_character_
  ## if needed, subset values
  if (!is.null(values)) {
    data <- data[which(seq_len(nrow(data)) %in% values), , drop = FALSE]
  }
  ## assign legend text
  data$text <- paste(name1, data$id1, "and", name2, data$id2)
  idx <- data$id1 == data$id2
  data$text[idx] <- paste("Both", name1, "and", name2, data$id1[idx])
  ## assign legend colors for same zones
  idx <- match(
    c(
      paste("Both", name1, "and", name2, project$zones, "locked"),
      paste("Both", name1, "and", name2, project$zones, "priority")
    ),
    data$text
  )
  data$color[idx[!is.na(idx)]] <- c(
    zone_locked_colors[seq_along(project$zones)],
    zone_colors[seq_along(project$zones)]
  )[!is.na(idx)]
  ## assign remaining colors
  idx <- which(is.na(data$color))
  for (i in idx) {
    data$color[i] <- grDevices::colorRampPalette(
      c(default_values[[data$id1[[i]]]], default_values[[data$id2[[i]]]])
    )(3)[[2]]
  }
  # return object
  new_categorical_legend(
    values = data$value,
    colors = data$color,
    labels = data$text
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
