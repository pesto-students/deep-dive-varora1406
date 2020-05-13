import { isValidPort } from './port';
import http from 'http';

class Server {
  constructor(port) {
    if (!isValidPort(port)) {
      throw Error(`Can't start server without a valid port`);
    }

    const httpServer = http.createServer();
    httpServer.listen(port);
  }

  get(path) {

  }

  post(path) {

  }
}

export { Server }