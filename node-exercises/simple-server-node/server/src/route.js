function route({ method, path, handler }) {
  const parameters = {};
  this.routes.push({ method, path, handler, parameters });
}

function get(path, handler) {
  const method = 'get';
  const boundRoute = route.bind(this);
  boundRoute({ method, path, handler });
}

function post(path, handler) {
  const method = 'post';
  const boundRoute = route.bind(this);
  boundRoute({ method, path, handler });
}

module.exports = { get, post, route };
