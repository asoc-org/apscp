#' @include internal.R class_Dataset.R
NULL

#' New Layer
#'
#' Create a new layer object.
#'
#' @param dataset [new_dataset()] object with spatial data.
#'
#' @param index `character` or `integer` value indicating the layer in
#' `dataset` that has the data for this layer.
#'
#' @param total `numeric` value indicating the total sum of values in
#' the layer.
#'
#' @param legend [new_categorical_legend()] or [new_continuous_legend()]
#' object.
#'
#' @param units `character` value containing the units for the values in the
#' underlying data.
#'
#' @param provenance [new_provenance()] object.
#'
#' @param details `character` value with additional details for the layer.
#' Defaults to `NULL`.
#'
#' @param id `character` value with unique identifier.
#' Defaults to a random identifier ([uuid::UUIDgenerate()]).
#'
#' @return A `Layer` object.
#'
#' @examples
#' # create object
#' x <- new_layer(
#'   dataset = simulate_dataset(),
#'   index = "feat_1",
#'   legend = new_continuous_legend(
#'     c(0, 1), c("#000000", "#DDDDDD"),
#'     c(0.2, 0.5, 0.8), c("Low", "Medium", "High")
#'   ),
#'   units = "suitability",
#'   provenance = new_provenance(
#'    name = "Global", icon = "globe", color = "#123456",
#'    description = "Data is global."
#'   ),
#'   total = 500,
#'   details = "extra info"
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_layer <- function(
  dataset,
  index,
  total,
  units,
  legend,
  provenance,
  details = NULL,
  id = uuid::UUIDgenerate()
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## dataset
    inherits(dataset, "Dataset"),
    ## index
    assertthat::is.string(index) || assertthat::is.count(index),
    assertthat::noNA(index),
    ## total
    assertthat::is.number(total),
    assertthat::noNA(total),
    isTRUE(total >= 0),
    ## units
    assertthat::is.string(units),
    assertthat::noNA(units),
    ## legend
    inherits(legend, c("ContinuousLegend", "CategoricalLegend")),
    #### provenance
    inherits(provenance, "Provenance"),
    ## id
    assertthat::is.string(id),
    assertthat::noNA(id)
  )
  if (!is.null(details)) {
    assertthat::assert_that(
      assertthat::is.string(details),
      assertthat::noNA(details)
    )
  }

  # return object
  structure(
    list(
      dataset = dataset,
      index = index,
      total = total,
      units = units,
      legend = legend,
      provenance = provenance,
      id = id,
      details = details
    ),
    class = "Layer"
  )
}
