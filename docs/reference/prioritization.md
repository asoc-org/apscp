# Generate a prioritization

Generate a prioritization using multi-objective optimization techniques.

## Usage

``` r
prioritization(project, settings, gap = 0.1, solver = "cbc", verbose = FALSE)
```

## Arguments

- project:

  \[new_project()\] object. These data are used to specify the
  underlying data for generating the solution.

- settings:

  \`list\` object with settings for generating a solution. See Settings
  format section for further details.

- gap:

  \`numeric\` value denoting optimality gap. Defaults to 0.1 (10% from
  optimality).

- solver:

  \`character\` value indicating the name of the software used for
  optimization. Acceptable values include \`"gurobi"\` or \`"cbc"\`.
  Defaults to \`"cbc"\`.

- verbose:

  \`logical\` value indicating if information should be displayed during
  optimization process. Defaults to \`FALSE\`.

## Value

A \`Prioritization\` class object. This is a \`list\` with a \`status\`
element that contains a \`numeric\` vector with values indicating the
zone for each planning unit, and a \`metrics\` element that contains
performance metrics.

## Settings format

The argument to \`settings\` must be a \`list\` with the following
elements.

- features:

  A \`data.frame\` with the theme and feature settings. These are used
  to specify the targets and weights considered for the features during
  optimization. Each row corresponds to a different feature, and it must
  have the following columns: \`"id"\`, \`"name"\`, \`"column"\`,
  \`"zone"\`, \`"target"\`, and \`"weight"\`. Note that target values
  must be expressed as a proportion (i.e., value between zero and one).

- locks:

  A \`data.frame\` with the settings to specify which locks are used to
  lock in planning units to a particular zone. Each row corresponds to a
  different lock, and it must have the following columns: \`"id"\`,
  \`"name"\`, \`"column"\`, and \`"zone"\`.

- costs:

  A \`data.frame\` with the cost settings. These are used to specify
  which costs are considered for each zone. Each row corresponds to a
  different cost, and it must have the following columns: \`"id"\`,
  \`"name"\`, \`"zone"\`, and \`"weight"\`.

- zones:

  A \`data.frame\` with settings for the multi-objective optimization.
  Each row corresponds to a different zone, and it must have the
  following columns: \`"name"\` and \`"weight"\`.

## Examples

``` r
# simulate data
project <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"
solver_settings <- simulate_prioritization_settings(project)
#> Error in simulate_prioritization_settings(project): could not find function "simulate_prioritization_settings"

# preview settings
print(solver_settings)
#> Error: object 'solver_settings' not found

# generate solution
sol <- prioritization(project, solver_settings)
#> Error in prioritization(project, solver_settings): could not find function "prioritization"

# preview solution
print(sol)
#> Error: object 'sol' not found
```
