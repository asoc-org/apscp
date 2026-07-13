# Get paint parameters

Get parameters for painting a \[new_layer\] object.

## Usage

``` r
get_paint_parameters(x, column)
```

## Arguments

- x:

  \[new_continuous_legend()\] or \[new_categorical_legend()\] object.

- column:

  \`character\` value with source layer for painting.

## Value

A named \`list\` object.

## Details

This function is designed for use with \[mapgl::add_fill_layer()\].

## See also

Other mapping:
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
# create object
legend <- simulate_continuous_legend()
#> Error in simulate_continuous_legend(): could not find function "simulate_continuous_legend"

# obtain parameters for painting data stored in a column
# called "values" based on the legend
x <- get_paint_parameters(legend, "values")
#> Error in get_paint_parameters(legend, "values"): could not find function "get_paint_parameters"

# preview object
print(x)
#> Error: object 'x' not found
```
