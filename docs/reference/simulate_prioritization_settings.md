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
#> 1  11ff478a-11a0-403e-bcb2-2bdd64b270a6 Species 1 feat_1 Biodiversity    0.2
#> 2  11ff478a-11a0-403e-bcb2-2bdd64b270a6 Species 1 feat_1      Tourism    0.0
#> 3  11ff478a-11a0-403e-bcb2-2bdd64b270a6 Species 1 feat_1   Scientific    0.0
#> 4  0c311a65-c72e-4b16-9680-767233988c88 Species 2 feat_2 Biodiversity    1.0
#> 5  0c311a65-c72e-4b16-9680-767233988c88 Species 2 feat_2      Tourism    0.0
#> 6  0c311a65-c72e-4b16-9680-767233988c88 Species 2 feat_2   Scientific    0.0
#> 7  55493ca2-5855-4b40-a249-69a56baec6e7 Species 3 feat_3 Biodiversity    0.4
#> 8  55493ca2-5855-4b40-a249-69a56baec6e7 Species 3 feat_3      Tourism    0.4
#> 9  55493ca2-5855-4b40-a249-69a56baec6e7 Species 3 feat_3   Scientific    0.0
#> 10 084208cf-9a44-4c5c-868d-ba7b47f03593 Species 4 feat_4 Biodiversity    0.2
#> 11 084208cf-9a44-4c5c-868d-ba7b47f03593 Species 4 feat_4      Tourism    0.2
#> 12 084208cf-9a44-4c5c-868d-ba7b47f03593 Species 4 feat_4   Scientific    0.0
#> 13 7693be8a-fda0-46f8-b6ac-f1a699230965 Species 5 feat_5 Biodiversity    0.4
#> 14 7693be8a-fda0-46f8-b6ac-f1a699230965 Species 5 feat_5      Tourism    0.6
#> 15 7693be8a-fda0-46f8-b6ac-f1a699230965 Species 5 feat_5   Scientific    0.0
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
#> 1 19174c2c-a417-43fd-a5e6-23be6a261682 Protected areas  aspas Biodiversity
#> 2 b1a5282b-b954-48fc-b087-6b98afd1c060     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 2e5278e4-da8b-4b22-b620-e445f8d1cf0d Tourism revenue   cost Tourism      1
#> 
```
