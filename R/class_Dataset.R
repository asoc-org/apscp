#' @include internal.R
NULL

#' Dataset class
#'
#' Definition for the `Dataset` class.
#'
#' @seealso See [new_dataset()] and [read_dataset()]
#' to create a `Dataset` object.
Dataset <- R6::R6Class(
  "Dataset",
  public = list(
    #' @field spatial_data [terra::rast()] object.
    spatial_data = NULL,

    #' @field attribute_data `data.frame` object.
    attribute_data = NULL,

    #' @field boundary_data [Matrix::sparseMatrix()] object.
    boundary_data = NULL,

    #' @description
    #' Create a `Dataset` object.
    #' @param spatial_data [terra::rast()] object.
    #' @param attribute_data `data.frame` object.
    #' @param boundary_data [Matrix::sparseMatrix()] object.
    #' @return A new `Dataset` object.
    initialize = function(spatial_data, attribute_data, boundary_data) {
      ## assert that arguments are valid
      assertthat::assert_that(
        ## spatial_data
        inherits(spatial_data, "SpatRaster"),
        terra::nlyr(spatial_data) == 1L,
        ## attribute data
        is.data.frame(attribute_data),
        assertthat::has_name(attribute_data, "_index"),
        is.integer(attribute_data[["_index"]]),
        assertthat::noNA(attribute_data[["_index"]]),
        all(attribute_data[["_index"]] >= 1L),
        all(attribute_data[["_index"]] <= terra::ncell(spatial_data)),
        ## boundary_data
        inherits(boundary_data, "dsCMatrix"),
        identical(ncol(boundary_data), nrow(attribute_data))
      )
      ## set fields
      self$spatial_data <- spatial_data
      self$attribute_data <- attribute_data
      self$boundary_data <- boundary_data
    },

    #' @description
    #' Get the coordinate reference system.
    #' @return [sf::st_crs()] object.
    get_crs = function() {
      sf::st_crs(self$spatial_data)
    },

    #' @description
    #' Get the bounding box.
    #' @param native `logical` value indicating if the bounding box should
    #' be in (`TRUE`) the native coordinate reference system or (`FALSE`)
    #' re-projected to longitude/latitude?
    #' @param expand `logical` value indicating if the bounding box be expanded
    #' by 10%? Defaults to `FALSE`.
    #' @return A `list` object with `"xmin"`, `"xmax"`, `"ymin"`, and `"ymax"`
    #' elements.
    get_bbox = function(native = TRUE, expand = FALSE) {
      # assert arguments are valid
      assertthat::assert_that(
        assertthat::is.flag(native),
        assertthat::noNA(native),
        assertthat::is.flag(expand),
        assertthat::noNA(expand)
      )
      # generate extent object
      ext <- terra::ext(self$spatial_data)
      if (!isTRUE(native)) {
        # if not native, then convert to WGS1984
        ext <- terra::project(
          x = ext,
          from = terra::crs(self$spatial_data),
          to = "EPSG:4326"
        )
      }
      # expand bounding box if needed
      if (isTRUE(expand)) {
        out <- list()
        out$xmin <- unname(ext[1] - (0.1 * (ext[2] - ext[1])))
        out$xmax <- unname(ext[2] + (0.1 * (ext[2] - ext[1])))
        out$ymin <- unname(ext[3] - (0.1 * (ext[4] - ext[3])))
        out$ymax <- unname(ext[4] + (0.1 * (ext[4] - ext[3])))
      } else {
        out <- list(
          xmin = unname(ext[1]),
          xmax = unname(ext[2]),
          ymin = unname(ext[3]),
          ymax = unname(ext[4])
        )
      }
      # if using lon/lat CRS, then ensure valid extent
      if (!native) {
        out$xmin <- max(out$xmin, -180)
        out$xmax <- min(out$xmax, 180)
        out$ymin <- max(out$ymin, -90)
        out$ymax <- min(out$ymax, 90)
      }
      # return result
      out
    },

    #' @description
    #' Get attribute names.
    #' @return `character` vector of field/layer names.
    get_names = function() {
      setdiff(names(self$attribute_data), "_index")
    },

    #' @description
    #' Get a data from the dataset at an index.
    #' @param index `character` or `integer` indicating the desired layer.
    #' @return A [terra::rast()] object.
    get_index = function(index) {
      # assert arguments are valid
      assertthat::assert_that(
        is.character(index) || is.numeric(index),
        assertthat::noNA(index),
        all(self$has_index(index))
      )
      # extract planning unit indices
      idx <- self$attribute_data[["_index"]]
      # create blank raster
      blank <- terra::setValues(self$spatial_data, NA_real_)
      # create a list of raster objects with values from attribute data
      out <- lapply(index, function(x) {
        r <- blank
        r[idx] <- self$attribute_data[[x]]
        r
      })
      # convert list to SpatRaster object
      if (length(index) == 1) {
        out <- out[[1]]
      } else {
        out <- c(out)
      }
      # assign layer names
      if (is.character(index)) {
        names(out)[seq_along(index)] <- index
      } else {
        names(out)[seq_along(index)] <- paste0("V", index)
      }
      # return object
      out
    },

    #' @description
    #' Check if the dataset has an index.
    #' @param index `character` or `integer` indicating the field/layer with
    #'   the data.
    #' @return `logical` indicating if data is present or not.
    has_index = function(index) {
      # assert arguments are valid
      assertthat::assert_that(
        is.character(index) || is.numeric(index),
        assertthat::noNA(index)
      )
      # determine if index is valid index of attribute data
      if (is.numeric(index)) {
        out <- index %in% which(names(self$attribute_data) != "_index")
      } else {
        out <- index %in% setdiff(names(self$attribute_data), "_index")
      }
      # return result
      out
    },

    #' @description
    #' Add data at an index.
    #' @param index `character` or `integer` indicating the field/layer with
    #' the data.
    #' @param values `numeric` vector.
    add_index = function(index, values) {
      # assert arguments are valid
      assertthat::assert_that(
        assertthat::is.string(index) || assertthat::is.count(index),
        assertthat::noNA(index),
        length(values) == nrow(self$attribute_data)
      )
      # if index is an integer, then generate new column name
      # because each column must have a name
      if (is.numeric(index)) {
        index <- uuid::UUIDgenerate()
      }
      # insert new column with values
      self$attribute_data[[index]] <- values
      # return self
      invisible(self)
    }
  )
)

#' New dataset
#'
#' Create a new [Dataset] object.
#'
#' @param spatial_data [terra::rast()] object.
#'
#' @param attribute_data  [tibble::tibble()] object.
#'
#' @param boundary_data [Matrix::sparseMatrix()] object.
#'
#' @return A [Dataset] object.
#'
#' @examples
#' # TODO
#'
#' @export
new_dataset <- function(spatial_data, attribute_data, boundary_data) {
  # create new dataset
  Dataset$new(
    spatial_data = spatial_data,
    attribute_data = attribute_data,
    boundary_data = boundary_data
  )
}

#' Create dataset
#'
#' Create a [Dataset] object from a [terra::rast()] object.
#'
#' @param x [terra::rast()] object.
#'
#' @param pu_name `character` name of layer in `x` that is used to define
#' which pixels are planning units are not. In particular, pixels
#' that do not have missing (`NA`) values in this layer are treated
#' as planning units.
#'
#' @inherit new_dataset return
#'
#' @examples
#' # TODO
#'
#' @export
create_dataset <- function(x, pu_name) {
  # assert valid argument
  assertthat::assert_that(
    inherits(x, "SpatRaster"),
    assertthat::has_name(x, pu_name)
  )

  # create spatial data
  spatial_data <- terra::ifel(is.na(x[[pu_name]]), NA_real_, 1)

  # create attribute data
  attribute_data <- terra::as.data.frame(x)
  idx <- which(!is.na(attribute_data[[pu_name]]))
  attribute_data <- attribute_data[idx, , drop = FALSE]
  assertthat::assert_that(
    nrow(attribute_data) >= 1L,
    msg = "`x[[pu_name]]` must have at least one non-missing value."
  )
  attribute_data[["_index"]] <- as.integer(idx)

  # manually convert all NAs to zeros in attribute data
  for (i in seq_len(ncol(attribute_data) - 1L)) {
    attribute_data[[i]] <-
      replace(attribute_data[[i]], is.na(attribute_data[[i]]), 0)
  }

  # make _index the first column
  attribute_data <- attribute_data[,
    c("_index", setdiff(names(attribute_data), "_index")),
    drop = FALSE
  ]

  # create boundary data
  boundary_data <- prioritizr::boundary_matrix(spatial_data)
  boundary_data <- boundary_data[idx, idx]

  # return object
  new_dataset(
    spatial_data = spatial_data,
    attribute_data = attribute_data,
    boundary_data = boundary_data
  )
}
