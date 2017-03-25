'use strict';

require('./app/routes');
require('./app/headers');

const server = require('donode').Server;
const config = require('./config');

const app = server.create(Object.assign(config, {
  appRoot: __dirname
}));

app.on('listening', () => {
  const addr = app.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});
