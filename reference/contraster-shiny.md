# Shiny bindings for contraster

Output and render functions for using contraster within Shiny
applications and interactive Rmd documents.

## Usage

``` r
contrasterOutput(outputId, width = "100%", height = "400px")

renderContraster(expr, env = parent.frame(), quoted = FALSE)
```

## Arguments

- outputId:

  output variable to read from

- width, height:

  Must be a valid CSS unit (like `'100%'`, `'400px'`, `'auto'`) or a
  number, which will be coerced to a string and have `'px'` appended.

- expr:

  An expression that generates a contraster

- env:

  The environment in which to evaluate `expr`.

- quoted:

  Is `expr` a quoted expression (with
  [`quote()`](https://rdrr.io/r/base/substitute.html))? This is useful
  if you want to save an expression in a variable.

## See also

Other contraster:
[`contraster()`](https://asoc-org.github.io/apscp/reference/contraster.md),
[`contraster_add_solution()`](https://asoc-org.github.io/apscp/reference/contraster_add_solution.md),
[`contraster_reset()`](https://asoc-org.github.io/apscp/reference/contraster_reset.md)
