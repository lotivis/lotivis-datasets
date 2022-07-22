import { datasetToData, datasetsToData } from "./to.data";

export async function fetchJSON(path) {
  return fetch(path).then((res) => res.json());
}

export async function fetchDataset(path) {
  return fetchJSON(path).then((json) => datasetToData(json));
}

export async function fetchDatasets(path) {
  return fetchJSON(path).then((json) => datasetsToData(json));
}
