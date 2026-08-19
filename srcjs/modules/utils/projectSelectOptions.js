/**
 * Generate parameters for a Tom Select widget based on a project.
 * @param {object} project - Project object.
 * @param {Array<object>} project.features - Array of Feature objects.
 * @param {Array<object>} project.locks - Array of Lock objects.
 * @param {Array<object>} project.costs - Array of Cost objects.
 * @param {Array<object>} project.solutions - Array of Solution objects.
 * @param {boolean} includeFeatures - Should features be included in the
 * output?
 * @param {boolean} includeCosts - Should costs be included in the
 * output?
 * @param {boolean} includeLocks - Should locks be included in the
 * output?
 * @param {boolean} includeSolutions - Should solutions be included in the
 * output?
 * @return {object}
 */
export function projectSelectOptions(
  project,
  includeFeatures = true,
  includeCosts = true,
  includeLocks = true,
  includeSolutions = true
) {
  // initialize variables
  let options = Array(
    (project.features.length * includeFeatures) +
    (project.costs.length * includeCosts) +
    (project.locks.length * includeLocks) +
    (project.solutions.length * includeSolutions)
  );
  let groups = new Set();
  let includeClass =
    (includeFeatures + includeCosts + includeLocks + includeSolutions) > 1;
  // define counters
  let i, j, k;
  k = 0;
  // if needed, add features
  if (includeFeatures) {
    for (i = 0; i < project.features.length; ++i) {
      options[k] = selectOption(project.features[i], includeClass);
      for (j = 0; j < options[i].group.length; ++j) {
        groups.add(options[i].group[j]);
      }
      ++k;
    };
  }
  // if needed, add locks
  if (includeLocks) {
    for (i = 0; i < project.locks.length; ++i) {
      options[k] = selectOption(project.locks[i], includeClass);
      ++k;
    };
    groups.add("Locks");
  }
  // if needed, add costs
  if (includeCosts) {
    for (i = 0; i < project.costs.length; ++i) {
      options[k] = selectOption(project.costs[i], includeClass);
      ++k;
    };
    groups.add("Costs");
  }
  // if needed, add solutions
  if (includeSolutions) {
    for (i = 0; i < project.solutions.length; ++i) {
      options[k] = selectOption(project.solutions[i], includeClass);
      ++k;
    };
    groups.add("Solutions");
  }
  // return object
  return {
    options: options,
    optgroups: Array.from(groups).map(x => {return {value: x}})
  };
}

/**
 * Create a Tom Select option for a project element.
 * @param {object} x - Object.
 * @param {string} x.id - Unique identifier.
 * @param {string} x.name - Name.
 * @param {string} x.class - Type of object.
 * @param {Array<object>} x.theme - Optional array of theme objects.
 * @param {string} x.themes.name - Name of theme.
 * @param {string} x.themes.zone - Zone associated with theme.
 * @return {object}
 */
export function selectOption(x, includeClass = true) {
  // initialize object
  let out = {value: x.id, name: x.name};
  // process group
  let group = x.class.charAt(0).toUpperCase() + x.class.slice(1) + "s";
  if (x.themes !== undefined) {
    // if object has themes, then add groups based on them
    if (includeClass) {
      out.group = x.themes.map(y => `${group} (${themeGroupName(y)})`).sort();
    } else {
      out.group = x.themes.map(y => themeGroupName(y)).sort();
    }
  } else {
    // otherwise, then add group based on class name
    out.group = group;
  }
  // process sort key
  let ord = ["Features", "Locks", "Costs", "Solutions"];
  let i = ord.indexOf(group) + 1;
  if (i < 0) {
    i = 999; // if class not recognized, then put it last
  }
  out.sort = `${i}-${x.name}`;
  // return object
  return out
}

/**
 * Create a group name for a theme.
 * @param {object} object - Theme object.
 * @param {string} object.name - Name of theme.
 * @param {string} object.zone - Zone associated with the theme.
 * @return {string}
 */
function themeGroupName(object) {
  if (typeof(object.zone) === "string") {
    return `${object.zone}: ${object.name}`;
  } else {
    return object.name;
  }
}
