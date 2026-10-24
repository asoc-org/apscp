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
#> 1  106d26b9-0f43-44fd-bcc5-b02cb4a35fc4 Species 1 feat_1 Biodiversity    0.2
#> 2  106d26b9-0f43-44fd-bcc5-b02cb4a35fc4 Species 1 feat_1      Tourism    0.0
#> 3  106d26b9-0f43-44fd-bcc5-b02cb4a35fc4 Species 1 feat_1   Scientific    0.0
#> 4  8a714457-a310-4a17-934d-67adc377d8ab Species 2 feat_2 Biodiversity    1.0
#> 5  8a714457-a310-4a17-934d-67adc377d8ab Species 2 feat_2      Tourism    0.0
#> 6  8a714457-a310-4a17-934d-67adc377d8ab Species 2 feat_2   Scientific    0.0
#> 7  3630f263-c1d7-4881-8f28-8d2df9b7828d Species 3 feat_3 Biodiversity    0.4
#> 8  3630f263-c1d7-4881-8f28-8d2df9b7828d Species 3 feat_3      Tourism    0.4
#> 9  3630f263-c1d7-4881-8f28-8d2df9b7828d Species 3 feat_3   Scientific    0.0
#> 10 0cec4372-ca26-47a5-9ecc-15f757d9ae04 Species 4 feat_4 Biodiversity    0.2
#> 11 0cec4372-ca26-47a5-9ecc-15f757d9ae04 Species 4 feat_4      Tourism    0.2
#> 12 0cec4372-ca26-47a5-9ecc-15f757d9ae04 Species 4 feat_4   Scientific    0.0
#> 13 ae56ad9b-da94-4faa-b628-44df4db8867a Species 5 feat_5 Biodiversity    0.4
#> 14 ae56ad9b-da94-4faa-b628-44df4db8867a Species 5 feat_5      Tourism    0.6
#> 15 ae56ad9b-da94-4faa-b628-44df4db8867a Species 5 feat_5   Scientific    0.0
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
#> 1 c30b79b1-60cb-4d9f-af91-e1777ef80ca1 Protected areas  aspas Biodiversity
#> 2 4ced92cd-eae8-4ca6-bcb0-3f49a770fdf7     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 38c6111d-0b5c-43ef-a820-fc791494cd21 Tourism revenue   cost Tourism      1
#> 
```
