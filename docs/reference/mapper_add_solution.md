# Add solution to map

Add a \[new_solution()\] to a Mapper widget.

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

  \`character\` value with identifier for \[mapper()\] object.

- map:

  \[mapgl::mapboxgl_proxy()\] object.

- solution:

  \[new_solution()\] object.

- visible:

  \`logical\` value indicating if layer should be visible. Defaults to
  \`TRUE\`.

- session:

  The \`session\` object passed to function given to \`shinyServer\`
  Default is \[shiny::getDefaultReactiveDomain()\].

## See also

Other mapper:
[`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md),
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md)
