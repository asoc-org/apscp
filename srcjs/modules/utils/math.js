/**
* Round number to a specified number of digits.
* @param {Number} x - Number that should be rounded.
* @param {Number} digits - Number of digits to consider for rounding.
* @return {Number}
*/
export function roundToDigits(x, digits) {
  return +(Math.round(x + `e+${digits}`)  + `e-${digits}`);
}

/**
* Automatically round number for display.
* @param {Number} x - Number that should be rounded.
* @return {Number}
*/
export function autoRound(x) {
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
* Identify the ascending order of elements in an array.
* @param {Array<number>} x - Array of numbers
* @return {Array<Number>}
*/
export function order(x) {
  return x
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value)
    .map(item => item.index);
}

/**
* Replace NaN with another value.
* @param {number} x - Value.
* @param {number} y - New value if x is NaN.
* @return {Number}
*/
export function replaceNaN(x, y) {
  return Number.isNaN(x) ? y : x;
}
