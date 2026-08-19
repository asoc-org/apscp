/** Import dependencies */
// Tom Select module
import "./css/tom-select.css";
import "tom-select/dist/css/tom-select.bootstrap5.css";
import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
// classes to create components
import {FeatureSetting} from "./feature-setting-class.js";
// utility functions
import {projectSelectOptions} from "../utils/projectSelectOptions.js";
// styling
import "./css/solver-control.css";
import "./css/solver-settings.css";
import "./css/feature-control.css";

/** Class representing the control for multiple features. */
export class FeatureControl {

  // private fields

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Map of settings.
   * @type {Map<FeatureSettings>}
   */
  _settings = new Map();

  /**
   * Object used to temporarily store settings for select menu.
   * @type {Object}
   */
  _cache;

  /**
   * Construct a new FeatureSettings object.
   * @param {object} project - Object with various types of objects.
   * @param {Array<Object>} project.features - Array of feature objects.
   * @param {Array<number>} featureTargetChoices - Array of numbers used to
   * define the potential values for setting feature targets.
   * @param {Array<number>} featureWeightChoices - Array of numbers used to
   * define the potential values for setting feature weights.
   * @return {void}
   */
  constructor(project, featureTargetChoices, featureWeightChoices) {
    // initialize fields
    this._zones = project.zones;
    // create feature setting objects
    for (let i = 0; i < project.features.length; ++i) {
      this._settings.set(
        project.features[i].id,
        new FeatureSetting(
          project.features[i], project.zones,
          featureTargetChoices, featureWeightChoices
        )
      );
    }
    // cache options for select menu
    this._cache = projectSelectOptions(project, true, false, false, false);
  }

  /**
   * Create and append a HTML element for this object to another HTML element.
   * @param {HTMLElement} element - HTML element.
   * @return {void}
   */
  appendTo(element) {
    // create container
    let el = document.createElement("div");
    el.classList.add("feature-control", "solver-control");
    // create menu element
    let menuElement = document.createElement("div");
    menuElement.classList.add(
      "feature-settings", "solver-settings", "well", "well-sm"
    );
    // create feature setting objects and add them to the menu
    this._settings.forEach(x => x.appendTo(menuElement));
    // create select menu
    let selectElement = document.createElement("input");
    selectElement.setAttribute("multiple", "");
    selectElement.setAttribute("placeholder", "Choose features...");
    // append elements to container
    el.appendChild(selectElement);
    el.appendChild(menuElement);
    element.appendChild(el);
    // initialize select menu
    new TomSelect(selectElement, {
      options: this._cache.options,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxOptions: null,
      sortField: "name",
      closeAfterSelect: false,
      optgroups: this._cache.optgroups,
      optgroupField: "group",
      plugins: {
        checkbox_options: {}
      },
      render: {
        optgroup_header: function(data, escape) {
          return `<div class="optgroup-header">${escape(data.value)}</div>`;
        }
      },
      onItemAdd: (value) => {
        let x = this._settings.get(value);
        if (x) {
          x.element.style.display = "block";
        }
      },
      onItemRemove: (value) => {
        let x = this._settings.get(value);
        if (x) {
          x.element.style.display = "none";
        }
      }
    });
    // free memory
    this._cache = undefined;
  }

  /**
   * Synchronize settings. This method is used to update the
   * feature status bars to reflect changes to the lock settings.
   * @param {object} data - Data frame with new status bar values.
   * @param {object} data.id - Feature identifier.
   * @param {object} data.[*] - Value for each feature in each zone.
   * @return {void}
  */
  sync(data) {
    for (let i = 0; i < data.id.length; ++i) {
      this._settings.get(data.id[i]).setHeldStatus(
        this._zones.map(x => data[x][i])
      );
    }
  }

  /**
   * Get settings for generating a solution.
   * @return {object}
   */
  getSettings() {
    let settings = [...this._settings.values()];
    return {
      id:
        settings
        .map(x => Array(this._zones.length).fill(x.id))
        .flat(1),
      name:
        settings
        .map(x => Array(this._zones.length).fill(x.name))
        .flat(1),
      column:
        settings
        .map(x => Array(this._zones.length).fill(x.column))
        .flat(1),
      zone:
        settings
        .map(x => this._zones)
        .flat(1),
      target:
        settings
        .map(x => x.targets)
        .flat(1),
      weight:
        settings
        .map(x => x.weights)
        .flat(1)
    };
  }

}
