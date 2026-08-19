#' Application startup
#'
#' This function is run at the start the application and is
#' used to import the data and configure default settings.
#'
#' @noRd
app_startup <- function() {
  # set seed for reproducibility
  set.seed(200)

  # store initial memory usage
  if (requireNamespace("lobstr", quietly = TRUE)) {
    options(apscp.initial_memory_used = format(lobstr::mem_used(), "mb"))
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
  options(
    future.plan = strategy,
    future.wait.timeout = get_golem_config("worker_time_out")
  )
  assertthat::assert_that(
    strategy %in% c("sequential", "cluster", "multicore", "multisession"),
    msg = "not a valid strategy"
  )
  suppressWarnings(future::plan(strategy, workers = 2))

  # if needed, initialize tile server
  if (is.null(get_golem_config("tile_server_dir"))) {
    ## if logging, then display details
    if (get_golem_config("logging")) {
      cli::cli_h3("Tile server")
    }
    ## initialize tile server
    tile_server_start(
      read_builtin_project(),
      verbose = get_golem_config("logging")
    )
    ## kill tile server on session end
    assign(".Last", function() {tile_server_stop()}, .GlobalEnv)
  }

}
