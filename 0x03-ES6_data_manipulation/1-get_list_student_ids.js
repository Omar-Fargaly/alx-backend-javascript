const getListStudentIds = (ls) => {
  let lsi = [];
  if (!(ls instanceof Array)) {
    return lsi;
  }
  lsi = lsi.map((student) => student.id);
  return lsi;
};

export default getListStudentIds;
