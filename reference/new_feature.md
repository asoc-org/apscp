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

  `character` value with the name.

- layer:

  [`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md)
  object used to store information for visualization.

- zone_targets:

  `numeric` vector with initial target values for representing the
  feature within each zone associated with the project. These value
  should be specified as a proportion of the features total distribution
  (e.g., a value of 0.1 corresponds to 10%) and the sum of these values
  should not exceed a value of 1.

- zone_weights:

  `numeric` vector with initial weight values for achieving the targets
  for each zone associated with the project. Each of these values should
  range between 0 and 1. Note that the sum of these values does not have
  any constraints (unlike `zone_targets`).

- zone_helds:

  `numeric` vector with the proportion of each feature's distribution
  held within planning units that are locked in. Each of these values
  should range between 0 and 1. Note that the sum of these values does
  not have any constraints (unlike `zone_targets`).

- themes:

  `list` of
  [`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md)
  objects indicating the themes to which the feature belongs.

- id:

  `character` value with unique identifier. Defaults to a random
  identifier
  ([`uuid::UUIDgenerate()`](https://rdrr.io/pkg/uuid/man/UUIDgenerate.html)).

## Value

A `Feature` object.

## See also

Other functions for defining classes:
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
[`new_solution_legend()`](https://asoc-org.github.io/apscp/reference/new_solution_legend.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

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
    dataset = create_dataset_from_sf(sim_data),
    tile = create_tile_from_sf(sim_data),
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)

# preview object
print(x)
#> A <Feature> object.
#> • name: "species 1"
#> • id: "96c439d0-ccce-43ce-84b9-746ff7076f6e"
#> • zone_targets: 0.1, 0.2, and 0.3
#> • zone_weights: 0.5, 1, and 0.7
#> • zone_helds: 0.2, 0.3, and 0.1
#> • themes: <list> object
#> • layer: <Layer> object
```
