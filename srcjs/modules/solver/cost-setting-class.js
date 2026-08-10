import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import {scaffoldCostSetting} from "./cost-setting-scaffold.js";
import "./css/cost-setting.css";
import {roundToDigits} from "../utils/math.js";

/** Class representing the setting for a single cost. */
export class CostSetting {

  // public fields

  /**
   * Cost identifier.
   * @type {string}
   */
  id;

  /**
   * Cost name.
   * @type {string}
   */
  name;

  /**
   * Cost column.
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
   * HTML element that contains the switch.
   * @type {NodeList<HTMLElement>}
   */
  _switch;

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  _status;

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  _label;

  /**
   * HTML element that contains slider for weight setting.
   * @type {HTMLElement}
   */
  _slider;

  /**
   * Initial weight value.
   * @type {number}
   */
  _initialWeightValue;

  /**
   * Initial status value.
   * @type {number}
   */
  _initialStatusValue;

  /**
   * Previous weight value.
   * @type {number}
   */
  _previousWeightValue;

  /**
   * Previous zone status.
   * @type {number}
   */
  _previousStatusValue;

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
  * Construct a new CostSetting object.
 * @param {Object} cost - Cost object.
 * @param {string} cost.id - Unique identifier.
 * @param {string} cost.name - Name.
 * @param {string} cost.weight - Weight value.
 * @param {string} cost.layer.column - Column with data.
 * @param {Array<string>} zones - Array of zone names.
 * @param {Array<number>} costWeightChoices - Array of numbers used to
 * define the potential values for setting cost weights.
  * @return {void}
  */
  constructor(cost, zones, costWeightChoices) {
    // initialize public fields
    this.id = cost.id;
    this.name = cost.name;
    this.column = cost.layer.column;
    this.element = scaffoldCostSetting(cost, zones, costWeightChoices);

    // initialize private fields
    this._switch = this.element.querySelector(".switch");
    this._status = this.element.querySelector(".zone-status");
    this._label = this.element.querySelector(".weight-label");
    this._slider = this.element.querySelector(".noUiSlider-widget");
    this._initialSliderValue = cost.weight;
    this._initialStatusValue = this.zone;
    this._previousSliderValue = cost.weight;
    this._previousStatusValue = this.zone;
    this._zones = zones;
    this._sliderRange = {
      "min": costWeightChoices[0],
      "max": costWeightChoices[1]
    };
    this._sliderStep = costWeightChoices[2];

    // initialize weight slider
    noUiSlider.create(this._slider, {
      range: this._sliderRange,
      step: this._sliderStep,
      behaviour: "drag",
      connect: "lower",
      start: this._initialSliderValue,
    });

    // set event handler for slider
    this._slider.noUiSlider.on("update", (values, handle) => {
      // convert value to number
      let v = Number(values[0]);
      // update weight label
      this._label.setAttribute("data-weight", v);
      this._label.innerText = `Weight: ${Math.round(v * 100)}%`;
    });

    // set event handler for switch
    this._switch.addEventListener("change", (event) => {
      if (event.target.checked) {
        this.enable();
      } else {
        this.disable();
      }
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
  * Enable object.
  * @return {void}
  */
  enable() {
    // update element values
    this._setSliderHandle(this._previousSliderValue);
    this._status.setAttribute("data-zone", this._previousStatusValue);
    this._status.children[0].innerText = this._previousStatusValue;
    // update disable property on elements
    this._label.removeAttribute("disabled")
    this._status.removeAttribute("disabled");
    this._slider.noUiSlider.enable();
  }

  /**
  * Disable object.
  * @return {void}
  */
  disable() {
    // store values
    this._previousSliderValue = this._getSliderHandle();
    this._previousStatusValue = this._status.getAttribute("data-zone");
    // update element values
    this._setSliderHandle(0);
    this._status.setAttribute("data-zone", "");
    this._status.children[0].innerText = "Off";
    // update disable property on elements
    this._label.setAttribute("disabled", "");
    this._status.setAttribute("disabled", "");
    this._slider.noUiSlider.disable();
  }

  /**
  * Get zone name.
  * @return {string}
  */
  getZone() {
    return this._status.dataset.zone;
  }

  /**
  * Get cost weight.
  * @return {number}
  */
  getWeight() {
    return this._getSliderHandle();
  }

  // private methods

  /**
  * Set slider handle.
  * @param {number} - Index
  * @param {number} - New value.
  * @param {bool} - Should update event be triggered?
  * @return {void}
  */
  _setSliderHandle(value, update = true) {
    this._slider.noUiSlider.setHandle(0, value, update);
  }

  /**
  * Get slider handle.
  * @param {number} - Index
  * @return {void}
  */
  _getSliderHandle() {
    return this._slider.noUiSlider.get(true);
  }

}
