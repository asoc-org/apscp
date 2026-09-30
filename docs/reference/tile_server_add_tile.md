# Add a tile to tile server

Add PMTile file to a tile server.

## Usage

``` r
tile_server_add_tile(x)
```

## Arguments

- x:

  [`new_tile()`](https://asoc-org.github.io/apscp/reference/new_tile.md),
  [`new_solution()`](https://asoc-org.github.io/apscp/reference/new_solution.md),
  [`new_lock()`](https://asoc-org.github.io/apscp/reference/new_lock.md),
  [`new_cost()`](https://asoc-org.github.io/apscp/reference/new_cost.md),
  or
  [`new_feature()`](https://asoc-org.github.io/apscp/reference/new_feature.md)
  object.

## Value

An invisible `TRUE` indicating success.

## See also

Other functions for working with a tile server:
[`is_tile_server_active()`](https://asoc-org.github.io/apscp/reference/is_tile_server_active.md),
[`tile_server_dir()`](https://asoc-org.github.io/apscp/reference/tile_server_dir.md),
[`tile_server_start()`](https://asoc-org.github.io/apscp/reference/tile_server_start.md),
[`tile_server_stop()`](https://asoc-org.github.io/apscp/reference/tile_server_stop.md)

## Examples

``` r
if (FALSE) { # interactive()
# simulate project
sim_project <- simulate_project()

# display the tile server directory
print(tile_server_dir())

# start tile server
tile_server_start()

# check if tile server is active
is_tile_server_active()

# add tile to tile server directory
tile_server_add_tile(sim_project$tiles[[1]])

# stop tile server
tile_server_stop()
}
```
