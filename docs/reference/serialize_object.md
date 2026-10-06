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

# S3 method for class 'SolutionLegend'
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

# S3 method for class 'bbox'
serialize_object(x)

# S3 method for class 'Project'
serialize_object(x)
```

## Arguments

- x:

  An object.

## Value

A `list` object.

## Details

This function is designed to be used for (i) passing objects from the R
session to the JavaScript session in the client browser, and (ii)
reading and writing objects to disk.

## See also

See
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md)
for the opposite of this function.

Other functions for reading and writing data:
[`deserialize_object()`](https://asoc-org.github.io/apscp/reference/deserialize_object.md),
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

## Examples

``` r
# create an object
x <- new_categorical_legend(c(0, 1), c("#000000", "#AAAAAA"), c("a", "b"))

# preview object
print(x)
#> A <CategoricalLegend> object.

# serialize object
s <- serialize_object(x)

# preview serialized object
print(s)
#> $values
#> [1] 0 1
#> 
#> $labels
#> [1] "a" "b"
#> 
#> $colors
#> [1] "#000000" "#AAAAAA"
#> 
#> $units
#> NULL
#> 
#> $class
#> [1] "CategoricalLegend"
#> 

# deserialize the serialized object
d <- deserialize_object(s)

# preview the deserialized object,
# we can see that it is identical to x (i.e., the original object)
print(d)
#> A <CategoricalLegend> object.
```
