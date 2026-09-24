# Synchronize mapper

Synchronize active layers between a
[`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md)
object and its associated
[`mapgl::mapboxglOutput()`](https://walker-data.com/mapgl/reference/mapboxglOutput.html)
object.

## Usage

``` r
mapper_sync(
  id,
  map,
  project,
  data,
  session = shiny::getDefaultReactiveDomain()
)
```

## Arguments

- id:

  `character` value with identifier for
  [`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md)
  object.

- map:

  [`mapgl::mapboxgl_proxy()`](https://walker-data.com/mapgl/reference/mapboxgl_proxy.html)
  object.

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- data:

  `list` with data.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## Details

This function is specifically used to add layers to the map that are not
active.

## See also

Other functions for the mapper widget:
[`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md),
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md),
[`mapper_add_solution()`](https://asoc-org.github.io/apscp/reference/mapper_add_solution.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a mapper widget
run_example_app("mapper")
}
```
