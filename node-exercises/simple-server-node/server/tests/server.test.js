// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const { Server } = require('../src/server');

describe('Test server library', () => {
  it(`should respond to requests`, () => {
    const server = new Server(8001);

    const callback = jest.fn();
    server.get('/', callback);
    server.get('/yahoo', callback);

    request('http://localhost:8001')
      .get('/')
      .expect(200)
      .end(() => {
        expect(callback).toHaveBeenCalledTimes(1);
      });

    request('http://localhost:8001')
      .get('/yahoo')
      .expect(200)
      .end(() => {
        expect(callback).toHaveBeenCalledTimes(2);
      });

    // TODO: Solve problem of JEST not exiting properly, reason - async functions?
  });
});
