import "./css/feature-setting.css";
import {scaffoldLockSetting} from "./lock-setting-scaffold.js";

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

  // private fields

  /**
   * HTML element.
   * @type {HTMLElement}
   */
  _element;

  /**
   * Array of lock objects.
   * @type {Array<Object>}
   */
  _locks

  /**
   * Sec of lock objects.
   * @type {Array<Object>}
   */
  _selectedLocks

  /**
  * Construct a new LockSetting object.
  * @param {string} zone - Zone name.
  * @param {Array<Object>} locks - Array of lock objects.
  * @param {number} - Priority value.
  * @return {void}
  */
  constructor(zone, locks, priority) {
    // initialize public fields
    this.zone = zone;
    this.priority = priority;
    // initialize private fields
    this._locks = locks;
    this._element = scaffoldLockSetting(zone, locks);
  }

  /**
  * Append the HTML element for the class to another HTML element.
  * @param {HTMLElement} element - HTML element.
  * @return {void}
  */
  appendTo(element) {
    // append to element
    element.appendChild(this._element);
    // initialize select menu
    // TODO
  }

  /**
  * Get identifiers for selected locks.
  * @return {Array<string>}
  */
  getLockIds() {
    return Array.from(this._selectedLocks).map(x => x.id);
  }

  /**
  * Get names for selected locks.
  * @return {Array<string>}
  */
  getLockNames() {
    return Array.from(this._selectedLocks).map(x => x.name);
  }

  /**
  * Get columns for selected locks.
  * @return {Array<string>}
  */
  getLockColumns() {
    return Array.from(this._selectedLocks).map(x => x.layer.name);
  }

  /**
  * Get zones for selected locks.
  * @return {Array<string>}
  */
  getLockZones() {
    return Array(this._selectedLocks.length).fill(this.zone);
  }

  /**
  * Get priority values for selected locks.
  * @return {Array<number>}
  */
  getPriorityValues() {
    return Array(this._selectedLocks.length).fill(this.priority);
  }

}
