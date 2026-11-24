# Add solution to contraster widget

Add a
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
to a
[`contraster()`](https://asoc-org.github.io/apscp/reference/contraster.md)
widget.

## Usage

``` r
contraster_add_solution(
  id,
  solution,
  session = shiny::getDefaultReactiveDomain()
)
```

## Arguments

- id:

  `character` value with identifier for
  [`contraster()`](https://asoc-org.github.io/apscp/reference/contraster.md)
  widget.

- solution:

  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  object.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## See also

Other contraster:
[`contraster()`](https://asoc-org.github.io/apscp/reference/contraster.md),
[`contraster-shiny`](https://asoc-org.github.io/apscp/reference/contraster-shiny.md),
[`contraster_reset()`](https://asoc-org.github.io/apscp/reference/contraster_reset.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a contrast widget
run_example_app("contraster")
}
```
