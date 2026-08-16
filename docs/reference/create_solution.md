# Create solution

Create a \[new_solution()\] object.

## Usage

``` r
create_solution(
  name,
  dataset,
  column,
  legend,
  provenance,
  tile = NULL,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  \`character\` value with name.

- dataset:

  \[new_dataset() object that has a column with the solution.

- column:

  \`character\` value with column name in \`dataset\` that has the
  values.

- legend:

  \[new_categorical_legend()\] or \[new_continuous \_legend()\] object.

- provenance:

  \[new_provenance()\] object.

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
[`create_dataset()`](https://asoc-org.github.io/apscp/reference/create_dataset.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_optimized_solution()`](https://asoc-org.github.io/apscp/reference/create_optimized_solution.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile()`](https://asoc-org.github.io/apscp/reference/create_tile.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)
