const is = require('is');

const isValidPort = (port) => {
  if (!is.number(port)) {
    console.warn(`${port} is not a valid number`);
    return false;
  }

  if (port < 1 || port > 65535) {
    console.warn(`${port} has to be in range of 1 and 65535`);
    return false;
  }

  return true;
};

module.exports = { isValidPort }