# Create dataset from sf object.

Create a
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object from a
[`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
object.

## Usage

``` r
create_dataset_from_sf(x, boundary_data = NULL, cache_columns = NULL)
```

## Arguments

- x:

  [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
  object.

- boundary_data:

  [`Matrix::sparseMatrix()`](https://rdrr.io/pkg/Matrix/man/sparseMatrix.html)
  object with boundary data. Defaults to `NULL` such that the boundary
  data are calculated automatically.

- cache_columns:

  `character` vector indicating the names of columns in `x` that should
  be moved to the cache. Defaults to `NULL` such that no columns should
  be moved to the cache.

## Value

A [`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## See also

Other functions for calling class methods:
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`precomputed_provenance()`](https://asoc-org.github.io/apscp/reference/precomputed_provenance.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- create_dataset_from_sf(sim_data)

# preview object
print(x)
#> A <Dataset> object.
#> • Number of planning units: 90
#> • Planning unit path: /tmp/RtmpXY91Xf/file4d047d37f6d1.gpkg
#> • Boundary path: /tmp/RtmpXY91Xf/file4d042294f8b9.rds
#> • Boundary data loaded: TRUE
```
