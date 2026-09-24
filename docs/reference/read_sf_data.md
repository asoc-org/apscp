# Read sf data from zip file

Read sf data from zip file

## Usage

``` r
read_sf_data(path)
```

## Arguments

- path:

  `character` file path.

## Value

A [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
object.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

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
