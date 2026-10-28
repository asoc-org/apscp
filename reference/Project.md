# Project class

Definition for the Project class.

## See also

See
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
to create a `Project` object.

Other functions for defining classes:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
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

## Public fields

- `bbox`:

  [`sf::st_crs()`](https://r-spatial.github.io/sf/reference/st_crs.html)
  object.

- `bearing`:

  `numeric` value denoting the initial rotation for the map.

- `zoom`:

  `numeric` value denoting the initial zoom for the map.

- `dataset`:

  [`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md)
  object.

- `tiles`:

  `list` of
  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  objects.

- `zones`:

  `character` vector of zone names.

- `features`:

  `list` of
  [`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md)
  objects.

- `locks`:

  `list` of
  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md)
  objects.

- `costs`:

  `list` of
  [`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md)
  objects.

- `solutions`:

  `list` of
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  objects.

- `name`:

  `character` name of the project.

- `author_name`:

  `character` name of the project author.

- `author_email`:

  `character` email of the project author.

- `version`:

  `character` value with package version used to create the project.

## Methods

### Public methods

- [`Project$new()`](#method-Project-initialize)

- [`Project$print()`](#method-Project-print)

- [`Project$get_centroid()`](#method-Project-get_centroid)

- [`Project$get_bbox()`](#method-Project-get_bbox)

- [`Project$get_solution()`](#method-Project-get_solution)

- [`Project$get_lock()`](#method-Project-get_lock)

- [`Project$add_solution()`](#method-Project-add_solution)

- [`Project$add_lock()`](#method-Project-add_lock)

- [`Project$add_tile()`](#method-Project-add_tile)

- [`Project$clone()`](#method-Project-clone)

------------------------------------------------------------------------

### `Project$new()`

Create a `Project` object.

#### Usage

    Project$new(
      zones,
      bbox,
      dataset,
      tiles,
      features,
      locks,
      costs,
      solutions = list(),
      name = "Project",
      author_name = "Unknown",
      author_email = "Unknown",
      version = "Unknown",
      bearing = 0,
      zoom = 0
    )

#### Arguments

- `zones`:

  `character` vector of zone names.

- `bbox`:

  [`sf::st_bbox()`](https://r-spatial.github.io/sf/reference/st_bbox.html)
  object.

- `dataset`:

  [`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md)
  object.

- `tiles`:

  `list` of
  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  objects.

- `features`:

  `list` of
  [`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md)
  objects.

- `locks`:

  `list` of
  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md)
  objects.

- `costs`:

  `list` of
  [`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md)
  objects.

- `solutions`:

  `list` of
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  objects. Defaults to an empty list.

- `name`:

  `character` name of the project. Defaults to `"Project"`.

- `author_name`:

  `character` name of the project author. Defaults to `"Unknown"`.

- `author_email`:

  `character` email of the project author. Defaults to `"Unknown"`.

- `version`:

  `character` value with package version used to create the project.
  Defaults to `"Unknown"`.

- `bearing`:

  `numeric` value denoting the map rotation. Defaults to 0.

- `zoom`:

  `numeric` value denoting the initial zoom for the map.

#### Returns

A new `Project` object.

------------------------------------------------------------------------

### `Project$print()`

Print object.

#### Usage

    Project$print()

#### Returns

Invisible `NULL`.

------------------------------------------------------------------------

### `Project$get_centroid()`

Get centroid.

#### Usage

    Project$get_centroid(native = TRUE)

#### Arguments

- `native`:

  `logical` value indicating if the bounding box should be in (`TRUE`)
  the native coordinate reference system or (`FALSE`) re-projected to
  longitude/latitude?

#### Returns

A `numeric` vector with two values.

------------------------------------------------------------------------

### `Project$get_bbox()`

Get the bounding box.

#### Usage

    Project$get_bbox(native = TRUE, expand = 0)

#### Arguments

- `native`:

  `logical` value indicating if the bounding box should be in (`TRUE`)
  the native coordinate reference system or (`FALSE`) re-projected to
  longitude/latitude?

- `expand`:

  `numeric` value denoting the proportion to expand the bounding box.
  For example, `expand = 0.1` would expand the bounding box by 10
  percent. Defaults to 0.

#### Returns

A
[`sf::st_bbox()`](https://r-spatial.github.io/sf/reference/st_bbox.html)
object.

------------------------------------------------------------------------

### `Project$get_solution()`

Get solution from the project.

#### Usage

    Project$get_solution(id)

#### Arguments

- `id`:

  `character` value.

#### Returns

A
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
object.

------------------------------------------------------------------------

### `Project$get_lock()`

Get lock from the project.

#### Usage

    Project$get_lock(id)

#### Arguments

- `id`:

  `character` value.

#### Returns

A
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
object.

------------------------------------------------------------------------

### `Project$add_solution()`

Add a new solution to the project.

#### Usage

    Project$add_solution(x)

#### Arguments

- `x`:

  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md)
  object.

#### Returns

An invisible `TRUE` indicating success.

------------------------------------------------------------------------

### `Project$add_lock()`

Add a lock to the project.

#### Usage

    Project$add_lock(x)

#### Arguments

- `x`:

  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md)
  object.

#### Returns

An invisible `TRUE` indicating success.

------------------------------------------------------------------------

### `Project$add_tile()`

Add a tile to the project.

#### Usage

    Project$add_tile(x)

#### Arguments

- `x`:

  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  object.

#### Returns

An invisible `TRUE` indicating success.

------------------------------------------------------------------------

### `Project$clone()`

The objects of this class are cloneable with this method.

#### Usage

    Project$clone(deep = FALSE)

#### Arguments

- `deep`:

  Whether to make a deep clone.
