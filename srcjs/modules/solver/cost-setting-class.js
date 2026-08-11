import "./css/cost-setting.css";
import noUiSlider from "nouislider";
import {scaffoldCostSetting} from "./cost-setting-scaffold.js";
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

  /**
   * Weight value.
   * @type {number}
   */
  weight;

  /**
   * Zone value.
   * @type {string}
   */
  zone;

  // private fields

  /**
   * Initial weight value.
   * @type {number}
   */
  _initialWeight;

  /**
   * Initial zone value.
   * @type {number}
   */
  _initialZone;

  /**
   * Previous weight value.
   * @type {number}
   */
  _previousWeight;

  /**
   * Previous zone value.
   * @type {number}
   */
  _previousZone;

  /**
   * Object used to temporarily store settings for select menu.
   * @type {object}
   */
  _cache = {};

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
    this.zone = cost.zone;
    this.weight = cost.weight;
    // initialize private fields
    this._initialWeight = cost.weight;
    this._initialZone = this.zone;
    this._previousWeight = cost.weight;
    this._previousZone = this.zone;
    // set cache
    this._cache.sliderRange = {
      "min": costWeightChoices[0],
      "max": costWeightChoices[1]
    };
    this._cache.sliderStep = costWeightChoices[2];
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // find components of element
    let toggle = this.element.querySelector(".switch");
    let select = this.element.querySelector(".zone-status");
    let label = this.element.querySelector(".weight-label");
    let slider = this.element.querySelector(".noUiSlider-widget");
    // initialize weight slider
    noUiSlider.create(slider, {
      range: this._cache.sliderRange,
      step: this._cache.sliderStep,
      behaviour: "drag",
      connect: "lower",
      start: this._initialWeight,
    })
    // set event handler for slider
    slider.noUiSlider.on("update", (values, handle) => {
      // convert value to number
      let v = Number(values[0]);
      // update weight label
      label.innerText = `Weight: ${Math.round(v * 100)}%`;
      // update weight field
      this.weight = v;
    });
    // set event handler for select options
    select
      .querySelectorAll(".select-option")
      .forEach((x) => {
        x.addEventListener("click", (event) => {
          this.zone = event.target.getAttribute("data-option");
        })
      });
    // set event handler for toggle
    toggle.addEventListener("change", (event) => {
      if (event.target.checked) {
        // update element values
        slider.noUiSlider.setHandle(0, this._previousWeight);
        select.children[0].children[0].innerText = this._previousZone;
        // update disable property on elements
        label.removeAttribute("disabled")
        select.removeAttribute("disabled");
        slider.noUiSlider.enable();
        // update fields
        this.weight = this._previousWeight;
        this.zone = this._previousZone;
      } else {
        // store values
        this._previousWeight = this.weight;
        this._previousZone = this.zone;
        // update element values
        slider.noUiSlider.setHandle(0, 0);
        select.children[0].children[0].innerText = "Off";
        // update disable property on elements
        label.setAttribute("disabled", "");
        select.setAttribute("disabled", "");
        slider.noUiSlider.disable();
        // update fields
        this.weight = 0;
        this.zone = "";
      }
    });
    // free memory
    this._cache = undefined;
    // append to element
    element.appendChild(this.element);
  }

}
