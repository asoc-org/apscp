#' @include internal.R
NULL

#' Deserialize
#'
#' Deserialize an object.
#'
#' @param x `list` object.
#'
#' @param dataset [Dataset] object.
#'
#' @inheritParams rlang::args_dots_empty
#'
#' @inherit serialize_object details
#'
#' @seealso
#' See [serialize_object()] for the opposite of this function.
#'
#' @return An object.
#'
#' @export
deserialize_object <- function(x, ...) {
  UseMethod("deserialize_object", x)
}

#' @export
deserialize_object.default <- function(x, ...) {
  rlang::abort("`x` is not recognized.")
}

#' @export
deserialize_object.Provenance <- function(x, ...) {
  rlang::check_dots_empty()
  do.call(new_provenance, x)
}

#' @export
deserialize_object.Legend <- function(x, ...) {
  rlang::check_dots_empty()
  assertthat::assert_that(
    asserthat::has_name(x, "class"),
    isTRUE(x$class %in% c("ContinuousLegend", "CategoricalLegend")),
    msg = "`x` is not a valid legend."
  )
  # set class
  cl <- x$class
  x$class <- NULL
  # return object
  if (identical(cl, "ContinuousLegend")) {
    return(deserialize_object.ContinuousLegend(x))
  }
  return(deserialize_object.CategoricalLegend(x))
}

#' @export
deserialize_object.CategoricalLegend <- function(x, ...) {
  rlang::check_dots_empty()
  do.call(new_categorical_legend, x)
}

#' @export
deserialize_object.ContinuousLegend <- function(x, ...) {
  rlang::check_dots_empty()
  do.call(new_continuous_legend, x)
}

#' @export
deserialize_object.Layer <- function(x, dataset, ...) {
  rlang::check_dots_empty()
  x$legend <- deserialize_object.Legend(x$legend)
  do.call(new_layer, x)
}

#' @export
deserialize_object.Feature <- function(x, dataset, ...) {
  rlang::check_dots_empty()
  x$layer <- deserialize_object(x$layer, dataset)
  do.call(new_feature, x)
}

#' @export
deserialize_object.Lock <- function(x, dataset, ...) {
  rlang::check_dots_empty()
  x$layer <- deserialize_object(x$layer, dataset)
  do.call(new_lock, x)
}

#' @export
deserialize_object.Cost <- function(x, dataset, ...) {
  rlang::check_dots_empty()
  x$layer <- deserialize_object(x$layer, dataset)
  do.call(new_cost, x)
}

#' @export
deserialize_object.Theme <- function(x, dataset, ...) {
  rlang::check_dots_empty()
  for (i in seq_along(x)) {
    x[[i]]$feature <- deserialize_object.Feature(x[[i]]$feature, dataset)
  }
  do.call(new_theme, x)
}
