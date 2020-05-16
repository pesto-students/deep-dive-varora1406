const Pulsar = require('./src/pulsar');

const app = new Pulsar();

app.get('/', (req, res) => {
  req.parameters.pathMatched = '/';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(req.parameters));
  res.end();
});

app.get('/test', (req, res) => {
  req.parameters.pathMatched = '/test';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(req.parameters));
  res.end();
});

app.get('/user', (req, res) => {
  req.parameters.pathMatched = '/user';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(req.parameters));
  res.end();
});

app.get('/test/:id(\\d+)', (req, res) => {
  req.parameters.pathMatched = '/test/:id(\\d+)';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(req.parameters));
  res.end();
});

app.get('/brand/:brand/product/:id', (req, res) => {
  req.parameters.pathMatched = '/brand/:brand/product/:id';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(req.parameters));
  res.end();
});

app.post('/user/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('POST  /user');
  res.end();
});

app.listen(8000);
