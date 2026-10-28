# New theme

Create a new theme object.

## Usage

``` r
new_theme(name, zone = NULL)
```

## Arguments

- name:

  `character` value with name.

- zone:

  `character` name of zone associated with the theme. Note that `zone`
  should match one of the zone names associated with the
  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  to which this theme belongs. Defaults to `NULL` such that the theme is
  not associated with any particular zone.

## Value

A `Theme` object.

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
[`new_solution_legend()`](https://asoc-org.github.io/apscp/reference/new_solution_legend.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# crate a theme
x <- new_theme(name = "Penguins", zone = "Biodiversity")

# preview object
print(x)
#> A <Theme> object.
#> • name: "Penguins"
#> • zone: "Biodiversity"
```
