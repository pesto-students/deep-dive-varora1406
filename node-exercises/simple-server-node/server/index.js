const Pulsar = require('./src/pulsar');

const app = new Pulsar();

app.get('/', (req, res) => {
  console.log('GET path called: /');
  res.end('/');
});

app.get('/test', (req, res) => {
  console.log('GET path called: /test');
  res.end('/test');
});

app.get('/user', (req, res) => {
  console.log('GET path called: /user');
  res.end('/user');
});

app.get('/test/:id(\\d+)', (req, res) => {
  console.log('GET path called: /test/:id');
  res.end('/test');
});

app.post('/test/user/:id', (req, res) => {
  console.log('POST path called: /test/user/:id');
});

app.post('/user/', (req, res) => {
  console.log('POST path called: /user');
});

app.listen(8000);
