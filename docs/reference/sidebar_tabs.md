# Sidebar with tabs

Create a sidebar with tabs.

## Usage

``` r
sidebar_tabs(id, icon_list = NULL, ...)
```

## Arguments

- id:

  `character` identifier for sidebar.

- icon_list:

  `list` of [`icon()`](https://rdrr.io/pkg/shiny/man/icon.html) objects.
  These icons are shown when the sidebar is collapsed. Not that the list
  is required and must match the amount of
  [`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md)
  objects. Defaults to `NULL` such that no icons are included.

- ...:

  The individual
  [`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md)
  objects.

## Value

A `shiny.tag` object.

## Dependencies

The
[`add_external_resources()`](https://asoc-org.github.io/apscp/reference/add_external_resources.md)
function must be manually added to the user-interface component of the
Shiny application in order for this widget to work correctly.

## See also

Other functions for the sidebar widget:
[`acknowledgments_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/acknowledgments_sidebar_pane.md),
[`add_sidebar_control()`](https://asoc-org.github.io/apscp/reference/add_sidebar_control.md),
[`contact_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/contact_sidebar_pane.md),
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md)

## Examples

``` r
# load packages
library(shiny)
library(htmltools)

# create sidebar panes
p1 <- sidebar_pane(
  id = "pane1", icon = icon("car"),
  tags$div(tags$p("Text"))
)
p2 <- sidebar_pane(
  id = "pane2", icon = icon("star"),
  tags$div(actionButton(inputId = "button", label = "Click me!"))
)

# create sidebar with tabs
sidebar_tabs(
  id = "sidebar",
  icon_list = list(icon("car"), icon("star")),
  p1, p2
)
#> <div id="sidebar" class="mapsidebar collapsed" style="display: none">
#>   <div class="mapsidebar-tabs" style="display: none">
#>     <ul role="tablist">
#>       <li>
#>         <a href="#pane1" role="tab">
#>           <i class="fas fa-car" role="presentation" aria-label="car icon"></i>
#>         </a>
#>       </li>
#>       <li>
#>         <a href="#pane2" role="tab">
#>           <i class="far fa-star" role="presentation" aria-label="star icon"></i>
#>         </a>
#>       </li>
#>     </ul>
#>   </div>
#>   <div class="mapsidebar-content" style="display: none">
#>     <div class="mapsidebar-pane" id="pane1">
#>       <h3 class="mapsidebar-pane-header mapsidebar-pane-header-icon">
#>         <div>
#>           <p>Text</p>
#>         </div>
#>         <span class="mapsidebar-close">
#>           <i class="fas fa-car" role="presentation" aria-label="car icon"></i>
#>         </span>
#>       </h3>
#>       <div class="mapsidebar-pane-content"></div>
#>     </div>
#>     <div class="mapsidebar-pane" id="pane2">
#>       <h3 class="mapsidebar-pane-header mapsidebar-pane-header-icon">
#>         <div>
#>           <button id="button" type="button" class="btn btn-default action-button"><span class="action-label">Click me!</span></button>
#>         </div>
#>         <span class="mapsidebar-close">
#>           <i class="far fa-star" role="presentation" aria-label="star icon"></i>
#>         </span>
#>       </h3>
#>       <div class="mapsidebar-pane-content"></div>
#>     </div>
#>   </div>
#> </div>
```
