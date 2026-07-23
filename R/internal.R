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
