/** Import dependencies */
// utility functions
import {order} from "../utils/math.js";
import {convertTargetsToSliderValues} from "../utils/math.js";
import {convertSliderValuesToTargets} from "../utils/math.js";
// styling
import "./css/style.css";

/** Class representing a status bar. */
export default class StatusBar {

  // public fields

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  element;

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
   * HTML element that contains the start bar cap.
   * @type {HTMLElement}
   */
  _start_cap;

  /**
   * HTML element that contains the start bar cap.
   * @type {HTMLElement}
   */
  _end_cap;

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
    // create end bar cap element
    this._end_cap = document.createElement("div");
    this._end_cap.classList.add("bar-end-cap");
    // create start bar cap element
    this._start_cap = document.createElement("div");
    this._start_cap.classList.add("bar-start-cap");
    // create bars element
    let bars = document.createElement("div");
    bars.classList.add("bars");
    // create segment elements
    this._segments = [];
    for (let i = 0; i < options.values.length; ++i) {
      let segment = document.createElement("div");
      segment.classList.add("bar-segment");
      this._segments.push(segment);
      bars.appendChild(segment);
    }
    // render elements
    element.classList.add("statusBars-target");
    element.appendChild(this._start_cap);
    element.appendChild(bars);
    element.appendChild(this._end_cap);
    // set values.
    this.set(options.values);
    // attach this object to the element
    element.statusBar = this;
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
    // by default, make start cap the color of smallest value
    this._start_cap.style.color = this._colors[o[0]];
    this._start_cap.style.background = this._colors[o[0]];
    // by default, make end cap transparent
    this._end_cap.style.color = "transparent";
    this._end_cap.style.background = "transparent";
    // update segments and, if needed, start and end caps too
    for (let i = 0; i < values.length; ++i) {
      // update i'th segment
      this._segments[o[i]].style.width = `${Math.round(v[i] * 100)}%`;
      this._segments[o[i]].style["z-index"] = values.length - i;
      this._segments[o[i]].style.background = this._colors[i];
      // if i'th segment covers 100%, then update caps
      if (values[i] > 0.995) {
        this._end_cap.style.color = this._colors[i];
        this._end_cap.style.background = this._colors[i];
        this._start_cap.style.color = this._colors[i];
        this._start_cap.style.background = this._colors[i];
      }
    }
  }
}
