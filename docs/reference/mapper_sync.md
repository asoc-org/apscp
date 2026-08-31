# Synchronize mapper

Synchronize active layers between a \[mapper()\] object and its
associated \[mapgl::mapboxglOutput()\] object.

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

  \`character\` value with identifier for \[mapper()\] object.

- map:

  \[mapgl::mapboxgl_proxy()\] object.

- project:

  \[new_project()\] object.

- data:

  \`list\` with data.

- session:

  The \`session\` object passed to function given to \`shinyServer\`
  Default is \[shiny::getDefaultReactiveDomain()\].

## Details

This function is specifically used to add layers to the map that are not
active.

## See also

Other mapper:
[`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md),
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md),
[`mapper_add_solution()`](https://asoc-org.github.io/apscp/reference/mapper_add_solution.md)
