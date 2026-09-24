# Add lock to solver

Add a
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md)
to a [`solver()`](https://asoc-org.github.io/apscp/reference/solver.md)
widget.

## Usage

``` r
solver_add_lock(id, lock, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- id:

  `character` value with identifier for
  [`solver()`](https://asoc-org.github.io/apscp/reference/solver.md)
  object.

- lock:

  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md)
  object.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

## See also

Other functions for the solver widget:
[`solver()`](https://asoc-org.github.io/apscp/reference/solver.md),
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example application showing a solver widget
run_example_app("solver")
}
```
