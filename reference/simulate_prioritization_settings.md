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
#> 1  61fada21-15bb-415e-bebb-be3f6d955ca1 Species 1 feat_1 Biodiversity    0.2
#> 2  61fada21-15bb-415e-bebb-be3f6d955ca1 Species 1 feat_1      Tourism    0.0
#> 3  61fada21-15bb-415e-bebb-be3f6d955ca1 Species 1 feat_1   Scientific    0.0
#> 4  356dfe69-2c33-4df6-9cc6-090907634e50 Species 2 feat_2 Biodiversity    1.0
#> 5  356dfe69-2c33-4df6-9cc6-090907634e50 Species 2 feat_2      Tourism    0.0
#> 6  356dfe69-2c33-4df6-9cc6-090907634e50 Species 2 feat_2   Scientific    0.0
#> 7  526e2d05-8490-4c1d-b293-7228be17fd65 Species 3 feat_3 Biodiversity    0.4
#> 8  526e2d05-8490-4c1d-b293-7228be17fd65 Species 3 feat_3      Tourism    0.4
#> 9  526e2d05-8490-4c1d-b293-7228be17fd65 Species 3 feat_3   Scientific    0.0
#> 10 143602d5-8f88-4aa0-a1a5-4cacca801333 Species 4 feat_4 Biodiversity    0.2
#> 11 143602d5-8f88-4aa0-a1a5-4cacca801333 Species 4 feat_4      Tourism    0.2
#> 12 143602d5-8f88-4aa0-a1a5-4cacca801333 Species 4 feat_4   Scientific    0.0
#> 13 02df6e24-bd8f-4a29-85fa-11c481f4122e Species 5 feat_5 Biodiversity    0.4
#> 14 02df6e24-bd8f-4a29-85fa-11c481f4122e Species 5 feat_5      Tourism    0.6
#> 15 02df6e24-bd8f-4a29-85fa-11c481f4122e Species 5 feat_5   Scientific    0.0
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
#> 1 6cdcc7e2-3090-4480-8eaa-df575eb4dc80 Protected areas  aspas Biodiversity
#> 2 37f91a4b-383b-45c4-9402-8b16c1b15cd9     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 3f0e90ac-65d5-4950-959c-941485eacee1 Tourism revenue   cost Tourism      1
#> 
```
