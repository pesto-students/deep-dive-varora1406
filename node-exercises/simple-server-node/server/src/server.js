import { isValidPort } from './port';

class Server {
  constructor(port) {
    if (!isValidPort(port)) {
      throw Error(`Can't start server without a valid port`);
    }
  }

  get(path) {

  }

  post(path) {

  }
}

export { Server }