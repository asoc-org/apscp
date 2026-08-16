# Read dataset

Import a \[Dataset\] object.

## Usage

``` r
read_dataset(pu_path, boundary_path)
```

## Arguments

- pu_path:

  \`character\` file path for planning unit data.

- boundary_path:

  \`character\` file path for boundary data.

## Value

A \[Dataset\] object.

## See also

Other io:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md)

## Examples

``` r
# specify file paths
pu_path <- system.file(
 "extdata", "antarctic-peninsula_pu.gpkg.zip",
 package = "apscp"
)
bd_path <- system.file(
  "extdata", "antarctic-peninsula_bd.csv.gz",
 package = "apscp"
)

# import data
x <- read_dataset(pu_path, bd_path)
#> Error in read_dataset(pu_path, bd_path): could not find function "read_dataset"

# preview object
print(x)
#> Error: object 'x' not found
```
