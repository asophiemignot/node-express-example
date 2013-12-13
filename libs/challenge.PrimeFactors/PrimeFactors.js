module.exports = function(request, response) {

    response.setHeader('Content-Type', 'application/json');

    var query = require('url').parse(request.url, true).query;
    var value = parseInt(query.number);
    var decomposition = [];
    var val=value;
    while (val>=2)
    {
        decomposition.push (2);
        val = val/2;
    }
    response.send({
        number: value,
        decomposition: decomposition
    });
};