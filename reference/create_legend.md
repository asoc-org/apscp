# Create a new legend

Create a new legend automatically for a column in a
[`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
object.

## Usage

``` r
create_legend(x, column, units = NULL, palette = "viridis", type = NULL)
```

## Arguments

- x:

  [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
  object.

- column:

  `character` value with name of column.

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

  `character` value indicating if legend should be `"continuous"`
  `"categorical"`, `"presence/absence"`, or
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
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
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
x <- create_legend(sim_data, "cost", units = "USD", palette = "PuBu")

# preview object
print(x)
#> A <ContinuousLegend> object.
#> • values: 190, 197.5, 205, 212.5, and 220
#> • colors: "#F1EEF6", "#BDC9E1", "#74A9CF", "#2B8CBE", and "#045A8D"
#> • breaks: 190, 200, 210, and 220
#> • labels: "190", "200", "210", and "220"
#> • units: "USD"
```
