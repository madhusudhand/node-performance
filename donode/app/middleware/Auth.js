'use strict';
const Middleware = require('donode').Middleware;

class Auth extends Middleware {
  constructor() {
    super();
  }

  handle(request, response, next) {
    // do some auth validation here

    // if (not authorized)
    // return response.send(401, { some: 'error data' });

    // else (proceed to the controller hander)
    return next();
  }
}

module.exports = Auth;
