# Create new legend.

Create a new legend automatically.

## Usage

``` r
create_legend(x, units = NULL, palette = "viridis", type = NULL)
```

## Arguments

- x:

  `numeric` vector.

- units:

  `character` value containing the units for the values in the
  underlying data. Defaults to a `NULL` value.

- palette:

  `character` value with the color palette. In particular, `palette` can
  be the name of a color palette that is recognized by
  [`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md).
  Alternatively, it can be a set of hex color code delimited by
  semicolons (e.g., `palette = "#000000;#DDDDDD;#123456"`).

- type:

  `character` value indicating if legend should be `"continuous"`,
  `"softcontinuous"`, `"categorical"`, `"presence/absence"`, or
  `"presence". Defaults to `NULL\`, such that the legend type will be
  determined automatically.

## Value

A new
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md)
or
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md)
object.

## See also

Other functions for calling class methods:
[`contrast_provenance()`](https://asoc-org.github.io/apscp/reference/contrast_provenance.md),
[`create_contrast_legend()`](https://asoc-org.github.io/apscp/reference/create_contrast_legend.md),
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_product()`](https://asoc-org.github.io/apscp/reference/create_product.md),
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
# simulate spatial data
sim_data <- simulate_spatial_data()

# create object
x <- create_legend(sim_data$cost, units = "USD", palette = "PuBu")

# preview object
print(x)
#> A <ContinuousLegend> object.
#> • values: 190, 197.5, 205, 212.5, and 220
#> • colors: "#F1EEF6", "#BDC9E1", "#74A9CF", "#2B8CBE", and "#045A8D"
#> • breaks: 190, 200, 210, and 220
#> • labels: "190", "200", "210", and "220"
#> • units: "USD"
```
