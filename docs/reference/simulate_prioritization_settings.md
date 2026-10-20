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
#> 1  68790e4d-ef43-4aa9-ba43-902b616862a5 Species 1 feat_1 Biodiversity    0.2
#> 2  68790e4d-ef43-4aa9-ba43-902b616862a5 Species 1 feat_1      Tourism    0.0
#> 3  68790e4d-ef43-4aa9-ba43-902b616862a5 Species 1 feat_1   Scientific    0.0
#> 4  9317d98a-1ac1-4bbb-8601-465c26a18b23 Species 2 feat_2 Biodiversity    1.0
#> 5  9317d98a-1ac1-4bbb-8601-465c26a18b23 Species 2 feat_2      Tourism    0.0
#> 6  9317d98a-1ac1-4bbb-8601-465c26a18b23 Species 2 feat_2   Scientific    0.0
#> 7  500a3e3b-0f24-4dbe-a537-2ad34fb71585 Species 3 feat_3 Biodiversity    0.4
#> 8  500a3e3b-0f24-4dbe-a537-2ad34fb71585 Species 3 feat_3      Tourism    0.4
#> 9  500a3e3b-0f24-4dbe-a537-2ad34fb71585 Species 3 feat_3   Scientific    0.0
#> 10 66d93036-c6a9-4273-9027-37841e0a1935 Species 4 feat_4 Biodiversity    0.2
#> 11 66d93036-c6a9-4273-9027-37841e0a1935 Species 4 feat_4      Tourism    0.2
#> 12 66d93036-c6a9-4273-9027-37841e0a1935 Species 4 feat_4   Scientific    0.0
#> 13 dd557d1e-464e-4ede-ba53-7713b0c2baca Species 5 feat_5 Biodiversity    0.4
#> 14 dd557d1e-464e-4ede-ba53-7713b0c2baca Species 5 feat_5      Tourism    0.6
#> 15 dd557d1e-464e-4ede-ba53-7713b0c2baca Species 5 feat_5   Scientific    0.0
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
#> 1 a8c8470c-f1dc-4089-932e-d420280cd8a4 Protected areas  aspas Biodiversity
#> 2 85af72a0-a6ca-421d-af05-c7b8366a0241     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 65d2cc3e-fa7d-4c35-807e-18a3a70735b7 Tourism revenue   cost Tourism      1
#> 
```
