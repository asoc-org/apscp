#' @include internal.R
NULL

#' New categorical legend
#'
#' Create a new categorical legend object.
#'
#' @param values `numeric` vector of values that are linked to the labels.
#'
#' @param colors `character` value with the name of the color palette
#' (see [color_palette]) or a set of colors delimited by a semi-colon symbol
#' (e.g. `"#AABBCC;#0A0A0A;#28282B"`).
#' Note that `colors` must have a value for each value in `values`.
#'
#' @param labels `character` Labels to show in the legend.
#' Note that `labels` must have a value for each value in `values`.
#'
#' @return A `CategoricalLegend` object.
#'
#' @examples
#' # create new object
#' l <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))
#'
#' # print object
#' print(l)
#' @export
new_categorical_legend <- function(values, colors, labels) {
  # assert valid parameters
  assertthat::assert_that(
    ## values
    is.numeric(values),
    assertthat::noNA(values),
    ## labels
    is.character(labels),
    assertthat::noNA(labels),
    ## colors
    is.character(colors),
    assertthat::noNA(colors),
    all(nchar(colors) %in% c(7, 9)),
    all(substr(colors, 1, 1) == "#"),
    ## lengths
    length(values) == length(labels),
    length(colors) == length(labels)
  )
  # return object
  structure(
    list(values = values, colors = colors, labels = labels),
    class = c("CategoricalLegend", "Legend")
  )
}

#' New continuous legend
#'
#' Create a new continuous legend object.
#'
#' @param values `numeric` vector of values for creating the color bar.
#'
#' @param colors `character` vector for creating the color bar.
#' These colors should be in hex format (e.g. `"#AABBCC"`) and
#' are used to generate the color bar.
#' Note that `values` and `colors` must have the same number of values.
#'
#' @param breaks `numeric` vector of values for where labels should
#' be shown on the color ramp.
#'
#' @param labels `character` vector with label text.
#' Note that `labels` and `breaks` must have the same number of values.
#'
#' @return A `ContinuousLegend` object.
#'
#' @examples
#' # create new object
#' l <- new_continuous_legend(
#'   c(0, 1), c("#000000", "#DDDDDD"),
#'   c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#' )
#'
#' # print object
#' print(l)
#' @export
new_continuous_legend <- function(values, colors, breaks, labels) {
  # assert arguments are valid
  assertthat::assert_that(
    ## values
    is.numeric(values),
    assertthat::noNA(values),
    ## colors
    is.character(colors),
    all(nchar(colors) %in% c(7, 9)),
    all(substr(colors, 1, 1) == "#"),
    identical(length(values), length(colors)),
    ## breaks
    is.numeric(breaks),
    assertthat::noNA(breaks),
    ## labels
    is.character(labels),
    assertthat::noNA(labels),
    identical(length(labels), length(breaks))
  )
  # return object
  structure(
    list(values = values, colors = colors, breaks = breaks, labels = labels),
    class = c("ContinuousLegend", "Legend")
  )
}

#' Create a new legend
#'
#' Create a new legend automatically from raster data.
#'
#' @param x [rast::SpatRaster()]
#'
#' @param type `character` value indicating if legend should be `"continuous"`
#' `"categorical"`, `"presence/absence"`, or `"presence".
#' Defaults to `NULL`, such that
#' the legend type will be determined automatically.
#'
#' @return A new [new_continuous_legend()] or [new_categorical_legend()] object.
#'
#' @export
create_legend <- function(x, palette = "viridis", type = NULL) {
  # assert arguments are valid
  assertthat::assert_that(
    inherits(x, "SpatRaster"),
    terra::nlyr(x) == 1
  )

  # compute layer values
  v <- c(terra::values(x))
  v <- sort(unique(v[!is.na(v)]))

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

  # depending on the type...
  if (identical(type, "presence/absence")) {
    # generate colors
    if (!startsWith(palette, "#")) {
      palette <- color_palette(palette, n = 2L)
    } else {
      palette <- strsplit(palette, ";")[[1]]
    }
    # create legend
    out <- new_categorical_legend(
      values = c(0, 1),
      labels = c("absent", "presence"),
      colors = color_palette(palette, n = 2L)
    )
  } else if (identical(type, "presence")) {
    # generate colors
    if (!startsWith(palette, "#")) {
      palette <- color_palette(palette, n = 2L)[[2]]
    } else {
      palette <- strsplit(palette, ";")[[1]]
    }
    # create legend
    out <- new_categorical_legend(
      values = 1,
      labels = "presence",
      colors = palette
    )
  } else if (identical(type, "categorical")) {
    # generate colors
    if (!startsWith(palette, "#")) {
      palette <- color_palette(palette, n = length(v))
    } else {
     palette <- strsplit(palette, ";")[[1]]
    }
    # create legend
    out <- new_categorical_legend(
      values = v,
      labels = as.character(v),
      colors = palette
    )
  } else {
    # generate colors
    n_colors <- 5
    if (!startsWith(palette, "#")) {
      palette <- color_palette(palette, n = n_colors)
    } else {
     palette <- strsplit(palette, ";")[[1]]
    }
    # compute breaks
    br <- scales::breaks_extended(n = 4)(v)
    # create legend
    out <- new_continuous_legend(
      values = seq(min(c(v, br)), max(c(v, br)), length.out = n_colors),
      colors = palette,
      breaks = br,
      labels = as.character(br)
    )
  }

  # return legend
  out
}
