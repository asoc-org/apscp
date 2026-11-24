# Add solution to heat mapper widget

Add a
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
to a
[`heatmapper()`](https://asoc-org.github.io/apscp/reference/heatmapper.md)
widget.

## Usage

``` r
heatmapper_add_solution(
  id,
  solution,
  session = shiny::getDefaultReactiveDomain()
)
```

## Arguments

- id:

  `character` value with identifier for
  [`heatmapper()`](https://asoc-org.github.io/apscp/reference/heatmapper.md)
  widget.

- solution:

  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  object.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## See also

Other heatmapper:
[`heatmapper()`](https://asoc-org.github.io/apscp/reference/heatmapper.md),
[`heatmapper-shiny`](https://asoc-org.github.io/apscp/reference/heatmapper-shiny.md),
[`heatmapper_reset()`](https://asoc-org.github.io/apscp/reference/heatmapper_reset.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a heat mapper widget
run_example_app("heatmapper")
}
```
