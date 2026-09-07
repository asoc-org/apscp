#' Application startup
#'
#' This function is run at the start the application and is
#' used to import the data and configure default settings.
#'
#' @noRd
app_startup <- function() {

  # display golem configuration
  if (isTRUE(get_golem_config("logging"))) {
    cli::cli_h3("Configuration")
    cli::cli_bullets(
      c(
        "*" = paste0(
          "R_CONFIG_ACTIVE: \"",
          Sys.getenv("R_CONFIG_ACTIVE"),
          "\""
        ),
        "*" = paste0(
          "SHINYPROXY_BACKEND: \"",
          Sys.getenv("SHINYPROXY_BACKEND"),
          "\""
        ),
        "*" = paste0(
          "MAPBOX_PUBLIC_TOKEN: \"",
          Sys.getenv("MAPBOX_PUBLIC_TOKEN"),
          "\""
        ),
        "*" = paste0(
          "SHARED_DIRECTORY: \"",
          Sys.getenv("SHARED_DIRECTORY"),
          "\""
        ),
        "*" = paste0(
          "TILE_SERVER_URL: \"",
          Sys.getenv("TILE_SERVER_URL"),
          "\""
        ),
        "*" = paste0(
          "NUMBER_WORKERS: \"",
          Sys.getenv("NUMBER_WORKERS"),
          "\""
        ),
        "*" = paste0(
          "SOLVER_NAME: \"",
          Sys.getenv("SOLVER_NAME"),
          "\""
        ),
        "*" = paste0(
          "GUROBI_LICENSE_PATH: \"",
          Sys.getenv("GUROBI_LICENSE_PATH"),
          "\""
        )
      )
    )
  }

  # set seed for reproducibility
  set.seed(200)

  # store initial memory usage
  if (requireNamespace("lobstr", quietly = TRUE)) {
    options(apscp.initial_memory_used = format(lobstr::mem_used(), "mb"))
  }

  # set Shiny file and variable size limits
  options(shiny.maxRequestSize = 4000 * 1024^2) # 4GB

  # setup asynchronous processing
  mirai_async_start(
    n = get_golem_config("n_workers"),
    verbose = get_golem_config("verbose")
  )

  # initialize tile server
  if (identical(get_golem_config("tile_server_mode"), "internal")) {
    ## if logging, then display details
    if (isTRUE(get_golem_config("logging"))) {
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
    if (isTRUE(get_golem_config("logging"))) {
      cli::cli_h3("Tile directory")
      cli::cli_text("directory: ", get_golem_config("tile_server_dir"))
    }
  }

  # define behavior for when shiny stops
  shiny::onStop(function() {
    # stop asynchronous workers
    mirai_async_stop()
    # if needed, stop tile server
    if (identical(get_golem_config("tile_server_mode"), "internal")) {
      tile_server_stop()
    }
  })

  # if logging, then display header for Shiny
  if (isTRUE(get_golem_config("logging"))) {
    cli::cli_h3("Shiny application")
  }
}
