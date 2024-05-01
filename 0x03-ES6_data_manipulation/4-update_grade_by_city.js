/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
    const sic = students.filter((student) => student.location === city);
    return sic.map((student) => {
      const fg = newGrades.filter((grade) => grade.studentId === student.id);
      if (fg.length > 0) {
        return {
          ...student,
          grade: fg[0].grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
  }
  
  export default updateStudentGradeByCity;
