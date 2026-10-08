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
#> 1  89fa5608-cd16-4a5e-bf64-c274b20fc1f3 Species 1 feat_1 Biodiversity    0.2
#> 2  89fa5608-cd16-4a5e-bf64-c274b20fc1f3 Species 1 feat_1      Tourism    0.0
#> 3  89fa5608-cd16-4a5e-bf64-c274b20fc1f3 Species 1 feat_1   Scientific    0.0
#> 4  a2736f83-fe2f-48d9-9e2a-6cf96bf0abdb Species 2 feat_2 Biodiversity    1.0
#> 5  a2736f83-fe2f-48d9-9e2a-6cf96bf0abdb Species 2 feat_2      Tourism    0.0
#> 6  a2736f83-fe2f-48d9-9e2a-6cf96bf0abdb Species 2 feat_2   Scientific    0.0
#> 7  6d5f7bf7-7432-44f4-ad48-bb3eb3d742fe Species 3 feat_3 Biodiversity    0.4
#> 8  6d5f7bf7-7432-44f4-ad48-bb3eb3d742fe Species 3 feat_3      Tourism    0.4
#> 9  6d5f7bf7-7432-44f4-ad48-bb3eb3d742fe Species 3 feat_3   Scientific    0.0
#> 10 26c33317-9c9f-4dc0-b31e-d58f6bfa2a48 Species 4 feat_4 Biodiversity    0.2
#> 11 26c33317-9c9f-4dc0-b31e-d58f6bfa2a48 Species 4 feat_4      Tourism    0.2
#> 12 26c33317-9c9f-4dc0-b31e-d58f6bfa2a48 Species 4 feat_4   Scientific    0.0
#> 13 e9e6df06-8200-43a5-9f45-0f8837319702 Species 5 feat_5 Biodiversity    0.4
#> 14 e9e6df06-8200-43a5-9f45-0f8837319702 Species 5 feat_5      Tourism    0.6
#> 15 e9e6df06-8200-43a5-9f45-0f8837319702 Species 5 feat_5   Scientific    0.0
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
#> 1 d3307f55-c966-42ff-81c2-36a36e3cb05d Protected areas  aspas Biodiversity
#> 2 feca0ae6-48a5-4ca7-8a83-cfd92bd38455     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 905ef9e2-9332-4f16-85cb-5fcdc2ede13d Tourism revenue   cost Tourism      1
#> 
```
