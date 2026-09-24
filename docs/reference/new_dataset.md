# New dataset

Create a new
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## Usage

``` r
new_dataset(pu_path, boundary_path)
```

## Arguments

- pu_path:

  `character` file path.

- boundary_path:

  `character` file path.

## Value

A [`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md)
object.

## See also

See
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md)
to automatically convert a
[`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html) object
to a `new_dataset()` object.

Other functions for calling class methods:
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# save spatial data to temporary file
sim_path1 <- tempfile(fileext = ".gpkg")
sf::write_sf(sim_data, sim_path1)

# manually prepare boundary data
sim_path2 <- tempfile(fileext = ".rds")
bd_data <- prioritizr::boundary_matrix(sim_data)
write_matrix(bd_data, sim_path2)

# create object
x <- new_dataset(sim_path1, sim_path2)

# preview object
print(x)
#> <Dataset>
#>   Public:
#>     boundary_data: NULL
#>     boundary_path: /tmp/Rtmp0YbMia/file1bc3aa5da05e9d.rds
#>     clone: function (deep = FALSE) 
#>     get_boundary_data: function () 
#>     get_column_data: function (column) 
#>     get_column_held: function (column, status) 
#>     get_column_names: function () 
#>     get_column_total: function (column) 
#>     get_dataframe: function (column = NULL) 
#>     get_n_pu: function () 
#>     get_pu_status: function (zone, allocation) 
#>     get_sf: function (column = NULL) 
#>     has_column: function (column) 
#>     initialize: function (pu_path, boundary_path) 
#>     n_pu: 90
#>     pu_db_con: NULL
#>     pu_db_table: file1bc3aa5c6aaca1
#>     pu_path: /tmp/Rtmp0YbMia/file1bc3aa5c6aaca1.gpkg
#>     set_column_data: function (column, values) 
#>   Private:
#>     close_db_con: function () 
#>     finalize: function () 
#>     open_db_con: function () 
```
