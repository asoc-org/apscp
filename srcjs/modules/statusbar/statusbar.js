import "./css/style.css";
import {order} from "../utils/math.js";
import {convertTargetsToSliderValues} from "../utils/math.js";
import {convertSliderValuesToTargets} from "../utils/math.js";

/** Class representing a status bar. */
export default class StatusBar {

  // public fields

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  element;

  // private fields

  // private HTML fields

  /**
   * HTML elements that contain labels.
   * @type {NodeList<HTMLElement>}
   */
  _labels;

  /**
   * HTML elements that contain bar segments.
   * @type {NodeList<HTMLElement>}
   */
  _segments;

  /**
   * HTML element that contains the bar cap.
   * @type {HTMLElement}
   */
  _cap;

  /**
  * Construct a new StatusBar object.
  * @param {HTMLElement} element - HTML element for slider.
  * @param {object} options - options settings.
  * @param {Array<number>} options.values - Values to display.
  * @param {Array<string>} options.colors - Colors for bar values.
  * @param {NodeList<HTMLElement>} options.labels - HTML elements for
  * for labels. Note that there must be an element for each slider handle.
  * @param {function} options.format - Function for formatting labels.
  * This must have parameters for `labels` and `values`.
  * @return {void}
  */
  constructor(element, options) {
    // set public fields
    this.element = element;
    // set private fields
    this._colors = options.colors;
    this._labels = options.labels;
    this._formatter = options.format || ((labels, values) => {});
    // create bar cap element
    this._cap = document.createElement("div");
    this._cap.classList.add("bar-cap");
    // create bars element
    let bars = document.createElement("div");
    bars.classList.add("bars");
    // create segment elements
    this._segments = []
    for (let i = 0; i < options.values.length; ++i) {
      let segment = document.createElement("div");
      segment.classList.add("bar-segment");
      this._segments.push(segment);
      bars.appendChild(segment);
    }
    // render elements
    element.classList.add("statusBars-target");
    element.appendChild(this._cap);
    element.appendChild(bars);
    // set values.
    this.set(options.values);
  }

  /**
  * Set values.
  * @param {Array<number>} values - Values to display.
  * @return {void}
  */
  set(values) {
    // preliminary calculations
    let o = order(values);
    let v = convertTargetsToSliderValues(values);
    // update labels
    this._formatter(this._labels, values);
    // update cap style
    this._cap.style.color = this._colors[o[0]];
    this._cap.style.background = this._colors[o[0]];
    // update segments
    for (let i = 0; i < values.length; ++i) {
      this._segments[o[i]].style.width = `${Math.round(v[i] * 100)}%`;
      this._segments[o[i]].style["z-index"] = values.length - i;
      this._segments[o[i]].style.background = this._colors[i];
    }
  }
}
