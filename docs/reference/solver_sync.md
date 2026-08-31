# Synchronize solver settings

Update a solver to synchronize updates across different setting panels.

## Usage

``` r
solver_sync(id, project, data, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  \`character\` value with identifier for \[solver()\] object.

- project:

  \[project()\] object.

- data:

  \`list\` with data.

- session:

  The \`session\` object passed to function given to \`shinyServer\`
  Default is \[shiny::getDefaultReactiveDomain()\].

## Details

This function is specifically used to update the feature held status
bars based on which locks are selected for each zone.

## See also

Other solver:
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md)
