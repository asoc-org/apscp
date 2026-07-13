# Project class

Definition for the Project class.

## See also

See \[new_project()\] to create a \`Project\` object.

Other class:
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
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md),
[`new_tileset()`](https://asoc-org.github.io/apscp/reference/new_tileset.md)

## Public fields

- `dataset`:

  \[new_dataset()\] object.

- `tileset`:

  \`\[new_tile_set()\] objects.

- `zones`:

  \`character\` vector of zone names.

- `themes`:

  \`list\` of \[new_theme()\] objects.

- `locks`:

  \`list\` of \[new_lock()\] objects.

- `costs`:

  \`list\` of \[new_cost()\] objects.

- `solutions`:

  \`list\` of \[new_solution()\] objects.

- `bbox`:

  \[sf::st_bbox()\] object.

- `name`:

  \`character\` name of the project.

- `author_name`:

  \`character\` name of the project author.

- `author_email`:

  \`character\` email of the project author.

## Methods

### Public methods

- [`Project$new()`](#method-Project-initialize)

- [`Project$get_centroid()`](#method-Project-get_centroid)

- [`Project$get_bbox()`](#method-Project-get_bbox)

- [`Project$add_solution()`](#method-Project-add_solution)

- [`Project$add_lock()`](#method-Project-add_lock)

- [`Project$clone()`](#method-Project-clone)

------------------------------------------------------------------------

### `Project$new()`

Create a \`Project\` object.

#### Usage

    Project$new(
      zones,
      bbox,
      dataset,
      tileset,
      themes,
      locks,
      costs,
      solutions = list(),
      name = "Project",
      author_name = "Unknown",
      author_email = "Unknown"
    )

#### Arguments

- `zones`:

  \`character\` vector of zone names.

- `bbox`:

  \[sf::st_bbox()\] object.

- `dataset`:

  \[new_dataset()\] object.

- `tileset`:

  \`\[new_tile_set()\] object.

- `themes`:

  \`list\` of \[new_theme()\] objects.

- `locks`:

  \`list\` of \[new_lock()\] objects.

- `costs`:

  \`list\` of \[new_cost()\] objects.

- `solutions`:

  \`list\` of \[new_solution()\] objects. Defaults to an empty list.

- `name`:

  \`character\` name of the project. Defaults to \`"Project"\`.

- `author_name`:

  \`character\` name of the project author. Defaults to \`"Unknown"\`.

- `author_email`:

  \`character\` email of the project author. Defaults to \`"Unknown"\`.

#### Returns

A new \`Project\` object.

------------------------------------------------------------------------

### `Project$get_centroid()`

Get centroid.

#### Usage

    Project$get_centroid()

#### Returns

A \`numeric\` vector with two values.

------------------------------------------------------------------------

### `Project$get_bbox()`

Get the bounding box.

#### Usage

    Project$get_bbox(native = TRUE, expand = 0)

#### Arguments

- `native`:

  \`logical\` value indicating if the bounding box should be in
  (\`TRUE\`) the native coordinate reference system or (\`FALSE\`)
  re-projected to longitude/latitude?

- `expand`:

  \`numeric\` value denoting the proportion to expand the bounding box.
  For example, \`expand = 0.1\` would expand the bounding box by 10
  percent. Defaults to 0.

#### Returns

A \[sf::st_bbox()\] object.

------------------------------------------------------------------------

### `Project$add_solution()`

Add a solution to the project.

#### Usage

    Project$add_solution(x)

#### Arguments

- `x`:

  \[new_solution()\] object.

#### Returns

An invisible \`TRUE\` indicating success.

------------------------------------------------------------------------

### `Project$add_lock()`

Add a lock to the project.

#### Usage

    Project$add_lock(x)

#### Arguments

- `x`:

  \[new_lock()\] object.

#### Returns

An invisible \`TRUE\` indicating success.

------------------------------------------------------------------------

### `Project$clone()`

The objects of this class are cloneable with this method.

#### Usage

    Project$clone(deep = FALSE)

#### Arguments

- `deep`:

  Whether to make a deep clone.
