import "./css/cost-setting.css";
import {CostSetting} from "./cost-setting-class.js";
import {createNameLabel} from "../utils/element.js";
import {createProvenance} from "../utils/element.js";
import {addTooltip} from "../utils/element.js";

/**
 * Create a cost setting
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
 * @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
export function createCostSetting(cost, zones, costWeightChoices) {
  // create element
  let el = createCostSettingElement(cost, zones, costWeightChoices);
  // create new cost setting widget
  el.widget = new CostSetting(el, cost, zones, costWeightChoices);
  // return element
  return el;
}

/**
 * Create a cost setting HTML element
 * @param {Object} cost - Cost object.
 * @param {string} cost.name - Feature name.
 * @param {string} cost.zone - Zone name.
 * @param {number} cost.weight - Weight value.
 * @param {Array<string>} zones - Zone names.
* @param {Array<number>} costWeightChoices - Array of choices for cost weights.
 * @return {HTMLElement}
 */
export function createCostSettingElement(cost, zones, costWeightChoices) {
  // create element
  let el = document.createElement("div");
  el.classList.add("cost-setting");
  // populate element
  // TODO
  // return element
  return el;
}
