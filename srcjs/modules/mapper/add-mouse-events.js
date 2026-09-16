// helper functions
import {getVisibleLayersAtPoint} from "../utils/mapboxgl.js";

/**
 * Add listener for mouse events to map.
 * @param {HTMLElement} map - HTML element for map.
 * @return {void}
 */
export function addMouseEvents(el) {
  // define mouse move behavior
  el.map.on("mousemove", (e) => {
    // find visible layers that are underneath the mouse
    const layers = getVisibleLayersAtPoint(el, e.point);
    // set cursor style based on whether any visible layers under mouse
    if (layers.length > 0) {
      el.map.getCanvas().style.cursor = "pointer";
    } else {
      el.map.getCanvas().style.cursor = "grab";
    }
  });
  // define mouse out behavior
  el.map.on("mouseout", () => {
    el.map.getCanvas().style.cursor = "grab";
  });
}
