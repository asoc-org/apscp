# Create a sidebar

Create a sidebar

## Usage

``` r
sidebar_tabs(id, icon_list = NULL, ...)
```

## Arguments

- id:

  \`character\` identifier for sidebar.

- icon_list:

  A list of \[icon()\] objects. These icons are shown when the sidebar
  is collapsed. Not that the list is required and must match the amount
  of \[sidebar_pane()\] objects.

- ...:

  The individual \[sidebar_pane()\] objects.

## Value

A \`shiny.tag\` with individual sidebar panes

## See also

Other sidebar:
[`add_sidebar_control()`](https://asoc-org.github.io/apscp/reference/add_sidebar_control.md),
[`close_sidebar()`](https://asoc-org.github.io/apscp/reference/close_sidebar.md),
[`disable_sidebar()`](https://asoc-org.github.io/apscp/reference/disable_sidebar.md),
[`enable_sidebar()`](https://asoc-org.github.io/apscp/reference/enable_sidebar.md),
[`open_sidebar()`](https://asoc-org.github.io/apscp/reference/open_sidebar.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md)

## Examples

``` r
# \dontrun{
# load packages
library(shiny)

# run example app showing a single sidebar
runApp(system.file("examples", "sidebar_app.R", package = "apscp"))
#> ℹ Loading apscp
#> ! Skipping missing files:
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/app_config.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/app_server.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/app_startup.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/app_ui.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/internal.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Dataset.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Layer.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Cost.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Feature.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Legend.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Lock.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Project.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Provenance.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Solution.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Theme.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Tile.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/class_Tileset.R,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/fct_mapgl.R, …,
#>   /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/widget_sidebar_methods.R,
#>   and /tmp/RtmpdtrJ1u/temp_libpath10c11363bcf3b/apscp/R/widget_sidebar_ui.R
#> Warning: S3 methods ‘get_paint_parameters.CategoricalLegend’, ‘get_paint_parameters.ContinuousLegend’, ‘get_paint_parameters.default’, ‘print.CategoricalLegend’, ‘print.ContinuousLegend’, ‘print.Cost’, ‘print.Feature’, ‘print.Layer’, ‘print.Lock’, ‘print.Project’, ‘print.Provenance’, ‘print.Solution’, ‘print.Theme’, ‘print.Tile’, ‘print.Tileset’, ‘serialize_object.CategoricalLegend’, ‘serialize_object.ContinuousLegend’, ‘serialize_object.Cost’, ‘serialize_object.Feature’, ‘serialize_object.Layer’, ‘serialize_object.Lock’, ‘serialize_object.Project’, ‘serialize_object.Provenance’, ‘serialize_object.Solution’, ‘serialize_object.Theme’, ‘serialize_object.Tile’, ‘serialize_object.Tileset’, ‘serialize_object.bbox’, ‘serialize_object.default’ were declared in NAMESPACE but not found
#> Warning: Objects listed as exports, but not present in namespace:
#> • Dataset
#> • add_sidebar_control
#> • close_sidebar
#> • color_palette
#> • create_dataset
#> • create_legend
#> • create_tile
#> • create_tileset
#> • deserialize_object
#> • disable_sidebar
#> • enable_sidebar
#> • get_paint_parameters
#> • has_mapbox_token
#> • map_project
#> • mapgl_add_layer
#> • mapgl_add_source
#> • mapgl_clear_layer
#> • mapgl_layer_id
#> • mapgl_source_id
#> • mapgl_source_layer_id
#> • mapgl_source_url
#> • new_categorical_legend
#> • new_continuous_legend
#> • new_cost
#> • new_dataset
#> • new_feature
#> • new_layer
#> • new_lock
#> • new_project
#> • new_provenance
#> • new_solution
#> • new_theme
#> • new_tile
#> • new_tileset
#> • open_sidebar
#> • read_dataset
#> • read_project
#> • run_app
#> • serialize_object
#> • sidebar_pane
#> • sidebar_tabs
#> • simulate_binary_legend
#> • simulate_continuous_legend
#> • simulate_project
#> • simulate_provenance
#> • simulate_solution_legend
#> • simulate_spatial_data
#> • start_tile_server
#> • stop_tile_server
#> • write_dataset
#> • write_project
#> Error in sidebar_deps(): could not find function "sidebar_deps"
# }
```
