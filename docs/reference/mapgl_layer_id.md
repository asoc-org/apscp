# Get mapgl layer identifier

Get the layer identifier for an object.

## Usage

``` r
mapgl_layer_id(x)
```

## Arguments

- x:

  \[new_feature()\], \[new_cost()\], \[new_lock()\], or
  \[new_solution()\] object.

## Value

A \`character\` value.

## Details

This corresponds to the \`id\` parameter of \[mapgl::add_fill_layer()\].

## See also

Other mapping:
[`add_layer_visibility_control()`](https://asoc-org.github.io/apscp/reference/add_layer_visibility_control.md),
[`get_paint_parameters()`](https://asoc-org.github.io/apscp/reference/get_paint_parameters.md),
[`has_mapbox_token()`](https://asoc-org.github.io/apscp/reference/has_mapbox_token.md),
[`map_project()`](https://asoc-org.github.io/apscp/reference/map_project.md),
[`mapgl_add_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_add_layer.md),
[`mapgl_add_source()`](https://asoc-org.github.io/apscp/reference/mapgl_add_source.md),
[`mapgl_clear_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_clear_layer.md),
[`mapgl_source_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_id.md),
[`mapgl_source_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_layer_id.md),
[`mapgl_source_url()`](https://asoc-org.github.io/apscp/reference/mapgl_source_url.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

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
#> Error in new_cost(name = "cost", zone = "Science", weight = 0.1, layer = new_layer(column = "feat_1",     total = 500, dataset = create_dataset_from_sf(sim_data),     tile = create_tile_from_sf(sim_data), legend = simulate_continuous_legend(),     provenance = simulate_provenance(), details = "extra info")): could not find function "new_cost"

# get layer identifier
mapgl_layer_id(x)
#> Error in mapgl_layer_id(x): could not find function "mapgl_layer_id"
```
