/** Import dependencies */
// utility functions
import {themeGroupName} from "../utils/misc.js";

/**
 * Create a select option for an object.
 * @param {object} x - Object.
 * @param {string} x.id - Unique identifier.
 * @param {string} x.name - Name.
 * @param {string} x.class - Type of object.
 * @param {Array<object>} x.theme - Optional array of theme objects.
 * @param {string} x.themes.name - Name of theme.
 * @return {object}
 */
export function layerSelectOption(x) {
  // initialize object
  let out = {value: x.id, name: x.name};
  // process group
  let group = x.class.charAt(0).toUpperCase() + x.class.slice(1) + "s";
  if (x.themes !== undefined) {
    // if object has themes, then add groups based on them
    out.group =
      x.themes
      .map(y => `${group}: ${themeGroupName(y)}`)
      .sort()
  } else {
    // otherwise, then add group based on class name
    out.group = group;
  }
  // process sort key
  let ord = ["Features", "Locks", "Costs", "Solutions"];
  let i = ord.indexOf(group) + 1;
  if (i < 0) {
    // if class not recognized, then put it last
    i = 999;
  }
  out.sort = `${i}-${x.name}`;
  // return object
  return out
}
