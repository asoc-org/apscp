# New Layer

Create a new layer object.

## Usage

``` r
new_layer(
  column,
  total,
  dataset,
  tile,
  legend,
  provenance,
  visible = FALSE,
  details = NULL
)
```

## Arguments

- column:

  \`character\` value indicating the column in \`dataset\` and \`tile\`
  that has the data for this layer.

- total:

  \`numeric\` value indicating the total sum of values in the layer.

- dataset:

  \[new_dataset()\] object with spatial data.

- tile:

  \[new_tile()\] object.

- legend:

  \[new_categorical_legend()\] or \[new_continuous \_legend()\] object.

- provenance:

  \[new_provenance()\] object.

- visible:

  \`logical\` value indicating if the layer should be visible by
  default? Defaults to \`FALSE\`.

- details:

  \`character\` value with additional details for the layer. Defaults to
  \`NULL\`.

## Value

A \`Layer\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md),
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md),
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
x <- new_layer(
  column = "feat_1",
  total = 500,
  dataset = create_dataset_from_sf(sim_data),
  tile = create_tile_from_sf(sim_data),
  legend = simulate_continuous_legend(),
  provenance = simulate_provenance(),
  visible = TRUE,
  details = "extra info"
)
#> Error in new_layer(column = "feat_1", total = 500, dataset = create_dataset_from_sf(sim_data),     tile = create_tile_from_sf(sim_data), legend = simulate_continuous_legend(),     provenance = simulate_provenance(), visible = TRUE, details = "extra info"): could not find function "new_layer"

# preview object
print(x)
#> Error: object 'x' not found
```
