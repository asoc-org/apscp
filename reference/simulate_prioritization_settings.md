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
#> 1  c344f11a-2628-442a-a15d-fd7f6af89f0d Species 1 feat_1 Biodiversity    0.2
#> 2  c344f11a-2628-442a-a15d-fd7f6af89f0d Species 1 feat_1      Tourism    0.0
#> 3  c344f11a-2628-442a-a15d-fd7f6af89f0d Species 1 feat_1   Scientific    0.0
#> 4  aa95c61c-13b7-4ba7-bf9e-eb80b0db27e2 Species 2 feat_2 Biodiversity    1.0
#> 5  aa95c61c-13b7-4ba7-bf9e-eb80b0db27e2 Species 2 feat_2      Tourism    0.0
#> 6  aa95c61c-13b7-4ba7-bf9e-eb80b0db27e2 Species 2 feat_2   Scientific    0.0
#> 7  950103c6-cd2d-42b1-9327-15252386e45a Species 3 feat_3 Biodiversity    0.4
#> 8  950103c6-cd2d-42b1-9327-15252386e45a Species 3 feat_3      Tourism    0.4
#> 9  950103c6-cd2d-42b1-9327-15252386e45a Species 3 feat_3   Scientific    0.0
#> 10 94cee3ea-68fa-482b-b81e-4ec9ff90e5e4 Species 4 feat_4 Biodiversity    0.2
#> 11 94cee3ea-68fa-482b-b81e-4ec9ff90e5e4 Species 4 feat_4      Tourism    0.2
#> 12 94cee3ea-68fa-482b-b81e-4ec9ff90e5e4 Species 4 feat_4   Scientific    0.0
#> 13 d8e401f8-80fd-44e1-a43c-b053af21b17b Species 5 feat_5 Biodiversity    0.4
#> 14 d8e401f8-80fd-44e1-a43c-b053af21b17b Species 5 feat_5      Tourism    0.6
#> 15 d8e401f8-80fd-44e1-a43c-b053af21b17b Species 5 feat_5   Scientific    0.0
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
#> 1 d8ac467f-bdee-41f3-b373-0eea7ed0073c Protected areas  aspas Biodiversity
#> 2 308d929e-c57f-45f8-8e74-a75ce917e50b     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 761b6c47-a468-4b0a-a134-b271884212e2 Tourism revenue   cost Tourism      1
#> 
```
