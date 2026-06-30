#' Skip if missing MapBox token
#'
#' Skip a test if a MapBox token is not detected in the system
#' environmental variables.
#'
#' @export
skip_if_missing_mapbox_token <- function() {
  skip_if(
    nzchar(Sys.getenv("MAPBOX_PUBLIC_TOKEN")),
    message = "MAPBOX_PUBLIC_TOKEN is missing"
  )
}
