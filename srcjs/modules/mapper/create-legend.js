import "./css/categorical-legend.css";
import "./css/continuous-legend.css";

/**
* Create a categorical legend.
* @param {Object} x - Object with items to display in legend.
* @param {Array<number>} x.values - Set of values denoting the numeric
* values for each legend item. Note that these values are not shown
* in the legend.
* @param {Array<string>} x.colors - Set of values denoting the color
* for each legend item.
* Note that this must have the same length as {@link x.values}.
* @param {Array<string>} x.labels - Set of values denoting the text label
* for each legend item.
* Note that this must have the same length as {@link x.values}.
* @param {string} x.units - Units for the legend items.
* @return {HTMLElement}
*/
function createCategoricalLegend(x) {
  // initialize legend
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

  // if needed, force values into an array
  if (!Array.isArray(x.labels)) {
    x.labels = [x.labels]
  }
  if (!Array.isArray(x.values)) {
    x.values = [x.values]
  }
  if (!Array.isArray(x.colors)) {
    x.colors = [x.colors]
  }

  // create legend
  for (let i = 0; i < x.values.length; ++i) {
    // create item to add to legend
    let item = document.createElement("div");
    item.className = "item";
    // create text component to display the text
    let itemLabel = document.createElement("label");
    itemLabel.className = "item-label disable-if-inactive";
    itemLabel.innerText = `${x.values[i]}`;
    // create symbol component to display the color
    let itemSymbol = document.createElement("div");
    itemSymbol.className = "item-symbol disable-if-inactive";
    itemSymbol.style.backgroundColor = x.colors[i];
    itemSymbol.style.color = x.colors[i];
    // add item to legend
    item.appendChild(itemSymbol);
    item.appendChild(itemLabel);
    l.appendChild(item);
  }

  // return legend
  return l;
}

/**
* Create a continuous legend.
* @param {Object} x - Object with items to display in legend.
* @param {Array<number>} x.values - Set of values that define increments
* for the color bar.
* @param {Array<string>} x.colors - Set of values that denote a color for each
* increment in the color bar.
* Note that this must have the same length as {@link x.values}.
* @param {Array<number>} x.breaks - Set of values that denote positions for the
* text labels to accompany the color bar.
* @param {Array<string>} x.labels - Set of values that denote text label
* to accompany the color bar.
* Note that this must have the same length as {@link x.breaks}.
* @param {string} x.units - Units for the legend items.
* @return {HTMLElement}
*/
function createContinuousLegend(x) {
  // initialize legend
  let l = document.createElement("div");
  l.className = "continuous-legend";

  // container for color-bar and units
  let colorbarContainer = document.createElement("div");
  colorbarContainer.className = "continuous-legend-flex";

  // compute values
  let maxValue = Math.max(...x.values);
  let minValue = Math.min(...x.values);
  let rangeValue = maxValue - minValue;

  // create color bar
  let colorbar = document.createElement("div");
  colorbar.className = "color-bar";
  let colorbarBackground = "linear-gradient(to left";
  let colorbarPosition = undefined;
  x.colors = x.colors.reverse();
  for (let i = 0; i < x.colors.length; ++i) {
    colorbarPosition = ((x.values[i] - minValue) / rangeValue) * 100;
    colorbarBackground +=
      `, ${x.colors[i]} ${colorbarPosition}%`;
  }
  colorbarBackground += ")";
  colorbar.style.backgroundColor = x.colors[0];
  colorbar.style.backgroundImage = colorbarBackground;

  // create container for units
  let colorbarUnits = document.createElement("div")
  colorbarUnits.className = "colorbar-units";
  colorbarUnits.innerText = `${units}`

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
    item.style.left = ((x.breaks[i] - minValue) / rangeValue) + "%";
    // create tick
    let itemTick = document.createElement("div");
    itemTick.className = "tick";
    itemTick.innerText = " ";
    // create label
    let itemLabel = document.createElement("label");
    itemLabel.className = "colorbar-label";
    itemLabel.innerText = `${x.label[i]}`;
    // append to tick and label to item container
    item.appendChild(itemTick);
    item.appendChild(itemLabel);
    items.appendChild(item);
  }

  // construct legend
  colorbarContainer.appendChild(colorbar);
  colorbarContainer.appendChild(colorbarUnits);
  l.appendChild(colorbarContainer);
  l.appendChild(items);

  // return legend
  return l;
}

/**
* Create a legend.
* @param {Object} x - Object with items to display in legend.
* See {@link createContinuousLegend} and {@link createCategoricalLegend}
* for additional parameter details.
* @param {string} x.class - Value indicating the desired type of legend.
* Acceptable values include `"ContinuousLegend"` and `"CategoricalLegend"`.
* @return {HTMLElement}
*/
function createLegend(x) {
  if (x.class === "ContinuousLegend") {
    return createContinuousLegend(x);
  } else if (x.class === "CategoricalLegend") {
    return createCategoricalLegend(x);
  }
}
