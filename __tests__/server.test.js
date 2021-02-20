'use strict';

// for now, just include these modules
// in the future, we will explore
const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

// describe -> test suite
// it -> actual test
// expect -> assertions as part of a larger test
describe('SERVER:', () => {

  // RED, GREEN, REFACTOR
  it('handles invalid request', async () => {
    const response = await request.get('/random');
    expect(response.status).toEqual(404);
  });

  it('should send back hello on a /data route', async () => {
    const response = await request.get('/data');
    expect(response.body.num).toEqual(10);
  })
});