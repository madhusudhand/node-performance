const responseHandler = function (request, reply) {
  return reply({ data: 'performance test!!' });
}

const responseHandler2 = function (request, reply) {
  return reply(request.payload);
}

exports.register = function (server, options, next) {
  server.route({ method: 'GET', path:'/get/{id1}/data1/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data2/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data3/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data4/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data5/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data6/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data7/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data8/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data9/{id2}', handler: responseHandler });
  server.route({ method: 'GET', path:'/get/{id1}/data10/{id2}', handler: responseHandler });


  server.route({ method: 'POST', path:'/post/{id1}/data1/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data2/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data3/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data4/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data5/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data6/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data7/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data8/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data9/{id2}', handler: responseHandler2 });
  server.route({ method: 'POST', path:'/post/{id1}/data10/{id2}', handler: responseHandler2 });

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
