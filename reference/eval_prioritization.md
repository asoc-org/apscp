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
#> [1] "51fb495c-4651-4eb2-a8ee-808c07ddc9ab"
#> 
#> $features$id[[2]]
#> [1] "4c90c17f-6085-4044-9588-79ce48527f4d"
#> 
#> $features$id[[3]]
#> [1] "23f391a3-b024-4f71-8572-e0bdd2c596d7"
#> 
#> $features$id[[4]]
#> [1] "aeb78b1c-2630-4eea-973a-e3369d9e298b"
#> 
#> $features$id[[5]]
#> [1] "20b333b1-4a9b-4115-9bae-ac1b97395d9d"
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
#> [1] "2c298e30-05e5-489c-879a-9e455f68c2d9"
#> 
#> $locks$id[[2]]
#> [1] "f6e0403f-9e24-44e3-8a36-187c459fd6d0"
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
#> [1] "c8f9d91b-3a3b-4a9c-ae1b-99800b22476d"
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
