# Is relative path?

Check if a file path is relative or not.

## Usage

``` r
is_relative_path(x)
```

## Arguments

- x:

  `character` value with file path.

## Value

A `logical` value.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_python_freestiler_installed()`](https://asoc-org.github.io/apscp/reference/is_python_freestiler_installed.md)

## Examples

``` r
# check if various paths are relative or not
is_relative_path("/usr/home/data.txt")
#> [1] FALSE
is_relative_path("~/data.txt")
#> [1] FALSE
is_relative_path("C:/Users/root/data.txt")
#> [1] TRUE
is_relative_path("data.txt")
#> [1] TRUE
```
