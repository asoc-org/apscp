# Reset heat mapper widget

Reset the heat mapper widget so that it is ready to generate a new
layer.

## Usage

``` r
heatmapper_reset(id, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  `character` value with identifier for
  [`heatmapper()`](https://asoc-org.github.io/apscp/reference/heatmapper.md)
  widget.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## Details

The heat mapper widget is reset by (i) clearing the text from the input
element for specifying a layer name, and (ii) disabling the button.

## See also

Other heatmapper:
[`heatmapper()`](https://asoc-org.github.io/apscp/reference/heatmapper.md),
[`heatmapper-shiny`](https://asoc-org.github.io/apscp/reference/heatmapper-shiny.md),
[`heatmapper_add_solution()`](https://asoc-org.github.io/apscp/reference/heatmapper_add_solution.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a heat mapper widget
run_example_app("heatmapper")
}
```
