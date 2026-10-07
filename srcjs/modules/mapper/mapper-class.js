/** Import dependencies */
// node modules
import {Sortable} from "sortablejs";
import "tom-select/dist/css/tom-select.bootstrap5.css";
import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
// functions to create elements
import {createMenuItem} from "./mapper-scaffold.js";
import {addPopup} from "./add-popup.js";
import {addMouseEvents} from "./add-mouse-events.js";
import {projectSelectOptions} from "../utils/projectSelectOptions.js";
import {selectOption} from "../utils/projectSelectOptions.js";
import {projectMetadata} from "../utils/projectMetadata.js";
import {getMetadata} from "../utils/projectMetadata.js";
// utility functions
import {waitFor} from "../utils/misc.js";
// styling
import "./css/style.css";

/** Class representing an object for managing a map. */
export class Mapper {

  // private fields

  /**
   * Project metadata for layers.
   * @type {Map<string,string>}
   */
  _metadata;

  /**
   * Map of layers that are hidden on menu. Note that these layers
   * are active and have been added to the map, but are not shown on the menu.
   * @type {Map<object>}
   */
  _hiddenLayers = new Map();

  /**
   * Set that contains identifiers for the layers that are active and have been
   * added to the map. Note that this includes hidden layers.
   * @type {Set<string>}
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
   * HTML Element that contains the select input.
   * @type {HTMLElement}
   */
  _select;

  /**
   * Initialize Mapper object with menu, map, and project data.
   * @param {string} element - HTML element for navigation menu.
   * @param {string} mapId - HTML element identifier for the mapgl map.
   * @param {Object} project - Object with various types of objects.
   * @param {Array<object>} project.features - Array of feature objects.
   * @param {Array<object>} project.costs - Array of cost objects.
   * @param {Array<object>} project.lock - Array of lock objects.
   * @param {number} maxLayers - Maximum number of active layers permitted.
   * @return {void}
   */
  initialize(element, mapId, project, maxLayers) {
    // initialize fields
    this._maxLayers = maxLayers || 15;
    this._menu = element.querySelector(".mapper-menu");
    this._select = element.querySelector(".mapper-select");
    this._map = document.getElementById(mapId);
    this._metadata = projectMetadata(project);
    // define temporary variables
    let i, j, el, k;
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
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    for (i = 0; i < project.costs.length; i++) {
      el = createMenuItem(project.costs[i], this);
      if (project.costs[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    for (i = 0; i < project.locks.length; i++) {
      el = createMenuItem(project.locks[i], this);
      if (project.locks[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    for (i = 0; i < project.solutions.length; i++) {
      el = createMenuItem(project.solutions[i], this);
      if (project.solutions[i].layer.visible === true) {
        this._menu.appendChild(el);
        this._activeLayerIds.add(el.dataset.id);
      } else {
        this._hiddenLayers.set(el.dataset.id, el);
      }
    }
    // initialize sorting behavior
    new Sortable(this._menu, {
      handle: ".handle",
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
    // initialize select menu
    let selectOptions = projectSelectOptions(project);
    new TomSelect(this._select, {
      options: selectOptions.options,
      items: [...this._activeLayerIds],
      create: false,
      dropdownParent: "body",
      labelField: "name",
      searchField: ["name"],
      maxOptions: null,
      sortField: "sort",
      closeAfterSelect: false,
      optgroups: selectOptions.optgroups,
      optgroupField: "group",
      plugins: {
        checkbox_options: {}
      },
      render: {
        optgroup_header: function(data, escape) {
          // determine if all options for group are checked
          const groupOptions =
            Object.values(this.options)
            .filter(x => x.group.includes(data.value));
          const values = this.getValue().split(",");
          const allChecked =
            groupOptions.length > 0 &&
            groupOptions.every(x => values.includes(x.value));
          // return HTML for header
          return "" +
            "<div class=\"optgroup-header\" " +
            `data-group="${escape(data.value)}">` +
            "<input type=\"checkbox\" class=\"tomselect-checkbox\"" +
            `${allChecked ? "checked" : ""}>` +
            `<span>${escape(data.value)}</span></div>`;
        }
      },
      onInitialize: function() {
        // event listeners for checkboxes in option group headers
        this.dropdown.addEventListener("click", (e) => {
          if (
            e.target &&
            e.target.parentNode.classList.contains("optgroup-header")
          ) {
            // define variables
            let group = e.target.parentNode.getAttribute("data-group");
            let checkbox = e.target.parentNode.children[0];
            // if clicked on text label, then alter checkbox
            if (!e.target.classList.contains("tomselect-checkbox")) {
              checkbox.checked = !checkbox.checked;
            }
            // determine if items should be added or removed
            let isChecked = checkbox.checked;
            // add or remove items
            for (const id in this.options) {
              if (this.options[id].group.includes(group)) {
                if (isChecked) {
                  this.addItem(this.options[id].value);
                } else {
                  this.removeItem(this.options[id].value);
                }
              }
            }
            // keep the dropdown open after clicking the group checkbox
            e.stopPropagation();
          }
        });
      },
      onItemAdd: (value) => {
        if (this._activeLayerIds.has(value)) {
          this.showLayerOnMenu(value);
          this.moveLayerOnMap(value);
        } else {
          if (HTMLWidgets.shinyMode) {
            Shiny.setInputValue(
              `${element.id}_sync`,
              value,
              {priority: "event"}
            );
          }
        }
      },
      onItemRemove: (value) => {
        this.hideLayerOnMenu(value, true);
      }
    });
    // add map events
    // note that they must be called after the map has been defined
    waitFor(
      () => {
        return this._map.map !== undefined;
      }
    ).then(
      () => {
        addPopup(this._map, this._metadata, project.zones)
        addMouseEvents(this._map);
        return;
      }
    );
  }

  /**
   * Add a layer to the Mapper object. Note that if adding this new layer
   * would exceed the maximum number of permitted active layers, then
   * the oldest active layer will be removed automatically.
   * @param {Object} layer - Object that is a lock or a solution.
   * @return {void}
   */
  addLayer(layer) {
    // add layer to metadata
    this._metadata.set("lyr-" + layer.id, getMetadata(layer));
    // create menu item
    let el = createMenuItem(layer, this);
    // add menu item to hidden menu items
    this._hiddenLayers.set(el.dataset.id, el);
    // set layer as active
    this._activeLayerIds.add(el.dataset.id);
    // add layer to menu
    this.showLayerOnMenu(el.dataset.id, true, false);
    // add menu item to select
    this._select.tomselect.addOption(selectOption(layer));
    this._select.tomselect.addItem(layer.id, true);
    // if number of active layers exceeds limit, then remove oldest layer
    if (this._activeLayerIds.size > this._maxLayers) {
      let removeId = this._activeLayerIds.values().next().value;
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
      this._hiddenLayers.set(el.dataset.id, el);
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
   * @param {boolean} updateMap - Should the map also be updated to reflect
   * these changes to the menu?
   * @return {void}
   */
  showLayerOnMenu(layerId, showLegend = true, updateMap = true) {
    // find element for layer's menu item
    let el = this._hiddenLayers.get(layerId);
    // find menu item checkbox for showing map and set accordingly
    let layerCheckbox = el.querySelector(".layer-checkbox");
    layerCheckbox = true;
    // find menu item checkbox for showing legend and set accordingly
    let legendCheckbox = el.querySelector(".legend-checkbox");
    if (showLegend === true) {
      legendCheckbox.checked = true;
    }
    // if needed, show layer on map
    if (updateMap === true) {
      this.showLayerOnMap(layerId);
    }
    // add layer to menu
    this._menu.prepend(el);
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
   * @param {string} layerId - HTML identifier for layer.;
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
    this._select.tomselect.removeItem(layerId);
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

  /**
   * Show all menu layers on map.
   * @return {void}
   */
   showAllMenuLayersOnMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.showLayerOnMap(x.getAttribute("data-id"));
        x.querySelector(".layer-checkbox").checked = true;
      });
   }

  /**
   * Hide all menu layers on map.
   * @return {void}
   */
   hideAllMenuLayersOnMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.hideLayerOnMap(x.getAttribute("data-id"));
        x.querySelector(".layer-checkbox").checked = false;
      });
   }

  /**
   * Add highlighting to layer on map.
   * @param {string} layerId - HTML identifier for layer.
   * @param {Array<number>} values - Values to highlight.
   * Defaults to `undefined` such that all non-zero values are highlighted.
   * @return {void}
   */
  highlightLayerOnMap(layerId, values = undefined) {
    // add highlight
    if (values === undefined || values.length === 0) {
      this._map.map.setPaintProperty(
        "lyr-" + layerId, "fill-outline-color",
        [
          "case",
          ["==", ["get", this._metadata.get("lyr-" + layerId).column], null],
          "transparent",
          "#FFFF00"
        ]
      );
    } else {
      this._map.map.setPaintProperty(
        "lyr-" + layerId, "fill-outline-color",
        [
          "case",
          [
            "in",
            ["get", this._metadata.get("lyr-" + layerId).column],
            ["literal", values]
          ],
          "#FFFF00",
          "transparent"
        ]
      );
    }
  }

  /**
   * Remove highlighting for layer on map.
   * @param {string} layerId - HTML identifier for layer.;
   * @return {void}
   */
  unhighlightLayerOnMap(layerId) {
    // remove highlight
    this._map.map.setPaintProperty(
      "lyr-" + layerId, "fill-outline-color",
      undefined
    );
  }

  /**
   * Remove highlighting for all menu layers on map.
   * @return {void}
   */
  unhighlightAllMenuLayersOnMap() {
    // unhighlight layers
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.unhighlightLayerOnMap(x.getAttribute("data-id"));
      });
    // update styling for categorical and solution legends
    this._menu
      .querySelectorAll(".mapper-menu-item .item.highlight")
      .forEach((x) => x.classList.remove("highlight"));
    // update styling for continuous legends
    this._menu
      .querySelectorAll(".mapper-menu-item .legend-container.highlight")
      .forEach((x) => x.classList.remove("highlight"));
  }

  /**
   * Remove all layers from the menu and the map.
   * @return {void}
   */
   removeAllLayersFromMenuAndMap() {
    this._menu
      .querySelectorAll(".mapper-menu-item")
      .forEach((x) => {
        this.removeLayerFromMap(x.getAttribute("data-id"));
      })
   }

}
