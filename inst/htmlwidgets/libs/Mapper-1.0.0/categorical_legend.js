// Create a categorical legend
//
// This function is used to create a categorical legend and insert it
// into a parent HTML element (i.e. `div` container).
//
// @param el HTML element within which to insert the legend.
//
// @param x `Array` containing the following `Array` elements.
// * `x.values`: `Array` of `number` objects denoting the value for each
//   legend item.
// * `x.colors`: `Array` of `string` objects containing colors for each
//   legend item (e.g., `"#112233"`).
// * `x.labels`: `Array` of `string` objects containing label for each
//   legend item.
// * `x.units`: `String` with units.
//
// @details
// Note that `x.values`, `x.colors`, and `x.units` must all have exactly the
// same length.
//
// @return `true` indicating success.
function categorical_legend(el, x) {
  // initialize lenged
  let l = document.createElement("div");
  l.className = "categorical-legend";
  l.setAttribute("data-toggle", "tooltip");
  l.setAttribute("data-placement", "bottom");
  l.setAttribute("data-delay", "{\"show\":500, \"hide\":100}");
  l.setAttribute("data-container", "body");
  l.setAttribute(
    "title",
    "This layer has categorical data and colors indicate each category."
  );

  // if needed, force values into an array (if legend only has 1 value)
  if (!Array.isArray(x.labels)) {
    x.labels = [x.labels]
  }

  // if needed, force values into an array (if legend only has 1 value)
  if (!Array.isArray(x.values)) {
    x.values = [x.values]
  }

  // if needed, force colors into an array (if legend only has 1 color)
  if (!Array.isArray(x.colors)) {
    x.colors = [x.colors]
  }

  // create legend
  for (let i = 0; i < x.values.length; ++i) {

    /// create item to add to legend
    let item = document.createElement("div");
    item.className = "item";

    /// create text component to display the text
    let item_label = document.createElement("label");
    item_label.className = "item-label disable-if-inactive";
    item_label.innerText = `${x.values[i]}`;

    /// create symbol component to display the color
    let item_symbol = document.createElement("div");
    item_symbol.className = "item-symbol disable-if-inactive";
    item_symbol.style.backgroundColor = x.colors[i];
    item_symbol.style.color = x.colors[i];

    /// add item to legend
    item.appendChild(item_symbol);
    item.appendChild(item_label);
    l.appendChild(item);
  }

  // add legend to parent container
  el.appendChild(l);

  // return true
  return true;
}
