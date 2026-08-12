/** Import dependencies */
// npm modules
import Sortable from "sortablejs/modular/sortable.core.esm.js";
// classes to create components
import {LockSetting} from "./lock-setting-class.js";
// styling
import "./css/settings.css";

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
   * @type {Map<LockSettings>}
   */
  _settings = new Map();

  /**
  * Construct a new LockSettings object.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.locks- Array of lock objects.
  * @return {void}
  */
  constructor(project) {
    // initialize fields
    this._zones = project.zones;
    // create lock setting for each zone
    for (let i = 0; i < this._zones.length; ++i) {
      this._settings.set(
        project.zones[i],
        new LockSetting(project.zones[i], project.locks, this._zones.length - i)
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
    el.classList.add("lock-settings", "settings");
    element.appendChild(el);
    // append elements for lock settings
    this._settings.forEach(x => x.appendTo(el));
    // initialize sortable class on lock settings
    Sortable.create(el, {
      handle: ".handle",
      animation: 150,
      dataIdAttr: "data-zone",
      ghostClass: "ghost",
      onUpdate: event => {
        for (let i = 0; i < this._zones.length; ++i) {
          this._settings
            .get(event.to.children[i].getAttribute("data-zone"))
            .setPriorityValue(this._zones.length - i);
        }
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
        Array.from(this._settings.values(), x => x.getLockIds())
        .flat(1),
      name:
        Array.from(this._settings.values(), x => x.getLockNames())
        .flat(1),
      column:
        Array.from(this._settings.values(), x => x.getLockColumns())
        .flat(1),
      zone:
        Array.from(this._settings.values(), x => x.getLockZones())
        .flat(1),
      priority:
        Array.from(this._settings.values(), x => x.getLockPriorityValues())
        .flat(1)
    }
  }

}
