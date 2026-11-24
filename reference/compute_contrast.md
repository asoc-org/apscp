# Compute contrast

Compute values for contrasting two solutions.

## Usage

``` r
compute_contrast(project, id1, id2)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- id1:

  `character` value with solution identifier.

- id2:

  `character` value with solution identifier.

## Value

A `numeric` vector with values.

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# compute contrast values
v <- compute_contrast(
  sim_project, sim_project$solutions[[1]]$id, sim_project$solutions[[1]]$id
)

# preview result
print(v)
#>  [1] 36  8 36 22  1 NA 36 15 36  1 29  1 15  8  1 15 29  1 NA  1 29 29 15 29 NA
#> [26] 29 NA 29 29 NA  8 22  1 NA 29  8 36  1 22 22 36 NA 22 29 15  1 15 36  1 29
#> [51]  1 29 NA 29 22 NA 36 29 22 36 15 15 29  8  1 36 36 NA 15  8  1 29  8  1 15
#> [76] NA 15  1 22 29 15 36 NA 22 15 29 36 22 NA NA
```
