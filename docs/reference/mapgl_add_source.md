# Add source

Add a \[new_tile()\] object as a layer to a mapgl object.

## Usage

``` r
mapgl_add_source(map, x)
```

## Arguments

- map:

  A map object created by the `mapboxgl` or `maplibre` function.

- x:

  \[new_tile()\], \[new_feature()\], \[new_cost()\], \[new_lock()\], or
  \[new_solution()\] object.

## Details

Sources are added with \[mapgl::add_pmtiles_source()\].

## See also

Other mapping:
[`add_layer_visibility_control()`](https://asoc-org.github.io/apscp/reference/add_layer_visibility_control.md),
[`get_paint_parameters()`](https://asoc-org.github.io/apscp/reference/get_paint_parameters.md),
[`has_mapbox_token()`](https://asoc-org.github.io/apscp/reference/has_mapbox_token.md),
[`map_project()`](https://asoc-org.github.io/apscp/reference/map_project.md),
[`mapgl_add_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_add_layer.md),
[`mapgl_clear_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_clear_layer.md),
[`mapgl_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_layer_id.md),
[`mapgl_source_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_id.md),
[`mapgl_source_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_layer_id.md),
[`mapgl_source_url()`](https://asoc-org.github.io/apscp/reference/mapgl_source_url.md)

## Examples

``` r
if (FALSE) { # interactive()
# simulate spatial data
sim_data <- simulate_spatial_data()

# create objects
dataset <- create_dataset_from_sf(sim_data)
tile <- create_tile_from_sf(sim_data)
cost <- new_cost(
  name = "cost",
  zone = "Science",
  weight = 0.1,
  layer = new_layer(
    column = "feat_1",
    total = 500,
    dataset = dataset,
    tile = tile,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)

# create mapbox map
map <- mapgl::mapboxgl()

# add source for tile object
map <- mapgl_add_source(map, tile)

# add layer for cost object
map <- mapgl_add_layer(map, cost)

# clear layer for cost object
map <- mapgl_clear_layer(map, cost)

# display map
# \dontrun{
print(map)
# }
}
```
