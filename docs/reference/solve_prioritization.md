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
#> 1  dbba7b6e-68f8-4df6-a155-61600b1c4b89 Species 1 feat_1 Biodiversity    0.4
#> 2  dbba7b6e-68f8-4df6-a155-61600b1c4b89 Species 1 feat_1      Tourism    0.0
#> 3  dbba7b6e-68f8-4df6-a155-61600b1c4b89 Species 1 feat_1   Scientific    0.2
#> 4  4c28b4ec-f00e-4a18-bdfb-0bfdb4477aac Species 2 feat_2 Biodiversity    0.8
#> 5  4c28b4ec-f00e-4a18-bdfb-0bfdb4477aac Species 2 feat_2      Tourism    0.0
#> 6  4c28b4ec-f00e-4a18-bdfb-0bfdb4477aac Species 2 feat_2   Scientific    0.2
#> 7  c9ae0e83-adb6-464a-b0f4-1ba45ee1925c Species 3 feat_3 Biodiversity    0.0
#> 8  c9ae0e83-adb6-464a-b0f4-1ba45ee1925c Species 3 feat_3      Tourism    0.0
#> 9  c9ae0e83-adb6-464a-b0f4-1ba45ee1925c Species 3 feat_3   Scientific    0.0
#> 10 37c6b140-3a0e-4ae2-9424-35368c636507 Species 4 feat_4 Biodiversity    0.6
#> 11 37c6b140-3a0e-4ae2-9424-35368c636507 Species 4 feat_4      Tourism    0.0
#> 12 37c6b140-3a0e-4ae2-9424-35368c636507 Species 4 feat_4   Scientific    0.0
#> 13 1fbd1ed0-5654-4c5c-942a-cf00ba6b1093 Species 5 feat_5 Biodiversity    1.0
#> 14 1fbd1ed0-5654-4c5c-942a-cf00ba6b1093 Species 5 feat_5      Tourism    0.0
#> 15 1fbd1ed0-5654-4c5c-942a-cf00ba6b1093 Species 5 feat_5   Scientific    0.0
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
#> 1 dfcd23ec-dd84-4d87-879c-4ad1b72129a9 Protected areas  aspas Biodiversity
#> 2 f8adfe32-24f7-4e7d-afb3-dae76970d740     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 fd149ef8-34ac-47f6-b04f-f1ef839db922 Tourism revenue   cost Tourism      1
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
