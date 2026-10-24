# Create tile from file

Create a
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
object from a file.

## Usage

``` r
create_tile_from_file(
  x,
  column,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  verbose = FALSE
)
```

## Arguments

- x:

  `character` value denoting the file path.

- column:

  `character` value with column name.

- source_layer:

  `character` value with name for layer in PMTiles archive. Defaults to
  `"data-src"`.

- path:

  `character` value with file path for PMTiles archive. Note that `path`
  must have a `".pmtiles"` file extension. Defaults to a temporary file
  path.

- max_zoom:

  `integer` value with maximum zoom level. Defaults to 8.

- verbose:

  `logical` value indicating if information about tile creation should
  be displayed? Defaults to `FALSE`.

## Value

A [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
object.

## See also

Other functions for calling class methods:
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
if (FALSE) {
# simulate spatial data
sim_data <- simulate_spatial_data()

# project data to EPSG:4326
sim_data <- sf::st_transform(sim_data, 4326)

# save data to disk
path <- tempfile(fileext = ".gpkg")

# create tile
x <- create_tile_from_file(
  path,
  column = "solution"
)

# preview object
print(x)
}
```
