# Map project

Create a map to display the project.

## Usage

``` r
map_project(x, ...)
```

## Arguments

- x:

  \[new_project()\] object.

- ...:

  arguments passed to \[mapgl::mapboxgl()\].

## Value

A \[mapgl::mapboxgl()\] object.

## See also

Other mapping:
[`add_layer_visibility_control()`](https://asoc-org.github.io/apscp/reference/add_layer_visibility_control.md),
[`get_paint_parameters()`](https://asoc-org.github.io/apscp/reference/get_paint_parameters.md),
[`has_mapbox_token()`](https://asoc-org.github.io/apscp/reference/has_mapbox_token.md),
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
# find file path for built-in project
path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")

# import project
x <- read_project(path)

# preview project
print(x)

# create interactive map for project data
map <- map_project(x)

# display map
print(map)
}
```
