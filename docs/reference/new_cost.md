# New cost

Create a new cost object.

## Usage

``` r
new_cost(name, layer, zone, weight, id = uuid::UUIDgenerate())
```

## Arguments

- name:

  \`character\` value with the name.

- layer:

  \[new_layer()\] object used to store information for visualization.

- zone:

  \`character\` name of zone to which this cost pertains. During
  optimization, planning units that are not allocated to this zone
  accrue a penalty based on these cost data. Note that \`zone\` must
  have a value that corresponds to one of the zone names associated with
  the \[new_project()\] to which this object belongs.

- weight:

  \`numeric\` value denoting the relative importance of the cost.

- id:

  \`character\` value with unique identifier. Defaults to a random
  identifier (\[uuid::UUIDgenerate()\]).

## Value

A \`Cost\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
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

# create object
x <- new_cost(
  name = "cost",
  weight = 0.3,
  zone = "tourism",
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
#> A <Cost> object.
```
