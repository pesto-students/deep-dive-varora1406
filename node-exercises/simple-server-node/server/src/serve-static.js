import fs from 'fs';

const staticFileRead = (response, filePath) => {
  const stream = fs.createReadStream(filePath);

  stream.on('open', () => {
    stream.pipe(response);
  });

  stream.on('error', (error) => {
    response.end(error);
  });

  return stream;
};

class ServerStatic {
  constructor(file) {
    this.file = file;
  }

  call(_thisArg, _request, response) {
    staticFileRead(response, this.file);
  }
}

module.exports = { ServerStatic };
