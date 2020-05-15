const http = require('http');
const { isValidPort } = require('./port');
const { Route } = require('./route');
const { isPathMatch } = require('./path');

class Server {
  constructor(port) {
    this.routesList = [];

    if (!isValidPort(port)) {
      throw Error(`Can't start server without a valid port`);
    }

    const httpServer = http.createServer(this.serverCallback.bind(this));
    httpServer.listen(port);
    this.server = httpServer;
  }

  get(path, callback) {
    this.routesList.push(new Route('get', path, callback));
  }

  post(path, callback) {
    this.routesList.push(new Route('post', path, callback));
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
