# Add layer visibility control

Add a control to show, hide, or highlight all layers on the map.

## Usage

``` r
add_layer_visibility_control(map, mapper_id, position = "top-left")
```

## Arguments

- map:

  [`mapgl::mapboxgl()`](https://walker-data.com/mapgl/reference/mapboxgl.html)
  object.

- mapper_id:

  `character` value with HTML identifier for
  [`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md)
  object.

- position:

  `character` value denoting the placement of the control the `map`
  object. Available options include `"top-left"`, `"top-right`",
  `"bottom-left"`, and `"bottom-right"`.

## See also

Other functions for mapping data:
[`get_paint_parameters()`](https://asoc-org.github.io/apscp/reference/get_paint_parameters.md),
[`has_mapbox_token()`](https://asoc-org.github.io/apscp/reference/has_mapbox_token.md),
[`map_project()`](https://asoc-org.github.io/apscp/reference/map_project.md),
[`mapgl_add_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_add_layer.md),
[`mapgl_add_source()`](https://asoc-org.github.io/apscp/reference/mapgl_add_source.md),
[`mapgl_clear_layer()`](https://asoc-org.github.io/apscp/reference/mapgl_clear_layer.md),
[`mapgl_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_layer_id.md),
[`mapgl_source_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_id.md),
[`mapgl_source_layer_id()`](https://asoc-org.github.io/apscp/reference/mapgl_source_layer_id.md),
[`mapgl_source_url()`](https://asoc-org.github.io/apscp/reference/mapgl_source_url.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a mapper widget
run_example_app("mapper")
}
```
