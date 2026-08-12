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
  el.appendChild(costSettingBody(cost, zones, costWeightChoices));
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
  el.classList.add("cost-header", "header");
  // create container for switch
  let switchElement = createSwitches(1);
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
 * Create a body component for a cost setting.
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
function costSettingBody(cost, zones, choices) {
  // initialize element
  let el = document.createElement("div")
  el.classList.add("cost-body");
  // create label weight value
  let label = document.createElement("label");
  label.classList.add("weight-label");
  addTooltip(label, "Weight value for cost");
  // create element for hover select
  let select = document.createElement("div");
  select.classList.add("zone-status");
  addTooltip(
    select,
    "Specify which zone that solutions should prefer to allocate " +
    "planning units to when considering this cost."
  );
  // create slider element
  let slider = document.createElement("div");
  slider.classList.add("weight-slider");
  // return element
  el.appendChild(label);
  el.appendChild(slider);
  el.appendChild(select);
  return el;
}
