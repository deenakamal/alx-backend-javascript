const getStudentsByLocation = (array, city) => {
  const newStudents = array.filter((student) => student.location === city);
  return newStudents;
};
export default getStudentsByLocation;
