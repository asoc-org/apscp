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

Note that simulation functions are intended to help faciliate package
testing and should not be used for any research purposes.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_prioritization_metrics()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_metrics.md),
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
#>                                      id      name column         zone target
#> 1  c827ae72-308e-4813-b9c7-384176d4b4b0 Species 1 feat_1 Biodiversity    0.0
#> 2  c827ae72-308e-4813-b9c7-384176d4b4b0 Species 1 feat_1      Tourism    0.8
#> 3  c827ae72-308e-4813-b9c7-384176d4b4b0 Species 1 feat_1   Scientific    0.2
#> 4  6d5f6a60-8dcc-403f-8801-7cb5c08383c9 Species 2 feat_2 Biodiversity    0.2
#> 5  6d5f6a60-8dcc-403f-8801-7cb5c08383c9 Species 2 feat_2      Tourism    0.6
#> 6  6d5f6a60-8dcc-403f-8801-7cb5c08383c9 Species 2 feat_2   Scientific    0.2
#> 7  5828284b-08f8-43e4-a5a1-62630074d4a1 Species 3 feat_3 Biodiversity    0.2
#> 8  5828284b-08f8-43e4-a5a1-62630074d4a1 Species 3 feat_3      Tourism    0.0
#> 9  5828284b-08f8-43e4-a5a1-62630074d4a1 Species 3 feat_3   Scientific    0.2
#> 10 31736b0f-1ccb-4266-a817-74aa8d4aef7d Species 4 feat_4 Biodiversity    0.2
#> 11 31736b0f-1ccb-4266-a817-74aa8d4aef7d Species 4 feat_4      Tourism    0.8
#> 12 31736b0f-1ccb-4266-a817-74aa8d4aef7d Species 4 feat_4   Scientific    0.0
#> 13 cf4be411-531d-441f-9639-b8feba4b2ab0 Species 5 feat_5 Biodiversity    0.2
#> 14 cf4be411-531d-441f-9639-b8feba4b2ab0 Species 5 feat_5      Tourism    0.6
#> 15 cf4be411-531d-441f-9639-b8feba4b2ab0 Species 5 feat_5   Scientific    0.2
#>    weight
#> 1     0.0
#> 2     0.0
#> 3     1.0
#> 4     0.0
#> 5     1.0
#> 6     1.0
#> 7     0.0
#> 8     1.0
#> 9     0.5
#> 10    1.0
#> 11    0.0
#> 12    1.0
#> 13    0.0
#> 14    0.5
#> 15    1.0
#> 
#> $locks
#>                                     id            name column         zone
#> 1 a28fd4bb-8521-4e65-9d6d-351ead603c3f Protected areas  aspas Biodiversity
#> 2 a4545697-720e-44a1-a027-306f7ba37c26     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 4efb713b-0aa2-4cb6-b2df-d3ac778482e2 Tourism revenue   cost Tourism      1
#> 
```
