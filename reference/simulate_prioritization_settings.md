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
#> 1  6783b4fc-e2dd-4d9b-a820-703831cc88fb Species 1 feat_1 Biodiversity    0.2
#> 2  6783b4fc-e2dd-4d9b-a820-703831cc88fb Species 1 feat_1      Tourism    0.0
#> 3  6783b4fc-e2dd-4d9b-a820-703831cc88fb Species 1 feat_1   Scientific    0.0
#> 4  894a5d3a-7d26-4a20-aed0-90944e8a9bc8 Species 2 feat_2 Biodiversity    1.0
#> 5  894a5d3a-7d26-4a20-aed0-90944e8a9bc8 Species 2 feat_2      Tourism    0.0
#> 6  894a5d3a-7d26-4a20-aed0-90944e8a9bc8 Species 2 feat_2   Scientific    0.0
#> 7  df30425a-eb69-4f2f-8299-2be1f3a00b6a Species 3 feat_3 Biodiversity    0.4
#> 8  df30425a-eb69-4f2f-8299-2be1f3a00b6a Species 3 feat_3      Tourism    0.4
#> 9  df30425a-eb69-4f2f-8299-2be1f3a00b6a Species 3 feat_3   Scientific    0.0
#> 10 53f8bd30-a472-4120-a0f9-7491e529fe7f Species 4 feat_4 Biodiversity    0.2
#> 11 53f8bd30-a472-4120-a0f9-7491e529fe7f Species 4 feat_4      Tourism    0.2
#> 12 53f8bd30-a472-4120-a0f9-7491e529fe7f Species 4 feat_4   Scientific    0.0
#> 13 c05debcf-f50f-46b9-82fb-6bcc803affa4 Species 5 feat_5 Biodiversity    0.4
#> 14 c05debcf-f50f-46b9-82fb-6bcc803affa4 Species 5 feat_5      Tourism    0.6
#> 15 c05debcf-f50f-46b9-82fb-6bcc803affa4 Species 5 feat_5   Scientific    0.0
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
#> 1 d522a95b-7ed7-4a69-8acc-7c8b92f25a5e Protected areas  aspas Biodiversity
#> 2 829447a4-baab-4081-96e1-8a9d3efbc1e6     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 3dc00e1a-d5df-4fab-a0b5-bf12ea7bb0b8 Tourism revenue   cost Tourism      1
#> 
```
