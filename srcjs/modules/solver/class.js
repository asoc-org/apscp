import "./css/style.css";
import {Sortable} from "sortablejs";
import {createMenuItem} from "./create-menu-item.js";

/** Class representing an object for generating a solution. */
export class Solver {

  // private fields





  /**
  * Construct a new Mapper object.
  * @return {void}
  */
  constructor() {
    // initialize fields
    this._activeLayerIds = [];
    this._hiddenMenuItems = new Map();
  }

  /**
  * Initialize Solver with HTML identifier and project data.
  * @param {string} elementId - HTML element identifier for  container.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.themes - Array of theme objects.
  * @param {Array<Object>} project.features - Array of feature objects.
  * @param {Array<Object>} project.costs - Array of cost objects.
  * @param {Array<Object>} project.lock - Array of lock objects.
  * the map.
  * @return {void}
  */
  initialize(id, project) {
    // initialize fields
    this._element = document.getElementById(id);
    this._project = project;

  }

  /**
  * Add a lock to the Solver object.
  * @param {Object} lock - Object that is a lock.
  * @return {void}
  */
  addLock(lock) {
    // TODO
  }

  /**
  * Get settings from the Solver object for generating a solution.
  * @param {Object} lock - Object that is a lock.
  * @return {Object}
  */
  getSettings() {
    // TODO
  }

}
