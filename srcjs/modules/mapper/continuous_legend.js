// Create a continuous legend
//
// This function is used to creaate a continuous legend and insert it
// into a parent HTML element (i.e. `div` container).
//
// @param el HTML element within which to insert the legend.
//
// @param x `Array` containing the following elements:
// * `x.values`: `Array` of `number` objects for creating the color bar.
// * `x.colors`: `Array` of `string` objects containing colors for the color
//   bar (e.g. `"#112233"`).
//   Note that `x.values` and `x.colors` must have the same length.
// * `x.breaks`: `Array` of `number` objects where labels should be shown
//   on the legend.
// * `x.labels`: `Array` of `string` objects containing labels.
//   Note that `x.breaks` and `x.labels` must have the same length.
// * `x.units`: `String` with units.
//
// @return A `true` indicating success.
function continuous_legend(el, x) {
  // initialize legend
  let l = document.createElement("div");
  l.className = "continuous-legend";

  // flex container for color-bar and units
  let l_flex = document.createElement("div");
  l_flex.className = "continuous-legend-flex";

  // compute values
  let max_value = Math.max(...x.values);
  let min_value = Math.min(...x.values);
  let range_value = max_value - min_value;

  // create color bar
  let colorbar = document.createElement("div");
  colorbar.className = "color-bar";
  let colorbar_background = "linear-gradient(to left";
  let colorbar_position = undefined;
  x.colors = x.colors.reverse();
  for (let i = 0; i < x.colors.length; ++i) {
    colorbar_position = ((x.values[i] - min_value) / range_value) * 100;
    colorbar_background +=
      `, ${x.colors[i]} ${colorbar_position}%`;
  }
  colorbar_background += ")";
  colorbar.style.backgroundColor = x.colors[0];
  colorbar.style.backgroundImage = colorbar_background;

  // create container for units
  let colorbar_units = document.createElement("div")
  colorbar_units.className = "colorbar-units";
  colorbar_units.innerText = `${units}`

  // create container for ticks and labels
  let items = document.createElement("div");
  items.className = "items";
  l.setAttribute("data-toggle", "tooltip");
  l.setAttribute("data-placement", "bottom");
  l.setAttribute("data-delay", "{\"show\":500, \"hide\":100}");
  l.setAttribute("data-container", "body");
  l.setAttribute(
    "title",
    "This layer has continuous data and the " +
    "legend shows the range of colors used for display"
  );

  // create axis ticks and labels
  for (let i = 0; i < x.breaks.length; ++i) {
    // create container for i'th tick and label
    let item = document.createElement("div");
    item.className = "item";
    item.style.left = ((x.breaks[i] - min_value) / range_value) + "%";

    // create tick
    let tick = document.createElement("div");
    tick.className = "tick";
    tick.innerText = " ";
    item.appendChild(tick);

    // create label
    let label = document.createElement("label");
    label.className = "colorbar-label";
    label.innerText = `${x.label[i]}`;
    item.appendChild(label);

    // append to container
    items.appendChild(item);
  }

  // construct legend
  l.appendChild(l_flex)
  l_flex.appendChild(colorbar)
  l_flex.appendChild(colorbar_units)
  l.appendChild(items);

  // add legend to parent container
  el.appendChild(l);

}
