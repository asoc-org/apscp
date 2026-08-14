#' @include internal.R
NULL

#' Convert `JsDataFrame` object to data.frame
#'
#' Convert a JavaScript data frame object to a `data.frame` object.
#'
#' @param x `list` object.
#'
#' @param ... Not used.
#'
#' @return A `data.frame` object.
#'
#' @noRd
NULL

#' @method as.data.frame JsDataFrame
#' @export
as.data.frame.JsDataFrame <- function(x, ...) {
  # assert valid object
  assertthat::assert_that(is.list(x))
  # if first element has zero length, then create empty data frame
  if (identical(length(x[[1]]), 0L)) {
    return(
      stats::setNames(
        as.data.frame(matrix(ncol = length(x), nrow = 0)),
        names(x)
      )
    )
  }
  # otherwise, create data frame
  as.data.frame(lapply(x, unlist, use.names = FALSE, recursive = FALSE))
}

#' Convert `JsDataFrameList` object to list object.
#'
#' Convert a JavaScript list of data frames object to a `list` object.
#'
#' @param x `list` object.
#'
#' @param ... Not used.
#'
#' @return A `list` of `data.frame` objects.
#'
#' @noRd
NULL

#' @method as.list JsDataFrameList
#' @export
as.list.JsDataFrameList <- function(x, ...) {
  # assert valid object
  assertthat::assert_that(is.list(x))
  # return result
  stats::setNames(lapply(x, as.data.frame.JsDataFrame), names(x))
}
