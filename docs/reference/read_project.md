# Read project

Import project data.

## Usage

``` r
read_project(path)
```

## Arguments

- path:

  \`character\` file path for YAML metadata file.

## Value

A \[Project\] object.

## See also

Other io:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md)

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
```
