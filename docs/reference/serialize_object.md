# Serialize object

Serialize an object.

## Usage

``` r
serialize_object(x)

# S3 method for class 'Provenance'
serialize_object(x)

# S3 method for class 'Tile'
serialize_object(x)

# S3 method for class 'ContinuousLegend'
serialize_object(x)

# S3 method for class 'CategoricalLegend'
serialize_object(x)

# S3 method for class 'Layer'
serialize_object(x)

# S3 method for class 'Feature'
serialize_object(x)

# S3 method for class 'Lock'
serialize_object(x)

# S3 method for class 'Cost'
serialize_object(x)

# S3 method for class 'Solution'
serialize_object(x)

# S3 method for class 'Theme'
serialize_object(x)

# S3 method for class 'Project'
serialize_object(x)
```

## Arguments

- x:

  An object.

## Value

A \`list\` object.

## Details

This function is designed to be used for (i) passing objects from the R
session to the JavaScript session in the client browser, and (ii)
reading and writing objects to disk.

## See also

See \[deserialize_object()\] for the opposite of this function.

Other io:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md)

## Examples

``` r
# create an object
x <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))
#> Error in new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a",     "b")): could not find function "new_categorical_legend"

# preview object
print(x)
#> Error: object 'x' not found

# serialize object
s <- serialize_object(x)
#> Error in serialize_object(x): could not find function "serialize_object"

# preview serialized object
print(s)
#> Error: object 's' not found

# deserialize the serialized object
d <- deserialize_object(s)
#> Error in deserialize_object(s): could not find function "deserialize_object"

# preview the deserialized object,
# we can see that it is identical to x (i.e., the original object)
print(d)
#> Error: object 'd' not found
```
