# Get mapgl source layer identifier

Get the source layer identifier.

## Usage

``` r
mapgl_source_layer_id(x)
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

This corresponds to the `source_layer` parameter of
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
[`mapgl_source_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_id.md),
[`mapgl_source_url()`](https://asoc-org.github.io/apscp/reference/mapgl_source_url.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- new_cost(
  name = "cost",
  zone = "Science",
  weight = 0.1,
  layer = new_layer(
    column = "feat_1",
    total = 500,
    dataset = create_dataset_from_sf(sim_data),
    tile = create_tile_from_sf(sim_data),
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)

# get layer identifier
mapgl_source_layer_id(x)
#> [1] "layer"
```
