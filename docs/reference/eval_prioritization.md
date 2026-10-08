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
#> 1           29      37         24
#> 
#> $coverage$locked
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1           29      37         24
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
#> 1        0.321   0.272        NaN
#> 
#> $performance$locked
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        0.321   0.272        NaN
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
#> [1] "65534d2f-3d60-4fc7-abe8-ba0593ae0f91"
#> 
#> $features$id[[2]]
#> [1] "ca46cd0b-3e1f-4f22-b2f1-4753bba6f6f8"
#> 
#> $features$id[[3]]
#> [1] "ea32f14f-e716-4c1b-97b1-21124a6034b7"
#> 
#> $features$id[[4]]
#> [1] "1bf3f40b-0942-4615-829d-59fd1226d3bd"
#> 
#> $features$id[[5]]
#> [1] "17b83f4a-914e-4afe-ba32-adcb0fc8210f"
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
#> 1        23.7     30.7      20.2 
#> 2         9.27    11.5       7.31
#> 3        20.6     27.0      17.3 
#> 4        12.7     15.6       9.85
#> 5        16.2     20.6      13.8 
#> 
#> $features$locked
#> # A tibble: 5 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        23.7     30.7      20.2 
#> 2         9.27    11.5       7.31
#> 3        20.6     27.0      17.3 
#> 4        12.7     15.6       9.85
#> 5        16.2     20.6      13.8 
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
#> [1] "f5d3676d-9d2f-482e-b31e-ab180a8ef9c2"
#> 
#> $locks$id[[2]]
#> [1] "2fb9aaf1-f232-425c-876c-d8a83a7c79c1"
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
#> 1            4       5          1
#> 2            2       5          3
#> 
#> $locks$locked
#> # A tibble: 2 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1            4       5          1
#> 2            2       5          3
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
#> [1] "471462bb-6ea3-4363-a0ee-9152ec0c2018"
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
#> 1        5963.   7602.      4923.
#> 
#> $costs$locked
#> # A tibble: 1 × 3
#>   Biodiversity Tourism Scientific
#>          <dbl>   <dbl>      <dbl>
#> 1        5963.   7602.      4923.
#> 
#> 
```
