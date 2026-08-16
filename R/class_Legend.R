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
#' @param units `character` value containing the units for the values in the
#' underlying data. Defaults to a `NULL` value.
#'
#' @return A `CategoricalLegend` object.
#'
#' @family class
#'
#' @examples
#' # create new object
#' l <- new_categorical_legend(
#'   values = c(0, 1),
#'   colors = c("#000000", "#AAAAAA"),
#'   labels = c("a", "b"),
#'   units = "land-use types"
#' )
#'
#' # print object
#' print(l)
#' @export
new_categorical_legend <- function(
  values,
  colors,
  labels,
  units = NULL
) {
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
  if (!is.null(units)) {
    assertthat::assert_that(
      ## units
      assertthat::is.string(units),
      assertthat::noNA(units)
    )
  }

  # return object
  structure(
    list(values = values, colors = colors, labels = labels, units = units),
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
#' @inheritParams new_categorical_legend
#'
#' @return A `ContinuousLegend` object.
#'
#' @family class
#'
#' @examples
#' # create new object
#' l <- new_continuous_legend(
#'   values = c(0, 1),
#'   colors = c("#000000", "#DDDDDD"),
#'   breaks = c(0.2, 0.5, 0.8),
#'   labels = c("Low", "Medium", "High"),
#'   units = "hectares"
#' )
#'
#' # print object
#' print(l)
#' @export
new_continuous_legend <- function(
  values,
  colors,
  breaks,
  labels,
  units = NULL
) {
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
    identical(length(labels), length(breaks)),
    ## units
    assertthat::is.string(units)
  )
  if (!is.null(units)) {
    assertthat::assert_that(
      ## units
      assertthat::is.string(units),
      assertthat::noNA(units)
    )
  }

  # return object
  structure(
    list(
      values = values, colors = colors, breaks = breaks, labels = labels,
      units = units
    ),
    class = c("ContinuousLegend", "Legend")
  )
}
