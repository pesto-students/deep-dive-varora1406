import { isValidPort } from './port';
import http from 'http';
import { Route } from './route';


class Server {
  _pathList = [];

  constructor(port) {
    if (!isValidPort(port)) {
      throw Error(`Can't start server without a valid port`);
    }

    const httpServer = http.createServer();
    httpServer.listen(port);
  }

  get(path) {
    this._pathList.push(new Route('get', path));
  }

  post(path) {
    this._pathList.push(new Route('post', path));
  }
}

export { Server }