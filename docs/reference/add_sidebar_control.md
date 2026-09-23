# Add sidebar control

Add a sidebar control to a \[mapgl::mapboxgl()\] object.

## Usage

``` r
add_sidebar_control(
  map,
  id,
  position = "top-right",
  height = "100%",
  selected = NULL
)
```

## Arguments

- map:

  \[mapgl::mapboxgl()\] object.

- id:

  \`character\` HTML identifier for sidebar.

- position:

  The position of the control. Can be one of "top-left", "top-right",
  "bottom-left", or "bottom-right". Default is "top-right".

- height:

  \`character\` value denoting the height of the widget in CSS units.
  For example, acceptable values include \`"100 or \`"400px"\`. Note
  that if \`height\` is a percentage value, then it is recommended to
  add other map controls to a different \`position\` to avoid overlaps.

- selected:

  \`character\` value denoting the identifier for the sidebar pane to
  have open by default. Defaults to \`NULL\` such that the side bar is
  closed.

## Value

An updated \[mapgl::mapboxgl()\] object.

## See also

Other sidebar:
[`acknowledgments_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/acknowledgments_sidebar_pane.md),
[`contact_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/contact_sidebar_pane.md),
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md),
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md)

## Examples

``` r
if (FALSE) { # interactive()
library(shiny)

# run example app showing a single sidebar
runApp(system.file("examples", "sidebar_app.R", package = "apscp"))
}
```
