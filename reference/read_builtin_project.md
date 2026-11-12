# Read builtin project

Import builtin project data for the Antarctic Peninsula.

## Usage

``` r
read_builtin_project()
```

## Value

A
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
object.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
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
# import project
x <- read_builtin_project()

# preview project
print(x)
#> • Metadata:
#>   • name: Antarctic Peninsula
#>   • version: 0.0.2
#>   • author_name: Jasmine Lee
#>   • author_email: jasmine.lee@monash.edu
#> • Mapping:
#>   • Number of tiles: 1
#>   • bearing: 101
#>   • zoom: 2
#>   • bbox: -75.4165504765101, -73.2404734584194, -44.3891673562134,
#>   -60.3476308273474(xmin/ymin/xmax/ymax)
#> • Dataset:
#>   • Number of planning units: 48447
#>   • Planning unit path:
#>   /tmp/RtmpXZtosk/file4a316c3fbc20/antarctic-peninsula.gpkg
#>   • Boundary path:
#>   /home/runner/.cache/R/renv/library/profiles/dev/renv/apscp-b1608be9/linux-ubuntu-noble/R-4.6/x86_64-pc-linux-gnu/apscp/extdata/antarctic-peninsula.boundary.rds
#>   • Boundary data loaded: TRUE
#> • Components:
#>   • Number of features: 53
#>   • Number of locks: 2
#>   • Number of costs: 2
#>   • Number of solutions: 0
```
