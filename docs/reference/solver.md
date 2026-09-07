# Solver

Constructs a widget for specifying solver settings to generate a
solution. This widget is designed to be used within a Shiny web
application.

## Usage

``` r
solver(
  project,
  feature_targets = get_golem_config("prioritization_feature_targets"),
  feature_weights = get_golem_config("prioritization_feature_weights"),
  cost_weights = get_golem_config("prioritization_cost_weights"),
  zone_colors = get_golem_config("zone_colors"),
  width = NULL,
  height = NULL,
  id = NULL
)
```

## Arguments

- project:

  \[new_project()\] object.

- feature_targets:

  \`numeric\` vector of values representing different options for
  setting target values for features. Defaults to
  \`get_golem_config("prioritization_feature_targets")\`.

- feature_weights:

  \`numeric\` vector of values representing different options for
  setting target weights for features. Defaults to
  \`get_golem_config("prioritization_feature_weights")\`.

- cost_weights:

  \`numeric\` vector of values representing different options for
  setting weights for costs. Defaults to
  \`get_golem_config("prioritization_cost_weights")\`.

- zone_colors:

  \`character\` vector of colors for each zone. Defaults to
  \`get_golem_config("zone_colors")\`.

- width:

  \`character\` width of the displayed widget. Defaults to \`NULL\` such
  that the widget is automatically sized.

- height:

  \`character\` width of the displayed widget. Defaults to \`NULL\` such
  that the widget is automatically sized.

- id:

  \`character\` HTML identifier for the widget. Defaults to \`NULL\`
  since these identifiers are not used by Shiny.

## Server value

The widget sends the following values to the server:

- start:

  This is sent when the "Solve!" button is clicked and it sends a
  \`list\` that contains the settings for generating a prioritization.
  See documentation for the \`settings\` parameter of
  \[prioritization()\] for further details on the format of this value.

- stop:

  This is sent when the stop button is clicked.

## See also

Other solver:
[`solver-shiny`](https://asoc-org.github.io/apscp/reference/solver-shiny.md),
[`solver_add_lock()`](https://asoc-org.github.io/apscp/reference/solver_add_lock.md),
[`solver_reset()`](https://asoc-org.github.io/apscp/reference/solver_reset.md),
[`solver_sync()`](https://asoc-org.github.io/apscp/reference/solver_sync.md)

## Examples

``` r
# \dontrun{
library(shiny)

# run example app showing a solver
runApp(system.file("examples", "solver_app.R", package = "apscp"))
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
#> Error in simulate_project(): could not find function "simulate_project"
# }
```
