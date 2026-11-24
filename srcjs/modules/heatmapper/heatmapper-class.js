/** Import dependencies */
// Tom Select module
import "tom-select/dist/css/tom-select.bootstrap5.css";
import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
// utility functions
import {toArray} from "../utils/misc.js";
// styling
import "./css/style.css";
import "../utils/css/tom-select.css";

/** Class representing a heat mapper widget. */
export class Heatmapper {

  // public fields

  /**
  * HTML element.
  * @type {HTMLElement}
  */
  element;

  // private fields

  /**
   * HTML element for zone select.
   * @type {HTMLElement}
   */
  _zoneSelect;

  /**
   * HTML element for solutions select.
   * @type {HTMLElement}
   */
  _solutionsSelect;

  /**
   * HTML element for name input.
   * @type {HTMLElement}
   */
  _nameInput;

  /**
   * HTML element for start button.
   * @type {HTMLElement}
   */
  _startButton;

  /**
  * Construct a new Heatmapper object.
  * @param {HTMLElement} element - HTML element for widget.
  * @param {Array<string>} zones - Array of zone names.
  * @param {Array<object>} solutions - Array of solutions.
  * @param {string} solutions.id - Identifier for solution.
  * @param {string} solutions.name - Name for solution.
  * @return {void}
  */
  initialize(element, zones, solutions) {
    // initialize fields
    this.element = element;
    // initial HTML element fields
    this._nameInput = element.querySelector(".name-input");
    this._zoneSelect = element.querySelector(".zone-select");
    this._solutionsSelect = element.querySelector(".solutions-select");
    this._startButton = element.querySelector(".start-button");
    // set default items and options
    let options = [];
    let items = [];
    if (solutions.length > 0) {
      items.push({value: solutions[0].id, name: solutions[0].name});
      options = solutions.map((x) => {return {value: x.id, name: x.name}});
    }
    // initialize zone select
    new TomSelect(this._zoneSelect, {
      items: [zones[0]],
      options: zones.map((x) => {return {value: x, name: x}}),
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxOptions: null,
      sortField: "name",
      maxItems: 1
    });
    // initialize solution select
    new TomSelect(this._solutionsSelect, {
      items: items,
      options: options,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxOptions: null,
      sortField: "name"
    });
    // set event listener for name input
    this._nameInput.addEventListener("input", (event) => {
      // if input is empty or selects do not have a selected option,
      // ensure that start button is disabled
      if (
        (event.target.value.length > 0) &&
        (this._zoneSelect.tomselect.getValue().length > 0) &&
        (toArray(this._solutionsSelect.tomselect.getValue())[0].length > 0)
      ) {
        this._startButton.removeAttribute("disabled", "");
      } else {
        this._startButton.setAttribute("disabled", "");
      }
    });
    // define event listener for button
    this._startButton.addEventListener("click", (event) => {
      // send message to R session with settings
      if (HTMLWidgets.shinyMode) {
        Shiny.setInputValue(
          `${element.id}_settings`,
          {
            name: this._nameInput.value,
            zone: this._zoneSelect.tomselect.getValue(),
            ids: toArray(this._solutionsSelect.tomselect.getValue())
          },
          {priority: "event"}
        );
      }
    });
  }

  /**
   * Add solution to widget.
   * @return {void}
   */
  addSolution(solution) {
    // add solution to select element
    this._solutionsSelect.tomselect.addOption(
      {value: solution.id, name: solution.name}
    );
  }

  /**
   * Reset widget so it is ready for generating a new layer.
   * @return {void}
   */
  reset() {
    // reset name value
    this._nameInput.value = "";
    // disable start button
    this._startButton.setAttribute("disabled", "");
    // note that we set a callback to disable the button again in case
    // the button state is automatically altered by Shiny
    setTimeout(() => {this._startButton.setAttribute("disabled", "")}, 500);
  }

}
