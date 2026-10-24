# Shiny bindings for summarizer

Output and render functions for using
[`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md)
within Shiny applications.

## Usage

``` r
summarizerOutput(outputId, width = "100%", height = "400px")

renderSummarizer(expr, env = parent.frame(), quoted = FALSE)
```

## Arguments

- outputId:

  output variable to read from

- width, height:

  Must be a valid CSS unit (like `'100%'`, `'400px'`, `'auto'`) or a
  number, which will be coerced to a string and have `'px'` appended.

- expr:

  An expression that generates a
  [`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md).

- env:

  The environment in which to evaluate `expr`.

- quoted:

  Is `expr` a quoted expression (with
  [`quote()`](https://rdrr.io/r/base/substitute.html))? This is useful
  if you want to save an expression in a variable.

## See also

Other summarizer:
[`summarizer()`](https://asoc-org.github.io/apscp/reference/summarizer.md),
[`summarizer_add_solution()`](https://asoc-org.github.io/apscp/reference/summarizer_add_solution.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example application showing a summarizer widget
run_example_app("summarizer")
}
```
