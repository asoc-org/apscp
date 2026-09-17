# Add a tile to tile server

Add PMTile file to a tile server.

## Usage

``` r
tile_server_add_tile(x)
```

## Arguments

- x:

  \[new_tile()\], \[new_solution()\], \[new_lock()\], \[new_cost()\], or
  \[new_feature()\] object.

## Value

An invisible \`TRUE\` indicating success.

## See also

Other tile_server:
[`tile_server_dir()`](https://asoc-org.github.io/apscp/reference/tile_server_dir.md),
[`tile_server_start()`](https://asoc-org.github.io/apscp/reference/tile_server_start.md),
[`tile_server_stop()`](https://asoc-org.github.io/apscp/reference/tile_server_stop.md)

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
