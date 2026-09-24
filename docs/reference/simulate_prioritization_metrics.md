# Simulate prioritization metrics

Simulate metrics for evaluating a
[`solve_prioritization()`](https://asoc-org.github.io/apscp/reference/solve_prioritization.md).

## Usage

``` r
simulate_prioritization_metrics(project)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

## Value

A `list` with the following elements: (`"summary"`) a data frame,
`"features"` a `list` with elements named `"relative"`, "`absolute`",
and `"targets"`, `"locks"` a `list` with elements named `"relative"` and
"`absolute`", and `"costs"` a `list` with elements named `"relative"`
and "`absolute`".

## Details

Note that simulation functions are intended to help faciliate package
testing and should not be used for any research purposes.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_settings.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# simulate project
x <- simulate_project()

# simulate prioritization metrics
s <- simulate_prioritization_metrics(x)

# print settings
print(s)
#> $summary
#> # A tibble: 3 × 2
#>   abs_coverage rel_coverage
#>          <dbl>        <dbl>
#> 1         2.71       0.0301
#> 2        24.8        0.275 
#> 3        62.5        0.695 
#> 
#> $features
#> $features$relative
#> # A tibble: 5 × 4
#>   name      Biodiversity Tourism Scientific
#>   <chr>            <dbl>   <dbl>      <dbl>
#> 1 Species 1        0.280  0.777      0.743 
#> 2 Species 2        0.165  0.0912     0.467 
#> 3 Species 3        0.434  0.743      0.773 
#> 4 Species 4        0.814  0.397      0.0221
#> 5 Species 5        0.687  0.296      0.815 
#> 
#> $features$absolute
#> # A tibble: 5 × 4
#>   name      Biodiversity Tourism Scientific
#>   <chr>            <dbl>   <dbl>      <dbl>
#> 1 Species 1         68.2   579.       321. 
#> 2 Species 2         33.7    34.8      113. 
#> 3 Species 3        323.    321.       158. 
#> 4 Species 4        311.     96.4       16.5
#> 5 Species 5        297.     60.3      311. 
#> 
#> 
#> $locks
#> $locks$relative
#> # A tibble: 2 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Protected areas      0.704     0.772      0.971
#> 2 Field camps          0.00751   0.266      0.191
#> 
#> $locks$absolute
#> # A tibble: 2 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Protected areas        11.1   378.         15.3
#> 2 Field camps             3.68    4.19       93.3
#> 
#> 
#> $costs
#> $costs$relative
#> # A tibble: 1 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Tourism revenue        0.526   0.635      0.395
#> 
#> $costs$absolute
#> # A tibble: 1 × 4
#>   name            Biodiversity Tourism Scientific
#>   <chr>                  <dbl>   <dbl>      <dbl>
#> 1 Tourism revenue         73.5    88.8       55.3
#> 
#> 
```
