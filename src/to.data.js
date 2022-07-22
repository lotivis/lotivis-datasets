export function datasetToData(d) {
  if (Array.isArray(d)) {
    throw new Error("expecting object. found array");
  }

  if (!d || !d.data) {
    throw new Error("dataset has no data");
  }

  return d.data.map((i) => {
    return {
      label: d.label,
      group: d.group,
      location: i.location,
      date: i.date,
      value: i.value,
    };
  });
}

/**
 * Flattens the given datasets.
 * @param {*} ds
 * @returns {Array} The flat version
 */
export function datasetsToData(ds) {
  return ds.reduce((memo, d) => memo.concat(datasetToData(d)), []);
}
