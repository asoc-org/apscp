/**
 * Get data for visible layers at a point.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Map<string,string>} metadata - Project metadata.
 * @param {Point} point - Mapboxgl point object.
 * @return {void}
 */
export function getVisibleLayerDataAtPoint(el, metadata, point) {
  // find layers that are underneath the mouse and are visible
  const layers = getVisibleLayersAtPoint(el, point);
  // prepare layer data
  const data = new Map();
  layers.forEach((x) => {
    const layer = metadata.get(x.layer.id);
    const value = x.properties[layer.column];
    if (value !== undefined) {
      data.set(
        layer.name,
        {value: value, class: layer.class}
      );
    }
  });
  // return data
  return data;
}

/**
 * Get visible layers at a point.
 * @param {HTMLElement} map - HTML element for map.
 * @param {Point} point - Mapboxgl point object.
 * @return {void}
 */
export function getVisibleLayersAtPoint(el, point) {
  // find layers that are underneath the mouse and are visible
  const layers =
    el.map
    .queryRenderedFeatures(point)
    .filter((x) => {
      return (x.layer.layout.visibility === "visible") &&
        (x.layer.id !== "bbox");
    });
  // return layers
  return layers;
}
