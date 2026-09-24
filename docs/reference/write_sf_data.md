# Write sf data to zip file

Write sf data to zip file

## Usage

``` r
write_sf_data(x, path)
```

## Arguments

- x:

  [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
  object.

- path:

  `character` file path.

## Value

An invisible `TRUE`.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md)

## Examples

``` r
# specify file path to import data
path <- system.file(
  "extdata", "antarctic-peninsula_pu.gpkg.zip", package = "apscp"
)

# read data
x <- read_sf_data(path)

# create file path to export data
path2 <- tempfile(fileext = ".gpkg.zip")

# write data
write_sf_data(x, path2)
```
