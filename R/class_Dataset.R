#' @include internal.R
NULL

#' R6 class representing a dataset
#'
#' A dataset is used to store and access information about a set spatial layers.
#'
#' @family class
#'
#' @export
Dataset <- R6::R6Class(
  "Dataset",
  public = list(
    #' @field pu_data [tibble::tibble()] object.
    pu_data = NULL,

    #' @field boundary_data [Matrix::sparseMatrix()] object.
    boundary_data = NULL,

    #' @description
    #' Create a `Dataset` object.
    #' @param pu_data [tibble::tibble()] object.
    #' @param boundary_data [Matrix::sparseMatrix()] object.
    #' @return A new `Dataset` object.
    initialize = function(pu_data, boundary_data) {
      # assert that arguments a re valid
      assertthat::assert_that(
        ## pu_data
        is.data.frame(pu_data),
        !inherits(pu_data, "sf"),
        assertthat::has_name(pu_data, "_index"),
        !assertthat::has_name(pu_data, "geometry"),
        !assertthat::has_name(pu_data, "geom"),
        ## boundary_data
        inherits(boundary_data, "dsCMatrix"),
        identical(ncol(boundary_data), nrow(pu_data))
      )
      # set fields
      self$pu_data <- pu_data
      self$boundary_data <- boundary_data
    },

    #' @description
    #' Get number of planning units.
    #' @return An `integer` value.
    get_n_pu = function() {
      nrow(self$pu_data)
    },

    #' @description
    #' Get column names.
    #' @return A `character` vector.
    get_column_names = function() {
      setdiff(names(self$pu_data), "_index")
    },

    #' @description
    #' Get column data.
    #' @param column `character` or `integer` value.
    #' @return A `numeric` vector.
    get_column_data = function(column) {
      # assert arguments are valid
      assertthat::assert_that(self$has_column(column))
      # return values
      self$pu_data[[column]]
    },

    #' @description
    #' Get total (sum) of values in a column.
    #' @param column `character` or `integer` value.
    #' @return A `character` vector of layer names.
    get_column_total = function(column) {
      # assert arguments are valid
      assertthat::assert_that(self$has_column(column))
      # return sum of values
      sum(self$pu_data[[column]], na.rm = TRUE)
    },

    #' @description
    #' Check if the dataset has a column or columns.
    #' @param column `character vector.
    #' @return A `logical` value.
    has_column = function(column) {
      assertthat::has_name(self$pu_data, column)
    },

    #' @description
    #' Set column data.
    #' @param column `character` value.
    #' @param values `numeric` vector.
    #' @return An invisible `TRUE` indicating success.
    set_column_data = function(column, values) {
      # assert arguments are valid
      assertthat::assert_that(
        assertthat::is.string(column),
        assertthat::noNA(column),
        length(values) == nrow(self$pu_data)
      )
      assertthat::assert_that(
        !identical(column, "_index"),
        msg = "Can't overwrite values in '_index' column."
      )

      # insert new column with values
      self$pu_data[[column]] <- values
      # return self
      invisible(self)
    }
  )
)

#' New dataset
#'
#' Create a new [Dataset] object.
#'
#' @param pu_data [tibble::tibble()] object with planning unit data.
#'
#' @param boundary_data [Matrix::sparseMatrix()] object with boundary
#' matrix data.
#'
#' @return A [Dataset] object.
#'
#' @seealso
#' See [create_dataset()] to automatically convert a [sf::st_sf()] object
#' to a [new_dataset()] object.
#'
#' @family method
#'
#' @examples
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # manually prepare planning unit data
#' pu_data <- sf::st_drop_geometry(sim_data)
#' pu_data[["_index"]] <- seq_len(nrow(pu_data))
#'
#' # manually prepare boundary data
#' bd_data <- prioritizr::boundary_matrix(sim_data)
#'
#' # create object
#' x <- new_dataset(pu_data, bd_data)
#'
#' # preview object
#' print(x)
#'
#' @export
new_dataset <- function(pu_data, boundary_data) {
  # create new dataset
  Dataset$new(
    pu_data = pu_data,
    boundary_data = boundary_data
  )
}

#' Create dataset
#'
#' Create a [Dataset] object from a [st::sf()] object.
#'
#' @param x [sf::st_sf()] object.
#'
#' @inherit new_dataset return
#'
#' @family method
#'
#' @examplesIf interactive()
#' # simulate spatial data
#' sim_data <- simulate_spatial_data()
#'
#' # create object
#' x <- create_dataset(sim_data)
#'
#' # preview object
#' print(x)
#'
#' @export
create_dataset <- function(x) {
  # assert valid argument
  assertthat::assert_that(inherits(x, "sf"))

  # convert data to tibble
  d <- tibble::as_tibble(sf::st_drop_geometry(x))

  # create _index column
  d[["_index"]] <- seq_len(nrow(d))

  # make _index the first column
  d <- d[,
    c("_index", setdiff(names(d), "_index")),
    drop = FALSE
  ]

  # return object
  new_dataset(
    pu_data = d,
    boundary_data = prioritizr::boundary_matrix(x)
  )
}
