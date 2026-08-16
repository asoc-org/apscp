# New provenance

Create a new provenance object.

## Usage

``` r
new_provenance(name, icon, color, description)
```

## Arguments

- name:

  \`character\` name of provenance source.

- icon:

  \`character\` name of icon to depict the source.

- color:

  \`character\` value containing the color for the icon.

- description:

  \`character\` value containing a description of the provenance.

## Value

A \`Provenance\` object.

## See also

Other class:
[`Dataset`](https://asoc-org.github.io/apscp/reference/Dataset.md),
[`Project`](https://asoc-org.github.io/apscp/reference/Project.md),
[`new_categorical_legend()`](https://asoc-org.github.io/apscp/reference/new_categorical_legend.md),
[`new_continuous_legend()`](https://asoc-org.github.io/apscp/reference/new_continuous_legend.md),
[`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
[`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md),
[`new_layer()`](https://asoc-org.github.io/apscp/reference/new_layer.md),
[`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
[`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md),
[`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
[`new_theme()`](https://asoc-org.github.io/apscp/reference/new_theme.md),
[`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md)

## Examples

``` r
# create a provenance
x <- new_provenance(
  name = "Global", icon = "globe", color = "#123456",
  description = "Data is global."
)
#> Error in new_provenance(name = "Global", icon = "globe", color = "#123456",     description = "Data is global."): could not find function "new_provenance"

# print object
print(x)
#> Error: object 'x' not found
```
