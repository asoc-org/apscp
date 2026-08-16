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
