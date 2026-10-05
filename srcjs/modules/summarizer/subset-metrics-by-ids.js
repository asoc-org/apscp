/**
 * Subset metrics
 * @param {object} metrics - Object with data for metrics.
 * @param {Array<string>} ids - Identifiers for metrics to retain.
 * @return {object}
 */
export function subsetMetricsByIds(metrics, ids) {
  // identify which features to retain
  const retain = metrics.id.map((x) => ids.includes(x));
  // return object
  return {
    id: metrics.id.filter((x, i) => retain[i]),
    name: metrics.name.filter((x, i) => retain[i]),
    units: metrics.units.filter((x, i) => retain[i]),
    total: metrics.total.filter((x, i) => retain[i]),
    held: Object.keys(metrics.held).reduce(
      (o, z) => {
        o[z] = metrics.held[z].filter((x, i) => retain[i]);
        return o;
      },
      {}
    ),
    locked: Object.keys(metrics.locked).reduce(
      (o, z) => {
        o[z] = metrics.locked[z].filter((x, i) => retain[i]);
        return o;
      },
      {}
    )
  };
}
