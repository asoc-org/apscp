/** Import dependencies */
// Tom Select module
import "tom-select/dist/css/tom-select.bootstrap5.css";
import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
// utility functions
import {toArray} from "../utils/misc.js";
// styling
import "./css/style.css";
import "../utils/css/tom-select.css";

/** Class representing a contraster widget. */
export class Contraster {

  // public fields

  /**
  * HTML element.
  * @type {HTMLElement}
  */
  element;

  // private fields

  /**
   * HTML element for select select element for first solution.
   * @type {HTMLElement}
   */
  _solutionSelect1;

  /**
   * HTML element for select element for second solution.
   * @type {HTMLElement}
   */
  _solutionSelect2;

  /**
   * HTML element for name input.
   * @type {HTMLElement}
   */
  _nameInput;

  /**
   * HTML element for button.
   * @type {HTMLElement}
   */
  _startButton;

  /**
  * Initialize a new Contraster object.
  * @param {HTMLElement} element - HTML element for widget.
  * @param {Array<object>} solutions - Array of solutions.
  * @param {string} solutions.id - Identifier for solution.
  * @param {string} solutions.name - Name for solution.
  * @return {void}
  */
  initialize(element, solutions) {
    // initialize fields
    this.element = element;
    // initial HTML element fields
    this._solutionSelect1 = element.querySelector(".select1");
    this._solutionSelect2 = element.querySelector(".select2");
    this._nameInput = element.querySelector(".name-input");
    this._startButton = element.querySelector(".start-button");
    // set default items and options
    let items = [];
    let options = [];
    if (solutions.length > 0) {
      items.push(solutions[0].id);
      options = solutions.map((x) => {return {value: x.id, name: x.name}});
    }
    // initialize selects
    new TomSelect(this._solutionSelect1, {
      items: items,
      options: options,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxOptions: null,
      sortField: "name",
      maxItems: 1
    });
    new TomSelect(this._solutionSelect2, {
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
        (this._solutionSelect1.tomselect.getValue().length > 0) &&
        (this._solutionSelect2.tomselect.getValue().length > 0)
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
            id1: this._solutionSelect1.tomselect.getValue(),
            id2: this._solutionSelect2.tomselect.getValue()
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
    // add solution to select elements
    this._solutionSelect1.tomselect.addOption(
      {value: solution.id, name: solution.name}
    );
    this._solutionSelect2.tomselect.addOption(
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
