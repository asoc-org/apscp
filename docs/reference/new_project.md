# New project

Create a new project object.

## Usage

``` r
new_project(
  zones,
  bbox,
  dataset,
  tiles,
  costs,
  features,
  locks,
  solutions = list(),
  name = "Project",
  author_name = "Unknown",
  author_email = "Unknown",
  version = NULL,
  bearing = 0,
  zoom = 0
)
```

## Arguments

- zones:

  `character` vector of zone names.

- bbox:

  [`sf::st_bbox()`](https://r-spatial.github.io/sf/reference/st_bbox.html)
  object.

- dataset:

  [`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md)
  object.

- tiles:

  `list` of
  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  objects.

- costs:

  `list` of
  [`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md)
  objects.

- features:

  `list` of
  [`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md)
  objects.

- locks:

  `list` of
  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md)
  objects.

- solutions:

  `list` of
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  objects. Defaults to an empty list().

- name:

  `character` name of the project. Defaults to `"Project"`.

- author_name:

  `character` name of the project author. Defaults to `"Unknown"`.

- author_email:

  `character` email of the project author. Defaults to `"Unknown"`.

- version:

  `character` version of package used to create the project. Defaults to
  `NULL`, such that the current package version is used.

- bearing:

  `numeric` value denoting the initial map rotation. Defaults to 0.

- zoom:

  `numeric` value denoting the initial map zoom. Defaults to 0.

## Value

A new `Project` object.

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
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md),
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_solution_legend()`](https://asoc-org.github.io/apscp/reference/new_solution_legend.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# prepare data
dataset <- create_dataset_from_sf(sim_data)
tile <- create_tile_from_sf(sim_data)

# create cost
cost <- new_cost(
  name = "cost",
  zone = "Science",
  weight = 0.1,
  layer = new_layer(
    column = "feat_1",
    total = 500,
    dataset = dataset,
    tile = tile,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance()
  )
)

# create lock
lock <- new_lock(
  name = "lock",
  zone = "Biodiversity",
  layer = new_layer(
    column = "locked_in",
    total = 30,
    dataset = dataset,
    tile = tile,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance()
  )
)

# create features
features <- list(
  new_feature(
    name = "f1",
    zone_targets = c(0.1, 0.2, 0.5),
    zone_weights = c(0.2, 0.1, 0.3),
    zone_helds = c(0, 0.1, 0),
    themes = list(new_theme(zone = "Biodiversity", name = "Penguins")),
    layer = new_layer(
      column = "feat_1",
      total = 500,
      dataset = dataset,
      tile = tile,
      legend = simulate_continuous_legend(),
      provenance = simulate_provenance()
    )
  ),
  new_feature(
    name = "f2",
    zone_targets = c(0.01, 0.04, 0.9),
    zone_weights = c(0.8, 0.1, 0.05),
    zone_helds = c(0.2, 0, 0),
    themes = list(
      new_theme(zone = "Biodiversity", name = "Penguins"),
      new_theme(zone = "Tourism", name = "Charismatic species")
    ),
    layer = new_layer(
      column = "feat_2",
      total = 200,
      dataset = dataset,
      tile = tile,
      legend = simulate_continuous_legend(),
      provenance = simulate_provenance()
    )
  )
)

# create project
x <- new_project(
  zones = c("Biodiversity", "Tourism", "Science"),
  bbox = sf::st_bbox(sim_data),
  dataset = dataset,
  tiles = list(tile),
  costs = list(cost),
  locks = list(lock),
  features = features
)

# preview object
print(x)
#> A <Project> object.
```
