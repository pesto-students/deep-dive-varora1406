class Route {
  constructor(method, path, callback) {
    this.method = method;
    this.path = path;
    this.callback = callback;
  }
}

module.exports = { Route }