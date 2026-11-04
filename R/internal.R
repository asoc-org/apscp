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
#' @param options `numeric` values indicating available target values.
#' Defaults to `NULL` such that the options are calculated based on
#' default golem configuration (
#' `do.call(seq, as.list(get_golem_config("prioritization_feature_targets")))`).
#'
#' @return A `numeric` vector.
#'
#' @noRd
standardize_zone_targets <- function(
  x,
  options = NULL
) {
  if (is.null(options)) {
    options <- seq(
      get_golem_config("prioritization_feature_targets")[[1]],
      get_golem_config("prioritization_feature_targets")[[2]],
      get_golem_config("prioritization_feature_targets")[[3]]
    )
  }
  # assert valid arguments
  assertthat::assert_that(
    is.numeric(x),
    is.numeric(options)
  )
  # if targets sum to 1 and are available options, then return initial input
  options_prec <- as.character(as.integer(options * 1000))
  x_prec <- as.character(as.integer(x * 1000))
  if (sum(x) <= 1 && all(x_prec %in% options_prec)) {
    return(round(x, 3))
  }
  # if needed, ensure values sum to 1
  if (sum(x) > 1) {
    x <- x / sum(x)
  }
  # ensure that target values are a valid option
  x_prec <- as.character(as.integer(x * 1000))
  if (!all(x_prec %in% options_prec)) {
    i <- which(!x_prec %in% options_prec)
    for (j in i) {
      if (x[j] > 0) {
        valid_options <- options[options > 0]
      }
      x[j] <- valid_options[which.min(abs(x[j] - valid_options))]
    }
    standardize_zone_targets(x, options = options)
  }
  # return value
  x
}
