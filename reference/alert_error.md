# Error alert

Display an alert indicating that an error occurred unexpectedly.

## Usage

``` r
alert_error(text = NULL, session = shiny::getDefaultReactiveDomain())
```

## Arguments

- text:

  `character` value with text to display in the alert. Defaults to
  `NULL` such that a generic error message is displayed.

- session:

  `session` object passed to function given to `shinyServer`. Default is
  [`shiny::getDefaultReactiveDomain()`](https://rdrr.io/pkg/shiny/man/domains.html).

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
[`hash_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/hash_prioritization_settings.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/is_prioritization_settings.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`sanitize_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/sanitize_prioritization_settings.md)

## Examples

``` r
if (FALSE) {
# create alert
x <- create_alert()

# print object
print(x)
}
```
