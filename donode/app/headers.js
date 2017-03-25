'use strict';
const headers = require('donode').Headers;

/*  ---------------    HEADERS     ------------------
**
**  One place for common headers which can be attached
**  to a route or to the route hierarchy.
**
**  DEFINING HERE WILL NOT HAVE ANY EFFECT THE ROUTES.
**  HEADERS WILL BE SENT ONLY WHEN ATTACHED TO A ROUTE.
**
**  these can overridden in controller hander method.
**  using -> response.setHeader(name, value);
*/

headers.register({
  'json-content': { name: 'Content-Type', value: 'application/json; charset=UTF-8'},
  'allow-cors': [
    { name: 'Access-Control-Allow-Origin', value: '*'},
    { name: 'Access-Control-Allow-Headers', value: 'Origin, X-Requested-With, Content-Type, Accept'}
  ],

  // add more
});
