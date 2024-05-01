export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const epdata = weakMap.get(endpoint);
    if (epdata >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (epdata + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
