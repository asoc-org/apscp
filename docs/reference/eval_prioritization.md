# Evaluate a prioritization

Evaluate a prioritization according to how well its represents features,
locks, and costs. Additionally, area-based metrics are calculated.

## Usage

``` r
eval_prioritization(project, prioritization)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object to which `prioritization `should be added.

- prioritization:

  `numeric` vector with a value for each planning unit to indicate zone
  allocations.

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
# simulate data
project <- simulate_project()

# generate a simulated prioritization
prioritization <- sample.int(
  length(project$zones), project$dataset$get_n_pu(), replace = TRUE
)

# evaluate prioritization
eval_prioritization(project, prioritization)
#> $summary
#> # A tibble: 3 × 3
#>   zone         abs_coverage rel_coverage
#>   <chr>               <int>        <dbl>
#> 1 Biodiversity           32        0.356
#> 2 Tourism                30        0.333
#> 3 Scientific             28        0.311
#> 
#> $features
#> $features$relative
#> # A tibble: 5 × 4
#>   name      Biodiversity Tourism Scientific
#>   <chr>            <dbl>   <dbl>      <dbl>
#> 1 Species 1        0.351   0.873      0.367
#> 2 Species 2        0.268   0.184      0.115
#> 3 Species 3        0.818   0.323      0.549
#> 4 Species 4        0.270   0.177      0.401
#> 5 Species 5        0.274   0.443      0.315
#> 
#> $features$absolute
#> # A tibble: 5 × 4
#>   name      Biodiversity Tourism Scientific
#>   <chr>            <dbl>   <dbl>      <dbl>
#> 1 Species 1         26.2   24.5       23.8 
#> 2 Species 2         10.2    9.32       8.55
#> 3 Species 3         23.0   20.9       21.0 
#> 4 Species 4         13.7   13.2       11.3 
#> 5 Species 5         17.8   16.9       16.0 
#> 
#> 
#> $locks
#> $locks$relative
#> # A tibble: 2 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Protected areas          0.4     0.5        0.1
#> 2 Field camps              0.4     0.3        0.3
#> 
#> $locks$absolute
#> # A tibble: 2 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Protected areas            4       5          1
#> 2 Field camps                4       3          3
#> 
#> 
#> $costs
#> $costs$relative
#> # A tibble: 1 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Tourism revenue        0.357   0.334      0.309
#> 
#> $costs$absolute
#> # A tibble: 1 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Tourism revenue        6594.   6172.      5721.
#> 
#> 
```
