# Symlink a file

Create a symlink for a file. If the operating system does not support
symlink files, then simply copy the file.

## Usage

``` r
file_symlink(old, new)
```

## Arguments

- old:

  `character` vector of existing file paths.

- new:

  `character` vector of new file paths or `character` value with
  directory to save new files.

## Value

An invisible vector containing `logical` values indicating if the file
was created.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`cli_format_vector()`](https://asoc-org.github.io/apscp/reference/cli_format_vector.md),
[`cli_list()`](https://asoc-org.github.io/apscp/reference/cli_list.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`compress_object()`](https://asoc-org.github.io/apscp/reference/compress_object.md),
[`decompress_object()`](https://asoc-org.github.io/apscp/reference/decompress_object.md),
[`hash_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/hash_prioritization_settings.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/is_prioritization_settings.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`sanitize_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/sanitize_prioritization_settings.md)
