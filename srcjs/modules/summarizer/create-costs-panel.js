/** Import dependencies */
// functions to create elements
import {PieChart} from  "./pie-chart-class.js";
// functions for data wrangling
import {subsetMetricsByIds} from "./subset-metrics-by-ids.js";
// styling
import "./css/style.css";

/**
 * Create costs panel for Summarizer widget.
 * @param {object} solution - Object with solution.
 * @param {Array<string>} zones - Array of zone names.
 * @param {string} tooltipsId - Identifier for element to contain tooltips.
 * @return {void}
 */
export function createCostsPanel(solution, zones, tooltipsId) {
  // create element
  let el = document.createElement("div");
  el.classList.add("costs-results", "charts-panel");

  // add charts for each cost
  for (let i = 0; i < solution.metrics.costs.name.length; ++i) {
    // create chart
    new PieChart(
      subsetMetricsByIds(
        solution.metrics.costs,
        [solution.metrics.costs.id[i]]
      ),
      solution.metrics.costs.name[i],
      tooltipsId,
      false
    ).render(el);
  }

  // return element
  return el;
}
