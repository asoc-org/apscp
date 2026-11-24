# Compute heat map

Compute heat map values for comparing prioritizations.

## Usage

``` r
compute_heatmap(project, zone, ids)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- zone:

  `character` name of zone.

- ids:

  `character` vector with solution identifiers.

## Value

A `numeric` vector with values.

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# compute heat map values
v <- compute_heatmap(
  sim_project, "Biodiversity", rep(sim_project$solutions[[1]]$id, 3)
)

# preview result
print(v)
#>  [1] 0 0 0 3 3 0 0 0 0 3 0 3 0 0 3 0 0 3 0 3 0 0 0 0 0 0 0 0 0 0 0 3 3 0 0 0 0 3
#> [39] 3 3 0 0 3 0 0 3 0 0 3 0 3 0 0 0 3 0 0 0 3 0 0 0 0 0 3 0 0 0 0 0 3 0 0 3 0 0
#> [77] 0 3 3 0 0 0 0 3 0 0 0 3 0 0
```
