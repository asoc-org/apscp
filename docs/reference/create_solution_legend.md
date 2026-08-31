# Create solution legend

Create a legend for solutions generated with the tool.

## Usage

``` r
create_solution_legend(project)
```

## Arguments

- project:

  \[new_project()\] object.

## Value

A \[new_categorical_legend()\] object.

## Details

Note that colors for zones are specified in the golem configuration
file.

## See also

Other method:
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_optimized_solution()`](https://asoc-org.github.io/apscp/reference/create_optimized_solution.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_tile_from_dataset()`](https://asoc-org.github.io/apscp/reference/create_tile_from_dataset.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`tool_generated_provenance()`](https://asoc-org.github.io/apscp/reference/tool_generated_provenance.md)

## Examples

``` r
# simulate project
p <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"

# create solution legend
x <- create_solution_legend(p)
#> Error in create_solution_legend(p): could not find function "create_solution_legend"

# print legend
print(x)
#> Error: object 'x' not found
```
