
# if needed, use developer settings
if (identical(Sys.getenv("PROFILE", "dev"))) {
  renv::settings$package.dependency.fields(
    c("Imports", "Depends", "LinkingTo", "Suggests"),
    persist = FALSE
  )
}

# restore library
renv::restore()

# install gurobi R package
try(
  renv::install(
    dir(
      paste0(Sys.getenv("GUROBI_HOME"), "/R"), "^.*\\.tar\\.gz",
      full.names = TRUE
    )
  ),
  silent = TRUE
)
