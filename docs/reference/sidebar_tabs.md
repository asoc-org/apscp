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
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
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
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/aaa.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_config.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server_initialize.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server_logging.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server_mapper.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server_session.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server_solution.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_server_solver.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_startup.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/app_ui.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/internal.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/class_Dataset.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/class_Layer.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/class_Cost.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/class_Feature.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/class_Legend.R,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/class_Lock.R, …,
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/widget_solver_ui.R, and
#>   /tmp/RtmpWsKzqa/temp_libpathca36e388da9f7/apscp/R/zzz.R
#> Warning: S3 methods ‘as.data.frame.JsDataFrame’, ‘as.list.JsDataFrameList’, ‘get_paint_parameters.CategoricalLegend’, ‘get_paint_parameters.ContinuousLegend’, ‘get_paint_parameters.default’, ‘print.CategoricalLegend’, ‘print.ContinuousLegend’, ‘print.Cost’, ‘print.Feature’, ‘print.Layer’, ‘print.Lock’, ‘print.Project’, ‘print.Provenance’, ‘print.Solution’, ‘print.Theme’, ‘print.Tile’, ‘serialize_object.CategoricalLegend’, ‘serialize_object.ContinuousLegend’, ‘serialize_object.Cost’, ‘serialize_object.Feature’, ‘serialize_object.Layer’, ‘serialize_object.Lock’, ‘serialize_object.Project’, ‘serialize_object.Provenance’, ‘serialize_object.Solution’, ‘serialize_object.Theme’, ‘serialize_object.Tile’, ‘serialize_object.bbox’, ‘serialize_object.default’ were declared in NAMESPACE but not found
#> Warning: Objects listed as exports, but not present in namespace:
#> • Dataset
#> • add_hide_layers_control
#> • add_remove_layers_control
#> • add_show_layers_control
#> • add_sidebar_control
#> • color_palette
#> • create_dataset_from_sf
#> • create_legend
#> • create_solution
#> • create_solution_from_prioritization
#> • create_solution_legend
#> • create_tile_from_dataset
#> • create_tile_from_sf
#> • deserialize_object
#> • get_paint_parameters
#> • has_mapbox_token
#> • is_relative_path
#> • map_project
#> • mapgl_add_layer
#> • mapgl_add_source
#> • mapgl_clear_layer
#> • mapgl_layer_id
#> • mapgl_source_id
#> • mapgl_source_layer_id
#> • mapgl_source_url
#> • mapper
#> • mapperOutput
#> • mapper_add_solution
#> • mapper_sync
#> • mirai_async_start
#> • mirai_async_stop
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
#> • prioritization
#> • read_builtin_project
#> • read_dataset
#> • read_matrix
#> • read_project
#> • read_sf_data
#> • renderMapper
#> • renderSolver
#> • run_app
#> • serialize_object
#> • sidebar_close
#> • sidebar_disable
#> • sidebar_enable
#> • sidebar_open
#> • sidebar_pane
#> • sidebar_tabs
#> • simulate_binary_legend
#> • simulate_continuous_legend
#> • simulate_pmtiles_file
#> • simulate_prioritization_settings
#> • simulate_project
#> • simulate_provenance
#> • simulate_solution_legend
#> • simulate_spatial_data
#> • solver
#> • solverOutput
#> • solver_add_lock
#> • solver_reset
#> • solver_sync
#> • tile_server_add_tile
#> • tile_server_dir
#> • tile_server_start
#> • tile_server_stop
#> • tool_generated_provenance
#> • write_dataset
#> • write_matrix
#> • write_project
#> • write_sf_data
#> Error in sidebar_deps(): could not find function "sidebar_deps"
# }
```
