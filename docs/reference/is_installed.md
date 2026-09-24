# Is package installed?

Check if a package is installed.

## Usage

``` r
is_installed(x)
```

## Arguments

- x:

  `character` value.

## Value

A `logical` value.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`is_python_freestiler_installed()`](https://asoc-org.github.io/apscp/reference/is_python_freestiler_installed.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md)

## Examples

``` r
# print if base package is installed?
is_installed("base")
#> [1] TRUE
```
