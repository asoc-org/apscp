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
