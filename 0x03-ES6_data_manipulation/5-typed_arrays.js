const createInt8TypedArray = (length, position, value) => {
  const b = new ArrayBuffer(length);
  const i8 = new Int8Array(b);
  if (position > i8.length) throw new Error('Position outside range');
  i8[position] = value;
  return new DataView(b);
};

export default createInt8TypedArray;
