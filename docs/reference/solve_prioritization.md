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
unit.

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
  `"name"`, `"column"`, and `"zone"`.

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
#> 1  22fb4950-74eb-4e71-9071-d143ab6db245 Species 1 feat_1 Biodiversity    0.4
#> 2  22fb4950-74eb-4e71-9071-d143ab6db245 Species 1 feat_1      Tourism    0.0
#> 3  22fb4950-74eb-4e71-9071-d143ab6db245 Species 1 feat_1   Scientific    0.2
#> 4  b24a155d-4881-41db-ae32-d5bf539e13ed Species 2 feat_2 Biodiversity    0.8
#> 5  b24a155d-4881-41db-ae32-d5bf539e13ed Species 2 feat_2      Tourism    0.0
#> 6  b24a155d-4881-41db-ae32-d5bf539e13ed Species 2 feat_2   Scientific    0.2
#> 7  a609525e-607f-41f7-b0fa-8670a21d4a27 Species 3 feat_3 Biodiversity    0.0
#> 8  a609525e-607f-41f7-b0fa-8670a21d4a27 Species 3 feat_3      Tourism    0.0
#> 9  a609525e-607f-41f7-b0fa-8670a21d4a27 Species 3 feat_3   Scientific    0.0
#> 10 8b0e7ab8-57b7-488d-99ae-8c6bb2129da4 Species 4 feat_4 Biodiversity    0.6
#> 11 8b0e7ab8-57b7-488d-99ae-8c6bb2129da4 Species 4 feat_4      Tourism    0.0
#> 12 8b0e7ab8-57b7-488d-99ae-8c6bb2129da4 Species 4 feat_4   Scientific    0.0
#> 13 0efd6ee9-b7b2-4fb4-a760-c3fa6c196c9d Species 5 feat_5 Biodiversity    1.0
#> 14 0efd6ee9-b7b2-4fb4-a760-c3fa6c196c9d Species 5 feat_5      Tourism    0.0
#> 15 0efd6ee9-b7b2-4fb4-a760-c3fa6c196c9d Species 5 feat_5   Scientific    0.0
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
#> 1 ffc1d628-e2a3-456d-a5db-475471aae583 Protected areas  aspas Biodiversity
#> 2 ab38fdd6-2c64-4f51-bcd7-8be02261d633     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 ea5348c6-07dc-48ae-8956-b9c7a0b21d03 Tourism revenue   cost Tourism      1
#> 

# solve prioritization
sol <- solve_prioritization(sim_project, sim_settings)

# preview solution
print(sol)
#>  [1] NA NA NA  3 NA NA  3  3  1  1  3 NA NA NA  1 NA NA NA NA NA  1  1 NA  3 NA
#> [26]  1 NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA NA  1 NA NA NA  3 NA NA  1
#> [51] NA  1 NA NA NA NA NA NA  3 NA NA  3  1 NA NA NA NA  1 NA  3  3 NA  3 NA  3
#> [76] NA  3  3 NA  1 NA NA NA  3  3  3  1  3 NA NA
#> attr(,"class")
#> [1] "Prioritization"
#> attr(,"obj_value")
#>            Problem 1 Problem 2 Problem 3
#> solution_1  1.262683         0  6319.059
#> attr(,"locked")
#>  [1] 0 0 0 3 0 0 0 3 0 0 3 0 0 0 1 0 0 0 0 0 1 1 0 3 0 1 0 0 0 0 0 0 0 0 0 0 0 0
#> [39] 0 0 0 0 1 0 0 0 3 0 0 1 0 1 0 0 0 0 0 0 3 0 0 0 1 0 0 0 0 1 0 3 0 0 3 0 3 0
#> [77] 0 0 0 1 0 0 0 0 0 0 0 3 0 0
```
