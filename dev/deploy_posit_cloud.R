# Initialization
## load packages
library(rsconnect)
## verify environmental variables defined
invisible(assertthat::assert_that(
  nzchar(Sys.getenv("POSIT_CLOUD_CLIENT")),
  msg = "`POSIT_CLOUD_CLIENT` environmental variable must be defined."
))
invisible(assertthat::assert_that(
  nzchar(Sys.getenv("POSIT_CLOUD_SECRET")),
  msg = "`POSIT_CLOUD_SECRET` environmental variable must be defined."
))
invisible(assertthat::assert_that(
  nzchar(Sys.getenv("POSIT_CLOUD_ACCOUNT")),
  msg = "`POSIT_CLOUD_ACCOUNT` environmental variable must be defined."
))
invisible(assertthat::assert_that(
  nzchar(Sys.getenv("MAPBOX_PUBLIC_TOKEN")),
  msg = "`MAPBOX_PUBLIC_TOKEN` environmental variable must be defined."
))

# Preliminary processing
## set environmental variables for deployment
app_version <- as.list(read.dcf("DESCRIPTION")[1, ])$Version
Sys.setenv("APSCP_VERSION" = app_version)
Sys.setenv("GOLEM_CONFIG_ACTIVE" = "posit_cloud")

## set Posit Connect Cloud
if (interactive()) {
  rsconnect::connectCloudUser()
} else {
   rsconnect::connectCloudClientCredentials(
    clientId = Sys.getenv("POSIT_CLOUD_CLIENT"),
    clientSecret = Sys.getenv("POSIT_CLOUD_SECRET"),
    accountName = Sys.getenv("POSIT_CLOUD_ACCOUNT")
  )
}
## if needed, forget deployment
try(rsconnect::forgetDeployment())

# Main processing
## deploy application
rsconnect::deployApp(
  appName = "apscp",
  appTitle = "Decision Support Tool for the Antarctic Peninsula",
  account = Sys.getenv("POSIT_CLOUD_ACCOUNT"),
  dependencyResolution = "strict",
  packageRepositoryResolutionR = "lockfile",
  envVars = c("MAPBOX_PUBLIC_TOKEN", "APSCP_VERSION", "GOLEM_CONFIG_ACTIVE")
)
