#' @include internal.R
NULL

#' Read sf data from zip file
#'
#' @param path `character` file path.
#'
#' @return A [sf::st_sf()] object.
#'
#' @family misc
#'
#' @export
read_sf_data <- function(path) {
  # import data
  sf::read_sf(path)
}

#' Write sf data to zip file
#'
#' @param x [sf::st_sf()] object.
#'
#' @param path `character` file path.
#'
#' @return An invisible `TRUE`.
#'
#' @family misc
#'
#' @export
write_sf_data <- function(x, path) {
  # assert argument is valid
  assertthat::assert_that(
    inherits(x, "sf"),
    assertthat::is.string(path),
    endsWith(path, ".gpkg.zip")
  )

  # create temporary directory
  td <- tempfile()
  dir.create(td, showWarnings = FALSE, recursive = TRUE)

  # save to temporary directory
  withr::with_dir(
    td,
    sf::write_sf(x, basename(tools::file_path_sans_ext(path)))
  )

  # prepare file path
  path <- path.expand(path)
  if (is_relative_path(path)) {
    path <- file.path(getwd(), path)
  }

  # create zip file
  suppressMessages(
    withr::with_dir(
      td,
      utils::zip(zipfile = path, files = dir(td), flags = "-r9Xq")
    )
  )

  # return success
  invisible(TRUE)
}

#' Is relative path?
#'
#' Check if a file path is relative or not.
#'
#' @param x `character` value with file path.
#'
#' @return A `logical` value.
#'
#' @family misc
#'
#' @export
is_relative_path <- function(x) {
  # assert argument is valid
  assertthat::assert_that(assertthat::is.string(x))

  # check if file path is absolute
  is_abs <- startsWith(x, "/")
  if (!is_abs && nchar(x) >= 3L) {
    is_abs <- any(
      tolower(substr(x, 1, 3)) %in%
      c(paste0(letters, "\\:"), paste0(letters, "/:"))
    )
  }

  # return if is relative
  !is_abs
}
