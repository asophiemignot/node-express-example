module.exports = function(request, response) {

    response.setHeader('Content-Type', 'application/json');

    var query = require('url').parse(request.url, true).query;

    if (isNaN(query.number))
    {
        response.send({
            number: query.number,
            error: "not a number"
        });
    };

    var decomposition = [];
    var value = parseInt(query.number);
    var val=value;
    while ((val%2)==0)
    {
        decomposition.push (2);
        val = val/2;
    }
    while ((val%3)==0)
    {
        decomposition.push (3);
        val = val/3;
    }    while ((val%5)==0)
    {
        decomposition.push (5);
        val = val/5;
    }
    response.send({
        number: value,
        decomposition: decomposition
    });

};