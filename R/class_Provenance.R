#' @include internal.R
NULL

#' New provenance
#'
#' Create a new provenance object.
#'
#' @param name `character` name of provenance source.
#'
#' @param icon `character` name of icon to depict the source.
#'
#' @param color `character` value containing the color for the icon.
#'
#' @param description `character` value  containing a description of the
#' provenance.
#'
#' @return A `Provenance` object.
#'
#' @family class
#'
#' @examples
#' # create a provenance
#' x <- new_provenance(
#'   name = "Global", icon = "globe", color = "#123456",
#'   description = "Data is global."
#' )
#'
#' # print object
#' print(x)
#' @export
new_provenance <- function(name, icon, color, description) {
  # assert arguments are valid
  assertthat::assert_that(
    ## name
    assertthat::is.string(name),
    assertthat::noNA(name),
    ## icon
    assertthat::is.string(icon),
    assertthat::noNA(icon),
    ## color
    assertthat::is.string(color),
    assertthat::noNA(color),
    ## description
    assertthat::is.string(description),
    assertthat::noNA(description)
  )
  # return object
  structure(
    list(
      name = name,
      icon = icon,
      color = color,
      description = description
    ),
    class = "Provenance"
  )
}

#' Tool generated provenance
#'
#' Create a [new_provenance()] object that indicates data were generated with
#' the tool.
#'
#' @return A [new_provenance()] object
#'
#' @export
tool_generated_provenance <- function() {
  structure(
    list(
      name = "User generated",
      icon = icon,
      color = "black",
      description = "Generated with the tool"
    ),
    class = "Provenance"
  )
}
