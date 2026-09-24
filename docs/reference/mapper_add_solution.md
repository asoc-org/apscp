# Add solution to map

Add a
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
to a [`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md)
widget.

## Usage

``` r
mapper_add_solution(
  id,
  map,
  solution,
  visible = TRUE,
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

- solution:

  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  object.

- visible:

  `logical` value indicating if layer should be visible. Defaults to
  `TRUE`.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## See also

Other functions for the mapper widget:
[`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md),
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md),
[`mapper_sync()`](https://asoc-org.github.io/apscp/reference/mapper_sync.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a mapper widget
run_example_app("mapper")
}
```
