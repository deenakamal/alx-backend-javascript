export default function createIteratorObject(report) {
  const arrayEmployees = [];

  for (const value of Object.values(report.allEmployees)) {
    arrayEmployees.push(...value);
  }

  return arrayEmployees;
}
