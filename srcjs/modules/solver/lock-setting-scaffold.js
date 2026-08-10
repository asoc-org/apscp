import {addTooltip} from "../utils/element.js";
import {createNameLabel} from "../utils/element.js";
import {createHandle} from "../utils/element.js";

/**
 * Scaffold a lock setting element
 * @param {string} zone - Zone name.
  * @param {Array<Object>} locks - Array of locks.
 * @return {HTMLElement}
 */
export function scaffoldLockSetting(zone, locks, priority) {
  // create container
  let el = document.createElement("div");
  el.classList.add("lock-setting");
  el.style.backgroundColor = `var(--zone-${zone}-secondary)`;
  // set data zone attribute
  el.setAttribute("data-zone", zone);
  // create feature setting header
  el.appendChild(lockSettingHeader(zone, priority));
  // create feature setting weights
  el.appendChild(lockSettingSelect(zone));
  // return element
  return el;
}

/**
 * Create a header component for a lock setting.
 * @param {string} zone - Zone name.
 * @param {number} priority - Priority value.
 * @return {HTMLElement}
 */
function lockSettingHeader(zone, priority) {
  // create container
  let el = document.createElement("div");
  el.classList.add("header");
  // create container for switch
  let switchContainer = document.createElement("div");
  switchContainer.classList.add("switches");
  // create switch form
  let switchForm = document.createElement("div");
  switchForm.classList.add("form-check", "form-switch", "p-0", "m-0");
  // create switch input
  let switchInput = document.createElement("input");
  switchInput.setAttribute("type", "checkbox");
  switchInput.classList.add("form-check-input", "switch", "ms-0");
  switchInput.setAttribute("role", "switch");
  switchInput.setAttribute("data-zone", zone);
  switchInput.checked = true;
  switchInput.style.setProperty(
    "--switch-primary",
    `var(--zone-${zone}-primary)`
  );
  // append switch elements
  switchForm.appendChild(switchInput);
  switchContainer.appendChild(switchForm);
  // create name element
  let nameElement = document.createElement("div");
  nameElement.classList.add("name-container");
  nameElement.appendChild(
    createNameLabel({
      name: `${zone} zone`,
      details: `Select locks for the ${zone} zone`
    })
  );
  // create handle
  let handle = createHandle(
    "Drag to specify priority order for locking in planning units"
  );
  // append elements
  el.appendChild(switchContainer);
  el.appendChild(nameElement);
  el.appendChild(handle);
  // return element
  return el;
}

/**
 * Create a select component for a lock setting.
 * @param {string} zone - Zone name.
 * @return {HTMLElement}
 */
function lockSettingSelect(zone) {
  // initialize element
  let el = document.createElement("select");
  el.classList.add("lock-select");
  el.setAttribute("multiple", "");
  el.setAttribute("placeholder", "Choose locks...");
  return el;
}
