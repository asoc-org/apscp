# Create a sidebar pane

Create a sidebar pane

## Usage

``` r
sidebar_pane(
  title = "Sidebar Title",
  id = NULL,
  icon = shiny::icon("caret-right"),
  tooltip = NULL,
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

- tooltip:

  A \`character\` value with text to display in a tooltip when hovering
  over the button to open the sidebar. Defaults to \`NULL\` such that no
  tooltip is displayed.

- ...:

  List of elements to include in the pane

## Value

A \`shiny.tag\` with sidebar-specific HTML classes

## References

<https://github.com/Turbo87/sidebar-v2>,
<https://github.com/Turbo87/sidebar-v2/blob/master/doc/usage.md>

## See also

Other sidebar:
[`acknowledgments_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/acknowledgments_sidebar_pane.md),
[`add_sidebar_control()`](https://asoc-org.github.io/apscp/reference/add_sidebar_control.md),
[`contact_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/contact_sidebar_pane.md),
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
