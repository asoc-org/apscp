# New solution

Create a new solution object.

## Usage

``` r
new_solution(name, layer, settings, metrics, id = uuid::UUIDgenerate())
```

## Arguments

- name:

  \`character\` value with the name.

- layer:

  \[new_layer()\] object used to store information for visualization.

- settings:

  \`list\` of settings used to generate the solution.

- metrics:

  \`list\` with evaluation metrics for the solution.

- id:

  \`character\` value with unique identifier. Defaults to a random
  identifier (\[uuid::UUIDgenerate()\]).

## Value

A \`Solution\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
[`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md),
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md),
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# simulate spatial data
sim_project <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"

# create object
x <- new_solution(
  name = "solution",
  layer = new_layer(
    column = "solution",
    total = 500,
    dataset = create_dataset_from_sf(sim_project$dataset$get_sf()),
    tile = create_tile_from_sf(sim_project$dataset$get_sf()),
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  ),
  settings = simulate_prioritization_settings(sim_project),
  metrics = simulate_prioritization_metrics(sim_project)
)
#> Error in new_solution(name = "solution", layer = new_layer(column = "solution",     total = 500, dataset = create_dataset_from_sf(sim_project$dataset$get_sf()),     tile = create_tile_from_sf(sim_project$dataset$get_sf()),     legend = simulate_solution_legend(), provenance = simulate_provenance(),     details = "extra info"), settings = simulate_prioritization_settings(sim_project),     metrics = simulate_prioritization_metrics(sim_project)): could not find function "new_solution"

# preview object
print(x)
#> Error: object 'x' not found
```
