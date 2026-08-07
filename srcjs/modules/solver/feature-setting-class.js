import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import {scaffoldFeatureSetting} from "./feature-setting-scaffold.js";
import "./css/feature-setting.css";
import {order, roundToDigits} from "../utils/math.js";

/** Class representing the setting for a single feature. */
export class FeatureSetting {

  // public fields

  /**
   * Feature identifier.
   * @type {string}
   */
  id;

  /**
   * Feature name.
   * @type {string}
   */
  name;

  /**
   * Feature column.
   * @type {string}
   */
  column;

  /**
  * HTML element.
  * @type {HTMLElement}
  */
  element;

  // private fields

  /**
   * List of HTML elements that contain switches for feature.
   * @type {NodeList<HTMLElement>}
   */
  _zoneSwitches;

  /**
   * List of HTML elements that contain statuses for amount held by lock in
   * planning units.
   * @type {NodeList<HTMLElement>}
   */
  _heldStatuses;

  /**
   * List of HTML elements that contain bars for amount held by lock in
   * planning units.
   * @type {NodeList<HTMLElement>}
   */
  _heldBars;

  /**
   * HTML element that contains the bar cap.
   * @type {HTMLElement}
   */
  _barCap;

  /**
   * HTML element that contains slider for target setting.
   * @type {HTMLElement}
   */
  _targetSlider;

  /**
   * Array of HTML elements that contain status for target setting.
   * @type {Array<HTMLElement>}
   */
  _targetStatuses;

  /**
   * Array of HTML element that contains status for weight setting.
   * @type {Array<HTMLElement>}
   */
  _weightStatuses;

  /**
   * Array of previous slider values.
   * @type {Array<number>}
   */
  _previousSliderValues;

  /**
   * Array of initial slider values.
   * @type {Array<number>}
   */
  _initialSliderValues;

  /**
   * Array of initial weight values.
   * @type {Array<number>}
   */
  _initialWeightValues;

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Slider range.
   * @type {object}
   */
  _sliderRange;

  /**
   * Slider step.
   * @type {number}
   */
  _sliderStep;

  /**
  * Construct a new FeatureSetting object.
 * @param {Object} feature - Feature object.
 * @param {string} feature.id - Unique identifier.
 * @param {string} feature.name - Name.
 * @param {string} feature.layer.column - Column with data.
 * @param {Array<number>} feature.zone_targets - Initial target values.
 * @param {Array<number>} feature.zone_weights - Initial weights values.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<number>} featureTargetChoices - Array of numbers used to
 * define the potential values for setting feature targets.
 * @param {Array<number>} featureWeightChoices - Array of numbers used to
 * define the potential values for setting feature weights.
  * @return {void}
  */
  constructor(
    feature, zones, featureTargetChoices, featureWeightChoices
  ) {
    // initialize public fields
    this.id = feature.id;
    this.name = feature.name;
    this.column = feature.layer.column;
    this.element = scaffoldFeatureSetting(
      feature, zones, featureTargetChoices, featureWeightChoices
    );

    // initialize private fields
    this._zoneSwitches = this.element.querySelectorAll(".switch");
    this._heldStatuses = this.element.querySelectorAll(".held-status");
    this._heldBars = this.element.querySelectorAll(".bar-held");
    this._barCap = this.element.querySelector(".bar-cap");
    this._targetStatuses = Array.from(
      this.element.querySelectorAll(".target-status")
    );
    this._weightStatuses = Array.from(
      this.element.querySelectorAll(".weight-status")
    );
    this._targetSlider = this.element.querySelector(".noUiSlider-widget");
    this._initialSliderValues = convertTargetsToSliderValues(
      feature.zone_targets
    );
    this._previousSliderValues = this._initialSliderValues;
    this._initialWeightValues = feature.zone_weights;
    this._previousWeightValues = feature.zone_weights;
    this._zones = zones;
    this._sliderRange = {
      "min": featureTargetChoices[0],
      "max": featureTargetChoices[1]
    };
    this._sliderStep = featureTargetChoices[2];

    // set zone held bars
    this.setHeld(feature.zone_helds);

    // define options for slider
    let connectOption = Array(zones.length + 1).fill(true);
    connectOption[zones.length] = false;

    // initialize target slider
    noUiSlider.create(this._targetSlider, {
      range: this._sliderRange,
      step: this._sliderStep,
      behaviour: "unconstrained-drag",
      connect: connectOption,
      start: this._initialSliderValues,
      handleAttributes: zones.map(x => {return {"data-zone": x}})
    });

    // color the slider bars
    let connectElements = this._targetSlider.querySelectorAll(".noUi-connect");
    for (let i = 0; i < zones.length; ++i) {
      connectElements[i].style.background =
        `var(--zone-${zones[i]}-primary-color)`;
    }
    // color the handles
    let handleElements = this._targetSlider.querySelectorAll(".noUi-handle");
    for (let i = 0; i < zones.length; ++i) {
      handleElements[i].style.background =
        `var(--zone-${zones[i]}-primary-color)`;
    }

    // set event handlers for target slider
    this._targetSlider.noUiSlider.on("update", (values, handle) => {
      // convert values to numbers
      values = values.map(Number);
      // update connect elements to display correct colors between handles
      let o = order(values);
      for (let i = 0; i < values.length; ++i) {
        connectElements[i].style.background =
          `var(--zone-${zones[o[i]]}-primary-color)`;
        connectElements[i].style.transform =
          `translate(0%, 0px) scale(${values[o[i]]}, 1)`;
        connectElements[i].style["z-index"] = values.length - i;
      }
      // update target labels
      values = convertSliderValuesToTargets(values);
      for (let i = 0; i < values.length; ++i) {
        this._targetStatuses[i].setAttribute("data-target", values[i]);
        this._targetStatuses[i].children[1].innerText =
          `Target: ${Math.round(values[i] * 100)}%`;
      }
    });

    // set event handlers for switches
    this._zoneSwitches.forEach((x) => {
      x.addEventListener("change", (event) => {
        let i = this._zones.indexOf(event.target.getAttribute("data-zone"));
        if (event.target.checked) {
          // restore previous values
          this._setWeightValue(i, this._previousWeightValues[i]);
          this._setSliderHandle(i, this._previousSliderValues[i]);
          this._enableZone(i);
        } else {
          this._previousSliderValues[i] = this._getSliderHandle(i);
          this._previousWeightValues[i] = this._getWeightValue(i);
          this._disableZone(i);
          this._setWeightValue(i, 0);
          this._setSliderHandle(i, 0);
        }
      })
    });

  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // append to element
    element.appendChild(this.element);
  }

  /**
  * Enable feature setting for zone.
  * @param {string} - Zone name.
  * @return {void}
  */
  enableZone(zone) {
    let i = this._zones.indexOf(zone);
    if (i > -1) {
      this._enableZone(i);
    }
  }

  /**
  * Disable feature setting for zone.
  * @param {string} - Zone name.
  * @return {void}
  */
  disableZone(zone) {
    let i = this._zones.indexOf(zone);
    if (i > -1) {
      this._disableZone(i);
    }
  }

  /**
  * Get feature targets.
  * @return {Array<number>}
  */
  getTargets() {
    return this._targetStatuses.map(x => {return x.dataset.target});
  }

  /**
  * Get feature weights.
  * @return {Array<number>}
  */
  getWeights() {
    return this._weightStatuses.map(x => {return x.dataset.weight});
  }

  /**
  * Set amount held for each feature.
  * @param {Array<number>} - New held values.
  * @return {void}
  */
  setHeld(values) {
    // calculate order for zones
    let o = order(values);
    // convert to slider values for setting bar widths
    let v = convertTargetsToSliderValues(values);
    // update bar cap style
    this._barCap.style.color =
      `var(--zone-${this._zones[o[0]]}-secondary-color)`;
    this._barCap.style.background =
      `var(--zone-${this._zones[o[0]]}-secondary-color)`;
    // update labels and bars
    for (let i = 0; i < values.length; ++i) {
      // set held label
      this._heldStatuses[i].children[1].innerText =
        `Lock: ${Math.min(Math.round(values[i] * 100), 100)}%`;
      // set held bar
      this._heldBars[o[i]].style.width =
        `${Math.min(Math.round(v[i] * 100), 100)}%`;
      this._heldBars[o[i]].style["z-index"] = values.length - i;
      this._heldBars[o[i]].style.background =
        `var(--zone-${this._zones[i]}-secondary-color)`;
    }
  }

  /**
  * Increment the target for a zone.
  * @param {string} - Zone name.
  * @return {void}
  */
  incrementZoneTarget(zone) {
    let i = this._zones.indexOf(zone);
    this._setSliderHandle(
      i,
      min(this._getSliderHandle(i) + this._sliderStep, this._sliderRange.max)
    );
  }

  /**
  * Decrement the target for a zone.
  * @param {string} - Zone name.
  * @return {void}
  */
  decrementZoneTarget(zone) {
    let i = this._zones.indexOf(zone);
    this._setSliderHandle(
      i,
      max(this._getSliderHandle(i) - this._sliderStep, this._sliderRange.min)
    );
  }

  // Private methods

  /**
  * Enable feature setting for zone based on index.
  * @param {number} - Index.
  * @return {void}
  */
  _enableZone(i) {
    // enable target status for zone
    this._targetStatuses[i].removeAttribute("disabled");
    // enable weight status zone
    this._weightStatuses[i].removeAttribute("disabled");
    // enable target slider for zone
    this._targetSlider.noUiSlider.enable(i);
  }

  /**
  * Disable feature setting for zone on index.
  * @param {number} - Index.
  * @return {void}
  */
  _disableZone(i) {
    // disable target status for zone
    this._targetStatuses[i].setAttribute("disabled", "");
    // disable weight status zone
    this._weightStatuses[i].setAttribute("disabled", "");
    // disable target slider handle for zone
    this._targetSlider.noUiSlider.disable(i);
  }

  /**
  * Set slider handle.
  * @param {number} - Index
  * @param {number} - New value.
  * @param {bool} - Should update event be triggered?
  * @return {void}
  */
  _setSliderHandle(i, value, update = true) {
    this._targetSlider.noUiSlider.setHandle(i, value, update);
  }

  /**
  * Get slider handle.
  * @param {number} - Index
  * @return {void}
  */
  _getSliderHandle(i) {
    return this._targetSlider.noUiSlider.get(true)[i];
  }

  /**
  * Set feature weight value.
  * @param {number} - Index.
  * @param {value} - New value.
  * @return {void}
  */
  _setWeightValue(i, value) {
    this._weightStatuses[i].setAttribute("data-weight", value);
    this._weightStatuses[i].children[0].innerText =
      `Weight: ${value * 100}`;
  }

  /**
  * Get feature weight value.
  * @param {number} - Index.
  * @return {void}
  */
  _getWeightValue(i) {
    return this._weightStatuses[i].getAttribute("data-weight");
  }

}

/**
 * Convert targets to slider values
 * @param {Array<number>} x - Array of numbers.
 * @return {Array<number>}
 */
function convertTargetsToSliderValues(x) {
  let y = [x[0]];
  for (let i = 1; i < x.length; i++) {
    y.push(x[i] + y[i - 1]);
  }
  return y;
}

/**
 * Convert slider values to targets
 * @param {Array<number>} x - Array of numbers.
 * @return {Array<number>}
 */
function convertSliderValuesToTargets(x) {
  let o = order(x);
  let y = new Array(x.length).fill(0);
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    y[o[i]] = roundToDigits(x[o[i]] - sum, 3);
    sum += y[o[i]];
  }
  return y;
}
