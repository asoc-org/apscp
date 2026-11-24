# Shiny bindings for heatmapper

Output and render functions for using heatmapper within Shiny
applications and interactive Rmd documents.

## Usage

``` r
heatmapperOutput(outputId, width = "100%", height = "400px")

renderHeatmapper(expr, env = parent.frame(), quoted = FALSE)
```

## Arguments

- outputId:

  output variable to read from

- width, height:

  Must be a valid CSS unit (like `'100%'`, `'400px'`, `'auto'`) or a
  number, which will be coerced to a string and have `'px'` appended.

- expr:

  An expression that generates a heatmapper

- env:

  The environment in which to evaluate `expr`.

- quoted:

  Is `expr` a quoted expression (with
  [`quote()`](https://rdrr.io/r/base/substitute.html))? This is useful
  if you want to save an expression in a variable.

## See also

Other heatmapper:
[`heatmapper()`](https://asoc-org.github.io/apscp/reference/heatmapper.md),
[`heatmapper_add_solution()`](https://asoc-org.github.io/apscp/reference/heatmapper_add_solution.md),
[`heatmapper_reset()`](https://asoc-org.github.io/apscp/reference/heatmapper_reset.md)
