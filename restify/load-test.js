var responseData = require('../data/response-data');

function loadtest(server) {

  var responseHandler = function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(responseData);
  };

  server.get('/loadtest/content/:id1/data1/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data2/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data3/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data4/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data5/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data6/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data7/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data8/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data9/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data10/:id2', responseHandler);

  server.get('/loadtest/content/:id1/data11/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data12/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data13/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data14/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data15/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data16/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data17/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data18/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data19/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data20/:id2', responseHandler);

  server.get('/loadtest/content/:id1/data21/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data22/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data23/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data24/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data25/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data26/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data27/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data28/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data29/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data30/:id2', responseHandler);

  server.get('/loadtest/content/:id1/data31/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data32/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data33/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data34/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data35/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data36/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data37/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data38/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data39/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data40/:id2', responseHandler);

  server.get('/loadtest/content/:id1/data41/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data42/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data43/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data44/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data45/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data46/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data47/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data48/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data49/:id2', responseHandler);
  server.get('/loadtest/content/:id1/data50/:id2', responseHandler);




}

module.exports = loadtest;
