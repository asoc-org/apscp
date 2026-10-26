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
#>                                      id      name column         zone target
#> 1  86c6507f-61ed-4655-bd69-7a943fb3220f Species 1 feat_1 Biodiversity    0.2
#> 2  86c6507f-61ed-4655-bd69-7a943fb3220f Species 1 feat_1      Tourism    0.0
#> 3  86c6507f-61ed-4655-bd69-7a943fb3220f Species 1 feat_1   Scientific    0.0
#> 4  9cc98b58-35dc-4e9e-95c4-635b9cc4a991 Species 2 feat_2 Biodiversity    1.0
#> 5  9cc98b58-35dc-4e9e-95c4-635b9cc4a991 Species 2 feat_2      Tourism    0.0
#> 6  9cc98b58-35dc-4e9e-95c4-635b9cc4a991 Species 2 feat_2   Scientific    0.0
#> 7  926bc75b-8a90-434d-8c6c-69a9af011316 Species 3 feat_3 Biodiversity    0.4
#> 8  926bc75b-8a90-434d-8c6c-69a9af011316 Species 3 feat_3      Tourism    0.4
#> 9  926bc75b-8a90-434d-8c6c-69a9af011316 Species 3 feat_3   Scientific    0.0
#> 10 5451c5f1-a44f-4d1a-8e41-730584091c4f Species 4 feat_4 Biodiversity    0.2
#> 11 5451c5f1-a44f-4d1a-8e41-730584091c4f Species 4 feat_4      Tourism    0.2
#> 12 5451c5f1-a44f-4d1a-8e41-730584091c4f Species 4 feat_4   Scientific    0.0
#> 13 4cb982ba-633a-449d-8778-0e9cc5450564 Species 5 feat_5 Biodiversity    0.4
#> 14 4cb982ba-633a-449d-8778-0e9cc5450564 Species 5 feat_5      Tourism    0.6
#> 15 4cb982ba-633a-449d-8778-0e9cc5450564 Species 5 feat_5   Scientific    0.0
#>    weight
#> 1     0.5
#> 2     0.5
#> 3     0.5
#> 4     0.0
#> 5     0.5
#> 6     0.0
#> 7     0.0
#> 8     0.0
#> 9     1.0
#> 10    0.0
#> 11    0.5
#> 12    0.5
#> 13    0.0
#> 14    0.0
#> 15    0.5
#> 
#> $locks
#>                                     id            name column         zone
#> 1 a24f5c43-e4bc-42ef-98f5-9d8895a3ffd5 Protected areas  aspas Biodiversity
#> 2 463824e0-a82e-42df-b05a-db9c40296187     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 f2eb8e89-4bfa-4f8d-b962-a0009d0b8257 Tourism revenue   cost Tourism      1
#> 
```
