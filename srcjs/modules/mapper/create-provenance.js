/**
* Create a provenance.
* @param {Object} x - Object with properties for customization.
* @param {string} x.description - Text to display in tool tip.
* @param {string} x.icon - Name of Font Awesome icon.
* @param {string} x.color - Color for icon.
* @return {HTMLElement}
*/
function create_provenance(el, x) {
  const l = document.createElement("i");
  l.setAttribute("data-toggle", "tooltip");
  l.setAttribute("data-placement", "top");
  l.setAttribute("data-container", "body");
  l.setAttribute("title", x.description);
  l.classList.add("fas");
  l.classList.add("fa-" + x.icon);
  l.style.color = x.color;
  return l;
}
