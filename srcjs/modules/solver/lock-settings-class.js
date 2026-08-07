import Sortable from "sortablejs/modular/sortable.core.esm.js";
import {LockSetting} from "./lock-setting-class.js";

/** Class representing the settings for multiple locks. */
export class LockSettings {

  // private fields

  /**
   * Array of zone names.
   * @type {Array<string>}
   */
  _zones;

  /**
   * Array of settings.
   * @type {Array<LockSettings>}
   */
  _settings;

  /**
  * Construct a new LockSettings object.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.locks- Array of lock objects.
  * @return {void}
  */
  constructor(project) {
    // initialize fields
    this._zones = project.zones;
    this._settings = [];
    // create lock setting for each zone
    for (let i = 0; i < this._zones.length; ++i) {
      this._settings.push(
        new LockSetting(project.zones[i], project.locks)
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
    el.classList.add("lock-settings-container");
    element.appendChild(el);
    // append elements for lock settings
    for (let i = 0; i < this._settings.length; ++i) {
      this._settings[i].appendTo(el);
    }
    // initialize sortable class on lock settings
    Sortable.create(el, {
      onUpdate: function(event) {
        console.log("sortable update");
      }
    });
  }

  /**
  * Get settings for generating a solution.
  * @return {Object}
  */
  getSettings() {
    return {
      id:
        this._settings
        .map(x => x.getLockIds())
        .flat(1),
      name:
        this._settings
        .map(x => x.getLockNames())
        .flat(1),
      column:
        this._settings
        .map(x => x.getLockColumns())
        .flat(1),
      zone:
        this._settings
        .map(x => x.getLockZones())
        .flat(1),
      priority:
        this._settings
        .map(x => x.getPriorityValues())
        .flat(1)
    }
  }

}
