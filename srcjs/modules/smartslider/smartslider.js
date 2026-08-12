/** Import dependencies */
// noUiSlider module
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
// utility functions
import {toArray} from "../utils/misc.js";

/** Class representing a smart slider. */
export default class SmartSlider {

  // public fields

  /**
   * noUiSlider object.
   * @type {object}
   */
  noUiSlider;

  // private fields

  /**
   * Initial values.
   * @type {number}
   */
  _initial;

  /**
   * Previous values.
   * @type {number}
   */
  _previous;

  /**
  * Construct a new SmartSlider object.
  * @param {HTMLElement} element - HTML element for slider.
  * @param {object} sliderOptions - Configuration settings for noUiSlider.
  * @param {object} labelOptions - Configuration settings for labels.
  * @param {NodeList<HTMLElement>} labelOptions.labels - HTML elements for
  * for labels. Note that there must be an element for each slider handle.
  * @param {function} labelOptions.format - Function for formatting labels. This
  * must have parameters for `labels` and `values`.
  * @return {void}
  */
  constructor(element, sliderOptions, labelOptions) {
    // initialize fields
    noUiSlider.create(element, sliderOptions);
    this.noUiSlider = element.noUiSlider;
    this._initial = toArray(this.noUiSlider.get(true));
    this._previous = this._initial.slice();
    this._labels = labelOptions.labels;
    this._formatter = labelOptions.format || ((labels, values) => {});
    // attach this object to the element
    element.smartSlider = this;
    // update labels on slider update
    this.noUiSlider.on("update", (values, handle) => {
      this._formatter(this._labels, values);
    });
  }

  /**
   * Get values.
   * @return {Array<number>}
   */
  get() {
    return toArray(this.noUiSlider.get(true));
  }

  /**
   * Enable widget.
   * @return {void}
   */
  enable() {
    this.noUiSlider.set(this._previous);
    this.noUiSlider.enable();
    this._labels.forEach(x => x.removeAttribute("disabled"));
  }

  /**
   * Disable widget.
   * @return {void}
   */
  disable() {
    this._previous = toArray(this.noUiSlider.get(true)).slice();
    this.noUiSlider.set(new Array(this._initial.length).fill(0));
    this.noUiSlider.disable();
    this._labels.forEach(x => x.setAttribute("disabled", ""));
  }

  /**
   * Reset widget to initial state.
   * @return {void}
   */
  reset() {
    this.noUiSlider.set(this._initial);
  }

  /**
   * Enable handle for widget.
   * @param {number} index - Index for handle.
   * @return {void}
   */
  enableHandle(index) {
    this.noUiSlider.setHandle(index, this._previous[index]);
    this.noUiSlider.enable(index);
    this._labels[index].removeAttribute("disabled");
  }

  /**
   * Disable handle for widget.
   * @param {number} index - Index for handle.
   * @return {void}
   */
  disableHandle(index) {
    this._previous[index] = toArray(this.noUiSlider.get(true))[index];
    this.noUiSlider.setHandle(index, 0);
    this.noUiSlider.disable(index);
    this._labels[index].setAttribute("disabled", "");
  }

  /**
   * Reset handle for widget.
   * @param {number} index - Index for handle.
   * @return {void}
   */
  resetHandle(index) {
    this.noUiSlider.setHandle(index, this._initial[index]);
  }

}
