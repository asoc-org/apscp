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
[`is_tile_server_active()`](https://asoc-org.github.io/apscp/reference/is_tile_server_active.md),
[`tile_server_add_tile()`](https://asoc-org.github.io/apscp/reference/tile_server_add_tile.md),
[`tile_server_dir()`](https://asoc-org.github.io/apscp/reference/tile_server_dir.md),
[`tile_server_start()`](https://asoc-org.github.io/apscp/reference/tile_server_start.md)

## Examples

``` r
if (FALSE) { # interactive()
# simulate project
sim_project <- simulate_project()

# display the tile server directory
print(tile_server_dir())

# start tile server
tile_server_start(sim_project)

# check if tile server is active
is_tile_server_active()

# add tile to tile server directory
tile_server_add_tile(sim_project$tiles[[1]])

# stop tile server
tile_server_stop()
}
```
