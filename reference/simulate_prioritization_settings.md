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
#> 1  545d5f50-eac6-4c50-82d7-eb541891a819 Species 1 feat_1 Biodiversity    0.2
#> 2  545d5f50-eac6-4c50-82d7-eb541891a819 Species 1 feat_1      Tourism    0.0
#> 3  545d5f50-eac6-4c50-82d7-eb541891a819 Species 1 feat_1   Scientific    0.0
#> 4  a9f12c35-2664-4512-94f7-d9d8418e568c Species 2 feat_2 Biodiversity    1.0
#> 5  a9f12c35-2664-4512-94f7-d9d8418e568c Species 2 feat_2      Tourism    0.0
#> 6  a9f12c35-2664-4512-94f7-d9d8418e568c Species 2 feat_2   Scientific    0.0
#> 7  013d954f-147b-4fb8-9640-bd0b5c625df5 Species 3 feat_3 Biodiversity    0.4
#> 8  013d954f-147b-4fb8-9640-bd0b5c625df5 Species 3 feat_3      Tourism    0.4
#> 9  013d954f-147b-4fb8-9640-bd0b5c625df5 Species 3 feat_3   Scientific    0.0
#> 10 8d21de83-ef96-4162-9f76-cd7bb3c6721b Species 4 feat_4 Biodiversity    0.2
#> 11 8d21de83-ef96-4162-9f76-cd7bb3c6721b Species 4 feat_4      Tourism    0.2
#> 12 8d21de83-ef96-4162-9f76-cd7bb3c6721b Species 4 feat_4   Scientific    0.0
#> 13 2ba6f1e2-75e2-4322-a43f-022e9d53bbe1 Species 5 feat_5 Biodiversity    0.4
#> 14 2ba6f1e2-75e2-4322-a43f-022e9d53bbe1 Species 5 feat_5      Tourism    0.6
#> 15 2ba6f1e2-75e2-4322-a43f-022e9d53bbe1 Species 5 feat_5   Scientific    0.0
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
#> 1 23682896-edb5-49d0-bcce-490375cdb389 Protected areas  aspas Biodiversity
#> 2 6a9d1787-5790-4664-ad48-1e3e5bea5f22     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 f8d630ca-0476-4ef1-a933-4221c4174f64 Tourism revenue   cost Tourism      1
#> 
```
