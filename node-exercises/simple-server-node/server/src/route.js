class Route {
  constructor(method, path) {
    this.method = method;
    this.path = path;
    this.callback = this.callback;
  }
}

module.exports = { Route }