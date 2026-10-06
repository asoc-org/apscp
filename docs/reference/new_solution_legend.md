# New solution legend

Create a new solution legend object.

## Usage

``` r
new_solution_legend(values, colors, labels)
```

## Arguments

- values:

  `numeric` vector of values that are linked to the labels.

- colors:

  `character` value with the name of the color palette (see
  [color_palette](https://asoc-org.github.io/apscp/reference/color_palette.md))
  or a set of colors delimited by a semi-colon symbol (e.g.
  `"#AABBCC;#0A0A0A;#28282B"`). Note that `colors` must have a value for
  each value in `values`.

- labels:

  `character` Labels to show in the legend. Note that `labels` must have
  a value for each value in `values`.

## Value

A `SolutionLegend` object.

## See also

Other functions for defining classes:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
[`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md),
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md),
[`new_provenance()`](https://asoc-org.github.io/apscp/reference/new_provenance.md),
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# create new object
l <- new_solution_legend(
  values = c(0, 1),
  colors = c("#000000", "#AAAAAA"),
  labels = c("a", "b")
)

# print object
print(l)
#> $values
#> [1] 0 1
#> 
#> $colors
#> [1] "#000000" "#AAAAAA"
#> 
#> $labels
#> [1] "a" "b"
#> 
#> attr(,"class")
#> [1] "SolutionLegend" "Legend"        
```
