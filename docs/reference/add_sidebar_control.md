# Add sidebar control

Add a sidebar control to a
[`mapgl::mapboxgl()`](https://walker-data.com/mapgl/reference/mapboxgl.html)
object.

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

  [`mapgl::mapboxgl()`](https://walker-data.com/mapgl/reference/mapboxgl.html)
  object.

- id:

  `character` HTML identifier for sidebar.

- position:

  `character` value denoting the placement of the control the `map`
  object. Available options include `"top-left"`, `"top-right`",
  `"bottom-left"`, and `"bottom-right"`.

- height:

  `character` value denoting the height of the widget in CSS units. For
  example, acceptable values include `"100%"`, `"30vh"`, or or
  `"400px"`. Note that if `height` is a percentage value, then it is
  recommended to add other map controls to a different `position` to
  avoid overlaps.

- selected:

  `character` value denoting the identifier for the sidebar pane to have
  open by default. Defaults to `NULL` such that the side bar is closed.

## Value

An updated
[`mapgl::mapboxgl()`](https://walker-data.com/mapgl/reference/mapboxgl.html)
object.

## See also

Other functions for the sidebar widget:
[`acknowledgments_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/acknowledgments_sidebar_pane.md),
[`contact_sidebar_pane()`](https://asoc-org.github.io/apscp/reference/contact_sidebar_pane.md),
[`sidebar_close()`](https://asoc-org.github.io/apscp/reference/sidebar_close.md),
[`sidebar_disable()`](https://asoc-org.github.io/apscp/reference/sidebar_disable.md),
[`sidebar_enable()`](https://asoc-org.github.io/apscp/reference/sidebar_enable.md),
[`sidebar_open()`](https://asoc-org.github.io/apscp/reference/sidebar_open.md),
[`sidebar_pane()`](https://asoc-org.github.io/apscp/reference/sidebar_pane.md),
[`sidebar_tabs()`](https://asoc-org.github.io/apscp/reference/sidebar_tabs.md)

## Examples

``` r
if (FALSE) { # interactive()
# run example app showing a sidebar widget
run_example_app("sidebar")
}
```
