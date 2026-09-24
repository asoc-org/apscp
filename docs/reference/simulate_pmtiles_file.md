# Simulate PMtiles file

Simulate a PMtiles file by creating a dummy file on disk.

## Usage

``` r
simulate_pmtiles_file()
```

## Value

A `character` value with the file path.

## Details

Note that simulation functions are intended to help faciliate package
testing and should not be used for any research purposes.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_prioritization_metrics()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_metrics.md),
[`simulate_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_settings.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md),
[`simulate_spatial_data()`](https://asoc-org.github.io/apscp/reference/simulate_spatial_data.md)

## Examples

``` r
# simulate PMTiles file
simulate_pmtiles_file()
#> [1] "/tmp/Rtmp0YbMia/file1bc3aa3f32d0fa.pmtiles"
```
