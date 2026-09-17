# Deserialize

Deserialize an object.

## Usage

``` r
deserialize_object(x, dataset = NULL)
```

## Arguments

- x:

  \`list\` object generated with \[serialize_object()\].

- dataset:

  \[Dataset\] or \`NULL\` object. Note that some classes need a
  \[Dataset\] object to be deserialized.

## Value

An object.

## Details

This function is designed to be used for (i) passing objects from the R
session to the JavaScript session in the client browser, and (ii)
reading and writing objects to disk.

## See also

See \[serialize_object()\] for the opposite of this function.

Other io:
[`read_builtin_project()`](https://asoc-org.github.io/apscp/reference/read_builtin_project.md),
[`read_dataset()`](https://asoc-org.github.io/apscp/reference/read_dataset.md),
[`read_project()`](https://asoc-org.github.io/apscp/reference/read_project.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`serialize_object()`](https://asoc-org.github.io/apscp/reference/serialize_object.md),
[`write_dataset()`](https://asoc-org.github.io/apscp/reference/write_dataset.md),
[`write_project()`](https://asoc-org.github.io/apscp/reference/write_project.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

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
