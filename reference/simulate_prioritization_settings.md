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
#> 1  c4beec22-7d3f-4591-817c-d82ba603071c Species 1 feat_1 Biodiversity    0.2
#> 2  c4beec22-7d3f-4591-817c-d82ba603071c Species 1 feat_1      Tourism    0.0
#> 3  c4beec22-7d3f-4591-817c-d82ba603071c Species 1 feat_1   Scientific    0.0
#> 4  b55413cf-377a-4860-b82d-99ed5efd61bf Species 2 feat_2 Biodiversity    1.0
#> 5  b55413cf-377a-4860-b82d-99ed5efd61bf Species 2 feat_2      Tourism    0.0
#> 6  b55413cf-377a-4860-b82d-99ed5efd61bf Species 2 feat_2   Scientific    0.0
#> 7  11235a6d-d1e5-473a-bf5b-e79dcc7a812f Species 3 feat_3 Biodiversity    0.4
#> 8  11235a6d-d1e5-473a-bf5b-e79dcc7a812f Species 3 feat_3      Tourism    0.4
#> 9  11235a6d-d1e5-473a-bf5b-e79dcc7a812f Species 3 feat_3   Scientific    0.0
#> 10 2657f846-85b8-46d5-9c2c-2eb57db8b35b Species 4 feat_4 Biodiversity    0.2
#> 11 2657f846-85b8-46d5-9c2c-2eb57db8b35b Species 4 feat_4      Tourism    0.2
#> 12 2657f846-85b8-46d5-9c2c-2eb57db8b35b Species 4 feat_4   Scientific    0.0
#> 13 707a2c46-8c6e-4844-ba54-cb1d574458cf Species 5 feat_5 Biodiversity    0.4
#> 14 707a2c46-8c6e-4844-ba54-cb1d574458cf Species 5 feat_5      Tourism    0.6
#> 15 707a2c46-8c6e-4844-ba54-cb1d574458cf Species 5 feat_5   Scientific    0.0
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
#> 1 8d9215df-81d8-4833-9803-98ee4f78c7b8 Protected areas  aspas Biodiversity
#> 2 dcc52b45-b473-4c05-8b73-200f684a9658     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 ffed97cb-a71e-45ca-afb0-3183c1158703 Tourism revenue   cost Tourism      1
#> 
```
