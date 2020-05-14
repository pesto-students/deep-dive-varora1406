const { Server } = require("../src/server");

const server = new Server(8000);

server.get('/path1', (request, response) => {
  console.log('Path1 Request came');
  response.end();
});

server.post('/path2', (request, response) => {
  console.log('Path2 Request came');
  response.end();
});
