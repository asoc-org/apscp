# R6 class representing a dataset

A dataset is used to store and access information about a set spatial
layers.

## See also

Other class:
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
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md),
[`new_tileset()`](https://asoc-org.github.io/apscp/reference/new_tileset.md)

## Public fields

- `pu_data`:

  \[tibble::tibble()\] object.

- `boundary_data`:

  \[Matrix::sparseMatrix()\] object.

## Methods

### Public methods

- [`Dataset$new()`](#method-Dataset-initialize)

- [`Dataset$get_n_pu()`](#method-Dataset-get_n_pu)

- [`Dataset$get_column_names()`](#method-Dataset-get_column_names)

- [`Dataset$get_column_data()`](#method-Dataset-get_column_data)

- [`Dataset$get_column_total()`](#method-Dataset-get_column_total)

- [`Dataset$has_column()`](#method-Dataset-has_column)

- [`Dataset$set_column_data()`](#method-Dataset-set_column_data)

- [`Dataset$clone()`](#method-Dataset-clone)

------------------------------------------------------------------------

### `Dataset$new()`

Create a \`Dataset\` object.

#### Usage

    Dataset$new(pu_data, boundary_data)

#### Arguments

- `pu_data`:

  \[tibble::tibble()\] object.

- `boundary_data`:

  \[Matrix::sparseMatrix()\] object.

#### Returns

A new \`Dataset\` object.

------------------------------------------------------------------------

### `Dataset$get_n_pu()`

Get number of planning units.

#### Usage

    Dataset$get_n_pu()

#### Returns

An \`integer\` value.

------------------------------------------------------------------------

### `Dataset$get_column_names()`

Get column names.

#### Usage

    Dataset$get_column_names()

#### Returns

A \`character\` vector.

------------------------------------------------------------------------

### `Dataset$get_column_data()`

Get column data.

#### Usage

    Dataset$get_column_data(column)

#### Arguments

- `column`:

  \`character\` or \`integer\` value.

#### Returns

A \`numeric\` vector.

------------------------------------------------------------------------

### `Dataset$get_column_total()`

Get total (sum) of values in a column.

#### Usage

    Dataset$get_column_total(column)

#### Arguments

- `column`:

  \`character\` or \`integer\` value.

#### Returns

A \`character\` vector of layer names.

------------------------------------------------------------------------

### `Dataset$has_column()`

Check if the dataset has a column or columns.

#### Usage

    Dataset$has_column(column)

#### Arguments

- `column`:

  \`character vector.

#### Returns

A \`logical\` value.

------------------------------------------------------------------------

### `Dataset$set_column_data()`

Set column data.

#### Usage

    Dataset$set_column_data(column, values)

#### Arguments

- `column`:

  \`character\` value.

- `values`:

  \`numeric\` vector.

#### Returns

An invisible \`TRUE\` indicating success.

------------------------------------------------------------------------

### `Dataset$clone()`

The objects of this class are cloneable with this method.

#### Usage

    Dataset$clone(deep = FALSE)

#### Arguments

- `deep`:

  Whether to make a deep clone.
