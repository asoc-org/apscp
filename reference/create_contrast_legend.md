# Create contrast legend

Create a legend for a layer that contrasts differences between two or
more prioritizations.

## Usage

``` r
create_contrast_legend(
  project,
  name1,
  name2,
  values = NULL,
  zone_colors = get_golem_config("zone_colors"),
  zone_locked_colors = get_golem_config("zone_locked_colors")
)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- name1:

  `character` value with the name of a
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md).

- name2:

  `character` value with the name of a
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md).

- values:

  `numeric` vector with values to include in the legend. Defaults to
  `NULL` such that the legend contains values for all possible
  similarities and differences between the solutions.

- zone_colors:

  `character` vector of colors for each zone. Defaults to
  `get_golem_config("zone_colors")`.

- zone_locked_colors:

  `character` vector of colors for each zone. Defaults to
  `get_golem_config("zone_locked_colors")`.

## Value

A
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md)
object.

## See also

Other functions for calling class methods:
[`contrast_provenance()`](https://asoc-org.github.io/apscp/reference/contrast_provenance.md),
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
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
