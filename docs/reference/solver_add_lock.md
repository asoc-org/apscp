# Add lock to solver

Add a \[new_lock()\] to a Solver widget.

## Usage

``` r
solver_add_lock(id, lock, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  \`character\` value with identifier for \[solver()\] object.

- lock:

  \[new_lock()\] object.

- session:

  The \`session\` object passed to function given to \`shinyServer\`
  Default is \[shiny::getDefaultReactiveDomain()\].

## See also

Other solver:
[`mapper_sync()`](https://asoc-org.github.io/apscp/reference/mapper_sync.md),
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)
