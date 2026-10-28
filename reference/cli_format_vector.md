# Format atomic vector for printing.

Prepare atomic vector for printing.

## Usage

``` r
cli_format_vector(x, max_width = cli::console_width())
```

## Arguments

- x:

  Atomic vector.

- max_width:

  `numeric` value to truncate `x`. Defaults to
  [`cli::console_width()`](https://cli.r-lib.org/reference/console_width.html).

## Value

A `character` value.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`cli_list()`](https://asoc-org.github.io/apscp/reference/cli_list.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/is_prioritization_settings.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md)
