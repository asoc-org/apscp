#' Application startup
#'
#' This function is run at the start the application and is
#' used to import the data and configure default settings.
#'
#' @noRd
app_startup <- function() {
  # set seed for reproducibility
  set.seed(200)
  library(shiny)
  library(htmltools)
  library(mapgl)

  # print initial memory usage
  if (isTRUE(get_golem_config("monitor"))) {
    cli::cli_rule()
    cli::cli_text("Initial memory used: ", format(lobstr::mem_used(), "mb"))
  }

  # assert web service tokens are defined
  ## mapbox token found
  assertthat::assert_that(
    nzchar(Sys.getenv("MAPBOX_PUBLIC_TOKEN")),
    msg = "MAPBOX_PUBLIC_TOKEN not defined as an environmental variable."
  )

  # initialize file and variable size limits
  options(shiny.maxRequestSize = 4000 * 1024^2) # 4GB
  options(future.globals.maxSize = 4000 * 1024^2) # 4GB

  # initialize asynchronous processing
  ## identify strategy
  strategy <- get_golem_config("strategy")
  if (identical(strategy, "auto")) {
    if (identical(Sys.getenv("R_CONFIG_ACTIVE"), "shinyapps")) {
      strategy <- "multicore"
    } else if (identical(.Platform$OS.type, "unix")) {
      strategy <- "multicore"
    } else {
      strategy <- "multisession"
    }
  }
  ## set future strategy
  options(future.wait.timeout = get_golem_config("worker_time_out"))
  ## implement strategy
  golem::print_dev(paste("plan strategy:", strategy))
  assertthat::assert_that(
    strategy %in% c("sequential", "cluster", "multicore", "multisession"),
    msg = "not a valid strategy"
  )
  suppressWarnings(future::plan(strategy, workers = 2))

  # if needed, initialize tile server
  if (is.null(get_golem_config("tile_server_dir"))) {
    tile_server_start(read_builtin_project())
    .Last <- function() {tile_server_stop()}
  }

}
