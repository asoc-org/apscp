# Read project

Import project data.

## Usage

``` r
read_project(path)
```

## Arguments

- path:

  `character` file path for YAML metadata file.

## Value

A [`Project`](https://asoc-org.github.io/apscp/reference/Project.md)
object.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

## Examples

``` r
# find file path for built-in project
path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")

# import project
x <- read_project(path)

# preview project
print(x)
#> A <Project> object.
```
