# Simulate spatial data

Simulate spatial data for conservation planning.

## Usage

``` r
simulate_spatial_data()
```

## Value

A [`sf::st_sf()`](https://r-spatial.github.io/sf/reference/sf.html)
odbject.

## Details

Note that simulation functions are intended to help faciliate package
testing and should not be used for any research purposes.

## See also

Other functions for simulating data:
[`simulate_binary_legend()`](https://asoc-org.github.io/apscp/reference/simulate_binary_legend.md),
[`simulate_continuous_legend()`](https://asoc-org.github.io/apscp/reference/simulate_continuous_legend.md),
[`simulate_pmtiles_file()`](https://asoc-org.github.io/apscp/reference/simulate_pmtiles_file.md),
[`simulate_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/simulate_prioritization_settings.md),
[`simulate_project()`](https://asoc-org.github.io/apscp/reference/simulate_project.md),
[`simulate_provenance()`](https://asoc-org.github.io/apscp/reference/simulate_provenance.md),
[`simulate_solution_legend()`](https://asoc-org.github.io/apscp/reference/simulate_solution_legend.md)

## Examples

``` r
# simulate data
d <- simulate_spatial_data()

# preview object
print(d)
#> Simple feature collection with 90 features and 11 fields
#> Geometry type: POLYGON
#> Dimension:     XY
#> Bounding box:  xmin: -20 ymin: -30 xmax: 20 ymax: 30
#> Geodetic CRS:  WGS 84
#> First 10 features:
#>        cost    feat_1    feat_2    feat_3    feat_4    feat_5 aspas camps
#> 1  215.8638 0.7150548 0.2900901 0.8178213 0.2199663 0.4533809    NA    NA
#> 2  212.7823 0.6990429 0.3052216 0.8064534 0.2713800 0.4413639    NA    NA
#> 3  207.4962 0.6859317 0.3266036 0.7852441 0.3296247 0.4343547    NA    NA
#> 4  208.9322 0.6783193 0.3510977 0.7541320 0.3900085 0.4355628    NA     1
#> 5  214.0419 0.6782107 0.3750470 0.7131559 0.4468281 0.4474871    NA    NA
#> 6  213.7636 0.6863253 0.3950113 0.6628435 0.4946333 0.4714105    NA    NA
#> 7  210.4612 0.7017231 0.4084749 0.6046203 0.5292249 0.5068508    NA    NA
#> 8  211.0424 0.7219284 0.4142271 0.5411391 0.5479991 0.5510725    NA     1
#> 9  210.3878 0.7435505 0.4123446 0.4763017 0.5498153 0.5991256    NA    NA
#> 10 204.3971 0.7631509 0.4038949 0.4147364 0.5348758 0.6448475    NA    NA
#>    invasive_species solution                       geometry _index
#> 1                 0        6 POLYGON ((-20 24, -20 30, -...      1
#> 2                 0        2 POLYGON ((-16 24, -16 30, -...      2
#> 3                 0        6 POLYGON ((-12 24, -12 30, -...      3
#> 4                 0        4 POLYGON ((-8 24, -8 30, -4 ...      4
#> 5                 1        1 POLYGON ((-4 24, -4 30, 0 3...      5
#> 6                 0        0 POLYGON ((0 24, 0 30, 4 30,...      6
#> 7                 0        6 POLYGON ((4 24, 4 30, 8 30,...      7
#> 8                 1        3 POLYGON ((8 24, 8 30, 12 30...      8
#> 9                 0        6 POLYGON ((12 24, 12 30, 16 ...      9
#> 10                1        1 POLYGON ((16 24, 16 30, 20 ...     10
```
