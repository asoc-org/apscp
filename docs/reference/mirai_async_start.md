# Setup asynchronous processing with mirai

Start daemons for asynchronous processing with the mirai package.

## Usage

``` r
mirai_async_start(n = 2, verbose = TRUE)
```

## Arguments

- n:

  \`integer\` value denoting the number of workers. Defaults to 2.

- verbose:

  \`logical\` value indicating if messages should be displayed? Defaults
  to \`TRUE\`.

## Value

An invisible \`TRUE\` indicating success.

## See also

Other mirai:
[`mirai_async_stop()`](https://asoc-org.github.io/apscp/reference/mirai_async_stop.md)

## Examples

``` r
if (FALSE) { # interactive()
# start asynchronous processing
mirai_async_start()

# run calculation with asynchronous processing
result <- mirai::mirai({1 + 2})[]

# stop asynchronous processing
mirai_async_stop()
}
```
