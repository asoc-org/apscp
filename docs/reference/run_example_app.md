# Run example application

Run an example application to showcase widgets.

## Usage

``` r
run_example_app(name)
```

## Arguments

- name:

  `character` value denoting the name of the application.

## Value

A [`shiny::runApp()`](https://rdrr.io/pkg/shiny/man/runApp.html) object.

## Examples

``` r
if (FALSE) { # interactive()
# run example application for mapper widget
run_example("mapper_app")

# run example application for sidebar widget
run_example("sidebar_app")

# run example application for solver widget
run_example("solver_app")
}
```
