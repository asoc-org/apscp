# Create solution from prioritization

Create a new solution based on spatial prioritization.

## Usage

``` r
create_solution_from_prioritization(
  name,
  prioritization,
  project,
  column = NULL,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  \`character\` value with the name.

- prioritization:

  \`list\` object generated with \[prioritization()\].

- project:

  \[new_project()\] object to which \`prioritization \`should be added.

- column:

  \`character\` value with column name used to store \`prioritization\`
  in the dataset that underpins \`project\`.

- id:

  \`character\` value with unique identifier. Defaults to a random
  identifier (\[uuid::UUIDgenerate()\]).

## Value

A \[new_solution()\] object.

## See also

Other method:
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate data
p <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"
s <- simulate_prioritization_settings(p)
#> Error in simulate_prioritization_settings(p): could not find function "simulate_prioritization_settings"
d <- prioritization(p, s, solver = "cbc", gap = 0.1)
#> Error in prioritization(p, s, solver = "cbc", gap = 0.1): could not find function "prioritization"

# generate solution
x <- create_solution_from_prioritization(
  name = "sol",
  prioritization = d,
  project = p
)
#> Error in create_solution_from_prioritization(name = "sol", prioritization = d,     project = p): could not find function "create_solution_from_prioritization"

# print solution
print(x)
#> Error: object 'x' not found
```
