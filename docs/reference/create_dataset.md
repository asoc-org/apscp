# Create dataset

Create a \[Dataset\] object from a \[st::sf()\] object.

## Usage

``` r
create_dataset(x)
```

## Arguments

- x:

  \[sf::st_sf()\] object.

## Value

A \[Dataset\] object.

## See also

Other method:
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_optimized_solution()`](https://asoc-org.github.io/apscp/reference/create_optimized_solution.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile()`](https://asoc-org.github.io/apscp/reference/create_tile.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
if (FALSE) { # interactive()
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- create_dataset(sim_data)

# preview object
print(x)
}
```
