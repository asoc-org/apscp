# Add solution to summarizer

Add a
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
to a
[`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md)
widget.

## Usage

``` r
summarizer_add_solution(
  id,
  solution,
  show = TRUE,
  session = shiny::getDefaultReactiveDomain()
)
```

## Arguments

- id:

  `character` value with identifier for
  [`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md)
  object.

- solution:

  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  object.

- show:

  `logical` value indicating if the
  [`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md)
  widget should change to show the solution?

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## See also

Other summarizer:
[`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md),
[`summarizer-shiny`](https://asoc-org.github.io/apscp/reference/summarizer-shiny.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example application showing a summarizer widget
run_example_app("summarizer")
}
```
