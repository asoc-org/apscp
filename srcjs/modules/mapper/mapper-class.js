/** Import dependencies */
// node modules
import {Sortable} from "sortablejs";
// functions to create elements
import {createMenuItem} from "./create-menu-item.js";
// styling
import "./css/style.css";

/** Class representing an object for managing a map. */
export class Mapper {

  // private fields

  /**
   * Map of layers that are hidden on menu. Note that these layers
   * are active and have been added to the map, but are not shown on the menu.
   * @type {WeakMap<object>}
   */
  _hiddenLayers = new Map();

  /**
   * Set that contains identifiers for the layers that are active and have been
   * added to the map. Note that this includes hidden layers.
   * @type {WeakSet<string>}
   */
  _activeLayerIds = new Set();

  /**
   * Maximum number of layers that can be added to the map.
   * @type {number}
   */
  _maxLayers;

  // private HTML fields

  /**
   * HTML Element that contains the Mapbox map.
   * @type {HTMLElement}
   */
  _map;

  /**
   * HTML Element that contains the navigation menu.
   * @type {HTMLElement}
   */
  _menu;

  /**
  * Initialize Mapper object with menu, map, and project data.
  * @param {string} element - HTML element for navigation menu.
  * @param {string} mapId - HTML element identifier for the mapgl map.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.features - Array of feature objects.
  * @param {Array<Object>} project.costs - Array of cost objects.
  * @param {Array<Object>} project.lock - Array of lock objects.
  * @param {number} maxLayers - Maximum number of active layers permitted.
  * @return {void}
  */
  initialize(element, mapId, project, maxLayers) {
    // initialize fields
    this._maxLayers = maxLayers || 15;
    this._menu = element.querySelector(".mapper-menu");
    this._map = document.getElementById(mapId);

    // define temporary variables
    let i, j, el;

    // add menu items
    // note that this code assumes that the this._map has been
    // initialized with layers that have the visible property set to true,
    // also note that layers must be added in the order that is the reverse
    // of that used to add layers to the map
    for (i = 0; i < project.features.length; i++) {
      el = createMenuItem(
        project.features[i], this, project.features[i].themes
      );
      if (project.features[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.id);
      } else {
        this._hiddenLayers.set(el.id, el);
      }
    }
    for (i = 0; i < project.costs.length; i++) {
      el = createMenuItem(project.costs[i], this);
      if (project.costs[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.id);
      } else {
        this._hiddenLayers.set(el.id, el);
      }
    }
    for (i = 0; i < project.locks.length; i++) {
      el = createMenuItem(project.locks[i], this);
      if (project.locks[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.id);
      } else {
        this._hiddenLayers.set(el.id, el);
      }
    }
    for (i = 0; i < project.solutions.length; i++) {
      el = createMenuItem(project.solutions[i], this);
      if (project.solutions[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(project.solutions[i].id);
      } else {
        this._hiddenLayers.set(el.id, el);
      }
    }
    // enable sorting in menu
    new Sortable(
      this._menu, {
      animation: 150,
      dataIdAttr: "data-id",
      ghostClass: "ghost",
      onUpdate: event => {
        let beforeId = undefined;
        if (event.newIndex > 0) {
          beforeId =
            event.to.children[event.newIndex - 1].getAttribute("data-id");
        }
        this.moveLayerOnMap(event.item.getAttribute("data-id"), beforeId);
      }
    });
  }

  /**
  * Add a layer to the Mapper object. Note that if adding this new layer
  * would exceed the maximum number of permitted active layers, then
  * the oldest active layer will be removed automatically.
  * @param {Object} layer - Object that is a lock or a solution.
  * @return {void}
  */
  addLayer(layer) {
    // create menu item
    let el = createMenuItem(layer, this)
    // add menu item to hidden menu items
    this._hiddenLayers.set(el.id, el);
    // add to active layers
    this._activeLayerIds.add(layer.id);
    // if number of active layers exceeds limit, then remove oldest layer
    if (this._activeLayerIds.size > this.maxLayers) {
      let removeId = this._activeLayerIds.values().next().value();
      this.hideLayerFromMenu(removeId);
      this.removeLayerFromMap(removeId);
    }
  }

  /**
  * Hide layer on menu.
  * @param {string} layerId - HTML identifier for layer.
  * @param {boolean} updateMap - Should the map also be updated to reflect
  * these changes to the menu?
  * @return {void}
  */
  hideLayerOnMenu(layerId, updateMap = true) {
    // find element for layer's menu item
    let el = this._menu.querySelector(`[data-id="${layerId}"]`);
    // update menu
    if (el) {
      // remove element from menu
      el.remove();
      // add menu item to hidden menu items
      this._hiddenLayers.set(el.id, el);
    }
    // if needed, update map
    if (updateMap === true) {
      this.hideLayerOnMap(layerId);
    }
  }

  /**
  * Show layer on menu.
  * @param {string} layerId - HTML identifier for layer.
  * @param {boolean} showLegend - Should the legend be shown on the menu?
  * @param {boolean} endPosition - Should the layer be added to the
  * beginning or the end of the menu?
  * @param {boolean} updateMap - Should the map also be updated to reflect
  * these changes to the menu?
  * @return {void}
  */
  showLayerOnMenu(
    layerId, showLegend = true, endPosition = true, updateMap = true
  ) {
    // find element for layer's menu item
    let el = this._hiddenLayers.get(layerId);
    // find menu item checkbox for showing map and set accordingly
    let layerCheckbox = el.querySelector(".layer-checkbox");
    layerCheckbox.checked = true;
    // find menu item checkbox for showing legend and set accordingly
    let legendCheckbox = el.querySelector(".legend-checkbox");
    if (showLegend === true) {
      legendCheckbox.checked = true;
    }
    // if needed, show layer on map
    if (updateMap === true ) {
      this.showLayerOnMap(layerId);
    }
    // add layer to menu
    if (endPosition === true) {
      this._menu.appendChild(el);
    } else {
      this._menu.prepend(el);
    }
  }

  /**
  * Show layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  showLayerOnMap(layerId) {
    // set layer visibility on map
    this._map.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "visible"
    );
  }

  /**
  * Hide layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  hideLayerOnMap(layerId) {
    // set layer visibility on map
    this._map.map.setLayoutProperty(
      "lyr-" + layerId, "visibility", "none"
    );
  }

  /**
  * Move layer on map.
  * @param {string} layerId - HTML identifier for layer to update.
  * @param {string} beforeId - HTML identifier for the layer that should be
  * `layerId` should be inserted before (in other words, `layerId` will appear
  * under `beforeId`). If `beforeId = undefined`, then the layer is moved to
  * the very top.
  * @return {void}
  */
  moveLayerOnMap(layerId, beforeId) {
    // move layer on map
    if (typeof(beforeId) === "string") {
      this._map.map.moveLayer("lyr-" + layerId, "lyr-" + beforeId);
    } else {
      this._map.map.moveLayer("lyr-" + layerId, undefined);
    }
  }

  /**
  * Remove layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  removeLayerFromMap(layerId) {
    // remove layer from menu
    this.hideLayerFromMenu(layerId);
    // remove layer from set of active layers
    this._activeLayerIds.delete(layerId);
    // remove layer from map
    this._map.map.removeLayer("lyr-" + layerId);
  }

  /**
  * Does the map have a particular layer active?
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  hasLayerActive(layerId) {
    this._activeLayerIds.has(layer_id);
  }

}
