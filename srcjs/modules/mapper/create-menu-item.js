import {createLegend} from "./create-legend.js";
import {createProvenance} from "./create-provenance.js";

/**
 * Create a new menu item.
 * @param {Object} x - Object with menu item information.
 * @param {string} x.id - HTML element identifier for the menu item.
 * @param {string} x.name - Name for the menu item.
 * @param {Object} x.layer - {@link Layer} object.
 * @param {String} x.class - Class for layer. Available options include
 * `"Feature"`, `"Cost"`, `"Lock"`, and `"Solution"`.
 * @param {Object} mapper - {@link Mapper} object.
 * @param {string} group - Group to which the menu item belongs.
 * Note that this is the name of the theme for feature layers.
 * @return
 */
export function createMenuItem(x, mapper, group = undefined) {
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
  let nameElement = el.querySelector(".name-label");
  let provenanceElement = el.querySelector(".provenance-container");

  // set layer id
  el.id = x.id;
  el.setAttribute("data-id", el.id);

  // set layer name
  nameElement.innerText = x.name;

  // set layer details
  if (typeof(x.layer.details) === "string") {
    nameElement.setAttribute("data-toggle", "tooltip");
    nameElement.setAttribute("data-placement", "top");
    nameElement.setAttribute("data-container", "body");
    nameElement.setAttribute("title", x.layer.details);
  }

  // set layer group
  if (typeof(group) === "string") {
    let themeLabel = el.querySelector(".theme-label");
    if (themeLabel) {
      themeLabel.innerText = group;
    }
  }

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
