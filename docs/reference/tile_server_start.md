# Start tile server

Start a tile server for a project.

## Usage

``` r
tile_server_start(x, verbose = TRUE)
```

## Arguments

- x:

  \[new_project()\] object.

- verbose:

  \`logical\` value indicating if information about the tile server
  should be displayed? Defaults to \`TRUE\`.

## Value

An invisible \`TRUE\` indicating success.

## Details

The tile server directory is specified based on
\`get_golem_config("tile_server_dir")\`, and the port number is based on
\`get_golem_config("tile_server_port")\`.

## See also

Other tile_server:
[`tile_server_add_tile()`](https://asoc-org.github.io/apscp/reference/tile_server_add_tile.md),
[`tile_server_dir()`](https://asoc-org.github.io/apscp/reference/tile_server_dir.md),
[`tile_server_stop()`](https://asoc-org.github.io/apscp/reference/tile_server_stop.md)
