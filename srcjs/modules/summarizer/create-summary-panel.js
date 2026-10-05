/** Import dependencies */
// functions to create elements
import {PieChart} from  "./pie-chart-class.js";
import {RadialBarChart} from  "./radial-bar-chart-class.js";
// styling
import "./css/style.css";

/**
 * Create summary panel for Summarizer widget.
 * @param {object} solution - Object with solution.
 * @param {Array<string>} zones - Array of zone names.
 * @param {string} tooltipsId - Identifier for element to contain tooltips.
 * @return {void}
 */
export function createSummaryPanel(solution, zones, tooltipsId) {
  // create element
  let el = document.createElement("div");
  el.classList.add("summary-results", "charts-panel");

  // create chart
  new PieChart(
    solution.metrics.summary.coverage,
    solution.metrics.summary.coverage.name[0],
    tooltipsId,
    false
  ).render(el);

  // add chart for overall target met for each zone
  new RadialBarChart(
    solution.metrics.summary.performance,
    "Performance",
    tooltipsId,
    false
  ).render(el);

  // return element
  return el;
}
