# Summarizer

Constructs a widget to summarize solutions. This widget is designed to
be used within a Shiny web application.

## Usage

``` r
summarizer(
  project,
  zone_colors = get_golem_config("zone_colors"),
  zone_locked_colors = get_golem_config("zone_locked_colors"),
  width = NULL,
  height = NULL,
  id = NULL
)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- zone_colors:

  `character` vector of colors for each zone. Defaults to
  `get_golem_config("zone_colors")`.

- zone_locked_colors:

  `character` vector of colors for each zone. Defaults to
  `get_golem_config("zone_locked_colors")`.

- width:

  `character` width of the displayed widget. Defaults to `NULL` such
  that the widget is automatically sized.

- height:

  `character` width of the displayed widget. Defaults to `NULL` such
  that the widget is automatically sized.

- id:

  `character` HTML identifier for the widget. Defaults to `NULL` since
  these identifiers are not used by Shiny.

## See also

Other summarizer:
[`summarizer-shiny`](https://asoc-org.github.io/apscp/reference/summarizer-shiny.md),
[`summarizer_add_solution()`](https://asoc-org.github.io/apscp/reference/summarizer_add_solution.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example application showing a summarizer widget
run_example_app("summarizer")
}
```
