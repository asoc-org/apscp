# Read matrix

Read \[Matrix::sparseMatrix()\] object from disk.

## Usage

``` r
read_matrix(path)
```

## Arguments

- path:

  \`character\` file path.

## Value

An invisible \`TRUE\` indicating success.

## See also

Other misc:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`color_palette()`](https://asoc-org.github.io/apscp/reference/color_palette.md),
[`is_installed()`](https://asoc-org.github.io/apscp/reference/is_installed.md),
[`is_python_freestiler_installed()`](https://asoc-org.github.io/apscp/reference/is_python_freestiler_installed.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md)

## Examples

``` r
# create object
x <- Matrix::sparseMatrix(i = 1:4, j = 5:8, x = 10:13, dims = c(4, 9))

# print matrix
print(x)
#> 4 x 9 sparse Matrix of class "dgCMatrix"
#>                           
#> [1,] . . . . 10  .  .  . .
#> [2,] . . . .  . 11  .  . .
#> [3,] . . . .  .  . 12  . .
#> [4,] . . . .  .  .  . 13 .

# define file path to save data
path <- tempfile(fileext = ".rds")

# write matrix
write_matrix(x, path)
#> Error in write_matrix(x, path): could not find function "write_matrix"

# read matrix
y <- read_matrix(path)
#> Error in read_matrix(path): could not find function "read_matrix"

# print imported matrix,
# we can see that its the same as the original matrix
print(y)
#> Error: object 'y' not found
```
