# Create a sidebar pane

Create a sidebar pane

## Usage

``` r
sidebar_pane(
  title = "Sidebar Title",
  id = NULL,
  icon = icon("caret-right"),
  ...
)
```

## Arguments

- title:

  A title for the sidebar pane

- id:

  An id for the sidebar pane.

- icon:

  An \[icon()\] object for the sidebar pane. This icon is used to create
  a button for closing the pane. If \`NULL\`, then no icon is added for
  the pane.

- ...:

  List of elements to include in the pane

## Value

A \`shiny.tag\` with sidebar-specific HTML classes

## References

<https://github.com/Turbo87/sidebar-v2>,
<https://github.com/Turbo87/sidebar-v2/blob/master/doc/usage.md>

## See also

Other sidebar:
[`add_sidebar_control()`](https://asoc-org.github.io/apscp/reference/add_sidebar_control.md),
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md)

## Examples

``` r
# \dontrun{
library(shiny)
library(htmltools)
sidebar_pane(id = "id", icon = icon("cars"), tags$div())
#> Error in sidebar_pane(id = "id", icon = icon("cars"), tags$div()): could not find function "sidebar_pane"
# }
```
