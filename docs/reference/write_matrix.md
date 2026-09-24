# Write matrix

Write
[`Matrix::sparseMatrix()`](https://rdrr.io/pkg/Matrix/man/sparseMatrix.html)
object to disk.

## Usage

``` r
write_matrix(x, path)
```

## Arguments

- x:

  [`Matrix::sparseMatrix()`](https://rdrr.io/pkg/Matrix/man/sparseMatrix.html)
  object.

- path:

  `character` file path.

## Value

An invisible `TRUE` indicating success.

## See also

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

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

# read matrix
y <- read_matrix(path)

# print imported matrix,
# we can see that it's the same as the original matrix
print(y)
#> 4 x 9 sparse Matrix of class "dgCMatrix"
#>                           
#> [1,] . . . . 10  .  .  . .
#> [2,] . . . .  . 11  .  . .
#> [3,] . . . .  .  . 12  . .
#> [4,] . . . .  .  .  . 13 .
```
