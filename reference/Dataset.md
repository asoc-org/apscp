# R6 class representing a dataset

A dataset is used to store and access information about a set spatial
layers.

## See also

Other functions for defining classes:
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

## Public fields

- `pu_path`:

  `character` file path.

- `pu_db_con`:

  [`DBI::dbConnect()`](https://dbi.r-dbi.org/reference/dbConnect.html)
  database connection object.

- `pu_db_table`:

  `character` object.

- `boundary_path`:

  `character ` file path.

- `boundary_data`:

  [`Matrix::sparseMatrix()`](https://rdrr.io/pkg/Matrix/man/sparseMatrix.html)
  object.

- `cache_path`:

  `character` file path.

- `cache_data`:

  `list` object.

- `n_pu`:

  `integer` value.

## Methods

### Public methods

- [`Dataset$new()`](#method-Dataset-initialize)

- [`Dataset$print()`](#method-Dataset-print)

- [`Dataset$get_n_pu()`](#method-Dataset-get_n_pu)

- [`Dataset$get_cache_ids()`](#method-Dataset-get_cache_ids)

- [`Dataset$has_cache_object()`](#method-Dataset-has_cache_object)

- [`Dataset$get_cache_object()`](#method-Dataset-get_cache_object)

- [`Dataset$set_cache_object()`](#method-Dataset-set_cache_object)

- [`Dataset$get_boundary_data()`](#method-Dataset-get_boundary_data)

- [`Dataset$get_pu_columns()`](#method-Dataset-get_pu_columns)

- [`Dataset$get_pu_dataframe()`](#method-Dataset-get_pu_dataframe)

- [`Dataset$get_pu_sf()`](#method-Dataset-get_pu_sf)

- [`Dataset$get_pu_column_data()`](#method-Dataset-get_pu_column_data)

- [`Dataset$get_pu_column_total()`](#method-Dataset-get_pu_column_total)

- [`Dataset$get_pu_status()`](#method-Dataset-get_pu_status)

- [`Dataset$get_pu_column_held()`](#method-Dataset-get_pu_column_held)

- [`Dataset$has_pu_column()`](#method-Dataset-has_pu_column)

- [`Dataset$set_pu_column_data()`](#method-Dataset-set_pu_column_data)

- [`Dataset$clone()`](#method-Dataset-clone)

------------------------------------------------------------------------

### `Dataset$new()`

Create a `Dataset` object.

#### Usage

    Dataset$new(pu_path, boundary_path, cache_path)

#### Arguments

- `pu_path`:

  `character ` file path.

- `boundary_path`:

  `character` file path.

- `cache_path`:

  `character` file path.

#### Returns

A new `Dataset` object.

------------------------------------------------------------------------

### `Dataset$print()`

Print object.

#### Usage

    Dataset$print()

#### Returns

Invisible `NULL`.

------------------------------------------------------------------------

### `Dataset$get_n_pu()`

Get number of planning units.

#### Usage

    Dataset$get_n_pu()

#### Returns

An `integer` value.

------------------------------------------------------------------------

### `Dataset$get_cache_ids()`

Get identifiers present in cache.

#### Usage

    Dataset$get_cache_ids()

#### Returns

A `character` vector.

------------------------------------------------------------------------

### `Dataset$has_cache_object()`

Check if cache has an object with a particular identifier.

#### Usage

    Dataset$has_cache_object(id)

#### Arguments

- `id`:

  \`character identifier value.

#### Returns

A `logical` value.

------------------------------------------------------------------------

### `Dataset$get_cache_object()`

Get object from cache.

#### Usage

    Dataset$get_cache_object(id)

#### Arguments

- `id`:

  `character` identifier value.

#### Returns

A vector.

------------------------------------------------------------------------

### `Dataset$set_cache_object()`

Set object in cache.

#### Usage

    Dataset$set_cache_object(id, value)

#### Arguments

- `id`:

  `character` identifier value.

- `value`:

  An object.

#### Returns

An invisible `TRUE` indicating success.

------------------------------------------------------------------------

### `Dataset$get_boundary_data()`

Get boundary data.

#### Usage

    Dataset$get_boundary_data()

#### Returns

A
[`Matrix::sparseMatrix()`](https://rdrr.io/pkg/Matrix/man/sparseMatrix.html)
object.

------------------------------------------------------------------------

### `Dataset$get_pu_columns()`

Get column names of planning unit data.

#### Usage

    Dataset$get_pu_columns()

#### Returns

A `character` vector.

------------------------------------------------------------------------

### `Dataset$get_pu_dataframe()`

Get `data.frame` with planning unit data.

#### Usage

    Dataset$get_pu_dataframe(column = NULL)

#### Arguments

- `column`:

  `character` vector of column names. Defaults to `NULL` such that all
  columns are returned.

#### Returns

A `data.frame` object.

------------------------------------------------------------------------

### `Dataset$get_pu_sf()`

Get [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
object with planning unit data.

#### Usage

    Dataset$get_pu_sf(column = NULL)

#### Arguments

- `column`:

  `character` vector of column names. Defaults to `NULL` such that all
  columns are returned.

#### Returns

A [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
object.

------------------------------------------------------------------------

### `Dataset$get_pu_column_data()`

Get data from a column of the planing unit data.

#### Usage

    Dataset$get_pu_column_data(column)

#### Arguments

- `column`:

  `character` value indicating the column name.

#### Returns

A vector.

------------------------------------------------------------------------

### `Dataset$get_pu_column_total()`

Get total (sum) of values in a column of the planning unit data.

#### Usage

    Dataset$get_pu_column_total(column)

#### Arguments

- `column`:

  `character` value.

#### Returns

A `numeric` vector.

------------------------------------------------------------------------

### `Dataset$get_pu_status()`

Identify which planning units would be associated with a zone depending
on columns used to allocate them.

#### Usage

    Dataset$get_pu_status(zone, allocation)

#### Arguments

- `zone`:

  `character` value with name of zone.

- `allocation`:

  Named `character` vector with column names indicating which planning
  units should be allocated to each zone. Note that the names of
  `allocation` indicate the zone names. Additionally, zones are
  allocated in order of decreasing priority. For example with
  `allocation = c("Biodiversity" = "aspas", "Scientific" = "camps")`,
  planning units are first assigned to the Scientific zone based on the
  values in the `"camps"` column, and then to the Biodiversity zone
  based on the values in the `"aspas"` column. If any planning unit was
  previously assigned to the Scientific zone, then it is overridden with
  the Biodiversity zone.

#### Returns

A `numeric` vector with binary values indicating if each planning unit
is allocated to the `zone`.

------------------------------------------------------------------------

### `Dataset$get_pu_column_held()`

Get proportion of values in a column that would be considered to by held
by selected planning units.

#### Usage

    Dataset$get_pu_column_held(column, status)

#### Arguments

- `column`:

  `character` vector of column names.

- `status`:

  `numeric` vector with binary values for each planning unit.

#### Returns

A `numeric` value.

------------------------------------------------------------------------

### `Dataset$has_pu_column()`

Check if a column (or columns) exists with a specified name in the
planning unit data.

#### Usage

    Dataset$has_pu_column(column)

#### Arguments

- `column`:

  \`character vector.

#### Returns

A `logical` value.

------------------------------------------------------------------------

### `Dataset$set_pu_column_data()`

Set data for a column of the planning unit data.

#### Usage

    Dataset$set_pu_column_data(column, values)

#### Arguments

- `column`:

  `character` value.

- `values`:

  `numeric` vector.

#### Returns

An invisible `TRUE` indicating success.

------------------------------------------------------------------------

### `Dataset$clone()`

The objects of this class are cloneable with this method.

#### Usage

    Dataset$clone(deep = FALSE)

#### Arguments

- `deep`:

  Whether to make a deep clone.
