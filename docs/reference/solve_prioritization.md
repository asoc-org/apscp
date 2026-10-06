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
#> 1  91945ac3-3867-4477-8219-8585759e75e9 Species 1 feat_1 Biodiversity    0.4
#> 2  91945ac3-3867-4477-8219-8585759e75e9 Species 1 feat_1      Tourism    0.0
#> 3  91945ac3-3867-4477-8219-8585759e75e9 Species 1 feat_1   Scientific    0.2
#> 4  8e69686e-c59a-4e00-a845-5dd980a74a90 Species 2 feat_2 Biodiversity    0.8
#> 5  8e69686e-c59a-4e00-a845-5dd980a74a90 Species 2 feat_2      Tourism    0.0
#> 6  8e69686e-c59a-4e00-a845-5dd980a74a90 Species 2 feat_2   Scientific    0.2
#> 7  142a43ae-f502-4f5d-b657-d7d6602baf55 Species 3 feat_3 Biodiversity    0.0
#> 8  142a43ae-f502-4f5d-b657-d7d6602baf55 Species 3 feat_3      Tourism    0.0
#> 9  142a43ae-f502-4f5d-b657-d7d6602baf55 Species 3 feat_3   Scientific    0.0
#> 10 178333f7-5dbe-4f4f-aeb2-61ba01540980 Species 4 feat_4 Biodiversity    0.6
#> 11 178333f7-5dbe-4f4f-aeb2-61ba01540980 Species 4 feat_4      Tourism    0.0
#> 12 178333f7-5dbe-4f4f-aeb2-61ba01540980 Species 4 feat_4   Scientific    0.0
#> 13 8bb983f1-fa09-4086-ad93-ef0203839611 Species 5 feat_5 Biodiversity    1.0
#> 14 8bb983f1-fa09-4086-ad93-ef0203839611 Species 5 feat_5      Tourism    0.0
#> 15 8bb983f1-fa09-4086-ad93-ef0203839611 Species 5 feat_5   Scientific    0.0
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
#> 1 b4de52f4-8db8-4273-b7a9-a710b30ef52a Protected areas  aspas Biodiversity
#> 2 ba451471-cb71-4850-a632-9ea7f99381f9     Field camps  camps   Scientific
#>   priority
#> 1        2
#> 2        1
#> 
#> $costs
#>                                     id            name column    zone weight
#> 1 cd89b503-dec3-4f48-819b-9f54d85e9ac2 Tourism revenue   cost Tourism      1
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
