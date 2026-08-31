# Create optimized solution

Create a new solution based on spatial prioritization techniques.

## Usage

``` r
create_optimized_solution(
  name,
  project,
  settings,
  gap = 0.1,
  solver = "cbc",
  verbose = FALSE,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  \`character\` value with the name.

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
[`create_tile_from_dataset()`](https://asoc-org.github.io/apscp/reference/create_tile_from_dataset.md),
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

# generate solution
x <- prioritization(p, s, solver = "cbc", gap = 0.1)
#> Error in prioritization(p, s, solver = "cbc", gap = 0.1): could not find function "prioritization"

# print solution
print(x)
#> Error: object 'x' not found
```
