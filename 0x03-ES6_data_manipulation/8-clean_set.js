export default function cleanSet(set, string) {
  let result = '';
  if (!string || typeof string !== 'string') {
    return result;
  }
  for (const str of set) {
    if (str && str.startsWith(string)) {
      result += `${str.slice(string.length)}-`;
    }
  }
  return result.slice(0, -1);
}
