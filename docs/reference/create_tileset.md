# Create tileset

Create a \[new_tileset()\] object from a \[sf::st_sf()\] object.

## Usage

``` r
create_tileset(
  x,
  source_layer = "layer",
  dir = tempdir(),
  max_zoom = 8,
  verbose = TRUE
)
```

## Arguments

- x:

  \[sf::st_sf()\] object.

- source_layer:

  \`character\` value with name for layer in PMTiles archive. Defaults
  to \`"data-src"\`.

- dir:

  \`character\` value with directory path for PMTiles archive. Defaults
  to a temporary folder..

- max_zoom:

  \`integer\` value with maximum zoom level. Defaults to 8.

- verbose:

  \`logical\` value indicating if information about tile creation should
  be displayed? Defaults to \`TRUE\`.

## Value

A \[new_tileset()\] object.

## See also

Other method:
[`create_dataset()`](https://asoc-org.github.io/apscp/reference/create_dataset.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_tile()`](https://asoc-org.github.io/apscp/reference/create_tile.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create tileset from spatial data
x <- create_tileset(sim_data)
#> Error in create_tileset(sim_data): could not find function "create_tileset"

# preview object
print(x)
#> Error: object 'x' not found
```
