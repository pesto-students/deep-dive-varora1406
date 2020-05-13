import { Server } from "../src/server";

const server = new Server(8000);

server.get('/path1', () => {
  console.log('Request came');
});

server.post('/path1', () => {
  console.log('Request came');
});
