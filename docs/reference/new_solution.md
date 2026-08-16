# New solution

Create a new solution object.

## Usage

``` r
new_solution(name, layer, id = uuid::UUIDgenerate())
```

## Arguments

- name:

  \`character\` value with the name.

- layer:

  \[new_layer()\] object used to store information for visualization.

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
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
x <- new_solution(
  name = "solution",
  layer = new_layer(
    column = "solution",
    total = 500,
    dataset = create_dataset(sim_data),
    tile = create_tile(sim_data),
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)
#> Error in new_solution(name = "solution", layer = new_layer(column = "solution",     total = 500, dataset = create_dataset(sim_data), tile = create_tile(sim_data),     legend = simulate_solution_legend(), provenance = simulate_provenance(),     details = "extra info")): could not find function "new_solution"

# preview object
print(x)
#> Error: object 'x' not found
```
