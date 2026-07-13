# New feature

Create a new feature object.

## Usage

``` r
new_feature(name, layer, targets, id = uuid::UUIDgenerate())
```

## Arguments

- name:

  \`character\` value with the name.

- layer:

  \[new_layer()\] object used to store information for visualization.

- targets:

  \`numeric\` vector of initial targets for the feature. Each value
  should correspond to a particular zone and denote values should be
  specified as a proportion of the features total distribution (e.g., a
  value of 0.1 corresponds to 10 Note that \`zones\` and \`targets\`
  must have the same number of values.

- id:

  \`character\` value with unique identifier. Defaults to a random
  identifier (\[uuid::UUIDgenerate()\]).

## Value

A \`Feature\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md),
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md),
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md),
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md),
[`new_tileset()`](https://asoc-org.github.io/apscp/reference/new_tileset.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
x <- new_feature(
  name = "species 1",
  targets = c(0.1, 0.5),
  layer = new_layer(
    column = "feat_1",
    total = 500,
    dataset = create_dataset(sim_data),
    tile = create_tile(sim_data),
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)
#> Error in new_feature(name = "species 1", targets = c(0.1, 0.5), layer = new_layer(column = "feat_1",     total = 500, dataset = create_dataset(sim_data), tile = create_tile(sim_data),     legend = simulate_continuous_legend(), provenance = simulate_provenance(),     details = "extra info")): could not find function "new_feature"

# preview object
print(x)
#> Error: object 'x' not found
```
