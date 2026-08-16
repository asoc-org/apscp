# Create tile

Create a \[new_tile()\] object from a \[sf::st_sf()\] object.

## Usage

``` r
create_tile(
  x,
  source_layer = "layer",
  path = tempfile(fileext = ".pmtiles"),
  max_zoom = 8,
  verbose = FALSE
)
```

## Arguments

- x:

  \[sf::st_sf()\] object.

- source_layer:

  \`character\` value with name for layer in PMTiles archive. Defaults
  to \`"data-src"\`.

- path:

  \`character\` value with file path for PMTiles archive. Note that
  \`path\` must have a \`".pmtiles"\` file extension. Defaults to a
  temporary file path.

- max_zoom:

  \`integer\` value with maximum zoom level. Defaults to 8.

- verbose:

  \`logical\` value indicating if information about tile creation should
  be displayed? Defaults to \`FALSE\`.

## Value

A \[new_tile()\] object.

## See also

Other method:
[`create_dataset()`](https://asoc-org.github.io/apscp/reference/create_dataset.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_optimized_solution()`](https://asoc-org.github.io/apscp/reference/create_optimized_solution.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create tile from spatial data
x <- create_tile(sim_data)
#> Error in create_tile(sim_data): could not find function "create_tile"

# preview object
print(x)
#> Error: object 'x' not found
```
