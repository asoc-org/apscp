import "./css/style.css";
import {Sortable} from "sortablejs";
import {createMenuItem} from "./create-menu-item.js";

/** Class representing an object for managing a map. */
export class Mapper {

  // private fields

  /**
   * HTML Element that contains menu items for active map layers.
   * @type {HTMLElement}
   */
  _menuElement;

  /**
   * Map that contains hidden menu items for map layers.
   * @type {HTMLElement}
   */
  _hiddenMenuItems;

  /**
   * HTML Element that contains the Mapbox map.
   * @type {HTMLElement}
   */
  _mapElement;

  /**
   * Array that contains identifiers for the layers that have been
   * added to the map. Note that this includes hidden layers.
   * @type {Array<string>}
   */
  _activeLayerIds;

  /**
   * Maximum number of layers that can be added to the map.
   * @type {number}
   */
  _maxLayers;


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
  * Initialize Mapper object with menu, map, and project data.
  * @param {string} menuId - HTML element identifier for menu container.
  * @param {string} mapId - HTML element identifier for the mapgl map.
  * @param {Object} project - Object with various types of objects.
  * @param {Array<Object>} project.themes - Array of theme objects.
  * @param {Array<Object>} project.features - Array of feature objects.
  * @param {Array<Object>} project.costs - Array of cost objects.
  * @param {Array<Object>} project.lock - Array of lock objects.
  * @param {number} maxLayers - Maximum number of active layers permitted on
  * the map.
  * @return {void}
  */
  initialize(menuId, mapId, project, maxLayers = 15) {
    // initialize fields
    this._activeLayerIds = [];
    this._hiddenMenuItems = new Map();
    this._maxLayers = maxLayers;
    this._menuElement =
      document.getElementById(menuId).querySelector(".mapper-menu");
    this._mapElement = document.getElementById(mapId);

    // define temporary variables
    let i, j, el;

    // add menu items
    // note that this code assumes that the this._mapElement has been
    // initialized with layers that have the visible property set to true,
    // also note that layers must be added in the order that is the reverse
    // of that used to add layers to the map
    for (i = 0; i < project.themes.length; i++) {
      for (j = 0; j < project.themes[0].features.length; j++) {
          el = createMenuItem(
            project.themes[i].features[j],
            this,
            project.themes[i].name
          );
          if (project.themes[i].features[j].layer.visible === true) {
            this._menuElement.appendChild(el);
            this._activeLayerIds.push(el.id);
          } else {
            this._hiddenMenuItems.set(el.id, el);
        }
      }
    }
    for (i = 0; i < project.costs.length; i++) {
      el = createMenuItem(project.costs[i], this);
      if (project.costs[i].layer.visible === true) {
        this._menuElement.appendChild(el);
        this._activeLayerIds.push(el.id);
      } else {
        this._hiddenMenuItems.set(el.id, el);
      }
    }
    for (i = 0; i < project.locks.length; i++) {
      el = createMenuItem(project.locks[i], this);
      if (project.locks[i].layer.visible === true) {
        this._menuElement.appendChild(el);
        this._activeLayerIds.push(el.id);
      } else {
        this._hiddenMenuItems.set(el.id, el);
      }
    }
    for (i = 0; i < project.solutions.length; i++) {
      el = createMenuItem(project.solutions[i], this);
      if (project.solutions[i].layer.visible === true) {
        this._menuElement.appendChild(el);
        this._activeLayerIds.push(project.solutions[i].id);
      } else {
        this._hiddenMenuItems.set(el.id, el);
      }
    }

    // enable sorting in menu element
    let that = this;
    var sortable = new Sortable(
      this._menuElement, {
      animation: 150,
      dataIdAttr: "data-id",
      ghostClass: "ghost",
      onUpdate: function(evt) {
        if (HTMLWidgets.shinyMode) {
          let beforeId = undefined;
          if (evt.newIndex > 0) {
            evt.to.children[evt.newIndex - 1].getAttribute("data-id");
          }
          that.moveLayerOnMap(evt.item.getAttribute("data-id"), beforeId);
        }
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
    // create element for layer
    layer.visible = visible;
    let el = createMenuItem(layer, this);
    // add to active layers
    this._activeLayerIds.push(layer.id);
    // if number of active layers exceeds limit, then remove oldest layer
    if (this._activeLayerIds.length > this.maxLayers) {
      this.hideLayerFromMenu(this._activeLayerIds[0]);
      this.removeLayerFromMap(this._activeLayerIds[0]);
    }
  }

  /**
  * Hide layer on menu.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  hideLayerOnMenu(layerId) {
    // find element for layer's menu item
    let el = this._menuElement.querySelector(`[data-id="${layerId}"]`);
    if (el) {
      // remove element from menu
      el.remove();
      // add menu item to hidden menu items
      this._hiddenMenuItems.set(el.id, el);
    }
  }

  /**
  * Show layer on menu.
  * @param {string} layerId - HTML identifier for layer.
  * @param {boolean} endPosition - Should the layer be added to the
  * beginning or the end of the menu?
  * @return {void}
  */
  showLayerOnMenu(
    layerId, showLayerOnMap = true, showLegend = true, endPosition = true
  ) {
    // find element for layer's menu item
    let el = this._hiddenMenuItems.get(layerId);
    // find menu item checkbox for showing map and set accordingly
    let layerCheckbox = el.querySelector(".layer-checkbox");
    layerCheckbox.checked = showLayerOnMap;
    // find menu item checkbox for showing legend and set accordingly
    let legendCheckbox = el.querySelector(".legend-checkbox");
    legendCheckbox.checked = true;
    // if needed, show layer on map
    if (showLayerOnMap === true) {
      this.showLayerOnMap(layerId);
    }
    // add layer to menu
    if (endPosition === true) {
      this._menuElement.appendChild(el);
    } else {
      this._menuElement.prependChild(el);
    }
  }

  /**
  * Show layer on map.
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  showLayerOnMap(layerId) {
    // set layer visibility on map
    this._mapElement.map.setLayoutProperty(
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
    this._mapElement.map.setLayoutProperty(
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
      this._mapElement.map.moveLayer("lyr-" + layerId, "lyr-" + beforeId);
    } else {
      this._mapElement.map.moveLayer("lyr-" + layerId, undefined);
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
    // remove layer from array of active layers
    this._activeLayerIds =
      this._activeLayerIds.filter((x) => x !== layer_id);
    // remove layer from map
    this._mapElement.map.removeLayer("lyr-" + layerId);
  }

  /**
  * Does the map have a particular layer active?
  * @param {string} layerId - HTML identifier for layer.
  * @return {void}
  */
  hasLayerActive(layerId) {
    this._activeLayerIds.includes(layer_id);
  }

}
