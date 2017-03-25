'use strict';
const router = require('donode').Router;

/*  ------   ROUTES   -----
**
**  One place for all routes.
**
*/

router.routes([
  { path: '/', method: 'GET', handler: 'HomeController@get' },
  {
    path: '/loadtest/get/{id1}',
    children: [
      { path: '/data1/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data2/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data3/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data4/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data5/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data6/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data7/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data8/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data9/{id2}', method: 'GET', handler: 'LoadTestController@get'},
      { path: '/data10/{id2}', method: 'GET', handler: 'LoadTestController@get'}
    ]
  },

  {
    path: '/loadtest/post/{id1}',
    children: [
      { path: '/data1/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data2/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data3/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data4/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data5/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data6/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data7/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data8/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data9/{id2}', method: 'POST', handler: 'LoadTestController@get'},
      { path: '/data10/{id2}', method: 'POST', handler: 'LoadTestController@get'}
    ]
  },

  // add more
]);

module.exports = router;
