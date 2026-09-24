# Acknowledgments sidebar pane

Create a sidebar pane for displaying acknowledgments.

## Usage

``` r
acknowledgments_sidebar_pane(id, icon = shiny::icon("heart"))
```

## Arguments

- id:

  `character` value denoting an identifier for the sidebar pane.

- icon:

  [`shiny::icon()`](https://rdrr.io/pkg/shiny/man/icon.html) object for
  the sidebar pane. This icon is used to create a button for closing the
  pane. If `NULL`, then no icon is added for the pane.

## Value

A `shiny.tag` object.

## See also

Other functions for the sidebar widget:
[`add_sidebar_control()`](https://asoc-org.github.io/apscp/reference/add_sidebar_control.md),
[`contact_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/contact_sidebar_pane.md),
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md),
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md)

## Examples

``` r
# create object
x <- acknowledgments_sidebar_pane("pane_id")
```
