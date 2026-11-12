# Note that this code assumes that the compute docker container is running
# to provide access to the Gurobi solver.
#
# To setup this container, use the following command:
#
# docker-compose -f docker-compose.yml --profile compute up
#
# To terminate this container, use the following command:
#
# docker-compose -f docker-compose.yml --profile compute down

# Initialization
## load packages
devtools::load_all()
## load data
project <- read_builtin_project()
print(project$dataset)
## define parameters
## multiplier values for feature targets
feature_target_values <- c(0, 1)
## cache path
cache_path <- "inst/extdata/solution-cache.rds"
if (!file.exists(cache_path)) {
  saveRDS(list(), cache_path)
}
## maximum number of solutions to prepare
### set to Inf to generate all solutions
max_n <- Inf

# Preliminary processing
## import cache
cache_data <- readRDS(cache_path)
## identify themes associated with features
theme_names <-
  {project$features} %>%
  lapply(function(x) {
    vapply(x$themes, function(y) y$name, character(1))
  }) %>%
  unlist(recursive = TRUE, use.names = FALSE) %>%
  unique()

## prepare table with default feature data for generating prioritizations
default_feature_data <-
  {project$features} %>%
  lapply(function(x) {
    tibble::tibble(
      id = x$id,
      name = x$name,
      column = x$layer$column,
      theme = vapply(x$themes, function(y) y$name, character(1))[[1]],
      zone = project$zones,
      target = x$zone_targets,
      weight = x$zone_weights
    )
  }) %>%
  do.call(what = rbind)

## create parameter combinations for different scenarios
scenario_param_data <-
  {project$zones} %>%
  lapply(function(z) {
    ## create combinations of zones and themes
    theme_zones_data <-
      expand.grid(theme = theme_names, zone = project$zones)
    ## create scenario alternatives for zones that are not z
    curr_zone_alt_data <-
      seq_len(nrow(theme_zones_data)) %>%
      lapply(function(i) {
        curr_features =
          default_feature_data %>%
          dplyr::filter(
            theme == theme_zones_data$theme[[i]],
            zone == theme_zones_data$zone[[i]]
          )
        if (all(curr_features$target == 0)) return(0)
        if (curr_features$zone[[1]] != z) return(1)
        feature_target_values
      }) %>%
      stats::setNames(paste0(theme_zones_data[[1]], ":", theme_zones_data[[2]]))
    ## create scenario parameters for zone
    do.call(expand.grid, curr_zone_alt_data)
  }) %>%
  do.call(what = rbind) %>%
  tibble::as_tibble()

## add in scenario where all multiplier values are 1
scenario_param_data <- tibble::as_tibble(
  rbind(
    apply(scenario_param_data[1, ], 2, function(x) 1),
    scenario_param_data
  )
)

## subset the scenario parameters
scenario_param_data <-
  scenario_param_data %>%
  dplyr::filter(seq_len(nrow(.)) <= max_n)

## create scenario parameter combinations
scenario_data <-
  seq_len(nrow(scenario_param_data)) %>%
  lapply(function(i) {
    # prepare feature data
    features_data <-
      default_feature_data %>%
      dplyr::mutate(theme_zone = paste0(theme, ":", zone)) %>%
      dplyr::left_join(
        tibble::tibble(
          theme_zone = names(scenario_param_data),
          multiplier = unname(
            unlist(
              scenario_param_data[i, ],
              recursive = TRUE, use.names = FALSE
            )
          )
        ),
        by = "theme_zone"
      ) %>%
      dplyr::mutate(target = target * multiplier) %>%
      dplyr::select(id, name, column, zone, target, weight) %>%
      as.data.frame()
    # prepare lock data
    locks_data <-
      {project$locks} %>%
      lapply(function(x) {
        tibble::tibble(
          id = x$id,
          name = x$name,
          column = x$layer$column,
          zone = x$zone,
          priority = as.integer(length(project$zones))
        )
      }) %>%
      do.call(what = rbind) %>%
      as.data.frame()
    # prepare cost data
    costs_data <-
      {project$costs} %>%
      lapply(function(x) {
        tibble::tibble(
          id = x$id,
          name = x$name,
          column = x$layer$column,
          zone = x$zone,
          weight = 1
        )
      }) %>%
      do.call(what = rbind) %>%
      as.data.frame()
    # return data for scenario
    list(features = features_data, locks = locks_data, costs = costs_data)
  })

# Main processing
## generate prioritizations
prioritization_results <-
  seq_along(scenario_data) %>%
  lapply(function(i) {
    ## display progress
    cli::cli_text(paste0("starting ", i, " / ", length(scenario_data)))
    ## if prioritization with id already exists, then return it
    id <- hash_prioritization_settings(scenario_data[[i]])
    if (id %in% names(cache_data)) {
      return(list(id = id, result = cache_data[[id]]))
    }
    ## otherwise, generate prioritization
    cache_data[[id]] <<- solve_prioritization(
      project = project,
      settings = scenario_data[[i]],
      gap = get_golem_config("solver_gap"),
      solver = "gurobi",
      gurobi_server = "localhost:61000",
      verbose = FALSE
    )
    ## save cache data,
    ### note that the cache is saved after generating each prioritization
    ### so the prioritizations are not lost if the R session closes unexpectedly
    saveRDS(cache_data, cache_path)
    ## return prioritization
    list(id = id, result = cache_data[[id]])
  })

## add solutions to dataset cache
{for (i in seq_along(prioritization_results)) {
  prioritization <- as.numeric(prioritization_results[[i]]$result)
  project$dataset$set_cache_object(
    prioritization_results[[i]]$id,
    prioritization
  )
}}

# Exports
## save project to temporary directory
td <- tempfile()
dir.create(td, showWarnings = FALSE, recursive = TRUE)
write_project(project, file.path(td, "antarctic-peninsula.metadata.rds"))
## overwrite files in extdata
file.copy(dir(td, full.names = TRUE), "inst/extdata", overwrite = TRUE)
