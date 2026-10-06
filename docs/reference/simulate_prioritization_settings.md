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
#> 1  723c3f6c-0503-4795-aadf-93a49f50afa7 Species 1 feat_1 Biodiversity    0.2
#> 2  723c3f6c-0503-4795-aadf-93a49f50afa7 Species 1 feat_1      Tourism    0.0
#> 3  723c3f6c-0503-4795-aadf-93a49f50afa7 Species 1 feat_1   Scientific    0.0
#> 4  f1761c21-6404-4c11-987d-5aa0b835ac7b Species 2 feat_2 Biodiversity    1.0
#> 5  f1761c21-6404-4c11-987d-5aa0b835ac7b Species 2 feat_2      Tourism    0.0
#> 6  f1761c21-6404-4c11-987d-5aa0b835ac7b Species 2 feat_2   Scientific    0.0
#> 7  4e679b1a-7f6f-4d2c-bafa-e9a30025729b Species 3 feat_3 Biodiversity    0.4
#> 8  4e679b1a-7f6f-4d2c-bafa-e9a30025729b Species 3 feat_3      Tourism    0.4
#> 9  4e679b1a-7f6f-4d2c-bafa-e9a30025729b Species 3 feat_3   Scientific    0.0
#> 10 8cef8ce9-c389-47fe-b1e3-a3a951b3b66c Species 4 feat_4 Biodiversity    0.2
#> 11 8cef8ce9-c389-47fe-b1e3-a3a951b3b66c Species 4 feat_4      Tourism    0.2
#> 12 8cef8ce9-c389-47fe-b1e3-a3a951b3b66c Species 4 feat_4   Scientific    0.0
#> 13 dbc1fd76-7751-4dd2-9dff-bafc3412556f Species 5 feat_5 Biodiversity    0.4
#> 14 dbc1fd76-7751-4dd2-9dff-bafc3412556f Species 5 feat_5      Tourism    0.6
#> 15 dbc1fd76-7751-4dd2-9dff-bafc3412556f Species 5 feat_5   Scientific    0.0
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
#> 1 a91ae108-7ba1-434c-af94-5969c01d5179 Protected areas  aspas Biodiversity
#> 2 39d3e702-c5e4-4391-a9d1-c2a029025d45     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 0681c95a-4637-4db7-a1d4-9454197af381 Tourism revenue   cost Tourism      1
#> 
```
