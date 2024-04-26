export default class HolbertonCourse {
  constructor(n, len, st) {
    this.n = n;
    this.len = len;
    this.st = st;
  }

  get n() {
    return this._n;
  }

  set n(n) {
    if ((typeof n !== 'string') && !(n instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._n = n;
  }

  get len() {
    return this._len;
  }

  set len(len) {
    if ((typeof len !== 'number') && !(len instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._len = len;
  }

  get st() {
    return this._st;
  }

  set st(st) {
    if (!(st instanceof Array) || !st.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._st = st;
  }
}
