# Write project

Export project data.

## Usage

``` r
write_project(x, path)
```

## Arguments

- x:

  [`Project`](https://asoc-org.github.io/apscp/reference/Project.md)
  object.

- path:

  `character` file path for YAML metadata file.

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
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

## Examples

``` r
# find file path for built-in project
path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")

# import project
x <- read_project(path)

# preview project
print(x)
#> • Metadata:
#>   • name: Antarctic Peninsula
#>   • version: 0.0.0.9000
#>   • author_name: Jasmine Lee
#>   • author_email: jasmine.lee@monash.edu
#> • Mapping:
#>   • Number of tiles: 1
#>   • bearing: 101
#>   • zoom: 2
#>   • bbox: -75.4165505, -73.2404735, -44.3891674,
#>   -60.3476308(xmin/ymin/xmax/ymax)
#> • Dataset:
#>   • Number of planning units: 48447
#>   • Planning unit path:
#>   /tmp/Rtmpzpyv3c/file63874deadeb2/antarctic-peninsula_pu.gpkg
#>   • Boundary path:
#>   /home/runner/.cache/R/renv/library/apscp-b1608be9/linux-ubuntu-noble/R-4.6/x86_64-pc-linux-gnu/apscp/extdata/antarctic-peninsula_bd.rds
#>   • Boundary data loaded: TRUE
#> • Components:
#>   • Number of features: 53
#>   • Number of locks: 2
#>   • Number of costs: 2
#>   • Number of solutions: 0

# save project to temporary file
write_project(x, tempfile(fileext = ".yml"))
```
