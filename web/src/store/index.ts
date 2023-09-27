class Store {
  store: any;

  constructor() {
    this.store = require("./store.development");
  }

  getStore() {
    return this.store.default;
  }

  getPersistor() {
    return this.store.persistor;
  }
}

const instance = new Store();

export default instance;
