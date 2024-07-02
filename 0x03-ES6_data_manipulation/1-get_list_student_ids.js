const getListStudentIds = (array) => {
  if (!(array instanceof Array)) return [];
  const newArray = array.map((student) => student.id);
  return newArray;
};
export default getListStudentIds;
