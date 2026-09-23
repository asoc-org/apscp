# Mapper

Constructs a widget for managing layers on a \[mapgl::mapboxgl()\] map.
This widget is designed to be used in conjunction with an existing map
within a Shiny web application.

## Usage

``` r
mapper(
  project,
  map_id,
  max_layers = 15L,
  width = NULL,
  height = NULL,
  id = NULL
)
```

## Arguments

- project:

  \[new_project()\] object.

- map_id:

  \`character\` HTML identifier for \[mapgl::mapboxglOutput()\].
  Defaults to \`NULL\` since these identifiers are not used by Shiny.

- max_layers:

  \`integer\` maximum number of layers to be active on the
  \[mapgl::mapboxglOutput()\] at a single point in time. Defaults to 15.

- width:

  \`character\` width of the displayed widget. Defaults to \`NULL\` such
  that the widget is automatically sized.

- height:

  \`character\` width of the displayed widget. Defaults to \`NULL\` such
  that the widget is automatically sized.

- id:

  \`character\` HTML identifier for the widget. Defaults to \`NULL\`
  since these identifiers are not used by Shiny.

## See also

Other mapper:
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md),
[`mapper_add_solution()`](https://asoc-org.github.io/apscp/reference/mapper_add_solution.md),
[`mapper_sync()`](https://asoc-org.github.io/apscp/reference/mapper_sync.md)

## Examples

``` r
if (FALSE) { # interactive()
library(shiny)

# run example app showing a mapper
runApp(system.file("examples", "mapper_app.R", package = "apscp"))
}
```
