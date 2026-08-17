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

- data:

  \`list\` with data.

- session:

  The \`session\` object passed to function given to \`shinyServer\`
  Default is \[shiny::getDefaultReactiveDomain()\].

## Details

This function is specifically used to add layers to the map that are not
active.

## See also

Other solver:
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)
