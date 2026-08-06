import {createLegend} from "./create-legend.js";
import {createProvenance} from "../utils/element.js";
import {createNameLabel} from "../utils/element.js";

/**
 * Create a new menu item.
 * @param {Object} x - Object with menu item information.
 * @param {string} x.id - HTML element identifier for the menu item.
 * @param {string} x.name - Name for the menu item.
 * @param {Object} x.layer - {@link Layer} object.
 * @param {String} x.class - Class for layer. Available options include
 * `"Feature"`, `"Cost"`, `"Lock"`, and `"Solution"`.
 * @param {Object} mapper - {@link Mapper} object.
 * @param {Array<Object>} themes - Themes to which the menu item belongs.
 * Note that this is the names of the themes for feature layers.
 * @return
 */
export function createMenuItem(x, mapper, themes = undefined) {
  // initialize container element
  let el = document.importNode(
    document
      .querySelector("." + x.class.toLowerCase() + "-layer-template")
      .content,
    true).children[0];

  // find components of container element
  let showLegendCheckbox = el.querySelector(".legend-checkbox");
  let showLayerCheckbox = el.querySelector(".layer-checkbox");
  let removeLayerFromMapButton = el.querySelector(".layer-button");
  let legendElement = el.querySelector(".legend-container");
  let nameElement = el.querySelector(".name-container");
  let provenanceElement = el.querySelector(".provenance-container");

  // set layer id
  el.id = x.id;
  el.setAttribute("data-id", el.id);

  // create name label
  nameElement.appendChild(createNameLabel(x));

  // set layer checkbox status
  showLayerCheckbox.checked = x.layer.visible;

  // set legend checkbox
  showLegendCheckbox.checked = true;

  // add legend
  legendElement.appendChild(createLegend(x.layer.legend));

  // add provenance
  provenanceElement.appendChild(createProvenance(x.layer.provenance));

  // set listener for checkbox to show/hide legend
  if (HTMLWidgets.shinyMode) {
    showLegendCheckbox.addEventListener("change", function () {
      if (this.checked) {
        legendElement.style.display = "block";
      } else {
        legendElement.style.display = "none";
      }
    });
  }

  // set listener for button to hide layer
  if (HTMLWidgets.shinyMode) {
    showLayerCheckbox.addEventListener("change", function () {
      if (this.checked) {
        mapper.showLayerOnMap(x.id);
      } else {
        mapper.hideLayerOnMap(x.id);
      }
    });
  }

  // set listener for button to drop layer
  if (HTMLWidgets.shinyMode) {
    removeLayerFromMapButton.addEventListener("click", function () {
      mapper.hideLayerOnMap(x.id);
      mapper.hideLayerOnMenu(x.id);
    });
  }

  // return element
  return el;
};
