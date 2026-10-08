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
#> 1  ce004d4f-4429-4d6a-86af-59beb21eb7f4 Species 1 feat_1 Biodiversity    0.2
#> 2  ce004d4f-4429-4d6a-86af-59beb21eb7f4 Species 1 feat_1      Tourism    0.0
#> 3  ce004d4f-4429-4d6a-86af-59beb21eb7f4 Species 1 feat_1   Scientific    0.0
#> 4  48e0abcc-4eea-4b22-a37f-206f8eac1fac Species 2 feat_2 Biodiversity    1.0
#> 5  48e0abcc-4eea-4b22-a37f-206f8eac1fac Species 2 feat_2      Tourism    0.0
#> 6  48e0abcc-4eea-4b22-a37f-206f8eac1fac Species 2 feat_2   Scientific    0.0
#> 7  b3174d7d-0b97-402e-a418-0282657cc73a Species 3 feat_3 Biodiversity    0.4
#> 8  b3174d7d-0b97-402e-a418-0282657cc73a Species 3 feat_3      Tourism    0.4
#> 9  b3174d7d-0b97-402e-a418-0282657cc73a Species 3 feat_3   Scientific    0.0
#> 10 0ca57a0d-0141-42d1-8a5f-81c5d577af46 Species 4 feat_4 Biodiversity    0.2
#> 11 0ca57a0d-0141-42d1-8a5f-81c5d577af46 Species 4 feat_4      Tourism    0.2
#> 12 0ca57a0d-0141-42d1-8a5f-81c5d577af46 Species 4 feat_4   Scientific    0.0
#> 13 f12f6091-dad0-43e4-8d0c-0b6541ff2b5c Species 5 feat_5 Biodiversity    0.4
#> 14 f12f6091-dad0-43e4-8d0c-0b6541ff2b5c Species 5 feat_5      Tourism    0.6
#> 15 f12f6091-dad0-43e4-8d0c-0b6541ff2b5c Species 5 feat_5   Scientific    0.0
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
#> 1 28dddfa9-b235-4630-a058-61b4b5d7e824 Protected areas  aspas Biodiversity
#> 2 288aa3fb-5238-4e2a-a138-f615aea28081     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 b4a8cd3f-7742-4221-8463-555c1e321e03 Tourism revenue   cost Tourism      1
#> 
```
