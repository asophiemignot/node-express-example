/**
 * Created by anne-sophiemignot on 13/12/13.
 */
var request = require('request');
var http    = require('http');
var server  = require('../libs/server');

describe('Passing PrimeFactors levels:', function() {

    var testServer;

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('answsers the first decoposition of  powers 2', function(done) {
        request('http://localhost:7000/primeFactors?number=16', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( {
                "number": 16,
                "decomposition": [ 2, 2, 2, 2]
            } ) );
            done();
        });
    });

    it('answsers parseint', function() {
        expect(isNaN("hello")).toEqual(true);
    });

    it('answsers the guard challenge', function(done) {
        request('http://localhost:7000/primeFactors?number=hello', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( {
                "number": "hello",
                "decomposition": "not a number"
            } ) );
            done();
        });
    });

});