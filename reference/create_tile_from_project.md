# Create tile from project.

Create a
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
object from a \[new_project() object.

## Usage

``` r
create_tile_from_project(
  x,
  column,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  engine = get_golem_config("tile_engine"),
  verbose = FALSE
)
```

## Arguments

- x:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- column:

  `character` value with column name for data.

- source_layer:

  `character` value with name for layer in PMTiles archive. Defaults to
  `"data-src"`.

- path:

  `character` value with file path for PMTiles archive. Note that `path`
  must have a `".pmtiles"` file extension. Defaults to a temporary file
  path.

- max_zoom:

  `integer` value with maximum zoom level. Defaults to 8.

- engine:

  `character` value denoting the engine for processing the the tiles.
  Available options include `"r"` or `"rust"`. Defaults to
  `get_golem_config("tile_engine")`.

- verbose:

  `logical` value indicating if information about tile creation should
  be displayed? Defaults to `FALSE`.

## Value

A [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
object.

## See also

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
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`heatmap_provenance()`](https://asoc-org.github.io/apscp/reference/heatmap_provenance.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`precomputed_provenance()`](https://asoc-org.github.io/apscp/reference/precomputed_provenance.md),
[`solution_provenance()`](https://asoc-org.github.io/apscp/reference/solution_provenance.md)

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# create tile
x <- create_tile_from_project(
  sim_project,
  column = "solution"
)

# preview object
print(x)
#> A <Tile> object.
#> • source_layer: "layer"
#> • path: "/tmp/RtmpTQBxqa/file7fba21dfa145.pmtiles"
#> • max_zoom: 8
```
