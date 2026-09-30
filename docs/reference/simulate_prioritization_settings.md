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
#> 1  ce412774-c5c1-4f68-883f-7d94ae18e313 Species 1 feat_1 Biodiversity    0.2
#> 2  ce412774-c5c1-4f68-883f-7d94ae18e313 Species 1 feat_1      Tourism    0.0
#> 3  ce412774-c5c1-4f68-883f-7d94ae18e313 Species 1 feat_1   Scientific    0.0
#> 4  eb316f05-7a71-49aa-ae1b-49ffe83e7e16 Species 2 feat_2 Biodiversity    1.0
#> 5  eb316f05-7a71-49aa-ae1b-49ffe83e7e16 Species 2 feat_2      Tourism    0.0
#> 6  eb316f05-7a71-49aa-ae1b-49ffe83e7e16 Species 2 feat_2   Scientific    0.0
#> 7  09824212-caf0-4397-8510-e41641b2eef1 Species 3 feat_3 Biodiversity    0.4
#> 8  09824212-caf0-4397-8510-e41641b2eef1 Species 3 feat_3      Tourism    0.4
#> 9  09824212-caf0-4397-8510-e41641b2eef1 Species 3 feat_3   Scientific    0.0
#> 10 e13e22b6-70e1-427b-9a8f-03c40b8e44f5 Species 4 feat_4 Biodiversity    0.2
#> 11 e13e22b6-70e1-427b-9a8f-03c40b8e44f5 Species 4 feat_4      Tourism    0.2
#> 12 e13e22b6-70e1-427b-9a8f-03c40b8e44f5 Species 4 feat_4   Scientific    0.0
#> 13 293cda19-5475-451e-98fa-793240406b6e Species 5 feat_5 Biodiversity    0.4
#> 14 293cda19-5475-451e-98fa-793240406b6e Species 5 feat_5      Tourism    0.6
#> 15 293cda19-5475-451e-98fa-793240406b6e Species 5 feat_5   Scientific    0.0
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
#> 1 7f8cafc2-44d5-4fc4-8b0b-d2088e84b5db Protected areas  aspas Biodiversity
#> 2 c36a2c0d-573b-4e17-96a2-161bd38cc967     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 01bae431-6d5b-4b4d-b889-282211d35397 Tourism revenue   cost Tourism      1
#> 
```
