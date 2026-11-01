/**
 * Convert a string to a HTML element. This is done by creating a span element
 * that contains a separate span element for each word.
 * @param {string} x - String.
 * @return {HTMLElement}
 */
export function stringToHtmlElement(x) {
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
 * @param {object} parent - HTML element.
 * @return {void}
 * @see https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
*/
export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

/**
 * Convert to array.
 * @param {object} x - Object.
 * @return {Array<object>}
 */
export function toArray(object) {
  if (Array.isArray(object)) {
    return object;
  }
  return [object];
}

/**
 * Evaluate an expression after a condition is met.
 * @param {Function} condition - Function to define condition .
 * @return {Promise}
 * @see https://stackoverflow.com/a/52652681
 */
export function waitFor(condition) {
  const poll = resolve => {
    if (condition()) {
      resolve();
    } else {
      setTimeout(_ => poll(resolve), 400);
    }
  }
  return new Promise(poll);
}

/**
 * Get mouse coordinates.
 * @param {object} event - Mouse event object.
 * @param {number} event.clientX - Mouse X coordinate in pixels.
 * @param {number} event.clientY - Mouse Y coordinate in pixels.
 * @return {object}
 */
export function mouseCoordinates(event) {
  // extract coordinates
  let out = {x: event.clientX, y: event.clientY};
  // if browser is running in headless mode,
  // then manually adjust mouse position
  if (out.x < 1 && out.y < 1) {
    let windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    out.x = Math.floor(windowWidth / 2);
    out.y = Math.floor(windowHeight / 2);
  }
  // return result
  return out;
}
