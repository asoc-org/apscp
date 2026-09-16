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
  for (let i = 0; i < project.features.length; ++i) {
    out.set("lyr-" + project.features[i].id, project.features[i].name);
  }
  for (let i = 0; i < project.locks.length; ++i) {
    out.set("lyr-" + project.locks[i].id, project.locks[i].name);
  }
  for (let i = 0; i < project.costs.length; ++i) {
    out.set("lyr-" + project.costs[i].id, project.costs[i].name);
  }
  for (let i = 0; i < project.solutions.length; ++i) {
    out.set("lyr-" + project.solutions[i].id, project.solutions[i].name);
  }
  return out;
}
