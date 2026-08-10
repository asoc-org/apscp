import {createNameLabel} from "../utils/element.js";
import {createProvenance} from "../utils/element.js";
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
  el.classList.add("feature-setting", "hidden-setting");
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
  el.classList.add("header");
  // create buttons to switch off for each zone
  let switchContainer = document.createElement("div");
  switchContainer.classList.add("switches");
  for (let i = 0; i < zones.length; ++i) {
    let d = document.createElement("div");
    d.classList.add("form-check", "form-switch", "p-0", "m-0");
    let x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    x.classList.add("form-check-input", "switch", "ms-0");
    x.setAttribute("role", "switch");
    x.setAttribute("data-zone", zones[i]);
    x.setAttribute("data-feature", feature.id);
    x.checked = true;
    x.style.setProperty("--switch-primary", `var(--zone-${zones[i]}-primary)`);
    d.appendChild(x);
    switchContainer.appendChild(d);
  }
  // create name element
  let nameElement = document.createElement("div");
  nameElement.classList.add("name-container");
  nameElement.appendChild(createNameLabel(feature));
  // create provenance element
  let provenanceElement = document.createElement("div");
  provenanceElement.classList.add("provenance");
  provenanceElement.appendChild(createProvenance(feature.layer.provenance));
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
    let weightStatus = featureSettingWeightZoneButton(
      zones[i], feature.zone_weights[i], choices
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
  // create container with status bars and slider widget
  let sliderContainer = document.createElement("div");
  sliderContainer.classList.add("zone-slider");
  addTooltip(sliderContainer, "Set targets to generate solutions");
  // create slider element
  let slider = document.createElement("div");
  slider.classList.add("slider");
  slider.id = `${feature.id}-slider`;
  // create bar cap element
  let barCap = document.createElement("div");
  barCap.classList.add("bar-cap");
  slider.appendChild(barCap);
  // create bars element
  let bars = document.createElement("div");
  bars.classList.add("bars");
  slider.appendChild(bars);
  // create bars for each zone to show held values
  for (let i = 0; i < zones.length; ++i) {
    let bar = document.createElement("div");
    bar.classList.add("bar-held");
    bars.appendChild(bar);
  }
  // create slider widget
  let widget = document.createElement("div");
  widget.classList.add("noUiSlider-widget", "disable-if-inactive");
  widget.id = `${feature.id}-slider-widget`;
  // return element
  slider.appendChild(widget);
  el.appendChild(slider);
  return el;
}

/**
 * Create a zone weight button component for a feature status
 * @param {string} zone - Zone name.
 * @param {number} value - Default weight value.
 * @param {Array<Number>} choices - Array of numbers for weight choices.
 * @return {HTMLElement}
 */
function featureSettingWeightZoneButton(zone, value, choices) {
  // initialize element
  let el = document.createElement("div");
  el.classList.add("weight-status");
  el.setAttribute("data-weight", value);
  // create button
  let button = document.createElement("button");
  button.classList.add("weight-button");
  button.setAttribute("data-zone", zone);
  button.style.backgroundColor = `var(--zone-${zone}-primary)`;
  button.innerText = `Weight: ${value * 100}%`;
  addTooltip(
    button,
    `Weight for the ${zone} zone to generate solutions`
  );
  // initialize options
  let options = document.createElement("ul");
  options.classList.add("weight-options");
  for (let i = 0; i < choices.length; ++i) {
    let optionContainer = document.createElement("li");
    let option = document.createElement("a");
    option.innerText = `${choices[i] * 100}%`;
    option.setAttribute("data-value", choices[i]);
    option.classList.add("weight-option");
    option.addEventListener("click", function(event) {
      button.innerText =
        `Weight: ${event.target.getAttribute("data-value") * 100}%`;
      el.setAttribute("data-weight", event.target.getAttribute("data-value"));
    });
    optionContainer.appendChild(option);
    options.appendChild(optionContainer);
  }
  // return element
  el.appendChild(button);
  el.appendChild(options);
  return el;
}
