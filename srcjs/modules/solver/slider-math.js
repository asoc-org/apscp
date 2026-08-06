import {order} from "../utils/math.js";
import {roundToDigits} from "../utils/math.js";

/**
 * Convert targets to slider values
 * @param {Array<number>} x - Array of numbers.
 * @return {Array<number>}
 */
export function convertTargetsToSliderValues(x) {
  let y = [x[0]];
  for (let i = 1; i < x.length; i++) {
    y.push(x[i] + y[i - 1]);
  }
  return y;
}

/**
 * Convert slider values to targets
 * @param {Array<number>} x - Array of numbers.
 * @return {Array<number>}
 */
export function convertSliderValuesToTargets(x) {
  let o = order(x);
  let y = new Array(x.length).fill(0);
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    y[o[i]] = roundToDigits(x[o[i]] - sum, 3);
    sum += y[o[i]];
  }
  return y;
}
