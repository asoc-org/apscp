import "./css/lock-setting.css"
import TomSelect from "tom-select";
import {scaffoldLockSetting} from "./lock-setting-scaffold.js";
import {createProvenance} from "../utils/element.js";

/** Class representing the setting for a single lock. */
export class LockSetting {

  // public fields

  /**
   * Zone name.
   * @type {string}
   */
  zone;

  /**
   * Priority value.
   * @type {number}
   */
  priority;

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  element;

  // private fields

  /**
   * Map of lock objects.
   * @type {Map<Object>}
   */
  _locks = new Map();

  /**
   * Tom Select object
   * @type {object}
   */
  _select;

  /**
   * Array of previously selected lock identifiers.
   * @type {HTMLElement}
   */
  _previousLockIds = [];

  /**
   * Array of initial lock identifiers.
   * @type {HTMLElement}
   */
  _initialLockIds = [];

  /**
   * Object used to temporarily store settings for select menu.
   * @type {object}
   */
  _cache = {};

  /**
  * Construct a new LockSetting object.
  * @param {string} zone - Zone name.
  * @param {Array<Object>} locks - Array of lock objects.
  * @param {number} priority - Priority value.
  * @return {void}
  */
  constructor(zone, locks, priority) {
    // initialize public fields
    this.zone = zone;
    this.priority = priority;
    // initialize private fields
    this.element = scaffoldLockSetting(zone, locks, priority);
    this._cache.options = [];
    for (let i = 0; i < locks.length; ++i) {
      this._locks.set(locks[i].id, locks[i]);
      this._cache.options.push({name: locks[i].name, value: locks[i].id});
      if (locks[i].zone === zone) {
        this._initialLockIds.push(locks[i].id);
      }
    }
    this._previousLockIds = this._initialLockIds;
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // append to element
    element.appendChild(this.element);
    // initialize select menu,
    // NOTE this must be done after the element is appended to DOM
    this._select = new TomSelect(this.element.querySelector(".lock-select"), {
      options: this._cache.options,
      items: this._initialLockIds,
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxItems: null,
      sortField: "name",
      plugins: ["checkbox_options"],
      closeAfterSelect: false,
      render: {
        option: (data, escape) => {
          let el = document.createElement("div");
          el.classList.add("lock-option");
          let text = document.createElement("span");
          text.innerText = escape(data.name);
          el.appendChild(text);
          el.appendChild(
            createProvenance(this._locks.get(data.value).layer.provenance)
          );
          return el;
        }
      }
    });
    // set event handler for toggle
    this.element
      .querySelector(".switch")
      .addEventListener("change", (event) => {
        if (event.target.checked) {
          // update select values
          this._select.setValue(this._previousLockIds);
          // update disable property on element
          this._select.enable();
        } else {
          // update previous values
          this._previousLockIds = this.getLockIds().slice();
          // clear select
          this._select.clear();
          // update disable property on element
          this._select.disable();
        }
      });
    // free memory
    this._cache = undefined;
  }

  /**
  * Set priority value.
  * @param {number} value - New priority value.
  * @return {void}
  */
  setPriorityValue(value) {
    this.priority = value;
  }

  /**
  * Get identifiers for selected locks.
  * @return {Array<string>}
  */
  getLockIds() {
    return this._select.getValue();
  }

  /**
  * Get names for selected locks.
  * @return {Array<string>}
  */
  getLockNames() {
    return this.getLockIds().map(x => this._locks.get(x).name);
  }

  /**
  * Get columns for selected locks.
  * @return {Array<string>}
  */
  getLockColumns() {
    return this.getLockIds().map(x => this._locks.get(x).layer.column);
  }

  /**
  * Get zones for selected locks.
  * @return {Array<string>}
  */
  getLockZones() {
    return this.getLockIds().map(x => this.zone);
  }

  /**
  * Get priority values for selected locks.
  * @return {Array<number>}
  */
  getLockPriorityValues() {
    return this.getLockIds().map(x => this.priority);
  }

}
