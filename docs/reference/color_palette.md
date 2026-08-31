# Color palette

Generate colors using the name of a color palette.

## Usage

``` r
color_palette(x, n = NULL)
```

## Arguments

- x:

  \`character\` name of the color palette (see Details for available
  options).

- n:

  \`integer\` number of colors required. A \`NULL\` argument can also be
  used to obtain a default number of colors. If a \`NULL\` argument is
  supplied and the palette has a limited number of colors, then the
  maximum number of colors is returned. Otherwise, if a \`NULL\`
  argument is supplied and the palette does not have a limited number of
  colors, then a 20 colors are returned. The default argument is
  \`NULL\`.

## Details

This function can be used to generate colors using palettes provided by
the RColorBrewer and viridisLite packages. If colors are from multiple
palettes, they can be supplied as a single \`character\` object
delimited by semicolon (\`";"\`) characters.

Specifically, available palettes include: \* \`"viridis"\` (see
\[viridisLite::viridis()\]) \* \`"magma"\` (see
\[viridisLite::magma()\]) \* \`"plasma"\` (see
\[viridisLite::plasma()\]) \* \`"inferno"\` (see
\[viridisLite::inferno()\]) \* \`"cividis"\` (see
\[viridisLite::cividis()\]) \* \`"mako"\` (see \[viridisLite::mako()\])
\* \`"rocket"\` (see \[viridisLite::rocket()\]) \* \`"turbo"\` (see
\[viridisLite::turbo()\]) \* \`"BrBG\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"PiYG\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"PRGn\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"PuOr\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"RdBu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"RdGy\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"RdYlBu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"RdYlGn\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Spectral\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Accent\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Dark2\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Paired\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Pastel1\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Pastel2\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Set1\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Set2\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Set3\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Blues\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"BuGn\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"BuPu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"GnBu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Greens\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Greys\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Oranges\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"OrRd\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"PuBu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"PuBuGn\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"PuRd\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Purples\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"RdPu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"Reds\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"YlGn\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"YlGnBu\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"YlOrBr\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"YlOrRd\`" (see
\[RColorBrewer::brewer.pal()\]) \* \`"random"\` (the above palettes are
randomly used to generate colors)

## See also

Other misc:
[`as.data.frame.JsDataFrame()`](https://asoc-org.github.io/apscp/reference/as.data.frame.JsDataFrame.md),
[`as.list.JsDataFrameList()`](https://asoc-org.github.io/apscp/reference/as.list.JsDataFrameList.md),
[`is_relative_path()`](https://asoc-org.github.io/apscp/reference/is_relative_path.md),
[`read_matrix()`](https://asoc-org.github.io/apscp/reference/read_matrix.md),
[`read_sf_data()`](https://asoc-org.github.io/apscp/reference/read_sf_data.md),
[`write_matrix()`](https://asoc-org.github.io/apscp/reference/write_matrix.md),
[`write_sf_data()`](https://asoc-org.github.io/apscp/reference/write_sf_data.md)

## Examples

``` r
# obtain 5 colors from the Greens palette
color_palette("Greens", 5)
#> Error in color_palette("Greens", 5): could not find function "color_palette"

# obtain all colors from the Greens palette
color_palette("Greens", NULL)
#> Error in color_palette("Greens", NULL): could not find function "color_palette"

# obtain 15 colors using the Set1 and Pastel1 palettes
color_palette("Set1;Pastel1", 15)
#> Error in color_palette("Set1;Pastel1", 15): could not find function "color_palette"

# obtain all colors from the plasma palette
color_palette("plasma", NULL)
#> Error in color_palette("plasma", NULL): could not find function "color_palette"

# obtain all colors from a random palette
color_palette("random", NULL)
#> Error in color_palette("random", NULL): could not find function "color_palette"

# obtain 5 colors from random palette(s)
color_palette("random", 5)
#> Error in color_palette("random", 5): could not find function "color_palette"
```
