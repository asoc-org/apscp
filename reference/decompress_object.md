# Decompress object

Decompress an object.

## Usage

``` r
decompress_object(x)
```

## Arguments

- x:

  Object.

## Value

An object.

## See also

Other miscellaneous functions:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`cli_format_vector()`](https://asoc-org.github.io/apscp/reference/cli_format_vector.md),
[`cli_list()`](https://asoc-org.github.io/apscp/reference/cli_list.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`compress_object()`](https://asoc-org.github.io/apscp/reference/compress_object.md),
[`file_symlink()`](https://asoc-org.github.io/apscp/reference/file_symlink.md),
[`hash_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/hash_prioritization_settings.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/is_prioritization_settings.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`sanitize_prioritization_settings()`](https://asoc-org.github.io/apscp/reference/sanitize_prioritization_settings.md)

## Examples

``` r
# create object
x <- letters[1:10]
print(x)
#>  [1] "a" "b" "c" "d" "e" "f" "g" "h" "i" "j"

# compress object
x2 <- compress_object(x)
print(x2)
#>  [1] 78 9c 8b e0 62 60 60 60 66 60 61 03 92 ac 0c 40 c0 1a 1a e2 a6 6b 01 64 08
#> [26] 00 31 17 03 0b 03 27 90 66 4c 84 31 92 60 8c 64 18 23 05 c6 48 85 31 d2 60
#> [51] 8c 74 18 23 03 c6 c8 84 31 b2 00 85 4a 06 6e

# decompress object
x3 <- decompress_object(x2)
print(x3)
#>  [1] "a" "b" "c" "d" "e" "f" "g" "h" "i" "j"
```
