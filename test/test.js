var request = require('supertest');
var app = require('../index.js');
describe('GET /test', function() {
    it('respond with hello world', function(done) {
        request(app).get('/test').expect('{ "response": "Hello World" }', done);
    });
});