const responseData = require('../data/response-data');

const responseHandler = function (request, reply) {
  return reply(JSON.stringify(responseData));
}

const responseHandler2 = function (request, reply) {
  return reply(JSON.stringify(request.payload));
}

exports.register = function (server, options, next) {
  server.route({ method: 'GET', path:'/content/{id1}/data1/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data2/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data3/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data4/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data5/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data6/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data7/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data8/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data9/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/content/{id1}/data10/{id2}', handler: responseHandler });


  server.route({ method: 'POST', path:'/post/{id1}/something1/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something2/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something3/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something4/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something5/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something6/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something7/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something8/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something9/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/something10/{id2}', handler: responseHandler2 });

  next();
};

exports.register.attributes = {
    name: 'api',
    version: '0.0.0'
};




// function loadtest(server) {
//   server.route({ method: 'GET', path:'/loadtest/content/{id1}/data1/{id2}', handler: responseHandler });
// }
//
// module.exports = loadtest;
