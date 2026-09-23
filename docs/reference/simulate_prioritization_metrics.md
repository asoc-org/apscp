# Simulate prioritization metrics

Simulate metrics for evaluating a \[solve_prioritization()\].

## Usage

``` r
simulate_prioritization_metrics(project)
```

## Arguments

- project:

  \[new_project()\] object.

## Value

A \`list\` with the following elements: (\`"summary"\`) a data frame,
\`"features"\` a \`list\` with elements named \`"relative"\`,
"\`absolute\`", and \`"targets"\`, \`"locks"\` a \`list\` with elements
named \`"relative"\` and "\`absolute\`", and \`"costs"\` a \`list\` with
elements named \`"relative"\` and "\`absolute\`".

## Details

Note that simulation functions are intended to help faciliate package
testing and should not be used for any research purposes.

## See also

Other simulation:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_settings.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# simulate project
x <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"

# simulate prioritization metrics
s <- simulate_prioritization_metrics(x)
#> Error in simulate_prioritization_metrics(x): could not find function "simulate_prioritization_metrics"

# print settings
print(s)
#> Error: object 's' not found
```
