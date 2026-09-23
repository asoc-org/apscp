/** Import dependencies */
// styling
import "./css/popup.css"
// helper functions
import {getVisibleLayerDataAtPoint} from "../utils/mapboxgl.js";

/**
 * Add listener for popup to map.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Map<string,string>} projectMetadata - Project metadata.
 * @param {Array<string>} zones - Zone names.
 * @return {void}
 */
export function addPopup(el, projectMetadata, zones) {
  // define listener for click on map to display popup
  el.map.on("click", (e) => {
    // obtain data for visible layers that are underneath the mouse
    const data = getVisibleLayerDataAtPoint(el, projectMetadata, e.point);
    // if any layer data to show, then display popup
    if (data.size > 0) {
      // add popup
      new mapboxgl.Popup({closeButton: false})
        .setLngLat(e.lngLat)
        .setDOMContent(createPopup(data, zones))
        .addTo(el.map);
    }
  });
}

/**
 * Create popup.
 * @param {Map<object>} data - Array of key pairs with popup information.
 * @param {Array<string>} zones - Zone names.
 * @return {HTMLElement}
 */
function createPopup(data, zones) {
  // create element
  const el = document.createElement("div");
  el.classList.add("map-popup");
  // add values for each layer
  data.forEach((value, key) => {
    // create label
    let label = document.createElement("label");
    label.classList.add("fw-bold");
    label.innerText = key + ":";
    // create span
    let span = document.createElement("span");
    if (value.class === "Solution") {
      span.innerText = zones[value.value - 1];
    } else {
      span.innerText = value.value;
    }
    // append elements
    el.appendChild(label);
    el.appendChild(span);
  });
  // return element
  return el;
}
