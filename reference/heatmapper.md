# Heat mapper

Constructs a widget for creating a heat map from solutions. This widget
is designed to be used in conjunction with an existing map within a
Shiny web application.

## Usage

``` r
heatmapper(project, width = NULL, height = NULL, id = NULL)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

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

Other heatmapper:
[`heatmapper-shiny`](https://asoc-org.github.io/apscp/reference/heatmapper-shiny.md),
[`heatmapper_add_solution()`](https://asoc-org.github.io/apscp/reference/heatmapper_add_solution.md),
[`heatmapper_reset()`](https://asoc-org.github.io/apscp/reference/heatmapper_reset.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a heat mapper widget
run_example_app("heatmapper")
}
```
