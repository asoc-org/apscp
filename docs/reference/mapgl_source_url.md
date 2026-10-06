# Get mapgl source URL.

Get mapgl source URL.

## Usage

``` r
mapgl_source_url(x)
```

## Arguments

- x:

  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  object.

## Value

A `character` value.

## Details

This corresponds to the `url` parameter of
[`mapgl::add_pmtiles_source()`](https://walker-data.com/mapgl/reference/add_pmtiles_source.html).

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
[`mapgl_source_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_id.md),
[`mapgl_source_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_layer_id.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- create_tile_from_sf(sim_data)

# get layer identifier
mapgl_source_url(x)
#> [1] "http://localhost:8085/file4779a6ed8026.pmtiles"
```
