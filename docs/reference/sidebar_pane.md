# Sidebar pane

Create a sidebar pane. This pane is designed to be used as an argument
to
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md).

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

  `character` value with a title for the sidebar pane.

- id:

  `character` value denoting an identifier for the sidebar pane.

- icon:

  [`shiny::icon()`](https://rdrr.io/pkg/shiny/man/icon.html) object for
  the sidebar pane. This icon is used to create a button for closing the
  pane. If `NULL`, then no icon is added for the pane.

- tooltip:

  `character` value with text to display in a tooltip when hovering over
  the button to open the sidebar. Defaults to `NULL` such that no
  tooltip is displayed.

- ...:

  List of elements to include in the pane.

## Value

A `shiny.tag` object.

## References

<https://github.com/Turbo87/sidebar-v2>,
<https://github.com/Turbo87/sidebar-v2/blob/master/doc/usage.md>

## See also

Other functions for the sidebar widget:
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
# load packages
library(shiny)
library(htmltools)

# create sidebar pane
sidebar_pane(id = "id", icon = icon("car"), tags$div())
#> <div class="mapsidebar-pane" id="id">
#>   <h3 class="mapsidebar-pane-header mapsidebar-pane-header-icon">
#>     <div></div>
#>     <span class="mapsidebar-close">
#>       <i class="fas fa-car" role="presentation" aria-label="car icon"></i>
#>     </span>
#>   </h3>
#>   <div class="mapsidebar-pane-content"></div>
#> </div>
```
