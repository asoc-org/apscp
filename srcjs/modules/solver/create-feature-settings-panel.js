import {createFeatureSetting} from "./create-feature-setting.js";

/**
 * Create a features settings panel
 * @param {string} id - HTML identifier.
 * @param {Object} project - HTML element to update.
 * @param {Array<Object>} project.features - Array of feature objects.
 * @param {Array<number>} featureTargetChoices - Array of numbers used to
 * define the potential values for setting feature targets.
 * @param {Array<number>} featureWeightChoices - Array of numbers used to
 * define the potential values for setting feature weights.
 * @return {HTMLElement}_
 */
export function createFeatureSettingsPanel(
  project, featureTargetChoices, featureWeightChoices
) {
  // create container
  let el = document.createElement("el");
  el.classList.add("feature-settings-container");

  // create select element
  let selectContainer = document.createElement("div");
  selectContainer.classList.add("feature-select");

  // create menu element
  let menuElement = document.createElement("div");
  menuElement.classList.add("feature-menu");

  // create feature setting objects and add them to the menu
  for (let i = 0; i < project.features.length; ++i) {
    menuElement.appendChild(
      createFeatureSetting(
        project.features[i], project.zones,
        featureTargetChoices, featureWeightChoices
      )
    );
  }

  // create temporary select menu
  let selectElement = document.createElement("select");
  selectElement.setAttribute("multiple", "");
  selectElement.setAttribute("placeholder", "Choose features...");

  // return element
  selectContainer.appendChild(selectElement);
  el.appendChild(selectContainer);
  el.appendChild(menuElement);
  return el;
}
