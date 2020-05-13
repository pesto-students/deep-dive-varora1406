const { isValidPort } = require('./port');
const http = require('http');
const { Route } = require('./route');

class Server {
  constructor(port) {
    this._routesList = [];
    if (!isValidPort(port)) {
      throw Error(`Can't start server without a valid port`);
    }

    const httpServer = http.createServer(this._serverCallback);
    httpServer.listen(port);
  }

  get(path, callback) {
    this._routesList.push(new Route('get', path, callback));
  }

  post(path, callback) {
    this._routesList.push(new Route('post', path, callback));
  }

  _serverCallback(request, response) {
    //TODO: Fix issue of this object comig of HttpServer, and routesList is unable to access
    console.log(this);
    console.log(this._routesList);
    const routesMatchingPath = this._routesList.filter(route => isPathMatch(request.url, route.path));
    const routesMatchingPathAndMethod = routesMatchingPath.filter(route => route.method.toUpperCase() === request.method);

    for (const route of routesMatchingPathAndMethod) {
      route.callback.call(this, request, response);
    }
  }
}

module.exports = { Server }