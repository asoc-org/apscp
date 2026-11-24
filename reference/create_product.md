# Create product

Create a
[`new_product()`](https://asoc-org.github.io/apscp/reference/new_product.md)
to summarize spatial patterns across two or more prioritizations.

## Usage

``` r
create_product(
  name,
  project,
  values,
  legend,
  provenance,
  column = NULL,
  tile = NULL,
  id = uuid::UUIDgenerate()
)
```

## Arguments

- name:

  `character` value with name.

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object that has a column with the solution.

- values:

  `numeric` vector of values.

- legend:

  [`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md)
  or
  [`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md)
  object.

- provenance:

  [`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md)
  object.

- column:

  `character` value with column name in `project$dataset` that has the
  values.

- tile:

  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  object tile information for the solution. Defaults to `NULL` such that
  a
  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)
  object is automatically created.

- id:

  `character` value with unique identifier. Defaults to a random
  identifier
  ([`uuid::UUIDgenerate()`](https://rdrr.io/pkg/uuid/man/UUIDgenerate.html)).

## Value

A `Solution` object.

## See also

Other functions for calling class methods:
[`contrast_provenance()`](https://asoc-org.github.io/apscp/reference/contrast_provenance.md),
[`create_contrast_legend()`](https://asoc-org.github.io/apscp/reference/create_contrast_legend.md),
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
[`create_solution_legend()`](https://asoc-org.github.io/apscp/reference/create_solution_legend.md),
[`create_tile_from_file()`](https://asoc-org.github.io/apscp/reference/create_tile_from_file.md),
[`create_tile_from_project()`](https://asoc-org.github.io/apscp/reference/create_tile_from_project.md),
[`create_tile_from_sf()`](https://asoc-org.github.io/apscp/reference/create_tile_from_sf.md),
[`heatmap_provenance()`](https://asoc-org.github.io/apscp/reference/heatmap_provenance.md),
[`new_dataset()`](https://asoc-org.github.io/apscp/reference/new_dataset.md),
[`precomputed_provenance()`](https://asoc-org.github.io/apscp/reference/precomputed_provenance.md),
[`solution_provenance()`](https://asoc-org.github.io/apscp/reference/solution_provenance.md)

## Examples

``` r
# simulate project
sim_project <- simulate_project()

# simulate values for product
v <- round(runif(sim_project$dataset$get_n_pu()), 3)

# create object
x <- create_product(
  name = "prod",
  values = v,
  project = sim_project,
  legend = simulate_solution_legend(),
  provenance = simulate_provenance()
)

# preview object
print(x)
#> A <Product> object.
#> • name: "prod"
#> • id: "d4833e26-47db-435b-93a5-3c4c81456e77"
#> • layer: <Layer> object
```
