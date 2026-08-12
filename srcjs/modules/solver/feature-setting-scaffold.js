import {createNameLabel} from "../utils/element.js";
import {createProvenance} from "../utils/element.js";
import {createSwitches} from "../utils/element.js";
import {addTooltip} from "../utils/element.js";

/**
 * Scaffold a feature setting element
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {Object} feature.layer - Layer object.
 * @param {Array<number>} feature.zone_targets - Initial target values.
 * @param {Array<number>} feature.zone_weights - Initial weights values.
 * @param {Array<Object>} feature.themes - Array of theme object.s
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<number>} featureTargetChoices - Array of numbers used to
 * define the potential values for setting feature targets.
 * @param {Array<number>} featureWeightChoices - Array of numbers used to
 * define the potential values for setting feature weights.
 * @return {HTMLElement}
 */
export function scaffoldFeatureSetting(
 feature, zones, featureTargetChoices, featureWeightChoices
) {
  // create element
  let el = document.createElement("div");
  el.classList.add("feature-setting", "setting", "hidden-setting");
  // set data id attribute for feature id
  el.setAttribute("data-id", feature.id);
  // create feature setting header
  el.appendChild(featureSettingHeader(feature, zones));
  // create feature setting statuses and weight buttons
  el.appendChild(featureSettingStatuses(feature, zones, featureWeightChoices));
  // create feature setting targets
  el.appendChild(featureSettingTargets(feature, zones, featureTargetChoices));
  // return element
  return el;
}

/**
 * Create a header component for a feature setting
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @return {HTMLElement}
 */
function featureSettingHeader(feature, zones) {
  // create container
  let el = document.createElement("div");
  el.classList.add("feature-header", "header");
  // create switches for each zone
  let switchContainer = createSwitches(zones.length);
  for (let i = 0; i < zones.length; ++i) {
    switchContainer.children[i].style.setProperty(
      "--switch-primary",
      `var(--zone-${zones[i]}-primary)`
    );
  }
  // create name element
  let nameElement = createNameLabel(feature);
  // create provenance element
  let provenanceElement = createProvenance(feature.layer.provenance);
  // append elements
  el.appendChild(switchContainer);
  el.appendChild(nameElement);
  el.appendChild(provenanceElement);
  // return element
  return el;
}

/**
 * Create a statuses component for a feature setting
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<Number>} choices - Array of numbers for weight choices.
 * @return {HTMLElement}
 */
function featureSettingStatuses(feature, zones, choices) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("statuses");
  // create container to show zone statuses
  for (let i = 0; i < zones.length; ++i) {
    // create container for held status
    let heldStatus = document.createElement("div");
    heldStatus.classList.add("held-status");
    // create icon to show held status
    let heldStatusIcon = document.createElement("div");
    heldStatusIcon.classList.add("held-symbol");
    heldStatusIcon.style.backgroundColor = `var(--zone-${zones[i]}-secondary)`;
    heldStatusIcon.style.color = `var(--zone-${zones[i]}-secondary)`;
    // create label to show held status
    let heldStatusLabel = document.createElement("label");
    heldStatusLabel.setAttribute("data-zone", zones[i]);
    heldStatusLabel.classList.add("held-label");
    addTooltip(
      heldStatusLabel,
      `Coverage by Locks for the ${zones[i]} zone`
    );
    // create container for target status
    let targetStatus = document.createElement("div");
    targetStatus.classList.add("target-status");
    targetStatus.setAttribute("data-target", 0);
    // create icon to show held status
    let targetStatusIcon = document.createElement("div");
    targetStatusIcon.classList.add("target-symbol");
    targetStatusIcon.style.backgroundColor =
      `var(--zone-${zones[i]}-primary)`;
    targetStatusIcon.style.color =
      `var(--zone-${zones[i]}-primary)`;
    // create label to show target status
    let targetStatusLabel = document.createElement("label");
    targetStatusLabel.classList.add("target-label");
    targetStatusLabel.setAttribute("data-zone", zones[i]);
    targetStatusLabel.innerText =
      `Target: ${Math.round(feature.zone_targets[i] * 100)}%`;
    addTooltip(
      targetStatusLabel,
      `Target for the ${zones[i]} zone to generate solutions`
    );
    // create container for weight status
    let weightStatus = document.createElement("div");
    weightStatus.classList.add("weight-status");
    addTooltip(
      weightStatus,
      `Weight for the ${zones[i]} zone to generate solutions`
    );
    // assemble containers
    heldStatus.appendChild(heldStatusIcon);
    heldStatus.appendChild(heldStatusLabel);
    targetStatus.appendChild(targetStatusIcon);
    targetStatus.appendChild(targetStatusLabel);
    el.appendChild(heldStatus);
    el.appendChild(targetStatus);
    el.appendChild(weightStatus);
  }
  // return element
  return el;
}

/**
 * Create a targets component for a feature setting
 * @param {Object} feature - Feature object.
 * @param {string} feature.name - Feature object.
 * @param {string} feature.id - Unique identifier for feature.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<Number>} choices - Array of numbers for target choices.
 * @return {HTMLElement}
 */
function featureSettingTargets(feature, zones, choices) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("targets");
  addTooltip(el, "Set targets to generate solutions");
  // create body container
  let targetsBody = document.createElement("div");
  targetsBody.classList.add("targets-body");
  // create status bar container
  let status = document.createElement("div");
  status.classList.add("status-bar");
  // create slider container
  let slider = document.createElement("div");
  slider.classList.add("target-slider");
  // return element
  targetsBody.appendChild(status);
  targetsBody.appendChild(slider);
  el.appendChild(targetsBody);
  return el;
}
