# load packages
library(testthat)
library(apscp)

# enable parallel testing
Sys.unsetenv("R_TESTS")

# run tests
test_check("apscp")
