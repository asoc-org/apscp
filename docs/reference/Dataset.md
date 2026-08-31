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
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Public fields

- `pu_path`:

  \`character\` file path.

- `pu_db_con`:

  \[DBI::dbConnect()\] database connection object.

- `pu_db_table`:

  \`character\` object.

- `boundary_path`:

  \`character \` file path.

- `boundary_data`:

  \[Matrix::sparseMatrix()\] object.

- `n_pu`:

  \`integer\` value.

## Methods

### Public methods

- [`Dataset$new()`](#method-Dataset-initialize)

- [`Dataset$get_n_pu()`](#method-Dataset-get_n_pu)

- [`Dataset$get_boundary_data()`](#method-Dataset-get_boundary_data)

- [`Dataset$get_column_names()`](#method-Dataset-get_column_names)

- [`Dataset$get_dataframe()`](#method-Dataset-get_dataframe)

- [`Dataset$get_sf()`](#method-Dataset-get_sf)

- [`Dataset$get_column_data()`](#method-Dataset-get_column_data)

- [`Dataset$get_column_total()`](#method-Dataset-get_column_total)

- [`Dataset$get_pu_status()`](#method-Dataset-get_pu_status)

- [`Dataset$get_column_held()`](#method-Dataset-get_column_held)

- [`Dataset$has_column()`](#method-Dataset-has_column)

- [`Dataset$set_column_data()`](#method-Dataset-set_column_data)

- [`Dataset$clone()`](#method-Dataset-clone)

------------------------------------------------------------------------

### `Dataset$new()`

Create a \`Dataset\` object.

#### Usage

    Dataset$new(pu_path, boundary_path)

#### Arguments

- `pu_path`:

  \`character \` file path.

- `boundary_path`:

  \`character\` file path.

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

### `Dataset$get_boundary_data()`

Get boundary data.

#### Usage

    Dataset$get_boundary_data()

#### Returns

A \[Matrix::sparseMatrix()\] object.

------------------------------------------------------------------------

### `Dataset$get_column_names()`

Get column names.

#### Usage

    Dataset$get_column_names()

#### Returns

A \`character\` vector.

------------------------------------------------------------------------

### `Dataset$get_dataframe()`

Get \`data.frame\` with data.

#### Usage

    Dataset$get_dataframe(column = NULL)

#### Arguments

- `column`:

  \`character\` vector. Defaults to \`NULL\` such that all columns are
  returned.

#### Returns

A \`data.frame\` object.

------------------------------------------------------------------------

### `Dataset$get_sf()`

Get \[sf::st_sf()\] object with data.

#### Usage

    Dataset$get_sf(column = NULL)

#### Arguments

- `column`:

  \`character\` vector. Defaults to \`NULL\` such that all columns are
  returned.

#### Returns

A \[sf::st_st()\] object.

------------------------------------------------------------------------

### `Dataset$get_column_data()`

Get column data.

#### Usage

    Dataset$get_column_data(column)

#### Arguments

- `column`:

  \`character\` value.

#### Returns

A vector.

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

### `Dataset$get_pu_status()`

Identify which planning units would be associated with a zone depending
on columns used to allocate them.

#### Usage

    Dataset$get_pu_status(zone, allocation)

#### Arguments

- `zone`:

  \`character\` value with name of zone.

- `allocation`:

  Named \`character\` vector with column names indicating which planning
  units should be allocated to each zone. Note that the names of
  \`allocation\` indicate the zone names. Additionally, zones are
  allocated in order of decreasing priority. For example with
  \`allocation = c("Biodiversity" = "aspas", "Scientific" = "camps")\`,
  planning units are first assigned to the Scientific zone based on the
  values in the \`"camps"\` column, and then to the Biodiversity zone
  based on the values in the \`"aspas"\` column. If any planning unit
  was previously assigned to the Scientific zone, then it is overridden
  with the Biodiversity zone.

#### Returns

A \`numeric\` vector with binary values indicating if each planning unit
is allocated to the \`zone\`.

------------------------------------------------------------------------

### `Dataset$get_column_held()`

Get proportion of values in a column that would be considered to by held
by selected planning units.

#### Usage

    Dataset$get_column_held(column, status)

#### Arguments

- `column`:

  \`character\` vector of column names.

- `status`:

  \`numeric\` vector with binary values for each planning unit.

#### Returns

A \`numeric\` value.

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
