# Simulate prioritization settings

Simulate settings for
[`solve_prioritization()`](https://asoc-org.github.io/apscp/reference/solve_prioritization.md).

## Usage

``` r
simulate_prioritization_settings(project)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

## Value

A `list` with the following elements: `"features"`, `"locks"`, and
`"costs"`.

## Details

Note that simulation functions are intended to help facilitate package
testing and should not be used for any research purposes.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# simulate project
x <- simulate_project()

# simulate prioritization settings
s <- simulate_prioritization_settings(x)

# print settings
print(s)
#> $features
#>           id      name column         zone target weight
#> 1  feature-1 Species 1 feat_1 Biodiversity    0.2    0.5
#> 2  feature-1 Species 1 feat_1      Tourism    0.0    0.5
#> 3  feature-1 Species 1 feat_1   Scientific    0.0    0.5
#> 4  feature-2 Species 2 feat_2 Biodiversity    1.0    0.0
#> 5  feature-2 Species 2 feat_2      Tourism    0.0    0.5
#> 6  feature-2 Species 2 feat_2   Scientific    0.0    0.0
#> 7  feature-3 Species 3 feat_3 Biodiversity    0.4    0.0
#> 8  feature-3 Species 3 feat_3      Tourism    0.4    0.0
#> 9  feature-3 Species 3 feat_3   Scientific    0.0    1.0
#> 10 feature-4 Species 4 feat_4 Biodiversity    0.2    0.0
#> 11 feature-4 Species 4 feat_4      Tourism    0.2    0.5
#> 12 feature-4 Species 4 feat_4   Scientific    0.0    0.5
#> 13 feature-5 Species 5 feat_5 Biodiversity    0.4    0.0
#> 14 feature-5 Species 5 feat_5      Tourism    0.6    0.0
#> 15 feature-5 Species 5 feat_5   Scientific    0.0    0.5
#> 
#> $locks
#>       id            name column         zone priority
#> 1 lock-1 Protected areas  aspas Biodiversity        2
#> 2 lock-2     Field camps  camps   Scientific        1
#> 
#> $costs
#>       id            name column    zone weight
#> 1 cost-1 Tourism revenue   cost Tourism      1
#> 
```
