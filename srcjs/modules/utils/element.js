/** Import dependencies */
// styling
import "./css/style.css";

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
 * @param {object} x - Object with properties for customization.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.url - URL to open when icon clicked.
 * @return {HTMLElement}
 */
export function createProvenance(x) {
  let el = document.createElement("i");
  el.classList.add("provenance");
  if (typeof(x.description) === "string") {
    addTooltip(el, x.description);
  }
  el.classList.add("fas");
  el.classList.add("fa-" + x.icon);
  el.style.color = x.color;
  if (x.url !== undefined) {
    el.classList.add("has-link");
    el.addEventListener("click", () => window.open(x.url, "_blank"));
  }
  return el;
}

/**
 * Create a name label.
 * @param {object} x - Object with properties for customization.
 * @param {string} x.description - Text to display in tool tip.
 * @param {string} x.icon - Name of Font Awesome icon.
 * @param {string} x.color - Color for icon.
 * @return {HTMLElement}
 */
export function createNameLabel(x) {
  // create element
  let el = document.createElement("label");
  el.classList.add("name-label");
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
  if (typeof(x.layer) === "object" && typeof(x.layer.details) === "string") {
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
 * Create a handle.
 * @param {string} description - Text to display in tool tip.
 * @return {HTMLElement}
 */
export function createHandle(description) {
  // create element
  let el = document.createElement("div");
  el.classList.add("handle");
  // create icon
  let icon = document.createElement("i");
  if (typeof(description) === "string") {
    addTooltip(el, description);
  }
  icon.classList.add("fas", "fa-arrows-alt");
  icon.style.color = "--handle";
  // append icon to element
  el.appendChild(icon);
  // return element
  return el;
}

/**
 * Create a set of switches
 * @param {number} n - Number of switches to create.
 * @return {HTMLElement}
 */
export function createSwitches(n = 1, checked = true) {
  // create container
  let el = document.createElement("div");
  el.classList.add("switches");
  // create switches
  for (let i = 0; i < n; ++i) {
    // create switch form
    let form = document.createElement("div");
    form.classList.add("form-check", "form-switch", "p-0", "m-0");
    // create switch input
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("form-check-input", "switch", "ms-0");
    input.setAttribute("role", "switch");
    input.checked = checked;
    // append element
    form.appendChild(input);
    el.appendChild(form);
  }
  // return element
  return el;
}

/**
 * Create button group
 * @param {Array<string>} groupLabels - Label for each button group.
 * @param {Array<string>} buttonLabels - Label for each of the buttons.
 * @param {Array<string>} groupColors - Colors for group labels.
 * @param {Array<Array<string>>} tooltipLabels - Labels for tooltips.
 * @return {HTMLElement}
 */
export function createButtonGroups(
  groupLabels, buttonLabels, groupColors, tooltipLabels
) {
  // create container
  let el = document.createElement("div");
  el.classList.add("button-groups", "border", "rounded");
  // add each group
  for (let i = 0; i < groupLabels.length; ++i) {
    // create button group
    let group = document.createElement("div");
    group.classList.add("btn-group");
    // add buttons to container
    for (let j = 0; j < buttonLabels.length; ++j) {
      // create button text
      let span = document.createElement("span");
      span.innerText = buttonLabels[j];
      // create button
      let btn = document.createElement("button");
      btn.classList.add("btn", "btn-sm");
      btn.setAttribute("data-group-index", i);
      btn.setAttribute("data-group-label", groupLabels[i]);
      btn.setAttribute("data-label", buttonLabels[j]);
      btn.style.setProperty("--color", groupColors[i]);
      addTooltip(btn, tooltipLabels[i][j]);
      // append elements
      btn.appendChild(span);
      group.appendChild(btn);
    }
    // add to group to container
    el.appendChild(group);
  }
  // return element;
  return el;
}
