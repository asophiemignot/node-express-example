var AnswerDecomposition = function(parametre, reponse)
{
    if (isNaN(parametre))
    {
        reponse.push({
            number: parametre,
            error: "not a number"
        });
        return;
    }

    var value = parseInt(parametre);
    if (value>1000000)
    {
        reponse.push({
            "number" : value,
            "error" : "too big number (>1e6)"
        });
        return;
    }

    var val=value;
    var decomposition = [];
    var diviseur=2;

    while (diviseur<=value)
    {
        while ((val%diviseur)==0)
        {
            decomposition.push (diviseur);
            val = val/diviseur;
        }
        diviseur=diviseur+1;
    }

    reponse.push({
        number: value,
        decomposition: decomposition
    });
};




module.exports = function(request, response) {

    response.setHeader('Content-Type', 'application/json');

    var query = require('url').parse(request.url, true).query;
    var parametre=query.number[0];
    var compteur=0;
    var taille=query.number.length;
    var reponse = [];

    if (query.number instanceof Array)
    {
       while (compteur<taille)
       {
           AnswerDecomposition(parametre, reponse);
           compteur=compteur+1;
           parametre=query.number[compteur];
       };
       response.send(reponse);
    }
    else
    {
        AnswerDecomposition(query.number, reponse);
        response.send(reponse[0]);
    };
};