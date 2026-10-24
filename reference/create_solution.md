# Create solution

Create a
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
object.

## Usage

``` r
create_solution(
  name,
  project,
  column,
  legend,
  provenance,
  settings,
  tile = NULL,
  metrics = NULL,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  `character` value with name.

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object that has a column with the solution.

- column:

  `character` value with column name in `project$dataset` that has the
  values.

- legend:

  [`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md)
  or
  [`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md)
  object.

- provenance:

  [`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md)
  object.

- settings:

  `list` of settings used to generate the solution.

- tile:

  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  object tile information for the solution. Defaults to `NULL` such that
  a
  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  object is automatically created.

- metrics:

  `list` with evaluation metrics for the solution. Defaults to `NULL`
  such that metrics are calculated automatically.

- id:

  `character` value with unique identifier. Defaults to a random
  identifier
  ([`uuid::UUIDgenerate()`](https://rdrr.io/pkg/uuid/man/UUIDgenerate.html)).

## Value

A `Solution` object.

## See also

Other functions for calling class methods:
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# create solution
x <- create_solution(
  name = "user solution",
  project = sim_project,
  column = "solution",
  legend = simulate_solution_legend(),
  provenance = simulate_provenance(),
  settings = simulate_prioritization_settings(sim_project)
)

# print solution
print(x)
#> A <Solution> object.
```
