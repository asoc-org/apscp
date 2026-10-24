# Mapper

Constructs a widget for managing layers on a
[`mapgl::mapboxgl()`](https://walker-data.com/mapgl/reference/mapboxgl.html)
map. This widget is designed to be used in conjunction with an existing
map within a Shiny web application.

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

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- map_id:

  `character` HTML identifier for
  [`mapgl::mapboxglOutput()`](https://walker-data.com/mapgl/reference/mapboxglOutput.html).
  Defaults to `NULL` since these identifiers are not used by Shiny.

- max_layers:

  `integer` maximum number of layers to be active on the
  [`mapgl::mapboxglOutput()`](https://walker-data.com/mapgl/reference/mapboxglOutput.html)
  at a single point in time. Defaults to 15.

- width:

  `character` width of the displayed widget. Defaults to `NULL` such
  that the widget is automatically sized.

- height:

  `character` width of the displayed widget. Defaults to `NULL` such
  that the widget is automatically sized.

- id:

  `character` HTML identifier for the widget. Defaults to `NULL` since
  these identifiers are not used by Shiny.

## Dependencies

The
[`add_external_resources()`](https://asoc-org.github.io/apscp/reference/add_external_resources.md)
function must be manually added to the user-interface component of the
Shiny application in order for this widget to work correctly.

## See also

Other functions for the mapper widget:
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md),
[`mapper_add_solution()`](https://asoc-org.github.io/apscp/reference/mapper_add_solution.md),
[`mapper_sync()`](https://asoc-org.github.io/apscp/reference/mapper_sync.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a mapper widget
run_example_app("mapper")
}
```
