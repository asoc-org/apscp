# fix Shiny autoload issue
## Note that we can't actually use `golem::disable_autoload()` to achieve
## this because it creates a  "_disable_autoload.R" file which results
## violates R package conventions and means that the application cannot
## be successfully installed as an R package.
options(shiny.autoload.r = FALSE)

# active renv package management
source("renv/activate.R")

# load default packages when R is run interactively
if (interactive()) {
  if (requireNamespace("devtools", quietly = TRUE)) {
    library(devtools)
  }
  if (requireNamespace("testthat", quietly = TRUE)) {
    library(testthat)
  }
}

# set default browser as google-chrome if possible
if (file.exists("/usr/bin/google-chrome")) {
  options(browser = "/usr/bin/google-chrome")
}

# if running asynchronous worker on developer environment
# then load package
if (
  isTRUE(requireNamespace("mirai", quietly = TRUE)) &&
  isTRUE("--mirai" %in% commandArgs(trailingOnly = TRUE)) &&
  file.exists("DESCRIPTION")
) {
  pkgload::load_all(".", attach = TRUE, attach_testthat = FALSE)
}
