# New lock

Create a new lock object.

## Usage

``` r
new_lock(name, layer, zone, id = uuid::UUIDgenerate())
```

## Arguments

- name:

  `character` value with the name.

- layer:

  [`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md)
  object used to store information for visualization.

- zone:

  `character` name of zone to which this lock pertains. During
  optimization, planning units are forcibly allocated to this zone. Note
  that `zone` must have a value that corresponds to one of the zone
  names associated with the
  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  to which this object belongs.

- id:

  `character` value with unique identifier. Defaults to a random
  identifier
  ([`uuid::UUIDgenerate()`](https://rdrr.io/pkg/uuid/man/UUIDgenerate.html)).

## Value

A `Lock` object.

## See also

Other functions for defining classes:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
[`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md),
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
x <- new_lock(
  name = "lock",
  zone = "scientific",
  layer = new_layer(
    column = "locked_in",
    total = 500,
    dataset = create_dataset_from_sf(sim_data),
    tile = create_tile_from_sf(sim_data),
    legend = simulate_binary_legend(),
    provenance = simulate_provenance(),
    details = "extra info"
  )
)

# preview object
print(x)
#> A <Lock> object.
#> • name: "lock"
#> • zone: "scientific"
#> • id: "7fde3f53-e964-4560-aaa0-ff66d19fe782"
#> • layer: <Layer> object
```
