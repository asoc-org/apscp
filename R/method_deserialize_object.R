#' @include internal.R
NULL

#' Deserialize
#'
#' Deserialize an object.
#'
#' @param x `list` object generated with [serialize_object()].
#'
#' @param dataset [Dataset] or `NULL` object. Note that some classes
#' need a [Dataset] object to be deserialized.
#'
#' @inherit serialize_object details examples
#'
#' @seealso
#' See [serialize_object()] for the opposite of this function.
#'
#' @return An object.
#'
#' @export
deserialize_object <- function(x, dataset = NULL) {
  # assert valid arguments
  assertthat::assert_that(
    is.list(x),
    assertthat::has_name(x, "class"),
    assertthat::is.string(x$class)
  )

  # check if dataset required
  need_dataset_classes <- c(
    "Layer", "Cost", "Theme", "Feature", "Lock", "Solution", "Project"
  )
  if (x$class %in% need_dataset_classes) {
    assertthat::assert_that(
      inherits(dataset, "Dataset"),
      msg = "`x` requires `dataset` argument to be deserialized."
    )
  }

  # extract class
  x_class <- x$class
  x$class <- NULL

  # if needed, deserialize components of x
  if (assertthat::has_name(x, "legend")) {
    x$legend <- deserialize_object(x$legend)
  }
  if (assertthat::has_name(x, "provenance")) {
    x$provenance <- deserialize_object(x$provenance)
  }
  if (assertthat::has_name(x, "layer")) {
    x$layer <- deserialize_object(x$layer, dataset = dataset)
  }
  if (assertthat::has_name(x, "costs")) {
    x$costs <- lapply(x$costs, deserialize_object, dataset = dataset)
  }
  if (assertthat::has_name(x, "features")) {
    x$features <- lapply(x$features, deserialize_object, dataset = dataset)
  }
  if (assertthat::has_name(x, "themes")) {
    x$themes <- lapply(x$themes, deserialize_object, dataset = dataset)
  }
  if (assertthat::has_name(x, "locks")) {
    x$locks <- lapply(x$locks, deserialize_object, dataset = dataset)
  }
  if (assertthat::has_name(x, "solutions")) {
    x$solutions <- lapply(x$solutions, deserialize_object, dataset = dataset)
  }
  if (x_class %in% c("Layer", "Project")) {
    x$dataset <- dataset
  }

  # return object
  switch(
    x_class,
    Provenance = do.call(new_provenance, x),
    CategoricalLegend = do.call(new_categorical_legend, x),
    ContinuousLegend = do.call(new_continuous_legend, x),
    Layer = do.call(new_layer, x),
    Feature = do.call(new_feature, x),
    Lock = do.call(new_lock, x),
    Cost = do.call(new_cost, x),
    Solution = do.call(new_solution, x),
    Theme = do.call(new_theme, x),
    Project = do.call(new_project, x)
  )
}
