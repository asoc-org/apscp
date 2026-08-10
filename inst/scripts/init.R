# set default npm scope
npm_scope <- "prod"

# if needed, use developer settings
if (identical(Sys.getenv("PROFILE", "dev"))) {
  renv::settings$package.dependency.fields(
    c("Imports", "Depends", "LinkingTo", "Suggests"),
    persist = FALSE
  )
  npm_scope <- "dev"
}

# restore library
renv::restore()

# restore npm library
packer::npm_install(scope = npm_scope)

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
