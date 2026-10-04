/** Import dependencies */
// functions to create elements
import {SemiDonutChart} from  "./semi-donut-chart-class.js";
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

  // add chart for zone coverage
  let chart1El = document.createElement("div");
  chart1El.classList.add("semi-donut-chart", "chart");
  // create chart
  let chart1 = new SemiDonutChart(
    solution.metrics.summary.coverage,
    solution.metrics.summary.coverage.name[0],
    tooltipsId,
    false
  );
  // render chart on element
  chart1.render(chart1El);
  chart1El.chart = chart1;
  el.appendChild(chart1El);

  // add chart for overall target met for each zone
  let chart2El = document.createElement("div");
  chart2El.classList.add("radial-bar-chart", "chart");
  // create chart
  const chart2 = new RadialBarChart(
    solution.metrics.summary.performance,
    "Performance",
    tooltipsId,
    false
  );
  // render chart on element
  chart2.render(chart2El);
  chart2El.chart = chart2;
  el.appendChild(chart2El);

  // return element
  return el;
}
