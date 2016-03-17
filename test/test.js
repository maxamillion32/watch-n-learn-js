var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:3000');

describe('API Testt', function () {
    it ('Should return home page', function(done) {
        server
            .get('/')
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                res.error.should.equal(false);
                done();
            });
    });
});