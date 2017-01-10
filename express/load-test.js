var express = require('express');
var router = express.Router();

var responseData = require('../data/response-data');

var responseHandler = function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseData));
};


router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseData));
});

router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseData));
});

router.get('/get/:id1/something1/:id2', responseHandler);
router.get('/get/:id1/something2/:id2', responseHandler);
router.get('/get/:id1/something3/:id2', responseHandler);
router.get('/get/:id1/something4/:id2', responseHandler);
router.get('/get/:id1/something5/:id2', responseHandler);
router.get('/get/:id1/something6/:id2', responseHandler);
router.get('/get/:id1/something7/:id2', responseHandler);
router.get('/get/:id1/something8/:id2', responseHandler);
router.get('/get/:id1/something9/:id2', responseHandler);
router.get('/get/:id1/something10/:id2', responseHandler);


var responseHandler2 = function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.body));
};

router.post('/post/:id1/something1/:id2', responseHandler2);
router.post('/post/:id1/something2/:id2', responseHandler2);
router.post('/post/:id1/something3/:id2', responseHandler2);
router.post('/post/:id1/something4/:id2', responseHandler2);
router.post('/post/:id1/something5/:id2', responseHandler2);
router.post('/post/:id1/something6/:id2', responseHandler2);
router.post('/post/:id1/something7/:id2', responseHandler2);
router.post('/post/:id1/something8/:id2', responseHandler2);
router.post('/post/:id1/something9/:id2', responseHandler2);
router.post('/post/:id1/something10/:id2', responseHandler2);

module.exports = router;
