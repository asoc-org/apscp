/**
 * Create metadata for layer in a project.
 * @param {object} project - Project object.
 * @param {Array<object>} project.features - Array of Feature objects.
 * @param {Array<object>} project.locks - Array of Lock objects.
 * @param {Array<object>} project.costs - Array of Cost objects.
 * @param {Array<object>} project.solutions - Array of Solution objects.
 * @return {Map<string, string>}
 */
export function projectMetadata(project) {
  // create map with layer identifiers and names
  const out = new Map();
  // add metadata for features
  for (let i = 0; i < project.features.length; ++i) {
    out.set(
      "lyr-" + project.features[i].id,
      getMetadata(project.features[i])
    );
  }
  // add metadata for locks
  for (let i = 0; i < project.locks.length; ++i) {
    out.set(
      "lyr-" + project.locks[i].id,
      getMetadata(project.locks[i])
    );
  }
  // add metadata for costs
  for (let i = 0; i < project.costs.length; ++i) {
    out.set(
      "lyr-" + project.costs[i].id,
      getMetadata(project.costs[i])
    );
  }
  // add metadata for solutions
  for (let i = 0; i < project.solutions.length; ++i) {
    out.set(
      "lyr-" + project.solutions[i].id,
      getMetadata(project.solutions[i])
    );
  }
  // return result
  return out;
}

/**
 * Create metadata for layer in a project.
 * @param {object} layer - Layer object.
 * @param {string} layer.id - Identifier.
 * @param {string} layer.class - Class name.
 * @param {Object} layer.layer - Layer object.
 * @param {string} layer.layer.column - Column name.
 * @return {Object}
 */
export function getMetadata(layer) {
  return {name: layer.name, column: layer.layer.column, class: layer.class};
}
