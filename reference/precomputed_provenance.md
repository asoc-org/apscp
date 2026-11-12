# Precomputed provenance

Create a
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md)
object that indicates data were precomputed for the tool.

## Usage

``` r
precomputed_provenance()
```

## Value

A
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md)
object.

## See also

Other functions for calling class methods:
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
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
# create object
x <- precomputed_provenance()

# print object
print(x)
#> A <Provenance> object.
#> • name: "Precomputed"
#> • icon: "server"
#> • color: "black"
#> • description: "Generated with prior computations"
#> • url: ""
```
