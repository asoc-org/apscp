import {createNameLabel} from "../utils/element.js";
import {createProvenance} from "../utils/element.js";
import {createSwitches} from "../utils/element.js";
import {addTooltip} from "../utils/element.js";

/**
 * Create a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
export function scaffoldCostSetting(cost, zones, costWeightChoices) {
  // create element
  let el = document.createElement("div");
  el.classList.add("cost-setting", "setting");
  // set data id attribute for feature id
  el.setAttribute("data-id", cost.id);
  // create feature setting header
  el.appendChild(costSettingHeader(cost, zones));
  // create feature setting weights
  el.appendChild(costSettingWeight(cost, zones, costWeightChoices));
  // return element
  return el;
}

/**
 * Create a header component for a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @return {HTMLElement}
 */
function costSettingHeader(cost, zones) {
  // create container
  let el = document.createElement("div");
  el.classList.add("header");
  // create container for switch
  let switchElement = createSwitches(1);
  switchElement.children[0].children[0].setAttribute("data-cost", cost.id);
  // create name element
  let nameElement = createNameLabel(cost);
  // create provenance element
  let provenanceElement = createProvenance(cost.layer.provenance);
  // append elements
  el.appendChild(switchElement);
  el.appendChild(nameElement);
  el.appendChild(provenanceElement);
  // return element
  return el;
}

/**
 * Create a weight component for a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
function costSettingWeight(cost, zones, choices) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("weight");
  // create label weight value
  let weightLabel = document.createElement("label");
  weightLabel.setAttribute("data-weight", cost.weight);
  weightLabel.classList.add("weight-label");
  addTooltip(
    weightLabel,
    "Weight value for cost"
  );
  // create zone button
  let zoneButton = costSettingZoneButton(cost, zones);
  // create slider element
  let slider = document.createElement("div");
  slider.classList.add("slider");
  // create slider widget
  let widget = document.createElement("div");
  widget.classList.add("noUiSlider-widget", "disable-if-inactive");
  // return element
  slider.appendChild(widget);
  el.appendChild(weightLabel);
  el.appendChild(slider);
  el.appendChild(zoneButton);
  return el;
}

/**
 * Create a zone button component for a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.zone - Zone name.
 * @param {Array<string>} zones - Array of potential zone names.
 * @return {HTMLElement}
 */
function costSettingZoneButton(cost, zones) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("zone-status", "hover-select");
  el.setAttribute("data-value", cost.zone);
  // create button
  let button = document.createElement("button");
  button.classList.add("select-button");
  button.style.backgroundColor = `var(--zone-${cost.zone}-primary)`;
  button.innerText = `${cost.zone}`;
  addTooltip(
    button,
    "Specify which zone that solutions should prefer to allocate " +
    "planning units to when considering this cost."
  );
  // initialize options
  let options = document.createElement("ul");
  options.classList.add("select-options");
  for (let i = 0; i < zones.length; ++i) {
    let optionContainer = document.createElement("li");
    let option = document.createElement("a");
    option.innerText = `${zones[i]}`;
    option.setAttribute("data-option", zones[i]);
    option.classList.add("select-option");
    option.addEventListener("click", function(event) {
      let z = event.target.getAttribute("data-option");
      button.innerText = `${z}`;
      button.style.backgroundColor = `var(--zone-${z}-primary)`;
      el.setAttribute("data-value", z);
    });
    optionContainer.appendChild(option);
    options.appendChild(optionContainer);
  }
  // return element
  el.appendChild(button);
  el.appendChild(options);
  return el;
}
