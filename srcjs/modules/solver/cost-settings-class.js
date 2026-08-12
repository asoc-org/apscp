import {CostSetting} from "./cost-setting-class.js";

/** Class representing the settings for multiple cost. */
export class CostSettings {

  // private fields

  /**
   * Array of settings.
   * @type {Array<CostSettings>}
   */
  _settings;

  /**
  * Construct a new CostSettings object.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.costs - Array of feature objects.
  * @param {Array<number>} costWeightChoices - Array of numbers used to
  * define the potential values for setting cost weights.
  * @return {void}
  */
  constructor(project, costWeightChoices) {
    // initialize fields
    this._settings = [];
    // create cost setting objects
    for (let i = 0; i < project.costs.length; ++i) {
      this._settings.push(
        new CostSetting(project.costs[i], project.zones, costWeightChoices)
      );
    }
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // create container
    let el = document.createElement("el");
    el.classList.add("cost-settings", "settings");
    // create menu element
    let menuElement = document.createElement("div");
    menuElement.classList.add("cost-menu");
    // create cost objects and add them to the menu
    for (let i = 0; i < this._settings.length; ++i) {
      this._settings[i].appendTo(menuElement);
    }
    // append elements to container
    el.appendChild(menuElement);
    element.appendChild(el);
  }

  /**
  * Get settings for generating a solution.
  * @return {Object}
  */
  getSettings() {
    return {
      id:
        this._settings
        .map(x => x.id),
      name:
        this._settings
        .map(x => x.name),
      column:
        this._settings
        .map(x => x.column),
      zone:
        this._settings
        .map(x => x.zone),
      weight:
        this._settings
        .map(x => x.weight)
    };
  }

}
