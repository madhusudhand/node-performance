var express = require('express');
var router = express.Router();

var responseHandler = function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send({ data: 'performance test!!' });
};


router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send({ data: 'performance test!!' });
});

router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send({ data: 'performance test!!' });
});

router.get('/get/:id1/data1/:id2', responseHandler);
router.get('/get/:id1/data2/:id2', responseHandler);
router.get('/get/:id1/data3/:id2', responseHandler);
router.get('/get/:id1/data4/:id2', responseHandler);
router.get('/get/:id1/data5/:id2', responseHandler);
router.get('/get/:id1/data6/:id2', responseHandler);
router.get('/get/:id1/data7/:id2', responseHandler);
router.get('/get/:id1/data8/:id2', responseHandler);
router.get('/get/:id1/data9/:id2', responseHandler);
router.get('/get/:id1/data10/:id2', responseHandler);


var responseHandler2 = function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.body));
};

router.post('/post/:id1/data1/:id2', responseHandler2);
router.post('/post/:id1/data2/:id2', responseHandler2);
router.post('/post/:id1/data3/:id2', responseHandler2);
router.post('/post/:id1/data4/:id2', responseHandler2);
router.post('/post/:id1/data5/:id2', responseHandler2);
router.post('/post/:id1/data6/:id2', responseHandler2);
router.post('/post/:id1/data7/:id2', responseHandler2);
router.post('/post/:id1/data8/:id2', responseHandler2);
router.post('/post/:id1/data9/:id2', responseHandler2);
router.post('/post/:id1/data10/:id2', responseHandler2);

module.exports = router;
