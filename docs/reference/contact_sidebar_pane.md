# Contact sidebar pane

Create a sidebar pane for displaying contact information.

## Usage

``` r
contact_sidebar_pane(id, icon = shiny::icon("envelope"))
```

## Arguments

- id:

  An id for the sidebar pane.

- icon:

  An \[icon()\] object for the sidebar pane. This icon is used to create
  a button for closing the pane. If \`NULL\`, then no icon is added for
  the pane.

## Value

A \`shiny.tag\` with sidebar-specific HTML classes

## See also

Other sidebar:
[`acknowledgments_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/acknowledgments_sidebar_pane.md),
[`add_sidebar_control()`](https://asoc-org.github.io/apscp/reference/add_sidebar_control.md),
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md),
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md)

## Examples

``` r
# create object
x <- contact_sidebar_pane("pane_id")
#> Error in contact_sidebar_pane("pane_id"): could not find function "contact_sidebar_pane"
```
