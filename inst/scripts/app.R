# Run application
## set application production mode
if (is.null(getOption("golem.app.prod"))) {
  options("golem.app.prod" = TRUE)
}

## if needed, set ports
if (!is.null(Sys.getenv("R_SHINY_PORT"))) {
  options(shiny.port = as.numeric(Sys.getenv("R_SHINY_PORT")))
}
if (!is.null(Sys.getenv("R_SHINY_HOST"))) {
  options(shiny.host = Sys.getenv("R_SHINY_HOST"))
}

## run application
library(apscp)
run_app(project = read_builtin_project())
