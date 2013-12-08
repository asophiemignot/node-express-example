var pong = function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send({ "toto":43 });
};

module.exports = pong;