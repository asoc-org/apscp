# Stop asynchronous processing

Stop daemons for asynchronous processing with the mirai package.

## Usage

``` r
mirai_async_stop()
```

## Value

An invisible `TRUE` indicating success.

## See also

Other functions for asynchronous processing:
[`mirai_async_start()`](https://asoc-org.github.io/apscp/reference/mirai_async_start.md)

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
