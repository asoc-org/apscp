# New theme

Create a new theme object.

## Usage

``` r
new_theme(name, features)
```

## Arguments

- name:

  \`character\` value with name.

- features:

  \[new_feature()\] object or \`list\` of such objects.

## Value

A \`Theme\` object.

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
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md),
[`new_tileset()`](https://asoc-org.github.io/apscp/reference/new_tileset.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# prepare data
dataset <- create_dataset(sim_data)
#> Error in create_dataset(sim_data): could not find function "create_dataset"
tile <- create_tile(sim_data)
#> Error in create_tile(sim_data): could not find function "create_tile"

# create object
x <- new_theme(
  "species",
  list(
    new_feature(
      name = "f1",
      targets = c(0.1, 0.5),
      layer = new_layer(
        column = "feat_1",
        total = 500,
        dataset = dataset,
        tile = tile,
        legend = simulate_continuous_legend(),
        provenance = simulate_provenance(),
        details = "extra info"
      )
    ),
    new_feature(
      name = "f2",
      targets = c(0.2, 0.9),
      layer = new_layer(
        column = "feat_2",
        total = 500,
        dataset = dataset,
        tile = tile,
        legend = simulate_continuous_legend(),
        provenance = simulate_provenance(),
        details = "extra info 2"
      )
    )
  )
)
#> Error in new_theme("species", list(new_feature(name = "f1", targets = c(0.1,     0.5), layer = new_layer(column = "feat_1", total = 500, dataset = dataset,     tile = tile, legend = simulate_continuous_legend(), provenance = simulate_provenance(),     details = "extra info")), new_feature(name = "f2", targets = c(0.2,     0.9), layer = new_layer(column = "feat_2", total = 500, dataset = dataset,     tile = tile, legend = simulate_continuous_legend(), provenance = simulate_provenance(),     details = "extra info 2")))): could not find function "new_theme"

# preview object
print(x)
#> Error: object 'x' not found
```
