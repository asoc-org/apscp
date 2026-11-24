# New product

Create a new product object.

## Usage

``` r
new_product(name, layer, id = uuid::UUIDgenerate())
```

## Arguments

- name:

  `character` value with the name.

- layer:

  [`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md)
  object used to store information for visualization.

- id:

  `character` value with unique identifier. Defaults to a random
  identifier
  ([`uuid::UUIDgenerate()`](https://rdrr.io/pkg/uuid/man/UUIDgenerate.html)).

## Value

A `Product` object.

## See also

Other functions for defining classes:
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
[`new_solution_legend()`](https://asoc-org.github.io/apscp/reference/new_solution_legend.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# create object
x <- new_product(
  name = "prod",
  layer = new_layer(
    column = "solution",
    total = 500,
    dataset = sim_project$dataset,
    tile = sim_project$tiles[[1]],
    legend = simulate_solution_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)

# preview object
print(x)
#> A <Product> object.
#> • name: "prod"
#> • id: "78361cd3-e0d0-47a2-bb49-ae4ea62cce89"
#> • layer: <Layer> object
```
