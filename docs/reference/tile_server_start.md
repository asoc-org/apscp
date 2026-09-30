# Start tile server

Start a tile server for a project.

## Usage

``` r
tile_server_start(x, verbose = TRUE)
```

## Arguments

- x:

  [`new_project()`](https://asoc-org.github.io/apscp/reference/new_project.md)
  object.

- verbose:

  `logical` value indicating if information about the tile server should
  be displayed? Defaults to `TRUE`.

## Value

An invisible `TRUE` indicating success.

## Details

The tile server directory is specified based on
`get_golem_config("tile_server_dir")`. The port number is based on
`get_golem_config("tile_server_url")` where the text after the last
colon is assumed to be the port number (e.g., the port number in
`http://localhost:8085` is assumed to be 8085).

## See also

Other functions for working with a tile server:
[`is_tile_server_active()`](https://asoc-org.github.io/apscp/reference/is_tile_server_active.md),
[`tile_server_add_tile()`](https://asoc-org.github.io/apscp/reference/tile_server_add_tile.md),
[`tile_server_dir()`](https://asoc-org.github.io/apscp/reference/tile_server_dir.md),
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
