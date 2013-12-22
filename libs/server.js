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
            '   <br id="input#number"><input type="text" name="number"></br>' +
            '   <br id="button#go"><button type="button">Go!</button></br>' +
            '</body>' +
        '</html>');
});

module.exports = server;
