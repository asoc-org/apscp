# Write dataset

Write a \[Dataset\] object.

## Usage

``` r
write_dataset(x, pu_path, boundary_path)
```

## Arguments

- x:

  \[Dataset\] object.

- pu_path:

  \`character\` file path for planning unit data.

- boundary_path:

  \`character\` file path for boundary data.

## Value

An invisible \`TRUE\` indicating success.

## See also

Other io:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
dataset <- create_dataset(sim_data)
#> Error in create_dataset(sim_data): could not find function "create_dataset"

# define file paths for saving data
pu_path <- tempfile(fileext = ".csv.gz")
bd_path <- tempfile(fileext = ".csv.gz")

# save files
write_dataset(dataset, pu_path, bd_path)
#> Error in write_dataset(dataset, pu_path, bd_path): could not find function "write_dataset"
```
