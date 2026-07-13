# New tileset

Create a new tile object to store information for multiple PMTiles
archive file.

## Usage

``` r
new_tileset(tiles, dir, max_zoom)
```

## Arguments

- tiles:

  \`list\` of \[new_tile()\] objects.

- dir:

  \`character\` directory path for tiles.

- max_zoom:

  \`integer\` maximum zoom level for tiles.

## Value

A \`Tileset\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
[`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md),
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md),
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md),
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# create tile objects
t1 <- new_tile(source = "data-src", file = "t1.pmtiles", max_zoom = 5)
#> Error in new_tile(source = "data-src", file = "t1.pmtiles", max_zoom = 5): could not find function "new_tile"
t2 <- new_tile(source = "data-src", file = "t2.pmtiles", max_zoom = 3)
#> Error in new_tile(source = "data-src", file = "t2.pmtiles", max_zoom = 3): could not find function "new_tile"

# create tileset
x <- new_tileset(tiles = list(t1, t2), dir = tempdir(), max_zoom = 3)
#> Error in new_tileset(tiles = list(t1, t2), dir = tempdir(), max_zoom = 3): could not find function "new_tileset"

# print object
print(x)
#> Error: object 'x' not found
```
