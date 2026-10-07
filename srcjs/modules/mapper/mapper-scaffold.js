/** Import dependencies */
// functions to create elements
import {createLegend} from "./create-legend.js";
import {createProvenance} from "../utils/element.js";
import {createNameLabel} from "../utils/element.js";

/**
 * Create a new menu item.
 * @param {object} x - Object with menu item information.
 * @param {string} x.id - HTML element identifier for the menu item.
 * @param {string} x.name - Name for the menu item.
 * @param {object} x.layer - {@link Layer} object.
 * @param {String} x.class - Class for layer. Available options include
 * `"Feature"`, `"Cost"`, `"Lock"`, and `"Solution"`.
 * @param {object} mapper - {@link Mapper} object.
 * @param {Array<object>} themes - Themes to which the menu item belongs.
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
  let handleElement = el.querySelector(".handle");

  // set layer id
  el.setAttribute("data-id", x.id);

  // create name label
  nameElement.appendChild(createNameLabel(x));

  // set layer checkbox status
  showLayerCheckbox.checked = true;

  // set legend checkbox
  showLegendCheckbox.checked = true;

  // add legend
  legendElement.appendChild(createLegend(x.layer.legend));

  // add provenance
  provenanceElement.appendChild(createProvenance(x.layer.provenance));

  // set listener for checkbox to show/hide legend
  showLegendCheckbox.addEventListener("change", function () {
    if (this.checked) {
      legendElement.style.display = "block";
    } else {
      legendElement.style.display = "none";
    }
  });

  // set listener for checkbox to show/hide layer
  showLayerCheckbox.addEventListener("click", function () {
    if (this.checked) {
      mapper.showLayerOnMap(x.id);
    } else {
      mapper.hideLayerOnMap(x.id);
    }
  });

  // set listener for button to drop layer
  removeLayerFromMapButton.addEventListener("click", function () {
    mapper._select.tomselect.removeItem(x.id);
  });

  // set listener for buttons to highlight layer
  if (x.layer.legend.class == "ContinuousLegend") {
    // listener for continuous legend
    legendElement.addEventListener("click", (event) => {
      if (!legendElement.classList.contains("highlight")) {
        legendElement.classList.add("highlight");
        mapper.highlightLayerOnMap(x.id);
      } else {
        legendElement.classList.remove("highlight");
        mapper.unhighlightLayerOnMap(x.id);
      }
    });
  } else {
    // listener for categorical or solution legend
    legendElement
      .querySelectorAll(".item")
      .forEach((item) => {
        item.addEventListener("click", (event) => {
          let h = !item.classList.contains("highlight");
          if (h) {
            item.classList.add("highlight");
          } else {
            item.classList.remove("highlight");
          }
          mapper.highlightLayerOnMap(
            x.id,
            Array.from(
              legendElement.querySelectorAll(".item.highlight"),
              (x) => Number(x.dataset.value)
            )
          );
        });
      });
  }

  // return element
  return el;
};
