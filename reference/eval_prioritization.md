# Evaluate a prioritization

Evaluate a prioritization according to how well its represents features,
locks, and costs. Additionally, area-based metrics are calculated.

## Usage

``` r
eval_prioritization(project, settings, prioritization)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object to which `prioritization `should be added.

- settings:

  `list` of settings used to generate the solution.

- prioritization:

  `numeric` vector with a value for each planning unit to indicate zone
  allocations. For example, if the prioritization has three zones, then
  elements with values ranging between 1 and 3 correspond to planning
  units that are locked to the three zones (respectively). Additionally,
  elements with values ranging between 4 and 6 correspond to planning
  units that are selected as a priority for the three zones
  (respectively).

## Value

A `list` object. This is a `list` with a `"summary"` element that
contains a data frame with area-based metrics, as well as `"features"`,
`"locks"`, and `"costs"` elements that contain data frames with metrics
for the features, locks, and costs (respectively).

## See also

Other functions for prioritization:
[`solve_prioritization()`](https://asoc-org.github.io/apscp/reference/solve_prioritization.md)

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# generate a simulated prioritization
sim_prioritization <- sample.int(
  length(sim_project$zones), sim_project$dataset$get_n_pu(), replace = TRUE
)

# simulate settings to evaluate prioritization
sim_settings <- simulate_prioritization_settings(sim_project)

# evaluate prioritization
eval_prioritization(sim_project, sim_settings, sim_prioritization)
#> $coverage
#> $coverage$name
#> $coverage$name[[1]]
#> [1] "Spatial coverage"
#> 
#> 
#> $coverage$id
#> $coverage$id[[1]]
#> [1] "spatial-coverage"
#> 
#> 
#> $coverage$units
#> $coverage$units[[1]]
#> [1] "planning units"
#> 
#> 
#> $coverage$total
#> $coverage$total[[1]]
#> [1] 90
#> 
#> 
#> $coverage$held
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1           32      30         28
#> 
#> $coverage$locked
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1           32      30         28
#> 
#> 
#> $performance
#> $performance$name
#> $performance$name[[1]]
#> [1] "Performance"
#> 
#> 
#> $performance$id
#> $performance$id[[1]]
#> [1] "performance"
#> 
#> 
#> $performance$units
#> $performance$units[[1]]
#> [1] "average percent target met"
#> 
#> 
#> $performance$total
#> $performance$total[[1]]
#> [1] 1
#> 
#> $performance$total[[2]]
#> [1] 1
#> 
#> $performance$total[[3]]
#> [1] 1
#> 
#> 
#> $performance$held
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        0.239   0.222        NaN
#> 
#> $performance$locked
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        0.239   0.222        NaN
#> 
#> 
#> $features
#> $features$name
#> $features$name[[1]]
#> [1] "Species 1"
#> 
#> $features$name[[2]]
#> [1] "Species 2"
#> 
#> $features$name[[3]]
#> [1] "Species 3"
#> 
#> $features$name[[4]]
#> [1] "Species 4"
#> 
#> $features$name[[5]]
#> [1] "Species 5"
#> 
#> 
#> $features$id
#> $features$id[[1]]
#> [1] "feature-1"
#> 
#> $features$id[[2]]
#> [1] "feature-2"
#> 
#> $features$id[[3]]
#> [1] "feature-3"
#> 
#> $features$id[[4]]
#> [1] "feature-4"
#> 
#> $features$id[[5]]
#> [1] "feature-5"
#> 
#> 
#> $features$total
#> $features$total[[1]]
#> [1] 74.53071
#> 
#> $features$total[[2]]
#> [1] 28.08803
#> 
#> $features$total[[3]]
#> [1] 64.8778
#> 
#> $features$total[[4]]
#> [1] 38.17078
#> 
#> $features$total[[5]]
#> [1] 50.66808
#> 
#> 
#> $features$units
#> $features$units[[1]]
#> [1] "suitability"
#> 
#> $features$units[[2]]
#> [1] "suitability"
#> 
#> $features$units[[3]]
#> [1] "suitability"
#> 
#> $features$units[[4]]
#> [1] "suitability"
#> 
#> $features$units[[5]]
#> [1] "suitability"
#> 
#> 
#> $features$held
#> # A tibble: 5 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1         26.8   24.4       23.3 
#> 2         10.1    9.57       8.46
#> 3         23.1   21.7       20.0 
#> 4         14.1   12.5       11.6 
#> 5         18.1   16.5       16.1 
#> 
#> $features$locked
#> # A tibble: 5 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1         26.8   24.4       23.3 
#> 2         10.1    9.57       8.46
#> 3         23.1   21.7       20.0 
#> 4         14.1   12.5       11.6 
#> 5         18.1   16.5       16.1 
#> 
#> 
#> $locks
#> $locks$name
#> $locks$name[[1]]
#> [1] "Protected areas"
#> 
#> $locks$name[[2]]
#> [1] "Field camps"
#> 
#> 
#> $locks$id
#> $locks$id[[1]]
#> [1] "lock-1"
#> 
#> $locks$id[[2]]
#> [1] "lock-2"
#> 
#> 
#> $locks$total
#> $locks$total[[1]]
#> [1] 10
#> 
#> $locks$total[[2]]
#> [1] 10
#> 
#> 
#> $locks$units
#> $locks$units[[1]]
#> [1] "presence-only"
#> 
#> $locks$units[[2]]
#> [1] "presence/absence"
#> 
#> 
#> $locks$held
#> # A tibble: 2 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1            3       6          1
#> 2            3       3          4
#> 
#> $locks$locked
#> # A tibble: 2 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1            3       6          1
#> 2            3       3          4
#> 
#> 
#> $costs
#> $costs$name
#> $costs$name[[1]]
#> [1] "Tourism revenue"
#> 
#> 
#> $costs$id
#> $costs$id[[1]]
#> [1] "cost-1"
#> 
#> 
#> $costs$total
#> $costs$total[[1]]
#> [1] 18487.2
#> 
#> 
#> $costs$units
#> $costs$units[[1]]
#> [1] "USD"
#> 
#> 
#> $costs$held
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        6591.   6173.      5723.
#> 
#> $costs$locked
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        6591.   6173.      5723.
#> 
#> 
```
