/**
 * Add a tool tip.
 * @param {HTMLElement} element - HTML element that requires a tool tip.;
 * @param {string} text - Text to display in tool tip.
 * @return {void}
 */
export function addTooltip(element, text) {
  element.setAttribute("data-toggle", "tooltip");
  element.setAttribute("data-placement", "top");
  element.setAttribute("data-container", "body");
  element.setAttribute("title", text);
}

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
  if (typeof(x.description) === "string") {
    addTooltip(el, x.description);
  }
  el.classList.add("fas");
  el.classList.add("fa-" + x.icon);
  el.style.color = x.color;
  return el;
}

/**
 * Create a name label.
 * @param {Object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
export function createNameLabel(x) {
  // create element
  let el = document.createElement("label");
  // set layer name
  el.innerText = x.name;
  // initialize popup text
  let title = "";
  // if needed, add theme information to popup text
  if (typeof(x.themes) === "object") {
    title += `This ${x.class} belongs to the following themes:`;
    title += ` ${x.themes[0].name} (${x.themes[0].zone} zone)`;
    for (let i = 1; i < x.themes.length; ++i) {
      title += `, ${x.themes[i].name} (${x.themes[i].zone} zone)`;
    }
  }
  // if needed, add details to popup text
  if (typeof(x.layer.details) === "string") {
    if (title.length > 0) {
      title += " ";
    }
    title += x.layer.details;
  }
  // if needed, initialize popup
  if (title.length > 0) {
    addTooltip(el, title + ".");
  }
  // return element
  return el;
}

/**
* Convert a string to a HTML element. This is done by creating a span element
* that contains a separate span element for each word.
* @param {string} x - String.
* @return {HTMLElement}
*/
function stringToHtmlElement(x) {
  let out = document.createElement("span");
  x.split(" ").forEach((x) => {
    let s = document.createElement("span");
    s.innerText = x;
    out.appendChild(s);
  })
  return out;
}

/**
* Remove all child nodes from a HTML element.
* @param {Object} parent - HTML element.
* @return {void}
* @see https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
*/
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
