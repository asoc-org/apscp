/** Import dependencies */
// classes to create components
import SmartSlider from "../smartslider/smartslider.js";
import HoverSelect from "../hoverselect/hoverselect.js";
// functions to create elements
import {scaffoldCostSetting} from "./cost-setting-scaffold.js";
// styling
import "./css/nouislider.css";
import "./css/solver-setting.css";
import "./css/cost-setting.css";

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
   * Slider range.
   * @type {object}
   */
  _sliderRange;

  /**
   * Slider step.
   * @type {number}
   */
  _sliderStep;

  // private HTML fields

  /**
   * Hover select element.
   * @type {HTMLElement}
   */
  _select;

  /**
   * noUiSlider element.
   * @type {HTMLElement}
   */
  _slider;

  /**
   * Switch element.
   * @type {HTMLElement}
   */
  _switch;

  /**
   * Name element.
   * @type {HTMLElement}
   */
  _name;

  /**
   * Construct a new CostSetting object.
   * @param {object} cost - Cost object.
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
    this._sliderRange = {
      "min": costWeightChoices[0],
      "max": costWeightChoices[1]
    };
    this._sliderStep = costWeightChoices[2];
    // initialize private HTML fields
    this._select = this.element.querySelector(".zone-status");
    this._slider = this.element.querySelector(".weight-slider");
    this._switch = this.element.querySelector(".switch");
    this._name = this.element.querySelector(".name-label");
    // initialize select widget
    new HoverSelect(this._select, {
      selected: cost.zone,
      options: zones.map(x => {
        return {
          value: x,
          text: x,
          color: `var(--zone-${x}-primary`
        }
      }),
      disabledOption: {value: "", text: "Off", color: "var(--disabled)"}
    });
    // initialize slider widget
    new SmartSlider(
      this._slider,
      {
        range: this._sliderRange,
        step: this._sliderStep,
        behaviour: "drag",
        connect: "lower",
        start: cost.weight
      },
      {
        labels: this.element.querySelectorAll(".weight-label"),
        format: (labels, values) => {
          labels[0].innerText = `Weight: ${Math.round(values[0] * 100)}%`;
        }
      }
    );
  }

  /**
   * Create and append a HTML element for this object to another HTML element.
   * @param {HTMLElement} element - HTML element.
   * @return {void}
   */
  appendTo(element) {
    // set event handler for toggle
    this._switch.addEventListener("change", (event) => {
      if (event.target.checked) {
        this.enable();
      } else {
        this.disable();
      }
    });
    // append to element
    element.appendChild(this.element);
  }

  /**
   * Get zone.
   * @return {string}
   */
  get zone() {
    return this._select.hoverSelect.get();
  }

  /**
   * Get weight
   * @return {number}
   */
  get weight() {
    return this._slider.smartSlider.get()[0];
  }

  /**
   * Enable widget
   * @return {void}
   */
  enable() {
    this._slider.smartSlider.enable();
    this._select.hoverSelect.enable();
    this._switch.checked = true;
    this._name.removeAttribute("disabled");
  }

  /**
   * Disable widget.
   * @return {void}
   */
  disable() {
    this._slider.smartSlider.disable();
    this._select.hoverSelect.disable();
    this._switch.checked = false;
    this._name.setAttribute("disabled", "");
  }

}
