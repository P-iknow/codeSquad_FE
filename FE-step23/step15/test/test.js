const Data = class {
  async getData() {
    throw 'getData must override';
  }
};
const JsonData = class extends Data {
  constructor(data) {
    super();
    this._data = data;
  }

  async getData() {
    if (typeof this._data === 'string') {
      const response = await fetch(this._data);
      return await response.json();
    } else return this._data;
  }
};
