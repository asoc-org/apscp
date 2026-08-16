#' Sanitize name
#'
#' Sanitize text value for use in databases.
#'
#' @param x `character` vector.
#'
#' @return A `character` vector.
#'
#' @noRd
sanitize_text <- function(x) {
  # assert arguments are valid
  assertthat::assert_that(
    is.character(x),
    assertthat::noNA(x)
  )
  # prepare text
  x <- stringi::stri_trans_general(x, "Latin-ASCII")
  x <- iconv(x, from = "UTF-8", to = "ascii", sub = "")
  x <- gsub(" ", "-", x, fixed = TRUE)
  # return text
  x
}

#' Make unique column name
#'
#' Create a column name based on a user-specified name, whilst ensuring
#' that the new name is not a duplicate of any existing column names.
#'
#' @param x `character` value.
#'
#' @param existing_names `character` vector.
#'
#' @details
#' This function uses [make.unique()] to make unique `character` values.
#'
#' @return A `character` name.
#'
#' @noRd
make_unique_column_name <- function(x, existing_names) {
  # assert arguments are valid
  assertthat::assert_that(
    assertthat::is.string(x),
    is.character(existing_names)
  )
  # make unique
  x <- make.unique(c(existing_names, x), sep = "_")
  x[[length(x)]]
}

#' Update named elements in nested list
#'
#' Update all elements with a particular name in a nested list
#' to have a new value.
#'
#' @param x `list` object.
#'
#' @param element_name `character` value with the name to identify
#' which elements should be updated.
#'
#' @param new_value Object that is assigned to updated elements.
#'
#' @return A `list` object.
#'
#' @noRd
update_named_list_elements <- function(x, element_name, new_value) {
  if (is.list(x)) {
    # Replace value if the name matches at the current level
    if (element_name %in% names(x)) {
      x[[element_name]] <- new_value
    }
    # Recursively apply to all child elements
    lapply(
      x, update_named_list_elements,
      element_name = element_name, new_value = new_value
    )
  } else {
    x
  }
}

#' Standardize target values
#'
#' Standardize a set of values to ensure that they sum to a value of 1,
#' and have a pre-specified number of significant digits.
#'
#' @param x `numeric` values.
#'
#' @param digits `numeric` value indicating the number of digits desired
#' for the output. Defaults to 2.
#'
#' @return A `numeric` vector.
#'
#' @noRd
standardize_zone_targets <- function(x, digits = 2) {
  # if needed, ensure values sum to 1
  if (sum(x) > 1) {
    x <- x / sum(x)
  }
  # define constants
  up <- 10^digits
  xmin <- 1 / up
  # try simply ceiling the values to begin with
  y <- ceiling(x * up) / up
  # if needed, apply further standardization to help meet targets
  while (sum(y) > 1) {
    # find indices for target values that would not get reduced to zero
    nz <- which(y > xmin)
    # find the index that should be reduced
    i <- which.max(y[nz] - x[nz])
    # reduced the value by smallest rounding increment
    y[nz[i]] <- y[nz[i]] - xmin
  }
  # ensure that rounding worked
  assertthat::assert_that(
    sum(y) <= 1,
    msg = "Failed to standardize targets."
  )
  # return value
  y
}
