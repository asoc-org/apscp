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
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_dataset()`](https://asoc-org.github.io/apscp/reference/create_tile_from_dataset.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# create data
d <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create solution
x <- new_solution(
  name = "solution",
  layer = new_layer(
    dataset = create_dataset_from_sf(d),
    tile = create_tile_from_sf(d, verbose = FALSE),
    column = "solution",
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    total = 500,
    details = "extra info"
  )
)
#> Error in new_solution(name = "solution", layer = new_layer(dataset = create_dataset_from_sf(d),     tile = create_tile_from_sf(d, verbose = FALSE), column = "solution",     legend = simulate_solution_legend(), provenance = simulate_provenance(),     total = 500, details = "extra info")): could not find function "new_solution"
```
