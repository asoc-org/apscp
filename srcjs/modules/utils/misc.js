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
