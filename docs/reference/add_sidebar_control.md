# Add sidebar control

Add a sidebar control to a \[mapgl::mapboxgl()\] object.

## Usage

``` r
add_sidebar_control(
  map,
  id,
  position = "top-right",
  height = "100%",
  selected = NULL
)
```

## Arguments

- map:

  \[mapgl::mapboxgl()\] object.

- id:

  \`character\` HTML identifier for sidebar.

- position:

  The position of the control. Can be one of "top-left", "top-right",
  "bottom-left", or "bottom-right". Default is "top-right".

- height:

  \`character\` value denoting the height of the widget in CSS units.
  For example, acceptable values include \`"100 or \`"400px"\`. Note
  that if \`height\` is a percentage value, then it is recommended to
  add other map controls to a different \`position\` to avoid overlaps.

- selected:

  \`character\` value denoting the identifier for the sidebar pane to
  have open by default. Defaults to \`NULL\` such that the side bar is
  closed.

## Value

An updated \[mapgl::mapboxgl()\] object.

## See also

Other sidebar:
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md),
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md)

## Examples

``` r
# \dontrun{
library(shiny)

# run example app showing a single sidebar
runApp(system.file("examples", "sidebar_app.R", package = "apscp"))
#> ℹ Loading apscp
#> ! Skipping missing files:
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/aaa.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_config.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server_initialize.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server_logging.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server_mapper.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server_session.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server_solution.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_server_solver.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_startup.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/app_ui.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/internal.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/class_Dataset.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/class_Layer.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/class_Cost.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/class_Feature.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/class_Legend.R,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/class_Lock.R, …,
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/widget_solver_ui.R, and
#>   /tmp/Rtmp2JY5m2/temp_libpath42e5168c88c49/apscp/R/zzz.R
#> Warning: S3 methods ‘as.data.frame.JsDataFrame’, ‘as.list.JsDataFrameList’, ‘get_paint_parameters.CategoricalLegend’, ‘get_paint_parameters.ContinuousLegend’, ‘get_paint_parameters.default’, ‘print.CategoricalLegend’, ‘print.ContinuousLegend’, ‘print.Cost’, ‘print.Feature’, ‘print.Layer’, ‘print.Lock’, ‘print.Project’, ‘print.Provenance’, ‘print.Solution’, ‘print.Theme’, ‘print.Tile’, ‘serialize_object.CategoricalLegend’, ‘serialize_object.ContinuousLegend’, ‘serialize_object.Cost’, ‘serialize_object.Feature’, ‘serialize_object.Layer’, ‘serialize_object.Lock’, ‘serialize_object.Project’, ‘serialize_object.Provenance’, ‘serialize_object.Solution’, ‘serialize_object.Theme’, ‘serialize_object.Tile’, ‘serialize_object.bbox’, ‘serialize_object.default’ were declared in NAMESPACE but not found
#> Warning: Objects listed as exports, but not present in namespace:
#> • Dataset
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
#> Linking to GEOS 3.12.2, GDAL 3.9.3, PROJ 9.4.1; sf_use_s2() is TRUE
#> Error in sidebar_deps(): could not find function "sidebar_deps"
# }
```
