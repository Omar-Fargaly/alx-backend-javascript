const cleanSet = (set, startString) => {
  const ss = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      ss.push(s.slice(startString.length));
    }
  });
  return ss.join('-');
};

export default cleanSet;
