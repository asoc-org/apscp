/**
 * Create a provenance.
 * @param {Object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
export function createProvenance(x) {
  let el = document.createElement("i");
  el.setAttribute("data-toggle", "tooltip");
  el.setAttribute("data-placement", "top");
  el.setAttribute("data-container", "body");
  if (typeof(x.description) === "string") {
    el.setAttribute("title", x.description);
  }
  el.classList.add("fas");
  el.classList.add("fa-" + x.icon);
  el.style.color = x.color;
  return el;
}
