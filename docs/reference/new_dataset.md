# New dataset

Create a new \[Dataset\] object.

## Usage

``` r
new_dataset(pu_path, boundary_path)
```

## Arguments

- pu_path:

  \`character\` file path.

- boundary_path:

  \`character\` file path.

## Value

A \[Dataset\] object.

## See also

See \[create_dataset_from_sf()\] to automatically convert a
\[sf::st_sf()\] object to a \[new_dataset()\] object.

Other method:
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
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# save spatial data to temporary file
sim_path1 <- tempfile(fileext = ".gpkg")
sf::write_sf(sim_data, sim_path1)
#> Error: object 'sim_data' not found

# manually prepare boundary data
sim_path2 <- tempfile(fileext = ".rds")
bd_data <- prioritizr::boundary_matrix(sim_data)
#> Error in prioritizr::boundary_matrix(sim_data): ℹ In argument to `x`.
#> Caused by error:
#> ! object 'sim_data' not found
write_matrix(bd_data, sim_path2)
#> Error in write_matrix(bd_data, sim_path2): could not find function "write_matrix"

# create object
x <- new_dataset(sim_path1, sim_path2)
#> Error in new_dataset(sim_path1, sim_path2): could not find function "new_dataset"

# preview object
print(x)
#> Error: object 'x' not found
```
