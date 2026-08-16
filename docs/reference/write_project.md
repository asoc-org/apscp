# Write project

Export project data.

## Usage

``` r
write_project(x, path)
```

## Arguments

- x:

  \[Project\] object.

- path:

  \`character\` file path for YAML metadata file.

## Value

An invisible \`TRUE\` indicating success.

## See also

Other io:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md)

## Examples

``` r
# find file path for built-in project
path <- system.file("extdata", "antarctic-peninsula.yml", package = "apscp")

# import project
x <- read_project(path)
#> Error in read_project(path): could not find function "read_project"

# preview project
print(x)
#> Error: object 'x' not found

# save project to temporary file
write_project(x, tempfile(fileext = ".yml"))
#> Error in write_project(x, tempfile(fileext = ".yml")): could not find function "write_project"
```
