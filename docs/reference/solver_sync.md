# Synchronize solver settings

Update a solver to synchronize updates across different setting panels.

## Usage

``` r
solver_sync(id, project, data, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  `character` value with identifier for
  [`solver()`](https://asoc-org.github.io/apscp/reference/solver.md)
  object.

- project:

  [`project()`](https://rspatial.github.io/terra/reference/project.html)
  object.

- data:

  `list` with data.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## Details

This function is specifically used to update the feature held status
bars based on which locks are selected for each zone.

## See also

Other functions for the solver widget:
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example application showing a solver widget
run_example_app("solver")
}
```
