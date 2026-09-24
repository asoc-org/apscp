# Get paint parameters

Get parameters for painting a
[new_layer](https://asoc-org.github.io/apscp/reference/new_layer.md)
object.

## Usage

``` r
get_paint_parameters(x, column)
```

## Arguments

- x:

  [`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md)
  or
  [`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md)
  object.

- column:

  `character` value with source layer for painting.

## Value

A named `list` object.

## Details

This function is designed for use with
[`mapgl::add_fill_layer()`](https://walker-data.com/mapgl/reference/add_fill_layer.html).

## See also

Other functions for mapping data:
[`add_layer_visibility_control()`](https://asoc-org.github.io/apscp/reference/add_layer_visibility_control.md),
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

# obtain parameters for painting data stored in a column
# called "values" based on the legend
x <- get_paint_parameters(legend, "values")

# preview object
print(x)
#> $fill_color
#> $fill_color[[1]]
#> [1] "case"
#> 
#> $fill_color[[2]]
#> $fill_color[[2]][[1]]
#> [1] "=="
#> 
#> $fill_color[[2]][[2]]
#> $fill_color[[2]][[2]][[1]]
#> [1] "get"
#> 
#> $fill_color[[2]][[2]][[2]]
#> [1] "values"
#> 
#> 
#> $fill_color[[2]][[3]]
#> NULL
#> 
#> 
#> $fill_color[[3]]
#> [1] "transparent"
#> 
#> $fill_color[[4]]
#> $fill_color[[4]][[1]]
#> [1] "interpolate"
#> 
#> $fill_color[[4]][[2]]
#> $fill_color[[4]][[2]][[1]]
#> [1] "linear"
#> 
#> 
#> $fill_color[[4]][[3]]
#> $fill_color[[4]][[3]][[1]]
#> [1] "get"
#> 
#> $fill_color[[4]][[3]][[2]]
#> [1] "values"
#> 
#> 
#> $fill_color[[4]][[4]]
#> [1] 0
#> 
#> $fill_color[[4]][[5]]
#> [1] "#000000"
#> 
#> $fill_color[[4]][[6]]
#> [1] 1
#> 
#> $fill_color[[4]][[7]]
#> [1] "#DDDDDD"
#> 
#> 
#> 
```
