import {createNameLabel} from "../utils/element.js";
import {createProvenance} from "../utils/element.js";
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
  el.classList.add("cost-setting");
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
  let switchContainer = document.createElement("div");
  switchContainer.classList.add("switches");
  // create switch form
  let switchForm = document.createElement("div");
  switchForm.classList.add("form-check", "form-switch", "p-0", "m-0");
  // create switch input
  let switchInput = document.createElement("input");
  switchInput.setAttribute("type", "checkbox");
  switchInput.classList.add("form-check-input", "switch", "ms-0");
  switchInput.setAttribute("role", "switch");
  switchInput.setAttribute("data-cost", cost.id);
  switchInput.checked = true;
  // append switch elements
  switchForm.appendChild(switchInput);
  switchContainer.appendChild(switchForm);
  // create name element
  let nameElement = document.createElement("div");
  nameElement.classList.add("name-container");
  nameElement.appendChild(createNameLabel(cost));
  // create provenance element
  let provenanceElement = document.createElement("div");
  provenanceElement.classList.add("provenance");
  provenanceElement.appendChild(createProvenance(cost.layer.provenance));
  // append elements
  el.appendChild(switchContainer);
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
  el.classList.add("zone-status");
  el.setAttribute("data-zone", cost.zone);
  // create button
  let button = document.createElement("button");
  button.classList.add("zone-button");
  button.style.backgroundColor = `var(--zone-${cost.zone}-primary-color)`;
  button.innerText = `${cost.zone}`;
  addTooltip(
    button,
    "Specify which zone that solutions should prefer to allocate" +
    "planning units to when considering this cost."
  );
  // initialize options
  let options = document.createElement("ul");
  options.classList.add("zone-options");
  for (let i = 0; i < zones.length; ++i) {
    let optionContainer = document.createElement("li");
    let option = document.createElement("a");
    option.innerText = `${zones[i]}`;
    option.setAttribute("data-value", zones[i]);
    option.classList.add("zone-option");
    option.addEventListener("click", function(event) {
      let z = event.target.getAttribute("data-value");
      button.innerText = `${z}`;
      button.style.backgroundColor = `var(--zone-${z}-primary-color)`;
      el.setAttribute("data-zone", z);
    });
    optionContainer.appendChild(option);
    options.appendChild(optionContainer);
  }
  // return element
  el.appendChild(button);
  el.appendChild(options);
  return el;
}
