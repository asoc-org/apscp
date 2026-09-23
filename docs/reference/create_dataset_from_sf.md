# Create dataset from sf object.

Create a \[Dataset\] object from a \[st::sf()\] object.

## Usage

``` r
create_dataset_from_sf(x, boundary_data = NULL)
```

## Arguments

- x:

  \[sf::st_sf()\] object.

- boundary_data:

  \[Matrix::sparseMatrix()\] object with boundary data. Defaults to
  \`NULL\` such that the boundary data are calculated automatically.

## Value

A \[Dataset\] object.

## See also

Other method:
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- create_dataset_from_sf(sim_data)

# preview object
print(x)
#> <Dataset>
#>   Public:
#>     boundary_data: NULL
#>     boundary_path: /tmp/RtmpK0Ujtc/file197dffc822882.rds
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
#>     pu_db_table: file197dff39d87bd7
#>     pu_path: /tmp/RtmpK0Ujtc/file197dff39d87bd7.gpkg
#>     set_column_data: function (column, values) 
#>   Private:
#>     close_db_con: function () 
#>     finalize: function () 
#>     open_db_con: function () 
```
