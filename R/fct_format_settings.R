#' @include internal.R
NULL

#' Format settings
#'
#' Format settings for generate a prioritization.
#'
#' @param x `list` object.
#'
#' @details
#' This function is intended to be used to prepare a `list` produced
#' by the [solver()] widget for input to the [prioritization()] function.
#'
#' @return A `list` of `data.frame` objects.
#'
#' @export
format_settings <- function(x) {
  # assert argument is valid
  assertthat::assert_that(
    is.list(x),
    assertthat::has_name(x, "objectives"),
    assertthat::has_name(x, "features"),
    assertthat::has_name(x, "locks"),
    assertthat::has_name(x, "costs")
  )

  # convert objective settings
  ## TODO

  # convert feature settings
  x$features <- as.data.frame(
    lapply(x$features, unlist, use.names = FALSE, recursive = TRUE)
  )

  # convert lock settings
  x$locks <- as.data.frame(
    lapply(x$locks, unlist, use.names = FALSE, recursive = TRUE)
  )

  # if no selected locks, then ensure correct formatting.
  if (identical(nrow(x$locks), 0L)) {
    x$locks <- data.frame(
      id = character(0),
      name = character(0),
      column = character(0),
      zone = character(0),
      priority = double(0)
    )
  }

  # convert cost settings
  x$costs <- as.data.frame(
    lapply(x$costs, unlist, use.names = FALSE, recursive = TRUE)
  )

  # if needed, handle missing costs that are not assigned to zone
  x$costs$zone[nchar(x$costs$zone) == 0L] <- NA_character_

  # return result
  x
}
