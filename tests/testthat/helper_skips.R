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

#' Skip if rust support for freestiler not enabled
#'
#' Skip a test if \pkg{freestiler} was not installed with rust support.
#'
#' @export
skip_if_freestiler_rust_not_enabled <- function() {
  if (!nzchar(Sys.getenv("FREESTILER_HAS_RUST_SUPPORT"))) {
    res <- try({
      withr::with_options(
        list(freestiler.duckdb_backend = "rust"), {
        freestiler::freestile_query(
          query = paste0(
            "SELECT \"AREA\",\"GEOM\" FROM ST_Read(\"",
            system.file("shape/nc.shp", package = "sf"),
            "\")"
          ),
          output =  tempfile(fileext = ".pmtiles"),
          layer_name =  "counties",,
          max_zoom = 2,
          quiet = TRUE
        )
      })
    }, silent = TRUE)
    Sys.setenv(
      "FREESTILER_HAS_RUST_SUPPORT" =
        ifelse(inherits(res, "try-error"), "false", "true")
    )
  }
  skip_if_not(
    identical(Sys.getenv("FREESTILER_HAS_RUST_SUPPORT"), "true"),
    message = "freestiler package was not installed with Rust support."
  )
}
