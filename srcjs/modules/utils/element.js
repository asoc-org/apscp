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
  el.classList.add("provenance");
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
 * Create hover select button.
 * @param {Array<options>} options - Array of options.
 * @param {string} options.color -Option color.
 * @param {string} options.text - Option color.
 * @param {string} options.value -Option value.
 * @param {string} selectedOptionValue - Default option value.
 * @return {HTMLElement}
 */
export function createHoverSelect(options, selectedOptionValue) {
  // process options
  let selectedOption =
    options.find(option => option.value === selectedOptionValue);
  let longestOption =
    options.reduce((a, b) => a.text.length > b.text.length ? a : b);
  // if selectedOption is invalid, then throw error
  if (selectedOption === undefined) {
    console.error("createHoverSelect: selectedOptionValue not valid.")
  }
  // initialize element
  let el = document.createElement("div");
  el.classList.add("hover-select");
  el.setAttribute("data-value", selectedOption.value);
  // create button
  let button = document.createElement("button");
  button.classList.add("select-button");
  button.style.backgroundColor = selectedOption.color;
  // create element to specify button text
  let text = document.createElement("span");
  text.classList.add("select-button-text");
  text.innerText = selectedOption.text;
  button.appendChild(text);
  // create dummy element to ensure button width remains constant when
  // different options are selected
  let span = document.createElement("span");
  span.classList.add("select-button-spacer");
  span.innerText = longestOption.text;
  button.appendChild(span);
  // create elements for options
  let ul = document.createElement("ul");
  ul.classList.add("select-options");
  for (let i = 0; i < options.length; ++i) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = options[i].text;
    a.setAttribute("data-option", options[i].value);
    a.setAttribute("data-color", options[i].color);
    a.classList.add("select-option");
    li.appendChild(a);
    ul.appendChild(li);
  }
  // add event listener to options
  ul.addEventListener("click", function(event) {
    let elem = event.target;
    if (elem.matches(".select-option")) {
      button.children[0].innerText = elem.innerText;
      el.setAttribute("data-value", elem.getAttribute("data-option"));
      button.style.backgroundColor = elem.getAttribute("data-color");
    }
  });
  // return element
  el.appendChild(button);
  el.appendChild(ul);
  return el;
}
