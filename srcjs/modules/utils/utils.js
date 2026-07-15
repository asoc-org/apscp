/**
* Round number to a specified number of digits.
* @param {Number} x - Number that should be rounded.
* @param {Number} digits - Number of digits to consider for rounding.
* @return {Number}
*/
function round_to_digits(x, digits) {
  return +(Math.round(x + `e+${digits}`)  + `e-${digits}`);
}

/**
* Automatically round number for display.
* @param {Number} x - Number that should be rounded.
* @return {Number}
*/
// automatically round a number
function auto_round(x) {
  // initialize output
  let out = x;
  const y = Math.abs(x);
  // round number according to rules of thumb
  if (y >= 100) {
    // round to integer
    out = roundToDigits(x, 0);
  } else if (y >= 10) {
    // round to one decimal place
    out = roundToDigits(x, 1);
  } else if (y >= 1) {
    // round to two decimal places
    out = roundToDigits(x, 2);
  } else {
    // round to three decimal places
    out = roundToDigits(x, 3);
  }
  // return result
  return out;
}

/**
* Remove all child nodes from a HTML element.
* @param {Object} parent - HTML element.
* @return {void}
* @see https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
*/
function remove_all_child_nodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

/**
* Split a string into separate span elements based on spaces.
* @param {string} x - String.
* @return {HTMLElement}
*/
function split_string_into_spans(x) {
  let out = document.createElement("span");
  x.split(" ").forEach((x) => {
    let s = document.createElement("span");
    s.innerText = x;
    out.appendChild(s);
  })
  return out;
}
