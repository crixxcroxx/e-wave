export default function getUniqueFromArray(arr, id) {

  return [...new Map(arr.map(item => [item[id], item])).values()];
}