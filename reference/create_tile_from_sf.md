# Create tile from `sf` data.

Create a
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
object from a
[`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
object.

## Usage

``` r
create_tile_from_sf(
  x,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  verbose = FALSE
)
```

## Arguments

- x:

  [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
  object.

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
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create tile from spatial data
x <- create_tile_from_sf(sim_data)

# preview object
print(x)
#> A <Tile> object.
#> • source_layer: "layer"
#> • path: "/tmp/Rtmpzpyv3c/file6387714d8f03.pmtiles"
#> • max_zoom: 8
```
