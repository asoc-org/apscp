# New dataset

Create a new \[Dataset\] object.

## Usage

``` r
new_dataset(pu_data, boundary_data)
```

## Arguments

- pu_data:

  \[sf::st_sf()\] object with planning unit data.

- boundary_data:

  \[Matrix::sparseMatrix()\] object with boundary matrix data.

## Value

A \[Dataset\] object.

## See also

See \[create_dataset()\] to automatically convert a \[sf::st_sf()\]
object to a \[new_dataset()\] object.

Other method:
[`create_dataset()`](https://asoc-org.github.io/apscp/reference/create_dataset.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_optimized_solution()`](https://asoc-org.github.io/apscp/reference/create_optimized_solution.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile()`](https://asoc-org.github.io/apscp/reference/create_tile.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate spatial data
sim_data <- simulate_spatial_data()
#> Error in simulate_spatial_data(): could not find function "simulate_spatial_data"

# manually prepare planning unit data
pu_data <- sim_data
#> Error: object 'sim_data' not found

# manually prepare boundary data
bd_data <- prioritizr::boundary_matrix(sim_data)
#> Error in prioritizr::boundary_matrix(sim_data): ℹ In argument to `x`.
#> Caused by error:
#> ! object 'sim_data' not found

# create object
x <- new_dataset(pu_data, bd_data)
#> Error in new_dataset(pu_data, bd_data): could not find function "new_dataset"

# preview object
print(x)
#> Error: object 'x' not found
```
