# Generate a prioritization

Generate a prioritization using multi-objective optimization techniques.

## Usage

``` r
solve_prioritization(
  project,
  settings,
  gap = 0.1,
  solver = "cbc",
  time_limit = 500,
  gurobi_server = NULL,
  verbose = FALSE
)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object. These data are used to specify the underlying data for
  generating the solution.

- settings:

  `list` object with settings for generating a solution. See Settings
  format section for further details.

- gap:

  `numeric` value denoting optimality gap. Defaults to 0.1 (10% from
  optimality).

- solver:

  `character` value indicating the name of the software used for
  optimization. Acceptable values include `"gurobi"` or `"cbc"`.
  Defaults to `"cbc"`.

- time_limit:

  `numeric` value indicating the number of seconds permitted for running
  optimization. Defaults to 500.

- gurobi_server:

  `character` value providing the HTTP address for the Gurobi compute
  server. Defaults to `NULL` such that no compute server is used.

- verbose:

  `logical` value indicating if information should be displayed during
  optimization process. Defaults to `FALSE`.

## Value

A `numeric` vector with values indicating the zone for each planning
unit. For example, if the prioritization has three zones, then elements
with values ranging between 1 and 3 correspond to planning units that
are locked to the three zones (respectively). Additionally, elements
with values ranging between 4 and 6 correspond to planning units that
are selected as a priority for the three zones (respectively).

## Settings format

The argument to `settings` must be a `list` with the following elements.

- `"features`":

  A `data.frame` with the theme and feature settings. These are used to
  specify the targets and weights considered for the features during
  optimization. Each row corresponds to a different feature, and it must
  have the following columns: `"id"`, `"name"`, `"column"`, `"zone"`,
  `"target"`, and `"weight"`. Note that target values must be expressed
  as a proportion (i.e., value between zero and one).

- `"locks"`:

  A `data.frame` with the settings to specify which locks are used to
  lock in planning units to a particular zone. Each row corresponds to a
  different lock, and it must have the following columns: `"id"`,
  `"name"`, `"column"`, `"zone"`, and `"priority"`.

- `"costs"`:

  A `data.frame` with the cost settings. These are used to specify which
  costs are considered for each zone. Each row corresponds to a
  different cost, and it must have the following columns: `"id"`,
  `"name"`, `"zone"`, and `"weight"`.

- `"zones"`:

  A `data.frame` with settings for the multi-objective optimization.
  Each row corresponds to a different zone, and it must have the
  following columns: `"name"` and `"weight"`.

## See also

Other functions for prioritization:
[`eval_prioritization()`](https://asoc-org.github.io/apscp/reference/eval_prioritization.md)

## Examples

``` r
# simulate data
sim_project <- simulate_project()
sim_settings <- simulate_prioritization_settings(sim_project)

# preview settings
print(sim_settings)
#> $features
#>                                      id      name column         zone target
#> 1  1f74cc26-b350-479f-9b7f-20e4c5b29352 Species 1 feat_1 Biodiversity    0.4
#> 2  1f74cc26-b350-479f-9b7f-20e4c5b29352 Species 1 feat_1      Tourism    0.0
#> 3  1f74cc26-b350-479f-9b7f-20e4c5b29352 Species 1 feat_1   Scientific    0.2
#> 4  0d6d7971-2c25-46a3-b9d0-c97a8e3475d6 Species 2 feat_2 Biodiversity    0.8
#> 5  0d6d7971-2c25-46a3-b9d0-c97a8e3475d6 Species 2 feat_2      Tourism    0.0
#> 6  0d6d7971-2c25-46a3-b9d0-c97a8e3475d6 Species 2 feat_2   Scientific    0.2
#> 7  42066ee9-e9a0-4c00-82a3-613623e8c609 Species 3 feat_3 Biodiversity    0.0
#> 8  42066ee9-e9a0-4c00-82a3-613623e8c609 Species 3 feat_3      Tourism    0.0
#> 9  42066ee9-e9a0-4c00-82a3-613623e8c609 Species 3 feat_3   Scientific    0.0
#> 10 9ca7eb46-4789-48d5-be32-8ee2490b416c Species 4 feat_4 Biodiversity    0.6
#> 11 9ca7eb46-4789-48d5-be32-8ee2490b416c Species 4 feat_4      Tourism    0.0
#> 12 9ca7eb46-4789-48d5-be32-8ee2490b416c Species 4 feat_4   Scientific    0.0
#> 13 c9e0430d-ff40-4de6-8535-25383bccb193 Species 5 feat_5 Biodiversity    1.0
#> 14 c9e0430d-ff40-4de6-8535-25383bccb193 Species 5 feat_5      Tourism    0.0
#> 15 c9e0430d-ff40-4de6-8535-25383bccb193 Species 5 feat_5   Scientific    0.0
#>    weight
#> 1     0.0
#> 2     1.0
#> 3     0.5
#> 4     0.5
#> 5     0.0
#> 6     1.0
#> 7     0.5
#> 8     1.0
#> 9     0.0
#> 10    0.0
#> 11    0.0
#> 12    1.0
#> 13    1.0
#> 14    0.5
#> 15    1.0
#> 
#> $locks
#>                                     id            name column         zone
#> 1 1e6aa942-a3ed-48ef-a674-5e0ad8558da1 Protected areas  aspas Biodiversity
#> 2 f524cd61-019e-436d-814a-c7a619bd354e     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 50ef6956-33be-4d93-a69e-9b43f8efafe5 Tourism revenue   cost Tourism      1
#> 

# solve prioritization
sol <- solve_prioritization(sim_project, sim_settings)

# preview solution
print(sol)
#>  [1] NA NA NA  3 NA NA  6  3  4  4  3 NA NA NA  1 NA NA NA NA NA  1  1 NA  3 NA
#> [26]  1 NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA  1 NA NA NA  3 NA NA  1
#> [51] NA  1 NA NA NA NA NA NA  3 NA NA  6  1 NA NA NA NA  1 NA  3  6 NA  3 NA  3
#> [76] NA  6  6 NA  1 NA NA NA  6  6  6  4  3 NA NA
#> attr(,"class")
#> [1] "Prioritization"
#> attr(,"obj_value")
#>            Problem 1 Problem 2 Problem 3
#> solution_1  1.262683         0  6319.059
```
