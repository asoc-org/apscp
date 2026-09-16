/** Import dependencies */
// styling
import "./css/popup.css"

/**
 * Add listener for popup to map.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Map<string,string>} projectMetadata - Project metadata.
 * @return {void}
 */
export function addPopup(el, projectMetadata) {
  // define listener for click on map to display popup
  el.map.on("click", (e) => {
    // find layers that are underneath the selected click and are visible
    const layers =
      el.map
      .queryRenderedFeatures(e.point)
      .filter((x) => {
        return (x.layer.layout.visibility === "visible") &&
          (x.layer.id !== "bbox");
      });
    // prepare layer data
    const layerData = new Map();
    layers.forEach((x) => {
      const name = projectMetadata.get(x.layer.id);
      const value = layers[0].properties[name];
      if (value !== undefined) {
        layerData.set(name, value);
      }
    })
    // if any layer data to show, then display popup
    if (layerData.size > 0) {
      // add popup
      new mapboxgl.Popup({closeButton: false})
        .setLngLat(e.lngLat)
        .setDOMContent(createPopup(layerData))
        .addTo(el.map);
    }
  });
}

/**
 * Create popup.
 * @param {Map<object>} data - Array of key pairs with popup information.
 * @return {HTMLElement}
 */
function createPopup(data) {
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
    span.innerText = value;
    // append elements
    el.appendChild(label);
    el.appendChild(span);
  });
  // return element
  return el;
}
