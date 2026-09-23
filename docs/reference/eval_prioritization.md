# Evaluate a prioritization

Evaluate a prioritization according to how well its represents features,
locks, and costs. Additionally, area-based metrics are calculated.

## Usage

``` r
eval_prioritization(project, prioritization)
```

## Arguments

- project:

  \[new_project()\] object to which \`prioritization \`should be added.

- prioritization:

  \`numeric\` vector with a value for each planning unit to indicate
  zone allocations.

## Value

A \`list\` object. This is a \`list\` with a \`"summary"\` element that
contains a data frame with area-based metrics, as well as
\`"features"\`, \`"locks"\`, and \`"costs"\` elements that contain data
frames with metrics for the features, locks, and costs (respectively).

## See also

Other optimization:
[`solve_prioritization()`](https://asoc-org.github.io/apscp/reference/solve_prioritization.md)

## Examples

``` r
# simulate data
project <- simulate_project()
#> Error in simulate_project(): could not find function "simulate_project"

# generate a simulated prioritization
prioritization <- sample.int(
  length(project$zones), project$dataset$get_n_pu(), replace = TRUE
)
#> Error: object 'project' not found

# evaluate prioritization
eval_prioritization(project, prioritization)
#> Error in eval_prioritization(project, prioritization): could not find function "eval_prioritization"
```
