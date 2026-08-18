/** Import dependencies */
// classes to create components
import SmartSlider from "../smartslider/smartslider.js";
import HoverSelect from "../hoverselect/hoverselect.js";
import StatusBar from "../statusbar/statusbar.js";
// functions to create elements
import {scaffoldFeatureSetting} from "./feature-setting-scaffold.js";
import {createNameLabel} from "../utils/element.js";
import {createProvenance} from "../utils/element.js";
import {createSwitches} from "../utils/element.js";
import {addTooltip} from "../utils/element.js";
// styling
import "./css/solver-setting.css";
import "./css/feature-setting.css";
import "./css/nouislider.css";
// utility functions
import {order} from "../utils/math.js";
import {convertTargetsToSliderValues} from "../utils/math.js";
import {convertSliderValuesToTargets} from "../utils/math.js";

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
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Slider element.
   * @type {HTMLElement}
   */
  _slider;

  /**
   * Status bar element.
   * @type {HTMLElement}
   */
  _status;

  /**
   * List of hover select elements.
   * @type {NodeList<HTMLElement>}
   */
  _selects;

  /**
   * List of switch elements.
   * @type {NodeList<HTMLElement>}
   */
  _selects;

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
    this._zones = zones;
    this._sliderRange = {
      "min": featureTargetChoices[0],
      "max": featureTargetChoices[1]
    };
    this._sliderStep = featureTargetChoices[2];
    // initialize private HTML fields
    this._slider = this.element.querySelector(".target-slider");
    this._status = this.element.querySelector(".status-bar");
    this._switches = this.element.querySelectorAll(".switch");
    this._selects = this.element.querySelectorAll(".weight-status");
    // initialize slider widget
    new SmartSlider(
      this._slider,
      {
        range: this._sliderRange,
        step: this._sliderStep,
        behaviour: "unconstrained-drag",
        connect:
          new Array(zones.length + 1).fill(true).with(zones.length, false),
        start: convertTargetsToSliderValues(feature.zone_targets)
      },
      {
        labels: this.element.querySelectorAll(".target-label"),
        format: (labels, values) => {
          // update target labels
          let v = convertSliderValuesToTargets(values);
          for (let i = 0; i < v.length; ++i) {
            labels[i].innerText = `Target: ${Math.round(v[i] * 100)}%`;
          }
        }
      }
    );
    // set update handler to recolor connect elements of the slider
    let connects = this._slider.querySelectorAll(".noUi-connect");
    this._slider.noUiSlider.on("update", (values, handle) => {
      // run calculations
      let v = values.map(Number);
      let o = order(v);
      // update connect elements
      for (let i = 0; i < v.length; ++i) {
        connects[i].style.background = `var(--zone-${zones[o[i]]}-primary)`;
        connects[i].style.transform = `translate(0%, 0px) scale(${v[o[i]]}, 1)`;
        connects[i].style["z-index"] = v.length - i;
      }
    });
    // color the handles
    let handles = this._slider.querySelectorAll(".noUi-handle");
    for (let i = 0; i < this._zones.length; ++i) {
      handles[i].style.background = `var(--zone-${this._zones[i]}-primary)`;
    }
    // initialize select widgets
    for (let i = 0; i < this._zones.length; ++i) {
      new HoverSelect(this._selects[i], {
        selected: String(feature.zone_weights[i]),
        options: featureWeightChoices.map(x => {
          return {
            value: String(x),
            text: `Weight: ${x * 100}%`,
            color: `var(--zone-${zones[i]}-primary`
          }
        }),
        disabledOption: {
          value: "0", text: `Weight: 0%`, color: "var(--disabled)"
        }
      });
    }
    // initialize status bar widget
    new StatusBar(this._status, {
      values: feature.zone_helds,
      colors: this._zones.map(x => `var(--zone-${x}-secondary)`),
      labels: this.element.querySelectorAll(".held-label"),
      format: (labels, values) => {
        for (let i = 0; i < labels.length; ++i) {
          labels[i].innerText = `Lock: ${Math.round(values[i] * 100)}%`;
        }
      }
    });
    // set event handlers for switches
    for (let i = 0; i < zones.length; ++i) {
      this._switches[i].addEventListener("change", (event) => {
        if (event.target.checked) {
          this._slider.smartSlider.enableHandle(i);
          this._selects[i].hoverSelect.enable();
        } else {
          this._slider.smartSlider.disableHandle(i);
          this._selects[i].hoverSelect.disable();
        }
      });
    }
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
   * Target values for each zone.
   * @type {number}
   */
  get targets() {
    return convertSliderValuesToTargets(this._slider.smartSlider.get());
  };

  /**
   * Weight values for each zone.
   * @type {number}
   */
  get weights() {
    return Array.from(this._selects, x => Number(x.hoverSelect.get()));
  };

  /**
  * Set amount held for each feature.
  * @param {Array<number>} - New held values.
  * @return {void}
  */
  setHeldStatus(values) {
    this._status.statusBar.set(values);
  }

  /**
  * Increment the target for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  incrementZoneTarget(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

  /**
  * Decrement the target for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  decrementZoneTarget(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

  /**
  * Increment the weight for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  incrementZoneWeight(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

  /**
  * Decrement the weight for a zone.
  * @param {string} zone - Zone name.
  * @return {void}
  */
  decrementZoneWeight(zone) {
    let i = this._zones.indexOf(zone);
    // TODO
  }

}
