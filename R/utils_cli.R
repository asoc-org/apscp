#' Print list
#'
#' Print a `list` object.
#'
#' @param x `list` with names.
#'
#' @param max_width `numeric` value to truncate `x`.
#' Defaults to [cli::console_width()].
#'
#' @return None. This function is used for the side-effect of printing.
#'
#' @family misc
#'
#' @export
cli_list <- function(x, max_width = cli::console_width()) {
  # assert valid arguments
  assertthat::assert_that(
    is.list(x),
    !is.null(names(x)),
    assertthat::is.count(max_width),
    assertthat::noNA(max_width)
  )
  # format labels
  labels <- names(x)
  # update max_width to account for labels
  max_width <- max(1, max_width - max(nchar(labels)) - 3L)
  # format text
  text <- vapply(x, FUN.VALUE = character(1), function(x) {
    switch(
      class(x)[[1]],
      "character" = {cli_format_vector(x, max_width = max_width)},
      "integer" = {cli_format_vector(x, max_width = max_width)},
      "numeric" = {cli_format_vector(x, max_width = max_width)},
      "function" = "{.cls function} object",
      "list" = "{.cls list} object",
      "matrix" = paste0(
        "{.cls matrix} object (",
        nrow(x), " ", cli::symbol$times, " ", ncol(x),
        " rows/columns)"
      ),
      "data.frame" = paste0(
        "{.cls data.frame} object (",
        nrow(x), " ", cli::symbol$times, " ", ncol(x),
        " rows/columns)"
      ),
      "tbl_df" = paste0(
        "{.cls tibble::tibble} object (",
        nrow(x), " ", cli::symbol$times, " ", ncol(x),
        " rows/columns)"
      ),
      {paste0("{.cls ", class(x)[[1]], "} object")}
    )
  })
  # format bullets
  cli::cli_bullets(
    stats::setNames(
      paste0("{.field ", labels, "}: ", text),
      rep("*", length(x))
    )
  )
  # return NULL
  invisible(NULL)
}

#' Format atomic vector for printing.
#'
#' Prepare atomic vector for printing.
#'
#' @param x Atomic vector.
#'
#' @inheritParams cli_list
#'
#' @return A `character` value.
#'
#' @family misc
#'
#' @export
cli_format_vector <- function(x, max_width = cli::console_width()) {
  # preliminary calculations
  nc <- cumsum(nchar(as.character(x)) + 3L)
  i <- max(which(nc < max_width), 0L)
  # prepare output
  if (i == length(x)) {
    x <- cli::cli_vec(x)
    out <- paste0("{.val {x}}")
  } else if ((i > 1L) && (nchar(as.character(x[[1]])) < max_width)) {
    x <- cli::cli_vec(x[seq_len(i)], style = list(`vec-last` = ", "))
    out <- paste0(
      "{.val {x}}, ",
      cli::symbol$ellipsis
    )
  } else {
    x <- substr(x[[1L]], 1, max(1L, max_width - 5L))
    out <- paste0(
      "{.val {x}",
      cli::symbol$ellipsis,
      "}"
    )
  }
  # return output
  cli::format_inline(out, keep_whitespace = TRUE)
}
