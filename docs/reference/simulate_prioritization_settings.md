# Simulate prioritization settings

Simulate settings for generating a \[prioritization()\].

## Usage

``` r
simulate_prioritization_settings(project)
```

## Arguments

- project:

  \[new_project()\] object.

## Value

A \`list\` with the following elements: \`feature_settings\`,
\`lock_in_setting\`, \`lock_out_settings\`, and \`cost_settings\`.

## See also

Other simulation:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# simulate project
x <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"

# simulate prioritization settings
s <- simulate_prioritization_settings(x)
#> Error in simulate_prioritization_settings(x): could not find function "simulate_prioritization_settings"

# print settings
print(s)
#> Error: object 's' not found
```
