/** Import dependencies */
// Tom Select module
import "./css/tom-select.css";
import "tom-select/dist/css/tom-select.bootstrap5.css";
import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
// classes to create components
import {FeatureSetting} from "./feature-setting-class.js";
import {createButtonGroups} from "../utils/element.js";
// utility functions
import {projectSelectOptions} from "../utils/projectSelectOptions.js";
import {toArray} from "../utils/misc.js";
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
   * Select element indicating which features are displayed in the menu.
   * @type {Array<string>}
   */
  _select;

  /**
   * Map of settings.
   * @type {Map<FeatureSetting>}
   */
  _settings = new Map();

  /**
   * Object used to temporarily store settings for select menu.
   * @type {Object}
   */
  _cache;

  /**
   * Construct a new FeatureControl object.
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
    // set starting options
    this._cache.items = Array();
    for (let i = 0; i < project.features.length; ++i) {
      for (let j = 0; j < project.features[i].themes.length; ++j) {
        if (
          project.features[i].themes[j].name ===
          this._cache.optgroups[0].value
        ) {
          this._cache.items.push(project.features[i].id);
        }
      }
    }
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
    // create buttons to adjust set settings for multiple features
    let buttonsElement = createButtonGroups(
      this._zones,
      ["On", "Off"],
      this._zones.map((x) => `var(--zone-${x}-primary)`)
    );
    buttonsElement
      .querySelectorAll("button")
      .forEach((x) => {
        x.addEventListener("click", () => {
          let index = Number(x.getAttribute("data-group-index"));
          if (x.getAttribute("data-label") === "On") {
            this.switchOnZoneForFeaturesInMenu(index);
          } else {
            this.switchOffZoneForFeaturesInMenu(index);
          }
        });
      });
    // create feature setting objects and add them to the menu
    this._settings.forEach(x => x.appendTo(menuElement));
    // create select menu
    this._select = document.createElement("input");
    this._select.setAttribute("multiple", "");
    this._select.setAttribute("placeholder", "Choose features...");
    // append elements to container
    el.appendChild(this._select);
    el.appendChild(buttonsElement);
    el.appendChild(menuElement);
    element.appendChild(el);
    // initialize select menu
    new TomSelect(this._select, {
      items:  this._cache.items,
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
      onInitialize: () => {
        this._cache.items.forEach((value) => {
          let x = this._settings.get(value);
          if (x) {
            x.element.style.display = "block";
          }
        });
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
   * Switch on all features that are displayed in the menu.
   * @param {integer} index - Zone index.
   * @return {void}
  */
  switchOnZoneForFeaturesInMenu(index) {
    this.getFeaturesInMenu()
    .forEach((x) => this._settings.get(x).switchOnZone(index));
  }

  /**
   * Switch off all features that are displayed in the menu.
   * @param {integer} index - Zone index.
   * @return {void}
   */
  switchOffZoneForFeaturesInMenu(index) {
    this.getFeaturesInMenu()
    .forEach((x) => this._settings.get(x).switchOffZone(index));
  }

  /**
   * Get all features selected in menu.
   * @return {Array<FeatureSetting>}
   */
  getFeaturesInMenu() {
    let out = this._select.tomselect.getValue();
    if (out === "") return [];
    return out.split(",");
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
