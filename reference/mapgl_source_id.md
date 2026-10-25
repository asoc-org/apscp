# Get mapgl source identifier

Get the source identifier.

## Usage

``` r
mapgl_source_id(x)
```

## Arguments

- x:

  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md),
  [`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
  [`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
  or
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  object.

## Value

A `character` value.

## Details

This corresponds to the `source` parameter of
[`mapgl::add_fill_layer()`](https://walker-data.com/mapgl/reference/add_fill_layer.html).

## See also

Other functions for mapping data:
[`add_layer_visibility_control()`](https://asoc-org.github.io/apscp/reference/add_layer_visibility_control.md),
[`get_paint_parameters()`](https://asoc-org.github.io/apscp/reference/get_paint_parameters.md),
[`has_mapbox_token()`](https://asoc-org.github.io/apscp/reference/has_mapbox_token.md),
[`map_project()`](https://asoc-org.github.io/apscp/reference/map_project.md),
[`mapgl_add_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_add_layer.md),
[`mapgl_add_source()`](https://asoc-org.github.io/apscp/reference/mapgl_add_source.md),
[`mapgl_clear_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_clear_layer.md),
[`mapgl_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_layer_id.md),
[`mapgl_source_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_layer_id.md),
[`mapgl_source_url()`](https://asoc-org.github.io/apscp/reference/mapgl_source_url.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- create_tile_from_sf(sim_data)

# get source identifier
mapgl_source_id(x)
#> [1] "src-file66a81cb29ceb.pmtiles"
```
