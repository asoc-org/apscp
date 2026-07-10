#' @include internal.R
NULL

#' Sidebar dependencies
#'
#' Add dependencies for sidedbar to a Shiny application.
#'
#' @return A `list` with the HTML dependencies.
#'
#' @export
sidebar_deps <- function() {
  list(
    htmltools::htmlDependency(
      "sidebar",
      "1.0.0",
      src = system.file("htmlwidgets/sidebar", package = "apscp"),
      script = c(
        "map-sidebar.js",
        "map-sidebar-binding.js"
      ),
      stylesheet = "map-sidebar.css"
    )
  )
}
