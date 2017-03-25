'use strict';

const Controller = require('donode').Controller;

class LoadTestController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    return response.send({ data: 'performance test!!' });
  }

  post(request, response) {
    return response.send(request.body);
  }
}

module.exports = LoadTestController;
