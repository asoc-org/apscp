# load packages
library(testthat)
library(apscp)

# enable parallel testing
Sys.unsetenv("R_TESTS")

# determine reporter
if (identical(Sys.getenv("CI"), "true")) {
  reporter <- "progress"
} else {
  reporter <- testthat::check_reporter()
}

# run tests
## (except on GitHub Actions for Windows because it is unreliable)
if (!(
  identical(Sys.getenv("CI"), "true") &&
  identical(.Platform$OS.type, "windows")
)) {
  test_check("apscp", reporter = reporter)
}
