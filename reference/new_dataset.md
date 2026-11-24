# New dataset

Create a new
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## Usage

``` r
new_dataset(pu_path, boundary_path, cache_path)
```

## Arguments

- pu_path:

  `character` file path.

- boundary_path:

  `character` file path.

- cache_path:

  `character` file path.

## Value

A [`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## See also

See
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md)
to automatically convert a
[`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html) object
to a `new_dataset()` object.

Other functions for calling class methods:
[`contrast_provenance()`](https://asoc-org.github.io/apscp/reference/contrast_provenance.md),
[`create_contrast_legend()`](https://asoc-org.github.io/apscp/reference/create_contrast_legend.md),
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_product()`](https://asoc-org.github.io/apscp/reference/create_product.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`heatmap_provenance()`](https://asoc-org.github.io/apscp/reference/heatmap_provenance.md),
[`precomputed_provenance()`](https://asoc-org.github.io/apscp/reference/precomputed_provenance.md),
[`solution_provenance()`](https://asoc-org.github.io/apscp/reference/solution_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# save spatial data to temporary file
sim_path1 <- tempfile(fileext = ".gpkg")
sf::write_sf(sim_data, sim_path1)

# manually prepare boundary data
sim_path2 <- tempfile(fileext = ".rds")
bd_data <- prioritizr::boundary_matrix(sim_data)
write_matrix(bd_data, sim_path2)

# manually prepare cache data
sim_path3 <- tempfile(fileext = ".rds")
cache_data <- simulate_cache(sim_data)
saveRDS(cache_data, sim_path3)

# create object
x <- new_dataset(sim_path1, sim_path2, sim_path3)

# preview object
print(x)
#> A <Dataset> object.
#> • Number of planning units: 90
#> • Planning unit path: /tmp/RtmpTQBxqa/file7fba18ad5dcf.gpkg
#> • Boundary path: /tmp/RtmpTQBxqa/file7fba766103ac.rds
#> • Boundary data loaded: TRUE
```
