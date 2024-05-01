const getListStudentIds = (listStudents) => {
  let lsi = [];
  if (!(listStudents instanceof Array)) {
    return lsi;
  }
  lsi = listStudents.map((student) => student.id);
  return lsi;
};

export default getListStudentIds;
