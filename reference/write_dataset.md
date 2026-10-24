# Write dataset

Write a
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## Usage

``` r
write_dataset(x, pu_path, boundary_path)
```

## Arguments

- x:

  [`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
  object.

- pu_path:

  `character` file path for planning unit data.

- boundary_path:

  `character` file path for boundary data. If the dataset does not have
  boundary data, then use `boundary_path = NULL`.

## Value

An invisible `TRUE` indicating success.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
dataset <- create_dataset_from_sf(sim_data)

# define file paths for saving data
pu_path <- tempfile(fileext = ".gpkg.zip")
bd_path <- tempfile(fileext = ".csv.gz")

# save files
write_dataset(dataset, pu_path, bd_path)
```
