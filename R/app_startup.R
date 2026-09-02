#' Application startup
#'
#' This function is run at the start the application and is
#' used to import the data and configure default settings.
#'
#' @noRd
app_startup <- function() {

  # display golem configuration
  if (get_golem_config("logging")) {
    cli::cli_h3("Configuration")
    cli::cli_text(
      "R_CONFIG_ACTIVE: \"",
      Sys.getenv("R_CONFIG_ACTIVE"),
      "\""
    )
    cli::cli_text(
      "SHINYPROXY_BACKEND: \"",
      Sys.getenv("SHINYPROXY_BACKEND"),
      "\""
    )
    cli::cli_text(
      "MAPBOX_PUBLIC_TOKEN: \"",
      Sys.getenv("MAPBOX_PUBLIC_TOKEN"),
      "\""
    )
    cli::cli_text(
      "SHARED_DIRECTORY: \"",
      Sys.getenv("R_CONFIG_ACTIVE"),
      "\""
    )
    cli::cli_text(
      "TILE_SERVER_URL: \"",
      Sys.getenv("R_CONFIG_ACTIVE"),
      "\""
    )
  }

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

  # initialize asynchronous processing
  mirai::daemons(
    get_golem_config("n_workers"),
    url = mirai::local_url(),
    remote = mirai::remote_config(
      command = "Rscript", rscript = "", args = c("", ".", "--mirai")
    )
  )

  # initialize tile server
  if (identical(get_golem_config("tile_server_mode"), "internal")) {
    ## if logging, then display details
    if (get_golem_config("logging")) {
      cli::cli_h3("Tile server")
    }
    ## initialize tile server
    tile_server_start(
      golem::get_golem_options("project"),
      verbose = get_golem_config("logging")
    )
    ## kill tile server on session end
    assign(".Last", function() {tile_server_stop()}, .GlobalEnv)
  } else if (identical(get_golem_config("tile_server_mode"), "external")) {
    ## otherwise, make tile files available for external tile server
    ## if logging, then display details
    if (get_golem_config("logging")) {
      cli::cli_h3("Tile directory")
      cli::cli_text("directory: ", get_golem_config("tile_server_dir"))
    }
  }

  # define behavior for when shiny stops
  shiny::onStop(function() {
    # stop asynchronous workers
    mirai::daemons(0)
    # if needed, stop tile server
    if (identical(get_golem_config("tile_server_mode"), "internal")) {
      tile_server_stop()
    }
  })

}
