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
#> 1  3a6e2bea-6602-4e22-b409-31ff29e8611d Species 1 feat_1 Biodiversity    0.2
#> 2  3a6e2bea-6602-4e22-b409-31ff29e8611d Species 1 feat_1      Tourism    0.0
#> 3  3a6e2bea-6602-4e22-b409-31ff29e8611d Species 1 feat_1   Scientific    0.0
#> 4  973f0554-005f-4d90-b7d9-5babb1577dfb Species 2 feat_2 Biodiversity    1.0
#> 5  973f0554-005f-4d90-b7d9-5babb1577dfb Species 2 feat_2      Tourism    0.0
#> 6  973f0554-005f-4d90-b7d9-5babb1577dfb Species 2 feat_2   Scientific    0.0
#> 7  674cd9ec-243f-43db-b9c7-e119296060e5 Species 3 feat_3 Biodiversity    0.4
#> 8  674cd9ec-243f-43db-b9c7-e119296060e5 Species 3 feat_3      Tourism    0.4
#> 9  674cd9ec-243f-43db-b9c7-e119296060e5 Species 3 feat_3   Scientific    0.0
#> 10 0605e45d-1035-4546-b3c0-75444cc3d39a Species 4 feat_4 Biodiversity    0.2
#> 11 0605e45d-1035-4546-b3c0-75444cc3d39a Species 4 feat_4      Tourism    0.2
#> 12 0605e45d-1035-4546-b3c0-75444cc3d39a Species 4 feat_4   Scientific    0.0
#> 13 91cb39e6-e747-4d45-b7af-9660ccf2cac5 Species 5 feat_5 Biodiversity    0.4
#> 14 91cb39e6-e747-4d45-b7af-9660ccf2cac5 Species 5 feat_5      Tourism    0.6
#> 15 91cb39e6-e747-4d45-b7af-9660ccf2cac5 Species 5 feat_5   Scientific    0.0
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
#> 1 c4cc64b7-ee3a-4eab-926f-8adf195ce084 Protected areas  aspas Biodiversity
#> 2 e4ced7cf-cecb-47b9-a44d-04ff17f8eb37     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 377be2f4-6c1d-4c5a-a68f-4f4de9f22813 Tourism revenue   cost Tourism      1
#> 
```
