# Create solution legend

Create a legend for solutions generated with the tool.

## Usage

``` r
create_solution_legend(
  project,
  zone_colors = get_golem_config("zone_colors"),
  zone_locked_colors = get_golem_config("zone_locked_colors")
)
```

## Arguments

- project:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

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

## Details

Note that colors for zones are specified in the golem configuration
file.

## See also

Other functions for calling class methods:
[`contrast_provenance()`](https://asoc-org.github.io/apscp/reference/contrast_provenance.md),
[`create_contrast_legend()`](https://asoc-org.github.io/apscp/reference/create_contrast_legend.md),
[`create_dataset_from_sf()`](https://asoc-org.github.io/apscp/reference/create_dataset_from_sf.md),
[`create_legend()`](https://asoc-org.github.io/apscp/reference/create_legend.md),
[`create_product()`](https://asoc-org.github.io/apscp/reference/create_product.md),
[`create_solution()`](https://asoc-org.github.io/apscp/reference/create_solution.md),
[`create_solution_from_prioritization()`](https://asoc-org.github.io/apscp/reference/create_solution_from_prioritization.md),
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
p <- simulate_project()

# create solution legend
x <- create_solution_legend(p)

# print legend
print(x)
#> $values
#> [1] 1 2 3 4 5 6
#> 
#> $colors
#> [1] "#C0FFBF" "#DEEBFF" "#FEEDF5" "#4daf4a" "#377eb8" "#f781bf"
#> 
#> $labels
#> [1] "Biodiversity locked"   "Tourism locked"        "Scientific locked"    
#> [4] "Biodiversity priority" "Tourism priority"      "Scientific priority"  
#> 
#> attr(,"class")
#> [1] "SolutionLegend" "Legend"        
```
