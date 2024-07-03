export default function hasValuesFromArray(set, array) {
  const createArray = Array.from(set);
  return array.every((element) => createArray.includes(element));
}
