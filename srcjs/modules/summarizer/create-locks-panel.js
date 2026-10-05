/** Import dependencies */
// functions to create elements
import {PieChart} from  "./pie-chart-class.js";
// functions for data wrangling
import {subsetMetricsByIds} from "./subset-metrics-by-ids.js";
// styling
import "./css/style.css";

/**
 * Create locks panel for Summarizer widget.
 * @param {object} solution - Object with solution.
 * @param {Array<string>} zones - Array of zone names.
 * @param {string} tooltipsId - Identifier for element to contain tooltips.
 * @return {void}
 */
export function createLocksPanel(solution, zones, tooltipsId) {
  // create element
  let el = document.createElement("div");
  el.classList.add("locks-results", "charts-panel");

  // add charts for each lock
  for (let i = 0; i < solution.metrics.locks.name.length; ++i) {
    // create chart
    new PieChart(
      subsetMetricsByIds(
        solution.metrics.locks,
        [solution.metrics.locks.id[i]]
      ),
      solution.metrics.locks.name[i],
      tooltipsId,
      false
    ).render(el);
  }

  // return element
  return el;
}
