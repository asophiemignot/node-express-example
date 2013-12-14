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
    var diviseur=2;

    while (diviseur<value)
    {
        while ((val%diviseur)==0)
        {
            decomposition.push (diviseur);
            val = val/diviseur;
        }
        diviseur=diviseur+1;
    }

    response.send({
        number: value,
        decomposition: decomposition
    });

};