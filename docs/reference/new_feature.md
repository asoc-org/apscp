# New feature

Create a new feature object.

## Usage

``` r
new_feature(
  name,
  layer,
  zone_targets,
  zone_weights,
  zone_helds,
  themes,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  \`character\` value with the name.

- layer:

  \[new_layer()\] object used to store information for visualization.

- zone_targets:

  \`numeric\` vector with initial target values for representing the
  feature within each zone associated with the project. These value
  should be specified as a proportion of the features total distribution
  (e.g., a value of 0.1 corresponds to 10 a value of 1.

- zone_weights:

  \`numeric\` vector with initial weight values for acheiving the
  tagrgets for each zone associated with the project. Each of these
  values should range between 0 and 1. Note that the sum of these values
  does not have any constraints (unlike \`zone_targets\`).

- zone_helds:

  \`numeric\` vector with the proportion of each feature's distribution
  held within planning units that are locked in. Each of these values
  should range between 0 and 1. Note that the sum of these values does
  not have any constraints (unlike \`zone_targets\`).

- themes:

  \`list\` of \[new_theme()\] objects indicating the themes to which the
  feature belongs.

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
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
x <- new_feature(
  name = "species 1",
  zone_targets = c(0.1, 0.2, 0.3),
  zone_weights = c(0.5, 1, 0.7),
  zone_helds = c(0.2, 0.3, 0.1),
  themes = list(new_theme(zone = "Biodiversity", name = "Penguins")),
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
#> Error in new_feature(name = "species 1", zone_targets = c(0.1, 0.2, 0.3),     zone_weights = c(0.5, 1, 0.7), zone_helds = c(0.2, 0.3, 0.1),     themes = list(new_theme(zone = "Biodiversity", name = "Penguins")),     layer = new_layer(column = "feat_1", total = 500, dataset = create_dataset(sim_data),         tile = create_tile(sim_data), legend = simulate_continuous_legend(),         provenance = simulate_provenance(), details = "extra info")): could not find function "new_feature"

# preview object
print(x)
#> Error: object 'x' not found
```
