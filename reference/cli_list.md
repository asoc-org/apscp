# Print list

Print a `list` object.

## Usage

``` r
cli_list(x, max_width = cli::console_width())
```

## Arguments

- x:

  `list` with names.

- max_width:

  `numeric` value to truncate `x`. Defaults to
  [`cli::console_width()`](https://cli.r-lib.org/reference/console_width.html).

## Value

None. This function is used for the side-effect of printing.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`cli_format_vector()`](https://asoc-org.github.io/apscp/reference/cli_format_vector.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`compress_object()`](https://asoc-org.github.io/apscp/reference/compress_object.md),
[`decompress_object()`](https://asoc-org.github.io/apscp/reference/decompress_object.md),
[`file_symlink()`](https://asoc-org.github.io/apscp/reference/file_symlink.md),
[`hash_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/hash_prioritization_settings.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/is_prioritization_settings.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`sanitize_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/sanitize_prioritization_settings.md)
