# Reset contraster widget

Reset the contraster widget so that it is ready to generate a new layer.

## Usage

``` r
contraster_reset(id, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  `character` value with identifier for
  [`contraster()`](https://asoc-org.github.io/apscp/reference/contraster.md)
  widget.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## Details

The contraster widget is reset by (i) clearing the text from the input
element for specifying a layer name, and (ii) disabling the button.

## See also

Other contraster:
[`contraster()`](https://asoc-org.github.io/apscp/reference/contraster.md),
[`contraster-shiny`](https://asoc-org.github.io/apscp/reference/contraster-shiny.md),
[`contraster_add_solution()`](https://asoc-org.github.io/apscp/reference/contraster_add_solution.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a contrast widget
run_example_app("contraster")
}
```
