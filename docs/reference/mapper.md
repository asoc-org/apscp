# Mapper

Constructs a widget for managing layers on a \[mapgl::mapboxgl()\] map.
This widget is designed to be used in conjunction with an existing map
within a Shiny web application.

## Usage

``` r
mapper(
  project,
  map_id,
  max_layers = 15L,
  width = NULL,
  height = NULL,
  id = NULL
)
```

## Arguments

- project:

  \[new_project()\] object.

- map_id:

  \`character\` HTML identifier for \[mapgl::mapboxglOutput()\].
  Defaults to \`NULL\` since these identifiers are not used by Shiny.

- max_layers:

  \`integer\` maximum number of layers to be active on the
  \[mapgl::mapboxglOutput()\] at a single point in time. Defaults to 15.

- width:

  \`character\` width of the displayed widget. Defaults to \`NULL\` such
  that the widget is automatically sized.

- height:

  \`character\` width of the displayed widget. Defaults to \`NULL\` such
  that the widget is automatically sized.

- id:

  \`character\` HTML identifier for the widget. Defaults to \`NULL\`
  since these identifiers are not used by Shiny.

## See also

Other mapper:
[`mapper-shiny`](https://asoc-org.github.io/apscp/reference/mapper-shiny.md),
[`mapper_add_solution()`](https://asoc-org.github.io/apscp/reference/mapper_add_solution.md)

## Examples

``` r
# \dontrun{
library(shiny)

# run example app showing a mapper
runApp(system.file("examples", "mapper_app.R", package = "apscp"))
#> ℹ Loading apscp
#> ! Skipping missing files:
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/aaa.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/app_config.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/app_server.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/app_startup.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/app_ui.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/internal.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Dataset.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Layer.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Cost.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Feature.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Legend.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Lock.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Project.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Provenance.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Solution.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Theme.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/class_Tile.R,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/fct_mapgl.R, …,
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/widget_solver_ui.R, and
#>   /tmp/RtmpLixpkf/temp_libpath7049a65be4b07/apscp/R/zzz.R
#> Warning: S3 methods ‘as.data.frame.JsDataFrame’, ‘as.list.JsDataFrameList’, ‘get_paint_parameters.CategoricalLegend’, ‘get_paint_parameters.ContinuousLegend’, ‘get_paint_parameters.default’, ‘print.CategoricalLegend’, ‘print.ContinuousLegend’, ‘print.Cost’, ‘print.Feature’, ‘print.Layer’, ‘print.Lock’, ‘print.Project’, ‘print.Provenance’, ‘print.Solution’, ‘print.Theme’, ‘print.Tile’, ‘serialize_object.CategoricalLegend’, ‘serialize_object.ContinuousLegend’, ‘serialize_object.Cost’, ‘serialize_object.Feature’, ‘serialize_object.Layer’, ‘serialize_object.Lock’, ‘serialize_object.Project’, ‘serialize_object.Provenance’, ‘serialize_object.Solution’, ‘serialize_object.Theme’, ‘serialize_object.Tile’, ‘serialize_object.default’ were declared in NAMESPACE but not found
#> Warning: Objects listed as exports, but not present in namespace:
#> • Dataset
#> • add_sidebar_control
#> • close_sidebar
#> • color_palette
#> • create_dataset
#> • create_legend
#> • create_optimized_solution
#> • create_solution
#> • create_solution_legend
#> • create_tile
#> • deserialize_object
#> • disable_sidebar
#> • enable_sidebar
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
#> • open_sidebar
#> • prioritization
#> • read_builtin_project
#> • read_dataset
#> • read_project
#> • read_sf_data
#> • renderMapper
#> • renderSolver
#> • run_app
#> • serialize_object
#> • sidebar_pane
#> • sidebar_tabs
#> • simulate_binary_legend
#> • simulate_continuous_legend
#> • simulate_feature_zone_targets
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
#> • write_project
#> • write_sf_data
#> Error in simulate_project(): could not find function "simulate_project"
# }
```
