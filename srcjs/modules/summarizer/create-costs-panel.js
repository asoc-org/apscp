/** Import dependencies */
// functions to create elements
import {SemiDonutChart} from  "./semi-donut-chart-class.js";
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
      solution.settings.costs.name[i],
      solution.metrics.costs.total[i],
      solution.metrics.costs.units[i],
      Object.fromEntries(
        Object.keys(solution.metrics.costs.held).map(
          (x) => [x, solution.metrics.costs.held[x][i]]
        )
      ),
      Object.fromEntries(
        Object.keys(solution.metrics.costs.locked).map(
          (x) => [x, solution.metrics.costs.locked[x][i]]
        )
      ),
      zones,
      tooltipsId,
      true,
    );
    // render chart on element
    chart.render(chartEl);
    chartEl.chart = chart;
    el.appendChild(chartEl);
  }

  // return element
  return el;
}
