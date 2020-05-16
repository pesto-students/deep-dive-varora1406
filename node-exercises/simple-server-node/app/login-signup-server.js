const fs = require('fs');
const { Server } = require('../server/src/server');
const { convertURLParamsIntoObject } = require('./utility');

const app = new Server(8887);

app.post('/signup', (request, response) => {
  const writeStream = fs.createWriteStream('user-data');
  request.pipe(writeStream);
  writeStream.on('close', () => {
    response.end('success');
  });
});

app.post('/login', (request, response) => {
  const readStream = fs.createReadStream('user-data');
  let fileData;
  let incomingData;

  readStream.on('data', (chunk) => {
    const data = chunk.toString();
    fileData = convertURLParamsIntoObject(data);
  });
  request.on('data', (chunk) => {
    const data = chunk.toString();
    incomingData = convertURLParamsIntoObject(data);
  });

  readStream.on('close', () => {
    if (
      incomingData.username === fileData.username &&
      incomingData.password === fileData.password
    ) {
      response.end('success');
    } else {
      response.end('failure');
    }
  });
});
