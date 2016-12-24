'use strict';

const Hapi = require('hapi');
const loadtest = require('./load-test');

const server = new Hapi.Server()
server.connection({
    port: 3000
});

server.register({ register: loadtest }, { routes: { prefix: '/loadtest' } }, function(err) {
  if (err) {
    throw err;
  }
  server.start(function() {
    console.log('Server running on', server.info.uri)
  })
});
