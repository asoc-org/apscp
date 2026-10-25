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
#> 1  b261cbc4-67fa-442c-90b5-a1390244ac7d Species 1 feat_1 Biodiversity    0.2
#> 2  b261cbc4-67fa-442c-90b5-a1390244ac7d Species 1 feat_1      Tourism    0.0
#> 3  b261cbc4-67fa-442c-90b5-a1390244ac7d Species 1 feat_1   Scientific    0.0
#> 4  cded80cf-822e-41c2-b361-791a7454918c Species 2 feat_2 Biodiversity    1.0
#> 5  cded80cf-822e-41c2-b361-791a7454918c Species 2 feat_2      Tourism    0.0
#> 6  cded80cf-822e-41c2-b361-791a7454918c Species 2 feat_2   Scientific    0.0
#> 7  b36bfb7f-1fc7-48ad-af5f-933e308e5b90 Species 3 feat_3 Biodiversity    0.4
#> 8  b36bfb7f-1fc7-48ad-af5f-933e308e5b90 Species 3 feat_3      Tourism    0.4
#> 9  b36bfb7f-1fc7-48ad-af5f-933e308e5b90 Species 3 feat_3   Scientific    0.0
#> 10 654866ac-1aba-43f0-b7fe-06149e562ace Species 4 feat_4 Biodiversity    0.2
#> 11 654866ac-1aba-43f0-b7fe-06149e562ace Species 4 feat_4      Tourism    0.2
#> 12 654866ac-1aba-43f0-b7fe-06149e562ace Species 4 feat_4   Scientific    0.0
#> 13 3b3f2687-b373-4e87-8c07-5af27d077fd7 Species 5 feat_5 Biodiversity    0.4
#> 14 3b3f2687-b373-4e87-8c07-5af27d077fd7 Species 5 feat_5      Tourism    0.6
#> 15 3b3f2687-b373-4e87-8c07-5af27d077fd7 Species 5 feat_5   Scientific    0.0
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
#> 1 bc894e74-2ca8-4389-8c06-5e9bd6da1a56 Protected areas  aspas Biodiversity
#> 2 33034b13-8d6d-4d44-b1cf-7a0fe0ccd5c7     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 44e16d84-9794-4750-8352-c4834daf54d3 Tourism revenue   cost Tourism      1
#> 
```
