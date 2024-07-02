export default function updateStudentGradeByCity(array, city, newGrades) {
  const newFilter = array.filter((i) => i.location === city);
  const newArray = newFilter.map((i) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === i.id);
    if (foundGrade) {
      return {
        ...i,
        grade: foundGrade.grade,
      };
    }
    return {
      ...i,
      grade: 'N/A',
    };
  });
  return newArray;
}
