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
#' @family io
#'
#' @examples
#' # create an object
#' x <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))
#'
#' # preview object
#' print(x)
#'
#' # serialize object
#' s <- serialize_object(x)
#'
#' # preview serialized object
#' print(s)
#'
#' # deserialize the serialized object
#' d <- deserialize_object(s)
#'
#' # preview the deserialized object,
#' # we can see that it is identical to x (i.e., the original object)
#' print(d)
#'
#' @export
serialize_object <- function(x) {
  UseMethod("serialize_object", x)
}

#' @export
serialize_object.default <- function(x) {
  rlang::abort("`x` is not recognized.")
}

#' @rdname serialize_object
#' @method serialize_object Provenance
#' @export
serialize_object.Provenance <- function(x) {
  list(
    name = x$name,
    icon = x$icon,
    color = x$color,
    description = x$description,
    class = "Provenance"
  )
}

#' @rdname serialize_object
#' @method serialize_object Tile
#' @export
serialize_object.Tile <- function(x) {
  list(
    path = ifelse(
      isTRUE(getOption("apscp.project.io")),
      basename(x$path),
      x$path
    ),
    source_layer = x$source_layer,
    max_zoom = x$max_zoom,
    class = "Tile"
  )
}

#' @rdname serialize_object
#' @method serialize_object ContinuousLegend
#' @export
serialize_object.ContinuousLegend <- function(x) {
  list(
    values = x$values,
    colors = x$colors,
    breaks = x$breaks,
    labels = x$labels,
    units = x$units,
    class = "ContinuousLegend"
  )
}

#' @rdname serialize_object
#' @method serialize_object CategoricalLegend
#' @export
serialize_object.CategoricalLegend <- function(x) {
  list(
    values = x$values,
    labels = x$labels,
    colors = x$colors,
    units = x$units,
    class = "CategoricalLegend"
  )
}

#' @rdname serialize_object
#' @method serialize_object Layer
#' @export
serialize_object.Layer <- function(x) {
  list(
    column = x$column,
    total = x$total,
    visible = x$visible,
    details = x$details,
    legend = serialize_object(x$legend),
    provenance = serialize_object.Provenance(x$provenance),
    tile = serialize_object.Tile(x$tile),
    class = "Layer"
  )
}

#' @rdname serialize_object
#' @method serialize_object Feature
#' @export
serialize_object.Feature <- function(x) {
  list(
    name = x$name,
    id = x$id,
    zones_targets = x$zones_targets,
    layer = serialize_object.Layer(x$layer),
    class = "Feature"
  )
}

#' @rdname serialize_object
#' @method serialize_object Lock
#' @export
serialize_object.Lock <- function(x) {
  list(
    name = x$name,
    id = x$id,
    zones_in = x$zones_in,
    zones_out = x$zones_out,
    layer = serialize_object.Layer(x$layer),
    class = "Lock"
  )
}

#' @rdname serialize_object
#' @method serialize_object Cost
#' @export
serialize_object.Cost <- function(x) {
  list(
    name = x$name,
    id = x$id,
    zones_active = x$zones_active,
    layer = serialize_object.Layer(x$layer),
    class = "Cost"
  )
}

#' @rdname serialize_object
#' @method serialize_object Solution
#' @export
serialize_object.Solution <- function(x) {
  list(
    name = x$name,
    id = x$id,
    layer = serialize_object.Layer(x$layer),
    class = "Solution"
  )
}

#' @rdname serialize_object
#' @method serialize_object Theme
#' @export
serialize_object.Theme <- function(x) {
  list(
    name = x$name,
    features = lapply(x$features, function(y) serialize_object.Feature(y)),
    class = "Theme"
  )
}

#' @rdname serialize_object
#' @method serialize_object Project
#' @export
serialize_object.Project <- function(x) {
  list(
    name = x$name,
    version = x$version,
    author_name = x$author_name,
    author_email = x$author_email,
    zones = x$zones,
    tiles = lapply(x$tiles, function(y) serialize_object.Tile(y)),
    costs = lapply(x$costs, function(y) serialize_object.Cost(y)),
    themes = lapply(x$themes, function(y) serialize_object.Theme(y)),
    locks = lapply(x$locks, function(y) serialize_object.Lock(y)),
    solutions = lapply(x$solutions, function(y) serialize_object.Solution(y)),
    class = "Project"
  )
}
