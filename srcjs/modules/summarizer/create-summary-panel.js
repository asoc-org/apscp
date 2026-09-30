/** Import dependencies */
// styling
import "./css/style.css";

/**
 * Create summary panel for Summarizer widget.
 * @param {object} solution - Object with solution.
 * @param {Array<string>} zoneColors - Array of colors for zones.
 * @param {string} tooltipsId - Identifier for element to contain tooltips.
 * @return {void}
 */
export function createSummaryPanel(solution, zoneColors, tooltipsId) {
  // create element
  let el = document.createElement("div");
  el.classList.add("summary-results");

  // add place-holder content
  let span = document.createElement("span");
  span.innerText = "TODO";
  el.appendChild(span);

  // return element
  return el;
}
