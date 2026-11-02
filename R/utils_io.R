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
#' @examples
#' # check if various paths are relative or not
#' is_relative_path("/usr/home/data.txt")
#' is_relative_path("~/data.txt")
#' is_relative_path("C:/Users/root/data.txt")
#' is_relative_path("data.txt")
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
      c(paste0(letters, ":\\"), paste0(letters, ":/"))
    )
  }

  # return if is relative
  !is_abs
}

#' Symlink a file
#'
#' Create a symlink for a file. If the operating system does not support
#' symlink files, then simply copy the file.
#'
#' @param old `character` vector of existing file paths.
#'
#' @param new `character` vector of new file paths or `character`
#' value with directory to save new files.
#'
#' @return An invisible vector containing `logical` values indicating
#' if the file was created.
#'
#' @family misc
#'
#' @export
file_symlink <- function(old, new) {
  # assert valid arguments
  assertthat::assert_that(
    is.character(old),
    assertthat::noNA(old),
    all(file.exists(old)),
    is.character(new),
    assertthat::noNA(new)
  )

  # if new is directory, then create new file paths
  if (identical(length(new), 1L) && dir.exists(new)) {
    new <- file.path(new, basename(old))
  }

  # verify that new and old have same length
  assertthat::assert_that(
    identical(length(old), length(new)),
    msg = "`old` and `new` must have same length."
  )

  # if any of the new files already exist, then skip them
  idx <- !file.exists(new)
  new <- new[idx]
  old <- old[idx]

  # create new files
  if (length(new) > 0) {
    if (!identical(.Platform$OS.type, "unix")) {
      ## if on Windows, then copy the files
      file.copy(from = old, to = new) # nocov
    } else {
      ## otherwise, use symlinks to reduce storage burden
      file.symlink(from = old, to = new)
    }
  }

  # return output
  out <- rep(FALSE, length(idx))
  out[idx] <- TRUE
  invisible(out)
}
