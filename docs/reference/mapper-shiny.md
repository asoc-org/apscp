# Shiny bindings for mapper

Output and render functions for using \[mapper()\] within Shiny
applications.

## Usage

``` r
mapperOutput(outputId, width = "100%", height = "400px")

renderMapper(expr, env = parent.frame(), quoted = FALSE)
```

## Arguments

- outputId:

  output variable to read from

- width, height:

  Must be a valid CSS unit (like `'100%'`, `'400px'`, `'auto'`) or a
  number, which will be coerced to a string and have `'px'` appended.

- expr:

  An expression that generates a \[mapper()\].

- env:

  The environment in which to evaluate `expr`.

- quoted:

  Is `expr` a quoted expression (with
  [`quote()`](https://rdrr.io/r/base/substitute.html))? This is useful
  if you want to save an expression in a variable.

## See also

Other mapper:
[`mapper()`](https://asoc-org.github.io/apscp/reference/mapper.md),
[`mapper_add_solution()`](https://asoc-org.github.io/apscp/reference/mapper_add_solution.md)
