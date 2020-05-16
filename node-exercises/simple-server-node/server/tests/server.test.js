import path from 'path';

const request = require('supertest');
const { ServerStatic } = require('../src/serve-static');

const { Server } = require('../src/server');

describe('Test server library', () => {
  it(`should give response to requests`, async (done) => {
    const server = new Server(8790);

    const jestFn = jest.fn();
    const callback = (_, res) => {
      jestFn();
      res.end();
    };
    server.get('/', callback);
    server.method('get', '/yahoo', callback);

    const firstRequest = await request('http://localhost:8790').get('/');
    expect(firstRequest.status).toBe(200);
    expect(jestFn).toHaveBeenCalledTimes(2);

    const secondRequest = await request('http://localhost:8790').get('/yahoo');
    expect(secondRequest.status).toBe(200);
    expect(jestFn).toHaveBeenCalledTimes(3);

    server.close();
    done();
  });

  it(`should run middleWares`, async (done) => {
    const server = new Server(8790);

    const jestFn = jest.fn();
    const callback = (_, res) => {
      jestFn();
      res.end();
    };
    server.get('/', callback);
    server.method('get', '/yahoo', callback);
    server.use(callback);
    server.use(callback);
    server.use(callback);

    await request('http://localhost:8790').get('/');
    expect(jestFn).toHaveBeenCalledTimes(5);

    await request('http://localhost:8790').get('/yahoo');
    expect(jestFn).toHaveBeenCalledTimes(9);

    server.close();
    done();
  });

  // TODO: Make more better tests for static files
  it(`should serve static files`, (done) => {
    const server = new Server(8790);

    server.use(
      new ServerStatic(path.join(__dirname, './example-test.txt')),
      '/file'
    );

    request('http://localhost:8790')
      .get('/file')
      .then((response) => {
        expect(response.text).toBe('example test');
      })
      .finally(() => {
        server.close();
        done();
      });
  });
});
