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

  \`character\` file path for boundary data. If the dataset does not
  have boundary data, then use \`boundary_path = NULL\`.

## Value

A \[Dataset\] object.

## See also

Other io:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
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
#> <Dataset>
#>   Public:
#>     boundary_data: NULL
#>     boundary_path: /tmp/RtmpdMMYkx/temp_libpath197d6f19f977e1/apscp/extdata ...
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
#>     n_pu: 48447
#>     pu_db_con: NULL
#>     pu_db_table: file116cb547f32dae
#>     pu_path: /tmp/RtmpK0Ujtc/file197dff6a5610db/antarctic-peninsula_p ...
#>     set_column_data: function (column, values) 
#>   Private:
#>     close_db_con: function () 
#>     finalize: function () 
#>     open_db_con: function () 
```
