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
project <- simulate_project()
settings <- simulate_prioritization_settings(project)

# preview settings
print(settings)
#> $features
#>                                      id      name column         zone target
#> 1  4c8f198b-ca24-4df2-a377-4b3febfb8fa2 Species 1 feat_1 Biodiversity    0.8
#> 2  4c8f198b-ca24-4df2-a377-4b3febfb8fa2 Species 1 feat_1      Tourism    0.0
#> 3  4c8f198b-ca24-4df2-a377-4b3febfb8fa2 Species 1 feat_1   Scientific    0.2
#> 4  20cc9826-dc27-495b-8e42-638897815c90 Species 2 feat_2 Biodiversity    0.0
#> 5  20cc9826-dc27-495b-8e42-638897815c90 Species 2 feat_2      Tourism    1.0
#> 6  20cc9826-dc27-495b-8e42-638897815c90 Species 2 feat_2   Scientific    0.0
#> 7  1000e37e-cdd5-4ff1-8424-730a278e9a17 Species 3 feat_3 Biodiversity    0.4
#> 8  1000e37e-cdd5-4ff1-8424-730a278e9a17 Species 3 feat_3      Tourism    0.0
#> 9  1000e37e-cdd5-4ff1-8424-730a278e9a17 Species 3 feat_3   Scientific    0.4
#> 10 55e42861-da1b-4608-8db5-7eb71d3c2132 Species 4 feat_4 Biodiversity    1.0
#> 11 55e42861-da1b-4608-8db5-7eb71d3c2132 Species 4 feat_4      Tourism    0.0
#> 12 55e42861-da1b-4608-8db5-7eb71d3c2132 Species 4 feat_4   Scientific    0.0
#> 13 50de4485-73a3-4ba1-b5f7-c45ab61192c4 Species 5 feat_5 Biodiversity    0.4
#> 14 50de4485-73a3-4ba1-b5f7-c45ab61192c4 Species 5 feat_5      Tourism    0.6
#> 15 50de4485-73a3-4ba1-b5f7-c45ab61192c4 Species 5 feat_5   Scientific    0.0
#>    weight
#> 1     0.5
#> 2     0.5
#> 3     1.0
#> 4     1.0
#> 5     0.5
#> 6     0.5
#> 7     1.0
#> 8     0.0
#> 9     0.5
#> 10    1.0
#> 11    0.0
#> 12    0.0
#> 13    0.5
#> 14    1.0
#> 15    0.0
#> 
#> $locks
#>                                     id            name column         zone
#> 1 26e48dc6-9800-450a-b934-43ad7dafc9f3 Protected areas  aspas Biodiversity
#> 2 80f206a3-7d0a-42f8-b7d9-de45ce0989a0     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 7210629b-ce8b-434e-b7ac-f39ced3b738c Tourism revenue   cost Tourism      1
#> 

# generate solution
sol <- solve_prioritization(project, settings)

# preview solution
print(sol)
#>  [1] 2 2 2 3 2 2 2 3 2 2 3 2 2 2 1 2 2 2 2 3 1 1 2 3 1 1 2 2 2 3 3 3 1 1 1 1 1 2
#> [39] 2 3 3 3 1 1 1 1 3 2 2 1 1 1 1 1 1 1 1 2 3 2 1 1 1 1 1 2 2 1 1 3 1 1 3 2 3 2
#> [77] 1 1 1 1 2 2 2 2 2 2 2 3 2 2
#> attr(,"class")
#> [1] "Prioritization"
#> attr(,"obj_value")
#>            Problem 1 Problem 2 Problem 3 Problem 4
#> solution_1 0.8543702   0.57479 0.3085766  10654.09
```
