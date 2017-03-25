'use strict';

const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    return response.send({
      hello: 'world !!'
    });
  }

  post(request, response) {
    return response.send({
      result: 'data posted'
    });
  }

  put(request, response) {
    return response.send({
      result: 'data updated'
    });
  }

  delete(request, response) {
    return response.send({
      result: 'data deleted'
    });
  }
}

module.exports = UserController;
