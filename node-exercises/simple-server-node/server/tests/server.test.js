const request = require('supertest');
const { Server } = require('../src/server');

jest.setTimeout(30000);
describe('Test server library', () => {
  it(`should respond to requests`, async (done) => {
    const server = new Server(8001);

    const jestFn = jest.fn();
    const callback = (_, res) => {
      jestFn();
      res.end();
    };
    server.get('/', callback);
    server.method('get', '/yahoo', callback);

    const firstRequest = await request('http://localhost:8001').get('/');
    expect(firstRequest.status).toBe(200);
    expect(jestFn).toHaveBeenCalledTimes(2);

    const secondRequest = await request('http://localhost:8001').get('/yahoo');
    expect(secondRequest.status).toBe(200);
    expect(jestFn).toHaveBeenCalledTimes(3);

    server.close();
    done();
  });
});
