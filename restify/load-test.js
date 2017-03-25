function loadtest(server) {

  var responseHandler = function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send({ data: 'performance test!!' });
  };

  server.get('/loadtest/get/:id1/data1/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data2/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data3/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data4/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data5/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data6/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data7/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data8/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data9/:id2', responseHandler);
  server.get('/loadtest/get/:id1/data10/:id2', responseHandler);

  var responseHandler2 = function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
  };

  server.post('/loadtest/post/:id1/data1/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data2/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data3/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data4/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data5/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data6/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data7/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data8/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data9/:id2', responseHandler2);
  server.post('/loadtest/post/:id1/data10/:id2', responseHandler2);

}

module.exports = loadtest;
