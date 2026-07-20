#' @include internal.R class_Dataset.R
NULL

#' New Layer
#'
#' Create a new layer object.
#'
#' @param dataset [new_dataset()] object with spatial data.
#'
#' @param column `character` value indicating the column in
#' `dataset` and `tile` that has the data for this layer.
#'
#' @param total `numeric` value indicating the total sum of values in
#' the layer.
#'
#' @param legend [new_categorical_legend()] or [new_continuous _legend()]
#' object.
#'
#' @param provenance [new_provenance()] object.
#'
#' @param tile [new_tile()] object.
#'
#' @param visible `logical` value indicating if the layer should
#' be visible by default? Defaults to `FALSE`.
#'
#' @param details `character` value with additional details for the layer.
#' Defaults to `NULL`.
#'
#' @return A `Layer` object.
#'
#' @family class
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- new_layer(
#'   column = "feat_1",
#'   total = 500,
#'   dataset = create_dataset(sim_data),
#'   tile = create_tile(sim_data),
#'   legend = simulate_continuous_legend(),
#'   provenance = simulate_provenance(),
#'   visible = TRUE,
#'   details = "extra info"
#' )
#'
#' # preview object
#' print(x)
#'
#' @export
new_layer <- function(
  column,
  total,
  dataset,
  tile,
  legend,
  provenance,
  visible = FALSE,
  details = NULL
) {
  # assert that arguments are valid
  assertthat::assert_that(
    ## dataset
    inherits(dataset, "Dataset"),
    ## column
    assertthat::is.string(column) || assertthat::is.count(column),
    assertthat::noNA(column),
    ## visible
    assertthat::is.flag(visible),
    assertthat::noNA(column),
    ## total
    assertthat::is.number(total),
    assertthat::noNA(total),
    isTRUE(total >= 0),
    ## legend
    inherits(legend, c("ContinuousLegend", "CategoricalLegend")),
    #### provenance
    inherits(provenance, "Provenance"),
    #### tile
    inherits(tile, "Tile")
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
      column = column,
      total = total,
      dataset = dataset,
      tile = tile,
      legend = legend,
      provenance = provenance,
      visible = visible,
      details = details
    ),
    class = "Layer"
  )
}
