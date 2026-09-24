# Solver

Constructs a widget for specifying solver settings to generate a
solution. This widget is designed to be used within a Shiny web
application.

## Usage

``` r
solver(
  project,
  feature_targets = get_golem_config("prioritization_feature_targets"),
  feature_weights = get_golem_config("prioritization_feature_weights"),
  cost_weights = get_golem_config("prioritization_cost_weights"),
  zone_colors = get_golem_config("zone_colors"),
  width = NULL,
  height = NULL,
  id = NULL
)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- feature_targets:

  `numeric` vector of values representing different options for setting
  target values for features. Defaults to
  `get_golem_config("prioritization_feature_targets")`.

- feature_weights:

  `numeric` vector of values representing different options for setting
  target weights for features. Defaults to
  `get_golem_config("prioritization_feature_weights")`.

- cost_weights:

  `numeric` vector of values representing different options for setting
  weights for costs. Defaults to
  `get_golem_config("prioritization_cost_weights")`.

- zone_colors:

  `character` vector of colors for each zone. Defaults to
  `get_golem_config("zone_colors")`.

- width:

  `character` width of the displayed widget. Defaults to `NULL` such
  that the widget is automatically sized.

- height:

  `character` width of the displayed widget. Defaults to `NULL` such
  that the widget is automatically sized.

- id:

  `character` HTML identifier for the widget. Defaults to `NULL` since
  these identifiers are not used by Shiny.

## Server value

The widget sends the following values to the server:

- start:

  This is sent when the "Solve!" button is clicked and it sends a `list`
  that contains the settings for generating a prioritization. See
  documentation for the `settings` parameter of
  [`solve_prioritization()`](https://asoc-org.github.io/apscp/reference/solve_prioritization.md)
  for further details on the format of this value.

- stop:

  This is sent when the stop button is clicked.

## See also

Other functions for the solver widget:
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example application showing a solver widget
run_example_app("solver")
}
```
