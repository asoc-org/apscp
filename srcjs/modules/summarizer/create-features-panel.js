/** Import dependencies */
// functions to create elements
import {RadialBarChart} from  "./radial-bar-chart-class.js";
// styling
import "./css/style.css";

/**
 * Create features panel for Summarizer widget.
 * @param {object} solution - Object with solution.
 * @param {Array<string>} zones - Array of colors for zones.
 * @param {string} tooltipsId - Identifier for element to contain tooltips.
 * @return {void}
 */
export function createFeaturesPanel(solution, zones, tooltipsId) {
  // create element
  let el = document.createElement("div");
  el.classList.add("features-results", "charts-panel");

  // add place-holder content
  let span = document.createElement("span");
  span.innerText = "TODO";
  el.appendChild(span);

  // return element
  return el;
}
