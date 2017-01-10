var responseData = require('../data/response-data');

function loadtest(server) {

  var responseHandler = function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(responseData);
  };

  server.get('/loadtest/get/:id1/something1/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something2/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something3/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something4/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something5/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something6/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something7/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something8/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something9/:id2', responseHandler);
  server.get('/loadtest/get/:id1/something10/:id2', responseHandler);

  var responseHandler2 = function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.body));
  };

  server.post('/loadtest/post/:id1/something1/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something2/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something3/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something4/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something5/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something6/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something7/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something8/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something9/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/something10/:id2', responseHandler2);

}

module.exports = loadtest;
