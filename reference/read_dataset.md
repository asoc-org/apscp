# Read dataset

Import a
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## Usage

``` r
read_dataset(pu_path, boundary_path, dataset_dir = tempfile())
```

## Arguments

- pu_path:

  `character` file path for planning unit data.

- boundary_path:

  `character` file path for boundary data. If the dataset does not have
  boundary data, then use `boundary_path = NULL`.

- dataset_dir:

  `character` file path specifying a directory to to store planning unit
  and boundary data.

## Value

A [`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

## Examples

``` r
# specify file paths
pu_path <- system.file(
  "extdata", "antarctic-peninsula_pu.gpkg.zip",
  package = "apscp"
)
bd_path <- system.file(
  "extdata", "antarctic-peninsula_bd.rds",
  package = "apscp"
)

# import data
x <- read_dataset(pu_path, bd_path)

# preview object
print(x)
#> A <Dataset> object.
#> • Number of planning units: 48447
#> • Planning unit path:
#>   /tmp/RtmpyexSqt/file37ba1369f8f5/antarctic-peninsula_pu.gpkg
#> • Boundary path:
#>   /home/runner/.cache/R/renv/library/profiles/dev/renv/apscp-b1608be9/linux-ubuntu-noble/R-4.6/x86_64-pc-linux-gnu/apscp/extdata/antarctic-peninsula_bd.rds
#> • Boundary data loaded: TRUE
```
