# Create solution

Create a \[new_solution()\] object.

## Usage

``` r
create_solution(
  name,
  project,
  column,
  legend,
  provenance,
  settings,
  metrics,
  tile = NULL,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  \`character\` value with name.

- project:

  \[new_project()\] object that has a column with the solution.

- column:

  \`character\` value with column name in \`project\$dataset\` that has
  the values.

- legend:

  \[new_categorical_legend()\] or \[new_continuous \_legend()\] object.

- provenance:

  \[new_provenance()\] object.

- settings:

  \`list\` of settings used to generate the solution.

- metrics:

  \`list\` with evaluation metrics for the solution.

- tile:

  \[new_tile()\] object tile information for the solution. Defaults to
  \`NULL\` such that a \[new_tile()\] object is automatically created.

- id:

  \`character\` value with unique identifier. Defaults to a random
  identifier (\[uuid::UUIDgenerate()\]).

## Value

A \`Solution\` object.

## See also

Other method:
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
# create data
project <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"

# create solution
x <- create_solution(
  name = "user solution",
  project = project,
  column = "solution",
  legend = simulate_solution_legend(),
  provenance = simulate_provenance(),
  settings = simulate_prioritization_settings(project),
  metrics = simulate_prioritization_metrics(project)
)
#> Error in create_solution(name = "user solution", project = project, column = "solution",     legend = simulate_solution_legend(), provenance = simulate_provenance(),     settings = simulate_prioritization_settings(project), metrics = simulate_prioritization_metrics(project)): could not find function "create_solution"
```
