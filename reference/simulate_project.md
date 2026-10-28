# Simulate project

Simulate a new project.

## Usage

``` r
simulate_project()
```

## Value

A [`Project`](https://asoc-org.github.io/apscp/reference/Project.md)
object.

## Details

Note that simulation functions are intended to help facilitate package
testing and should not be used for any research purposes.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_settings.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# create simulated project
x <- simulate_project()

# preview object
print(x)
#> • Metadata:
#>   • name: Project
#>   • version: 0.0.1.9000
#>   • author_name: Unknown
#>   • author_email: Unknown
#> • Mapping:
#>   • Number of tiles: 1
#>   • bearing: 0
#>   • zoom: 0
#>   • bbox: -20, -30, 20, 30(xmin/ymin/xmax/ymax)
#> • Dataset:
#>   • Number of planning units: 90
#>   • Planning unit path: /tmp/Rtmpzpyv3c/file63875b7501c4.gpkg
#>   • Boundary path: /tmp/Rtmpzpyv3c/file638742019c0a.rds
#>   • Boundary data loaded: TRUE
#> • Components:
#>   • Number of features: 5
#>   • Number of locks: 2
#>   • Number of costs: 1
#>   • Number of solutions: 1
```
