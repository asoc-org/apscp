/** Import dependencies */
// functions to create elements
import {SemiDonutChart} from  "./semi-donut-chart-class.js";
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
    // create chart container
    let chartEl = document.createElement("div");
    chartEl.classList.add("semi-donut-chart", "chart");
    // create chart
    const chart = new SemiDonutChart(
      subsetMetricsByIds(
        solution.metrics.costs,
        [solution.metrics.costs.id[i]]
      ),
      solution.metrics.costs.name[0],
      tooltipsId,
      false
    );
    // render chart on element
    chart.render(chartEl);
    chartEl.chart = chart;
    el.appendChild(chartEl);
  }

  // return element
  return el;
}
