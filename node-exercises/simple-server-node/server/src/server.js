const http = require('http');
const { isValidPort } = require('./port');
const { Route } = require('./route');
const { isPathMatch } = require('./path');

class Server {
  constructor(port) {
    this.routesList = [];

    if (!isValidPort(port)) {
      this.port = 8000;
      // eslint-disable-next-line no-console
      console.warn(
        `Port-${port} is invalid. Using default port - ${this.port}`
      );
    }

    const httpServer = http.createServer(this.serverCallback.bind(this));
    httpServer.listen(port);
    this.server = httpServer;
  }

  get(path, callback) {
    this.method('get', path, callback);
  }

  post(path, callback) {
    this.method('post', path, callback);
  }

  method(method, path, callback) {
    // TODO put a valid check to let know if methods are incorrect
    this.routesList.push(new Route(method, path, callback));
  }

  serverCallback(request, response) {
    const routesMatchingPath = this.routesList.filter((route) =>
      isPathMatch(request.url, route.path)
    );
    const routesMatchingPathAndMethod = routesMatchingPath.filter(
      (route) => route.method.toUpperCase() === request.method
    );

    for (const route of routesMatchingPathAndMethod) {
      route.callback.call(this, request, response);
    }
  }

  close() {
    this.server.close();
  }
}

module.exports = { Server };
