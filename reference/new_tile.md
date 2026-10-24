# New tile

Create a new tile object to store information for rendering a layer from
a PMTiles archive file.

## Usage

``` r
new_tile(source_layer, path, max_zoom)
```

## Arguments

- source_layer:

  `character` value with name of layer source in the archive file.

- path:

  `character` value with file path for the archive file. Note that
  `file` must have a `".pmtiles"` file extension.

- max_zoom:

  `integer` maximum zoom level for the archive.

## Value

A `Tile` object.

## See also

Other functions for defining classes:
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
[`new_solution_legend()`](https://asoc-org.github.io/apscp/reference/new_solution_legend.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md)

## Examples

``` r
# create dummy file
path <- tempfile(fileext = ".pmtiles")
writeLines("dummy", path)

# create object
x <- new_tile(source = "data-src", path = path, max_zoom = 5)

# print object
print(x)
#> A <Tile> object.
```
