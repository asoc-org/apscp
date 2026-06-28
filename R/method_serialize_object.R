#' @include internal.R
NULL

#' Serialize object
#'
#' Serialize an object.
#'
#' @param x An object.
#'
#' @details
#' This function is designed to be used for (i) passing objects from the R
#' session to the JavaScript session in the client browser, and (ii)
#' reading and writing objects to disk.
#'
#' @return A `list` object.
#'
#' @seealso
#' See [deserialize_object()] for the opposite of this function.
#'
#' @export
serialize_object <- function(x) {
  UseMethod("serialize_object", x)
}

#' @export
serialize_object.default <- function(x) {
  rlang::abort("`x` is not recognized.")
}

#' @export
serialize_object.ContinuousLegend <- function(x) {
  list(
    values = x$values,
    colors = x$colors,
    breaks = x$breaks,
    labels = x$labels,
    class = "ContinuousLegend"
  )
}

#' @export
serialize_object.CategoricalLegend <- function(x) {
  list(
    values = x$values,
    labels = x$labels,
    colors = x$colors,
    class = "CategoricalLegend"
  )
}

#' @export
serialize_object.Feature <- function(x) {
  list(
    name = x$name,
    layer = serialize_object.Layer(x$layer),
    targets = x$targets
  )
}

#' @export
serialize_object.Lock <- function(x) {
  list(
    name = x$name,
    layer = serialize_object.Layer(x$layer)
  )
}

#' @export
serialize_object.Cost <- function(x) {
  list(
    name = x$name,
    layer = serialize_object.Layer(x$layer)
  )
}

#' @export
serialize_object.Layer <- function(x) {
  list(
    index = x$index,
    total = x$total,
    units = x$units,
    legend = serialize_object(x$legend),
    provenance = serialize_object.Provenance(x$provenance),
    id = x$id
  )
}

#' @export
serialize_object.Provenance <- function(x) {
  list(
    name = x$name,
    icon = x$icon,
    color = x$color,
    description = x$description
  )
}

#' @export
serialize_object.Theme <- function(x) {
  list(
    name = x$name,
    feature = lapply(x$feature, function(y) serialize_object.Feature(y))
  )
}
