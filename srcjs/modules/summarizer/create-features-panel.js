/** Import dependencies */
// functions to create elements
import {RadialBarChart} from  "./radial-bar-chart-class.js";
// functions for data wrangling
import {subsetFeaturesMetrics} from "./subset-features-metrics.js";
// styling
import "./css/style.css";

/**
 * Create features panel for Summarizer widget.
 * @param {object} solution - Object with solution.
 * @param {Array<string>} zones - Array of colors for zones.
 * @param {Map<string,Array<string>>} themes - Map indicating which features
 * belong to each theme.
 * @param {string} tooltipsId - Identifier for element to contain tooltips.
 * @return {void}
 */
export function createFeaturesPanel(solution, themes, tooltipsId) {
  // create element
  let el = document.createElement("div");
  el.classList.add("features-results", "charts-panel");

  // add charts for each theme
  for (const theme of themes.keys()) {
    // create chart container
    let chartEl = document.createElement("div");
    chartEl.classList.add("radial-bar-chart", "chart");
    // create chart
    const chart = new RadialBarChart(
      subsetFeaturesMetrics(solution.metrics.features, themes.get(theme)),
      theme,
      tooltipsId,
      true
    );
    // render chart on element
    chart.render(chartEl);
    chartEl.chart = chart;
    el.appendChild(chartEl);
  }

  // return element
  return el;
}
