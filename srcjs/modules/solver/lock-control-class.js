/** Import dependencies */
// Sortable module
import Sortable from "sortablejs/modular/sortable.core.esm.js";
// classes to create components
import {LockSetting} from "./lock-setting-class.js";
// styling
import "./css/solver-control.css";
import "./css/solver-settings.css";

/** Class representing the control for multiple locks. */
export class LockControl {

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
        new LockSetting(
          project.zones[i],
          project.locks,
          this._zones.length - i
        )
      );
    }
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @param {string} id - Identifier for HTML element to register Shiny bindings.
  * @return {void}
  */
  appendTo(element, id) {
    // create container
    let el = document.createElement("el");
    el.classList.add("lock-control", "solver-control");
    // create settings element
    let menuElement = document.createElement("el");
    menuElement.classList.add(
      "lock-settings", "solver-settings", "well", "well-sm"
    );
    // append elements for lock settings
    this._settings.forEach(x => x.appendTo(menuElement));
    el.appendChild(menuElement);
    element.appendChild(el);
    // initialize sortable class on lock settings
    Sortable.create(menuElement, {
      handle: ".handle",
      animation: 150,
      dataIdAttr: "data-zone",
      ghostClass: "ghost",
      onUpdate: event => {
        // update priority orders
        for (let i = 0; i < this._zones.length; ++i) {
          this._settings
            .get(event.to.children[i].getAttribute("data-zone"))
            .setPriorityValue(this._zones.length - i);
        }
        // trigger synchronization
        if (HTMLWidgets.shinyMode) {
          Shiny.setInputValue(
            `${id}_sync:apscp.JsDataFrame`,
            this.getSettings(),
            {priority: "event"}
          );
        }
      }
    });
    // set event handlers for synchronization
    if (HTMLWidgets.shinyMode) {
      // set events based on each zone's select input
      this._settings.forEach(x => {
        x._select.on("change", value => {
          Shiny.setInputValue(
            `${id}_sync:apscp.JsDataFrame`,
            this.getSettings(),
            {priority: "event"}
          );
        });
      });
    }
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
