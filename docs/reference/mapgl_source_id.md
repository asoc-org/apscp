# Get mapgl source identifier

Get the source identifier.

## Usage

``` r
mapgl_source_id(x)
```

## Arguments

- x:

  \[new_tile()\], \[new_feature()\], \[new_cost()\], \[new_lock()\], or
  \[new_solution()\] object.

## Value

A \`character\` value.

## Details

This corresponds to the \`source\` parameter of
\[mapgl::add_fill_layer()\].

## See also

Other mapping:
[`add_hide_layers_control()`](https://asoc-org.github.io/apscp/reference/add_hide_layers_control.md),
[`add_remove_layers_control()`](https://asoc-org.github.io/apscp/reference/add_remove_layers_control.md),
[`add_show_layers_control()`](https://asoc-org.github.io/apscp/reference/add_show_layers_control.md),
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
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
x <- create_tile_from_sf(sim_data)
#> Error in create_tile_from_sf(sim_data): could not find function "create_tile_from_sf"

# get source identifier
mapgl_source_id(x)
#> Error in mapgl_source_id(x): could not find function "mapgl_source_id"
```
