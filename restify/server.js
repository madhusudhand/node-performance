var restify = require('restify');
var loadtest = require('./load-test');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(restify.bodyParser({ mapParams: false }));

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

loadtest(server);


server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
