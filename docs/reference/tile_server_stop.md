# Stop tile server

Stop any tile servers that are active.

## Usage

``` r
tile_server_stop()
```

## Value

An invisible `TRUE` indicating success.

## See also

Other functions for working with a tile server:
[`tile_server_add_tile()`](https://asoc-org.github.io/apscp/reference/tile_server_add_tile.md),
[`tile_server_dir()`](https://asoc-org.github.io/apscp/reference/tile_server_dir.md),
[`tile_server_start()`](https://asoc-org.github.io/apscp/reference/tile_server_start.md)

## Examples

``` r
if (FALSE) { # interactive()
# simulate tile
project <- simulate_project()

# display the tile server directory
print(tile_server_dir())

# start tile server
tile_server_start()

# add tile to tile server directory
tile_server_add_tile(project$tiles[[1]])

# stop tile server
tile_server_stop()
}
```
