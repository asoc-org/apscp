/** Import dependencies */
// Tom Select module
import "tom-select/dist/css/tom-select.bootstrap5.css";
import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
// functions to create elements
import {createSummaryPanel} from "./create-summary-panel.js";
import {createFeaturesPanel} from "./create-features-panel.js";
import {createLocksPanel} from "./create-locks-panel.js";
import {createCostsPanel} from "./create-costs-panel.js";
// styling
import "./css/style.css";
import "./css/chart.css";
import "../utils/css/tom-select.css";

/** Class representing an object for generating a solution. */
export class Summarizer {

  /**
   * Map of solutions.
   * @type {Map<object>}
   */
  _solutions = new Map();

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * HTML Element that contains the select input.
   * @type {HTMLElement}
   */
  _select;

  /**
   * HTML Element that contains the summary panel.
   * @type {HTMLElement}
   */
  _summaryPanel;

  /**
   * HTML Element that contains the features panel.
   * @type {HTMLElement}
   */
  _featuresPanel;

  /**
   * HTML Element that contains the locks panel.
   * @type {HTMLElement}
   */
  _locksPanel;

  /**
   * HTML Element that contains the costs panel.
   * @type {HTMLElement}
   */
  _costsPanel;

  /**
   * HTML Element that contains the tooltips.
   * @type {HTMLElement}
   */
  _tooltipsContainer;

  /**
   * Construct a new Solver object.
   * @return {void}
   */
  constructor() {}

  /**
   * Initialize Summarizer with HTML identifier and project data.
   * @param {HTMLElement} element - HTML element.
   * @param {object} project - Object with various types of objects.
   * @param {Array<object>} project.features - Array of feature objects.
   * @param {Array<object>} project.costs - Array of cost objects.
   * @param {Array<object>} project.locks - Array of lock objects.
   * @param {Array<object>} project.solutions - Array of solution objects.
   * @param {Array<string>} zoneColors - Array of colors for zones.
   * @return {void}
   */
  initialize(element, project, zoneColors) {
    // initialize data fields
    for (let i = 0; i < project.solutions.length; ++i)  {
      this._solutions.set(project.solutions[i].id, project.solutions[i]);
    }
    this._zones = project.zones;

    // initialize HTML fields
    this._select = element.querySelector(".summarizer-select");
    this._summaryPanel = element.querySelector(".summary-panel");
    this._featuresPanel = element.querySelector(".features-panel");
    this._locksPanel = element.querySelector(".locks-panel");
    this._costsPanel = element.querySelector(".costs-panel");
    this._tooltipsContainer = document.createElement("div");
    this._tooltipsContainer.id = `${element.id}-tooltips`;
    this._tooltipsContainer.classList.add("summarizer-tooltips");

    // assign styling to elements based on zone colors
    for (let i = 0; i < project.zones.length; ++i) {
      // widget element
      element.style.setProperty(
        `--zone-${project.zones[i]}-primary`,
        zoneColors[i]
      );
      element.style.setProperty(
        `--zone-${project.zones[i]}-secondary`,
        `color-mix(in srgb, ${zoneColors[i]}, white 50%)`
      );
      // tooltips container element
      this._tooltipsContainer.style.setProperty(
        `--zone-${project.zones[i]}-primary`,
        zoneColors[i]
      );
      this._tooltipsContainer.style.setProperty(
        `--zone-${project.zones[i]}-secondary`,
        `color-mix(in srgb, ${zoneColors[i]}, white 50%)`
      );
    }

    // append tooltips container to body
    document.body.appendChild(this._tooltipsContainer);

    // set default item
    let defaultItem = [];
    let defaultOptions = [];
    if (project.solutions.length > 0) {
      defaultItem.push(project.solutions[0].id);
      defaultOptions = project.solutions.map(
        (x) => {return {value: x.id, name: x.name}}
      )
    }

    // initialize select
    new TomSelect(this._select, {
      options: defaultOptions,
      items: defaultItem,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxItems: 1,
      maxOptions: null,
      sortField: "sort",
      closeAfterSelect: true,
      onChange: (value) => {this.showSolution(value)},
    });

    // if project contains at least one solution, then show first
    if (project.solutions.length > 0) {
      this.showSolution(project.solutions[0].id);
    }
  }

  /**
   * Add a solution.
   * @param {object} solution - Object that is a solution.
   * @param {boolean} show - Should solution be shown?
   * @return {void}
   */
  addSolution(solution, show = true) {
    // add solution
    this._solutions.set(solution.id, solution);
    // update select with new solution
    this._select.tomselect.addOption({value: solution.id, name: solution.name});
    // if needed, show solution
    if (show === true) {
      this._select.tomselect.setValue(solution.id);
    }
  }

  /**
   * Show a solution.
   * @param {string} id - Identifier for solution.
   * @return {void}
   */
  showSolution(id) {
    // find solution based on identifier
    let solution = this._solutions.get(id);
    // if solution exists with identifier, replace content in panels
    if (solution) {
      // remove existing tooltips
      this._tooltipsContainer.replaceChildren();
      // replace charts
      this._summaryPanel.replaceChildren(
        createSummaryPanel(solution, this._zones, this._tooltipsContainer.id)
      );
      this._featuresPanel.replaceChildren(
        createFeaturesPanel(solution, this._zones, this._tooltipsContainer.id)
      );
      this._locksPanel.replaceChildren(
        createLocksPanel(solution, this._zones, this._tooltipsContainer.id)
      );
      this._costsPanel.replaceChildren(
        createCostsPanel(solution, this._zones, this._tooltipsContainer.id)
      );
    }
  }

}
