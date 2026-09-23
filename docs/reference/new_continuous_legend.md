# New continuous legend

Create a new continuous legend object.

## Usage

``` r
new_continuous_legend(values, colors, breaks, labels, units = NULL)
```

## Arguments

- values:

  \`numeric\` vector of values for creating the color bar.

- colors:

  \`character\` vector for creating the color bar. These colors should
  be in hex format (e.g. \`"#AABBCC"\`) and are used to generate the
  color bar. Note that \`values\` and \`colors\` must have the same
  number of values.

- breaks:

  \`numeric\` vector of values for where labels should be shown on the
  color ramp.

- labels:

  \`character\` vector with label text. Note that \`labels\` and
  \`breaks\` must have the same number of values.

- units:

  \`character\` value containing the units for the values in the
  underlying data. Defaults to a \`NULL\` value.

## Value

A \`ContinuousLegend\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
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
l <- new_continuous_legend(
  values = c(0, 1),
  colors = c("#000000", "#DDDDDD"),
  breaks = c(0.2, 0.5, 0.8),
  labels = c("Low", "Medium", "High"),
  units = "hectares"
)

# print object
print(l)
#> A <ContinuousLegend> object.
```
