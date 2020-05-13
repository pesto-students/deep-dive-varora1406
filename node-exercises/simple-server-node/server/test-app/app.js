const { Server } = require("../src/server");

const server = new Server(8000);

server.get('/path1', (request, response) => {
  console.log('Request came');
});

server.post('/path2', (request, response) => {
  console.log('Request came');
});
