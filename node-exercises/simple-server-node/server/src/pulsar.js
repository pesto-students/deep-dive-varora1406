const http = require('http');
const url = require('url');
const { get, post } = require('./route');
const { router } = require('./router');

function Pulsar() {
  this.app = http.createServer();
  this.app.on('request', router.bind(this));
  this.routes = [];
}

Pulsar.prototype.get = get;
Pulsar.prototype.post = post;

Pulsar.prototype.listen = function listen(port) {
  this.app.listen(port);
  console.log(`Server listening to port: ${port}`);
};

module.exports = Pulsar;
