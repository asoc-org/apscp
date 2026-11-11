#' Compress object
#'
#' Compress an object.
#'
#' @param x Object.
#'
#' @return A raw vector.
#'
#' @family misc
#'
#' @examples
#' # create object
#' x <- letters[1:10]
#' print(x)
#'
#' # compress object
#' x2 <- compress_object(x)
#' print(x2)
#'
#' # decompress object
#' x3 <- decompress_object(x2)
#' print(x3)
#'
#' @export
compress_object <- function(x) {
  memCompress(serialize(x, connection = NULL), type = "gzip")
}

#' Decompress object
#'
#' Decompress an object.
#'
#' @param x Object.
#'
#' @return An object.
#'
#' @family misc
#'
#' @inherit compress_object examples
#'
#' @export
decompress_object = function(x) {
  unserialize(memDecompress(x, type = "gzip"))
}
