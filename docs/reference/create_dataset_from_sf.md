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
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# create object
x <- create_dataset_from_sf(sim_data)
#> Error in create_dataset_from_sf(sim_data): could not find function "create_dataset_from_sf"

# preview object
print(x)
#> Error: object 'x' not found
```
