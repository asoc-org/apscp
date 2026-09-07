#' Skip if missing MapBox token
#'
#' Skip a test if a MapBox token is not detected in the system
#' environmental variables.
#'
#' @export
skip_if_missing_mapbox_token <- function() {
  skip_if_not(
    nzchar(Sys.getenv("MAPBOX_PUBLIC_TOKEN")),
    message = "`MAPBOX_PUBLIC_TOKEN` is missing"
  )
}

#' Skip if simulation dependencies missing
#'
#' Skip a test if packages required for data simulation are not installed.
#'
#' @export
skip_if_sim_deps_not_installed <- function() {
  skip_if_not(
    requireNamespace("prioritizr", quietly = TRUE) &&
      requireNamespace("terra", quietly = TRUE),
    message = paste0(
      "Packages for simulation cannot be loaded",
      "(`terra` and `prioritizr`)."
    )
  )
}

#' Skip if color palette dependencies missing
#'
#' Skip a test if packages required for generating color palettes are
#' not installed.
#'
#' @export
skip_if_color_deps_not_installed <- function() {
  skip_if_not(
    requireNamespace("RColorBrewer", quietly = TRUE) &&
      requireNamespace("viridisLite", quietly = TRUE),
    message = paste0(
      "Packages for simulation cannot be loaded",
      "(`RColorBrewer` and `viridisLite`)."
    )
  )
}
