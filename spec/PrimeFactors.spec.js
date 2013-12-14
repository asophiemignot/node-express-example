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

    it('answsers the first decomposition of  powers 2', function(done) {
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
                "error": "not a number"
            } ) );
            done();
        });
    });

    it('answsers the decomposition challenge', function(done) {
        request('http://localhost:7000/primeFactors?number=300', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( {
                "number": 300,
                "decomposition": [ 2, 2, 3, 5, 5]
            } ) );
            done();
        });
    });

    it('answsers the decomposition challenge', function(done) {
        request('http://localhost:7000/primeFactors?number=6538', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( {
                "number": 6538,
                "decomposition": [ 2, 7, 467]
            } ) );
            done();
        });
    });

    it('answsers the decomposition challenge', function(done) {
        request('http://localhost:7000/primeFactors?number=4897', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( {
                "number": 4897,
                "decomposition": [ 59, 83]
            } ) );
            done();
        });
    });

});