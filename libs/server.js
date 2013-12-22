var express = require('express');

var server = express();

server.get('/ping', function(request, response){
    require('./challenge.ping/ping.endpoint')(request, response);
});
server.get('/primeFactors', function(request, response){
    require('./challenge.PrimeFactors/PrimeFactors')(request, response);
});
server.get('/primeFactors/ui', function(request, response){
    response.send(
        '<html> ' +
            '<head> ' +
            '   <title id="title">Décomposition en facteurs premiers</title>' +
            '</head>' +
            '<body>' +
            '   <br id="invitation">Entrer un nombre à décomposer</br>' +
            '   <br><input type="text" id="input#number" name="number"></br>' +
            '   <br><button type="button" id="button#go">Go!</button></br>' +
            '</body>' +
        '</html>');
});

module.exports = server;
