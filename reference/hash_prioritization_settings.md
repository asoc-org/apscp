# Hash prioritization settings key

Create a unique key for the settings used to generate a prioritization.

## Usage

``` r
hash_prioritization_settings(settings, digits = 3)
```

## Arguments

- settings:

  `list` object with settings for generating a solution. See Settings
  format section for further details.

- digits:

  Number of digits for comparing `numeric` values. Defaults to 3.

## Value

A `character` value.

## Settings format

The argument to `settings` must be a `list` with the following elements.

- `"features`":

  A `data.frame` with the theme and feature settings. These are used to
  specify the targets and weights considered for the features during
  optimization. Each row corresponds to a different feature, and it must
  have the following columns: `"id"`, `"name"`, `"column"`, `"zone"`,
  `"target"`, and `"weight"`. Note that target values must be expressed
  as a proportion (i.e., value between zero and one).

- `"locks"`:

  A `data.frame` with the settings to specify which locks are used to
  lock in planning units to a particular zone. Each row corresponds to a
  different lock, and it must have the following columns: `"id"`,
  `"name"`, `"column"`, `"zone"`, and `"priority"`.

- `"costs"`:

  A `data.frame` with the cost settings. These are used to specify which
  costs are considered for each zone. Each row corresponds to a
  different cost, and it must have the following columns: `"id"`,
  `"name"`, `"zone"`, and `"weight"`.

- `"zones"`:

  A `data.frame` with settings for the multi-objective optimization.
  Each row corresponds to a different zone, and it must have the
  following columns: `"name"` and `"weight"`.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`cli_format_vector()`](https://asoc-org.github.io/apscp/reference/cli_format_vector.md),
[`cli_list()`](https://asoc-org.github.io/apscp/reference/cli_list.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`compress_object()`](https://asoc-org.github.io/apscp/reference/compress_object.md),
[`decompress_object()`](https://asoc-org.github.io/apscp/reference/decompress_object.md),
[`file_symlink()`](https://asoc-org.github.io/apscp/reference/file_symlink.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/is_prioritization_settings.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`sanitize_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/sanitize_prioritization_settings.md)

## Examples

``` r
# simulate data
sim_project <- simulate_project()
sim_settings <- simulate_prioritization_settings(sim_project)

# preview settings
print(sim_settings)
#> $features
#>           id      name column         zone target weight
#> 1  feature-1 Species 1 feat_1 Biodiversity    0.8    1.0
#> 2  feature-1 Species 1 feat_1      Tourism    0.2    1.0
#> 3  feature-1 Species 1 feat_1   Scientific    0.0    0.5
#> 4  feature-2 Species 2 feat_2 Biodiversity    0.2    0.5
#> 5  feature-2 Species 2 feat_2      Tourism    0.6    0.5
#> 6  feature-2 Species 2 feat_2   Scientific    0.0    0.5
#> 7  feature-3 Species 3 feat_3 Biodiversity    0.2    0.0
#> 8  feature-3 Species 3 feat_3      Tourism    0.6    0.5
#> 9  feature-3 Species 3 feat_3   Scientific    0.2    0.0
#> 10 feature-4 Species 4 feat_4 Biodiversity    1.0    0.0
#> 11 feature-4 Species 4 feat_4      Tourism    0.0    0.5
#> 12 feature-4 Species 4 feat_4   Scientific    0.0    0.0
#> 13 feature-5 Species 5 feat_5 Biodiversity    0.4    0.5
#> 14 feature-5 Species 5 feat_5      Tourism    0.6    0.0
#> 15 feature-5 Species 5 feat_5   Scientific    0.0    0.0
#> 
#> $locks
#>       id            name column         zone priority
#> 1 lock-1 Protected areas  aspas Biodiversity        2
#> 2 lock-2     Field camps  camps   Scientific        1
#> 
#> $costs
#>       id            name column    zone weight
#> 1 cost-1 Tourism revenue   cost Tourism      1
#> 

# generate hash for settings
hash_prioritization_settings(sim_settings)
#> [1] "13d3ed6d3fe0d7537b7c34784ca2e1cc"
```
