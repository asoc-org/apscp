/**
 * Calculate arithmetic mean of an array.
 * @param {Array<number>} x - Array of numbers.
 * @return {Number}
 */
export function mean(x) {
  return x.reduce((sum, val) => sum + val, 0) / x.length;
}
