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
#> 1  4dde65ba-6e12-45c3-a646-015ad9f62d6a Species 1 feat_1 Biodiversity    0.2
#> 2  4dde65ba-6e12-45c3-a646-015ad9f62d6a Species 1 feat_1      Tourism    0.0
#> 3  4dde65ba-6e12-45c3-a646-015ad9f62d6a Species 1 feat_1   Scientific    0.0
#> 4  dbf65064-2b6b-428a-afeb-cf1a1f7a7ebb Species 2 feat_2 Biodiversity    1.0
#> 5  dbf65064-2b6b-428a-afeb-cf1a1f7a7ebb Species 2 feat_2      Tourism    0.0
#> 6  dbf65064-2b6b-428a-afeb-cf1a1f7a7ebb Species 2 feat_2   Scientific    0.0
#> 7  e7faa78f-e69e-4332-ab47-9461b62c7a66 Species 3 feat_3 Biodiversity    0.4
#> 8  e7faa78f-e69e-4332-ab47-9461b62c7a66 Species 3 feat_3      Tourism    0.4
#> 9  e7faa78f-e69e-4332-ab47-9461b62c7a66 Species 3 feat_3   Scientific    0.0
#> 10 aa24f5e6-ddad-492e-baa2-274d504b4bb3 Species 4 feat_4 Biodiversity    0.2
#> 11 aa24f5e6-ddad-492e-baa2-274d504b4bb3 Species 4 feat_4      Tourism    0.2
#> 12 aa24f5e6-ddad-492e-baa2-274d504b4bb3 Species 4 feat_4   Scientific    0.0
#> 13 654e467c-1e77-4420-ad6b-96ec1df582da Species 5 feat_5 Biodiversity    0.4
#> 14 654e467c-1e77-4420-ad6b-96ec1df582da Species 5 feat_5      Tourism    0.6
#> 15 654e467c-1e77-4420-ad6b-96ec1df582da Species 5 feat_5   Scientific    0.0
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
#> 1 fce6f958-367a-493b-915d-3b1451bc1d3d Protected areas  aspas Biodiversity
#> 2 90073be6-8a15-4a59-b890-39ce7d1e3edb     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 7952e3e0-f2f6-4d68-a4d4-ddce68d8b770 Tourism revenue   cost Tourism      1
#> 
```
