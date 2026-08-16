# Reset solver

Reset the solver so that it is ready to generate a solution.

## Usage

``` r
solver_reset(id, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  \`character\` value with identifier for \[solver()\] object.

- session:

  The \`session\` object passed to function given to \`shinyServer\`
  Default is \[shiny::getDefaultReactiveDomain()\].

## Details

The solver is reset by (i) clearing the text from the input element for
specifying a solution name, (ii) disabling the start button, and (iii)
disabling the stop button.

## See also

Other solver:
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)
