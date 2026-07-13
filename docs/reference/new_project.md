# New project

Create a new project object.

## Usage

``` r
new_project(
  zones,
  dataset,
  tileset,
  costs,
  themes,
  locks,
  bbox,
  solutions = list(),
  name = "Project",
  author_name = "Unknown",
  author_email = "Unknown"
)
```

## Arguments

- zones:

  \`character\` vector of zone names.

- dataset:

  \[new_dataset()\] object.

- tileset:

  \[new_tileset()\] objects.

- costs:

  \`list\` of \[new_cost()\] objects.

- themes:

  \`list\` of \[new_themes()\] objects.

- locks:

  \`list\` of \[new_locks()\] objects.

- bbox:

  \[sf::st_bbox()\] object.

- solutions:

  \`list\` of \[new_solution()\] objects. Defaults to an empty list().

- name:

  \`character\` name of the project. Defaults to \`"Project"\`.

- author_name:

  \`character\` name of the project author. Defaults to \`"Unknown"\`.

- author_email:

  \`character\` email of the project author. Defaults to \`"Unknown"\`.

## Value

A new \`Project\` object.

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

# prepare data
dataset <- create_dataset(sim_data)
#> Error in create_dataset(sim_data): could not find function "create_dataset"
tileset <- create_tileset(sim_data)
#> Error in create_tileset(sim_data): could not find function "create_tileset"
tile <- tileset$tiles[[1]]
#> Error: object 'tileset' not found

# create cost
cost <- new_cost(
  name = "cost",
  layer = new_layer(
    column = "feat_1",
    total = 500,
    dataset = dataset,
    tile = tile,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance()
  )
)
#> Error in new_cost(name = "cost", layer = new_layer(column = "feat_1",     total = 500, dataset = dataset, tile = tile, legend = simulate_continuous_legend(),     provenance = simulate_provenance())): could not find function "new_cost"

# create lock
lock <- new_lock(
  name = "lock",
  layer = new_layer(
    column = "locked_in",
    total = 30,
    dataset = dataset,
    tile = tile,
    legend = simulate_continuous_legend(),
    provenance = simulate_provenance()
  )
)
#> Error in new_lock(name = "lock", layer = new_layer(column = "locked_in",     total = 30, dataset = dataset, tile = tile, legend = simulate_continuous_legend(),     provenance = simulate_provenance())): could not find function "new_lock"

# create theme
theme <- new_theme(
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
        provenance = simulate_provenance()
      )
    ),
    new_feature(
      name = "f2",
      targets = c(0.2, 0.9),
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
)
#> Error in new_theme("species", list(new_feature(name = "f1", targets = c(0.1,     0.5), layer = new_layer(column = "feat_1", total = 500, dataset = dataset,     tile = tile, legend = simulate_continuous_legend(), provenance = simulate_provenance())),     new_feature(name = "f2", targets = c(0.2, 0.9), layer = new_layer(column = "feat_2",         total = 200, dataset = dataset, tile = tile, legend = simulate_continuous_legend(),         provenance = simulate_provenance())))): could not find function "new_theme"

# create project
x <- new_project(
  zones = c("Conservation", "Tourism", "Science"),
  dataset = dataset,
  tileset = tileset,
  costs = list(cost),
  locks = list(lock),
  themes = list(theme),
  bbox = sf::st_bbox(c(0, 1, 0, 1), crs = sf::st_crs(4326))
)
#> Error in new_project(zones = c("Conservation", "Tourism", "Science"),     dataset = dataset, tileset = tileset, costs = list(cost),     locks = list(lock), themes = list(theme), bbox = sf::st_bbox(c(0,         1, 0, 1), crs = sf::st_crs(4326))): could not find function "new_project"

# preview object
print(x)
#> Error: object 'x' not found
```
