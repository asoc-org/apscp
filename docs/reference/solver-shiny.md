# Shiny bindings for solver

Output and render functions for using \[solver()\] within Shiny
applications.

## Usage

``` r
solverOutput(outputId, width = "100%", height = "400px")

renderSolver(expr, env = parent.frame(), quoted = FALSE)
```

## Arguments

- outputId:

  output variable to read from

- width, height:

  Must be a valid CSS unit (like `'100%'`, `'400px'`, `'auto'`) or a
  number, which will be coerced to a string and have `'px'` appended.

- expr:

  An expression that generates a \[solver()\].

- env:

  The environment in which to evaluate `expr`.

- quoted:

  Is `expr` a quoted expression (with
  [`quote()`](https://rdrr.io/r/base/substitute.html))? This is useful
  if you want to save an expression in a variable.

## See also

Other solver:
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)
