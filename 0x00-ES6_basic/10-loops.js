export default function appendToEachArrayValue(array, appendString) {
  let result = [];
  for (const val of array) {
    result.push(appendString + val);
  }

  return result;
}
