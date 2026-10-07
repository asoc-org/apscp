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
#> 1  98215f3b-032b-4d8d-8b4d-da098bb5517c Species 1 feat_1 Biodiversity    0.2
#> 2  98215f3b-032b-4d8d-8b4d-da098bb5517c Species 1 feat_1      Tourism    0.0
#> 3  98215f3b-032b-4d8d-8b4d-da098bb5517c Species 1 feat_1   Scientific    0.0
#> 4  18974665-c416-4981-b2ed-fdf34f6c98a6 Species 2 feat_2 Biodiversity    1.0
#> 5  18974665-c416-4981-b2ed-fdf34f6c98a6 Species 2 feat_2      Tourism    0.0
#> 6  18974665-c416-4981-b2ed-fdf34f6c98a6 Species 2 feat_2   Scientific    0.0
#> 7  b7a60a28-8287-4de8-ab1c-fed688957d32 Species 3 feat_3 Biodiversity    0.4
#> 8  b7a60a28-8287-4de8-ab1c-fed688957d32 Species 3 feat_3      Tourism    0.4
#> 9  b7a60a28-8287-4de8-ab1c-fed688957d32 Species 3 feat_3   Scientific    0.0
#> 10 45074f8f-341c-435b-93fe-95f586c017fe Species 4 feat_4 Biodiversity    0.2
#> 11 45074f8f-341c-435b-93fe-95f586c017fe Species 4 feat_4      Tourism    0.2
#> 12 45074f8f-341c-435b-93fe-95f586c017fe Species 4 feat_4   Scientific    0.0
#> 13 83c6e630-b038-4309-b42a-3fb7af39b4b7 Species 5 feat_5 Biodiversity    0.4
#> 14 83c6e630-b038-4309-b42a-3fb7af39b4b7 Species 5 feat_5      Tourism    0.6
#> 15 83c6e630-b038-4309-b42a-3fb7af39b4b7 Species 5 feat_5   Scientific    0.0
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
#> 1 127b4532-b394-4a0f-b7a9-7044a28171ab Protected areas  aspas Biodiversity
#> 2 005c3b03-d102-40fd-b362-7731ba507b56     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 d47fb565-92a7-41f6-ac47-23f260fce22f Tourism revenue   cost Tourism      1
#> 
```
